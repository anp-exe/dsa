(function () {
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  /* ---------- Interactive stack visualizer ---------- */
  function initStackViz(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";

    var stack = [];
    try { stack = JSON.parse(root.dataset.init || "[]"); } catch (e) { stack = []; }

    var boxes = el("div", "sv-boxes");
    var msg = el("div", "sv-msg", "Top of the stack is on the right. Try Push and Pop.");
    var controls = el("div", "sv-controls");

    function render() {
      boxes.innerHTML = "";
      if (stack.length === 0) {
        boxes.appendChild(el("div", "sv-empty", "(empty stack)"));
        return;
      }
      stack.forEach(function (v, i) {
        var b = el("div", "sv-box", String(v));
        if (i === stack.length - 1) b.classList.add("sv-top");
        boxes.appendChild(b);
      });
    }
    function setMsg(t) { msg.textContent = t; }

    var pushBtn = el("button", "sv-btn sv-push", "Push");
    var popBtn = el("button", "sv-btn sv-pop", "Pop");
    var peekBtn = el("button", "sv-btn sv-peek", "Peek");
    var clearBtn = el("button", "sv-btn sv-clear", "Clear");

    pushBtn.addEventListener("click", function () {
      var v = Math.floor(Math.random() * 9) + 1;
      stack.push(v);
      render();
      setMsg("push(" + v + ")  ->  added " + v + " to the top.");
    });
    popBtn.addEventListener("click", function () {
      if (stack.length === 0) { setMsg("pop()  ->  error: the stack is empty!"); return; }
      var v = stack.pop();
      render();
      setMsg("pop()  ->  removed " + v + " from the top.");
    });
    peekBtn.addEventListener("click", function () {
      if (stack.length === 0) { setMsg("peek()  ->  the stack is empty."); return; }
      setMsg("peek()  ->  top is " + stack[stack.length - 1] + " (left in place).");
      var top = boxes.querySelector(".sv-top");
      if (top) { top.classList.add("sv-flash"); setTimeout(function () { top.classList.remove("sv-flash"); }, 450); }
    });
    clearBtn.addEventListener("click", function () { stack = []; render(); setMsg("Stack cleared."); });

    controls.appendChild(el("span", "sv-label", "Add:"));
    controls.appendChild(pushBtn);
    controls.appendChild(el("span", "sv-label", "Remove:"));
    controls.appendChild(popBtn);
    controls.appendChild(peekBtn);
    controls.appendChild(clearBtn);

    root.appendChild(boxes);
    root.appendChild(msg);
    root.appendChild(controls);
    render();
  }

  /* ---------- In-browser Python runner (Pyodide) ---------- */
  var pyodidePromise = null;
  function getPyodide() {
    if (pyodidePromise) return pyodidePromise;
    pyodidePromise = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
      s.onload = function () {
        window.loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/" })
          .then(resolve).catch(reject);
      };
      s.onerror = function () { reject(new Error("could not load Pyodide")); };
      document.head.appendChild(s);
    });
    return pyodidePromise;
  }

  function initPyRun(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";

    var ta = root.querySelector(".py-code");
    var out = root.querySelector(".py-out");
    var btn = root.querySelector(".py-run-btn");

    btn.addEventListener("click", function () {
      btn.disabled = true;
      out.textContent = "Loading Python (first run downloads the runtime, about 6MB)...";
      getPyodide().then(function (py) {
        out.textContent = "Running...";
        py.runPython("import sys, io\n_buf = io.StringIO()\nsys.stdout = _buf\nsys.stderr = _buf");
        try {
          py.runPython(ta.value);
          var result = py.runPython("_buf.getvalue()");
          out.textContent = result && result.length ? result : "(no output — try adding a print statement)";
        } catch (err) {
          out.textContent = String(err);
        } finally {
          py.runPython("sys.stdout = sys.__stdout__\nsys.stderr = sys.__stderr__");
          btn.disabled = false;
        }
      }).catch(function (e) {
        out.textContent = "Failed to load the Python runtime: " + e + "\n(You need an internet connection the first time.)";
        btn.disabled = false;
      });
    });
  }

  /* ---------- Boot (works with Material instant navigation) ---------- */
  function initAll() {
    document.querySelectorAll(".stack-viz").forEach(initStackViz);
    document.querySelectorAll(".py-run").forEach(initPyRun);
  }
  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(initAll);
  } else {
    document.addEventListener("DOMContentLoaded", initAll);
  }
})();
