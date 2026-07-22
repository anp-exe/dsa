# The Euclidean Algorithm

The **Euclidean algorithm** finds the **greatest common divisor (GCD)** of two integers — the largest number that divides both. It's over 2,000 years old and still the standard method.

## The insight

`gcd(a, b) = gcd(b, a mod b)`. Repeatedly replace the larger number by the remainder until one becomes zero; the other is the GCD.

## Modern version (division / modulo)

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(48, 18))   # 6
print(gcd(1071, 462))  # 21
```

## Recursive version

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
```

## The original version (subtraction)

Euclid's own formulation used repeated subtraction instead of modulo:

```python
def gcd_subtraction(a, b):
    while a != b:
        if a > b:
            a -= b
        else:
            b -= a
    return a

print(gcd_subtraction(48, 18))   # 6
```

## Complexity

The modulo version runs in **O(log(min(a, b)))** — very fast. A handy relative is the **least common multiple**: `lcm(a, b) = a * b // gcd(a, b)`. Python also ships `math.gcd`.
