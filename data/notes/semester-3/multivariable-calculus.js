// Multivariable Calculus (Mam Hafsa Parvaiz): all the chapters in ONE file.
//
// Block types used here: heading, subheading, paragraph, list, math, callout,
// table and worked. A "worked" block is a worked example that sits in a box that
// scrolls, so a long solution never makes the page huge.
//   { type: "worked", title, given, steps: [{ text, lines: [...] }], answer }
// Powers are written ^{2}, small letters below are written _{x}, so f_{x} shows
// as f with a small x underneath. **word** highlights a key word.
// Every solution shows every step. Nothing is skipped.

const H = (text) => ({ type: "heading", text });
const SH = (text) => ({ type: "subheading", text });
const P = (text) => ({ type: "paragraph", text });
const L = (items, ordered = false) => ({ type: "list", ordered, items });
const M = (lines, caption) => (caption ? { type: "math", lines, caption } : { type: "math", lines });
const NOTE = (text, title) => ({ type: "callout", variant: "note", title, text });
const TIP = (text, title) => ({ type: "callout", variant: "tip", title, text });
const WARN = (text, title) => ({ type: "callout", variant: "warning", title, text });
const W = (title, given, steps, answer) => ({ type: "worked", title, given, steps, answer });
const T = (headers, rows) => ({ type: "table", headers, rows });

// ---------------------------------------------------------------------------
// 1. Introduction to functions
// ---------------------------------------------------------------------------
const functions = {
  title: "Introduction to Functions",
  summary: "What a function is, independent and dependent variables, explicit and implicit functions, and functions of two or three variables.",
  theory: [
    H("What is a function?"),
    P("A **function** is a mathematical relationship that maps each input to exactly one output. We write y = f(x). For example, if f(x) = x^{2} then y = x^{2}."),
    P("Here x is the **independent variable** because we are free to choose its value, and y is the **dependent variable** because its value depends on x."),
    H("Functions of one, two and three variables"),
    T(
      ["Form", "Number of inputs", "Lives in", "Example"],
      [
        ["y = f(x)", "1 (x)", "2 dimensions, the point (x, y)", "y = x^{2}"],
        ["z = f(x, y)", "2 (x and y)", "3 dimensions, the point (x, y, z)", "z = x^{2} + y^{2}"],
        ["w = f(x, y, z)", "3 (x, y and z)", "4 dimensions", "w = xyz"],
      ],
    ),
    P("**Multivariable calculus** studies functions that have more than one independent variable, such as z = f(x, y)."),
    H("Explicit and implicit functions"),
    P("If y is easily written in terms of the independent variable x, then y is called an **explicit function**."),
    M(["f(x) = y = x^{2}"]),
    P("If x and y are so mixed up that y cannot easily be written in terms of x, the function is called an **implicit function**."),
    M(["x^{2} + y^{2} - xy = 2", "x^{2}y + 2xy = 1", "2x^{2} + 2y^{2} + 2xyz = 1"]),
    H("Domain of a function of two variables (sqrt = square root/under root)"),
    P("The **domain** is the set of all (x, y) for which the formula gives a real number. Watch out for division by zero, square roots of negative numbers and logarithms of numbers that are zero or negative."),
    W(
      "Examples: domains and values",
      "Find the domain of each function and evaluate f(2, 1) where possible.",
      [
        {
          text: "f(x, y) = x^{2} + 3y. It is a polynomial, so there is nothing to avoid.",
          lines: ["Domain: all real x and y", "f(2, 1) = 2^{2} + 3(1) = 4 + 3 = 7"],
        },
        {
          text: "g(x, y) = 1 / (x - y). The bottom must not be zero.",
          lines: ["Need x - y is not 0, so the domain is all points with x is not equal to y", "g(2, 1) = 1 / (2 - 1) = 1"],
        },
        {
          text: "h(x, y) = sqrt(9 - x^{2} - y^{2}). The number under the root must be 0 or more.",
          lines: ["9 - x^{2} - y^{2} >= 0", "x^{2} + y^{2} <= 9", "Domain: the disk of radius 3 around the origin", "h(2, 1) = sqrt(9 - 4 - 1) = sqrt(4) = 2"],
        },
        {
          text: "k(x, y) = ln(x + y). A logarithm needs a positive input.",
          lines: ["Need x + y > 0, so the domain is the region above the line y = -x", "k(2, 1) = ln(3)"],
        },
      ],
    ),
  ],
};

// ---------------------------------------------------------------------------
// 2. Partial differentiation
// ---------------------------------------------------------------------------
const partial = {
  title: "Partial Differentiation",
  summary: "The limit definition of the partial derivatives f_x and f_y, with fully worked examples.",
  theory: [
    H("Definition"),
    P("If f(x, y) is a function of two independent variables x and y, then its **partial derivatives** are defined by limits. For the derivative with respect to x we change only x by a small amount h and keep y fixed:"),
    M(["f_{x} = ∂f/∂x = lim (h -> 0) [ f(x + h, y) - f(x, y) ] / h"]),
    P("For the derivative with respect to y we change only y by a small amount k and keep x fixed:"),
    M(["f_{y} = ∂f/∂y = lim (k -> 0) [ f(x, y + k) - f(x, y) ] / k"]),
    NOTE("∂f/∂x is the rate of change of f in the x direction. ∂f/∂y is the rate of change of f in the y direction. Other ways to write them: f_{x}, z_{x}, D_{x}f.", "Meaning"),
    H("Worked examples (using the definition)"),
    W(
      "Example 1: f(x, y) = x^{2} + y^{2}",
      "Find ∂f/∂x and ∂f/∂y from the limit definition.",
      [
        {
          text: "For ∂f/∂x, replace x by x + h and keep y.",
          lines: ["f(x + h, y) = (x + h)^{2} + y^{2}"],
        },
        {
          text: "Put it in the limit formula.",
          lines: ["∂f/∂x = lim (h -> 0) [ (x + h)^{2} + y^{2} - x^{2} - y^{2} ] / h"],
        },
        {
          text: "Expand (x + h)^{2} = x^{2} + 2xh + h^{2}.",
          lines: ["= lim (h -> 0) [ x^{2} + 2xh + h^{2} + y^{2} - x^{2} - y^{2} ] / h"],
        },
        {
          text: "The terms x^{2} and y^{2} cancel.",
          lines: ["= lim (h -> 0) [ 2xh + h^{2} ] / h"],
        },
        {
          text: "Take h out as a common factor and cancel it.",
          lines: ["= lim (h -> 0) h(2x + h) / h", "= lim (h -> 0) (2x + h)", "= 2x + 0 = 2x"],
        },
        {
          text: "For ∂f/∂y, replace y by y + k and keep x.",
          lines: ["f(x, y + k) = x^{2} + (y + k)^{2}", "∂f/∂y = lim (k -> 0) [ x^{2} + (y + k)^{2} - x^{2} - y^{2} ] / k"],
        },
        {
          text: "Expand (y + k)^{2} = y^{2} + 2yk + k^{2} and cancel x^{2} and y^{2}.",
          lines: ["= lim (k -> 0) [ 2yk + k^{2} ] / k", "= lim (k -> 0) k(2y + k) / k", "= lim (k -> 0) (2y + k) = 2y"],
        },
      ],
      "Answer: ∂f/∂x = 2x and ∂f/∂y = 2y.",
    ),
    W(
      "Example 2: f(x, y) = x^{2} - 4y + 6",
      "Find ∂f/∂x and ∂f/∂y from the limit definition.",
      [
        {
          text: "For ∂f/∂x: f(x + h, y) = (x + h)^{2} - 4y + 6.",
          lines: ["∂f/∂x = lim (h -> 0) [ (x + h)^{2} - 4y + 6 - (x^{2} - 4y + 6) ] / h"],
        },
        {
          text: "Open the bracket and expand (x + h)^{2}.",
          lines: ["= lim (h -> 0) [ x^{2} + 2xh + h^{2} - 4y + 6 - x^{2} + 4y - 6 ] / h"],
        },
        {
          text: "Cancel x^{2}, -4y + 4y and 6 - 6.",
          lines: ["= lim (h -> 0) [ h^{2} + 2xh ] / h", "= lim (h -> 0) h(h + 2x) / h", "= lim (h -> 0) (h + 2x) = 2x"],
        },
        {
          text: "For ∂f/∂y: f(x, y + k) = x^{2} - 4(y + k) + 6.",
          lines: ["∂f/∂y = lim (k -> 0) [ x^{2} - 4(y + k) + 6 - (x^{2} - 4y + 6) ] / k"],
        },
        {
          text: "Open the brackets.",
          lines: ["= lim (k -> 0) [ x^{2} - 4y - 4k + 6 - x^{2} + 4y - 6 ] / k", "= lim (k -> 0) (-4k) / k", "= -4"],
        },
      ],
      "Answer: ∂f/∂x = 2x and ∂f/∂y = -4.",
    ),
    TIP("The limit definition is long. Soon we will use the quick rules (next chapters). They give the same answers: for x^{2} - 4y + 6 treat y as a constant to get 2x, then treat x as a constant to get -4.", "Shortcut"),
  ],
};

// ---------------------------------------------------------------------------
// 3. Partial differentiation at a point
// ---------------------------------------------------------------------------
const atPoint = {
  title: "Partial Differentiation at a Point",
  summary: "Partial derivatives at a given point (a, b), by the limit definition and by the quick method.",
  theory: [
    H("Definition at a point"),
    P("Let f(x, y) be a function of x and y. Its partial derivatives at the point (a, b) are:"),
    M([
      "∂f/∂x at (a, b) = lim (h -> 0) [ f(a + h, b) - f(a, b) ] / h",
      "∂f/∂y at (a, b) = lim (k -> 0) [ f(a, b + k) - f(a, b) ] / k",
    ]),
    P("Here we put the numbers a and b straight into the limit, so the answer is one number instead of a formula."),
    W(
      "Example 1: f(x, y) = xy + y^{2} at (2, 3)",
      "Find f_{x}(2, 3) and f_{y}(2, 3) by the limit definition.",
      [
        {
          text: "First find f(2, 3).",
          lines: ["f(2, 3) = (2)(3) + (3)^{2} = 6 + 9 = 15"],
        },
        {
          text: "For f_{x}: change x to 2 + h and keep y = 3.",
          lines: ["f(2 + h, 3) = (2 + h)(3) + (3)^{2} = 6 + 3h + 9 = 15 + 3h"],
        },
        {
          text: "Put these in the limit formula.",
          lines: ["f_{x}(2, 3) = lim (h -> 0) [ 15 + 3h - 15 ] / h", "= lim (h -> 0) 3h / h = 3"],
        },
        {
          text: "For f_{y}: change y to 3 + k and keep x = 2.",
          lines: ["f(2, 3 + k) = (2)(3 + k) + (3 + k)^{2}", "= 6 + 2k + 9 + 6k + k^{2}", "= 15 + 8k + k^{2}"],
        },
        {
          text: "Put these in the limit formula.",
          lines: ["f_{y}(2, 3) = lim (k -> 0) [ 15 + 8k + k^{2} - 15 ] / k", "= lim (k -> 0) k(8 + k) / k", "= lim (k -> 0) (8 + k) = 8"],
        },
        {
          text: "Check with the quick method: f_{x} = y and f_{y} = x + 2y.",
          lines: ["f_{x}(2, 3) = 3", "f_{y}(2, 3) = 2 + 2(3) = 8"],
        },
      ],
      "Answer: f_{x}(2, 3) = 3 and f_{y}(2, 3) = 8.",
    ),
    W(
      "Example 2: f(x, y) = x^{2}y + sin y at (1, 0)",
      "Find f_{x}(1, 0) and f_{y}(1, 0) by the limit definition.",
      [
        {
          text: "First find f(1, 0).",
          lines: ["f(1, 0) = (1)^{2}(0) + sin 0 = 0"],
        },
        {
          text: "For f_{x}: change x to 1 + h and keep y = 0.",
          lines: ["f(1 + h, 0) = (1 + h)^{2}(0) + sin 0 = 0"],
        },
        {
          text: "Put these in the limit formula.",
          lines: ["f_{x}(1, 0) = lim (h -> 0) [ 0 - 0 ] / h = lim (h -> 0) 0 = 0"],
        },
        {
          text: "For f_{y}: change y to 0 + k = k and keep x = 1.",
          lines: ["f(1, k) = (1)^{2}(k) + sin k = k + sin k"],
        },
        {
          text: "Put these in the limit formula.",
          lines: ["f_{y}(1, 0) = lim (k -> 0) [ k + sin k - 0 ] / k", "= lim (k -> 0) [ k / k + sin k / k ]", "= lim (k -> 0) [ 1 + sin k / k ]"],
        },
        {
          text: "Use the standard limit: lim (k -> 0) sin k / k = 1.",
          lines: ["= 1 + 1 = 2"],
        },
        {
          text: "Check with the quick method: f_{x} = 2xy and f_{y} = x^{2} + cos y.",
          lines: ["f_{x}(1, 0) = 2(1)(0) = 0", "f_{y}(1, 0) = 1 + cos 0 = 1 + 1 = 2"],
        },
      ],
      "Answer: f_{x}(1, 0) = 0 and f_{y}(1, 0) = 2.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 4. Simple derivatives of several variables (all the rules)
// ---------------------------------------------------------------------------
const rules = {
  title: "Partial Derivatives: All the Rules",
  summary: "The quick method and every rule: constant, power, sum, product, quotient and chain, with examples for two and three variables.",
  theory: [
    H("The main idea"),
    P("To find a partial derivative, **treat every other variable as a constant** and differentiate as in ordinary calculus."),
    M(["∂f(x, y)/∂x = f_{x}      (treat y as a constant)", "∂f(x, y)/∂y = f_{y}      (treat x as a constant)"]),
    NOTE("d/dx (5x) = 5(1) = 5 and d/dx (x + 5) = 1 + 0 = 1. A number added is lost, a number multiplied stays.", "Remember"),
    H("Standard derivatives"),
    T(
      ["Function", "Derivative"],
      [
        ["x^{n}", "n x^{n-1}"],
        ["e^{x}", "e^{x}"],
        ["e^{u}", "e^{u} · du/dx"],
        ["ln x", "1 / x"],
        ["ln h(x)", "h'(x) / h(x)"],
        ["sin x", "cos x"],
        ["cos x", "-sin x"],
        ["tan x", "sec^{2} x"],
        ["constant", "0"],
      ],
    ),
    H("Rules"),
    T(
      ["Rule", "Formula"],
      [
        ["Constant multiple", "d/dx [ c · f ] = c · f'"],
        ["Sum or difference", "d/dx [ f ± g ] = f' ± g'"],
        ["Product rule", "If f = h(x) g(x) then f' = h(x) g'(x) + g(x) h'(x)"],
        ["Quotient rule", "d/dx [ u / v ] = ( v u' - u v' ) / v^{2}"],
        ["Chain rule", "d/dx [ f(g(x)) ] = f'(g(x)) · g'(x)"],
      ],
    ),
    H("Examples with two variables"),
    W(
      "Example 1: f(x, y) = x^{2} + 4y^{2}",
      "Find f_{x} and f_{y}.",
      [
        { text: "Treat y as a constant. The term 4y^{2} is a constant, so its derivative is 0.", lines: ["f_{x} = d/dx (x^{2}) + 0 = 2x"] },
        { text: "Treat x as a constant. The term x^{2} is a constant, so its derivative is 0.", lines: ["f_{y} = 0 + 4 d/dy (y^{2}) = 4(2y) = 8y"] },
      ],
      "Answer: f_{x} = 2x and f_{y} = 8y.",
    ),
    W(
      "Example 2: f(x, y) = x^{2}y^{2}, find f_{x} and f_{y} at (-2, 3)",
      "Find f_{x}(-2, 3) and f_{y}(-2, 3).",
      [
        { text: "For f_{x}, y^{2} is a constant multiplier.", lines: ["f_{x} = y^{2} d/dx (x^{2}) = 2x y^{2}"] },
        { text: "Put in x = -2 and y = 3.", lines: ["f_{x}(-2, 3) = 2(-2)(3)^{2} = -4(9) = -36"] },
        { text: "For f_{y}, x^{2} is a constant multiplier.", lines: ["f_{y} = x^{2} d/dy (y^{2}) = 2y x^{2}"] },
        { text: "Put in x = -2 and y = 3.", lines: ["f_{y}(-2, 3) = 2(3)(-2)^{2} = 6(4) = 24"] },
      ],
      "Answer: f_{x}(-2, 3) = -36 and f_{y}(-2, 3) = 24.",
    ),
    W(
      "Example 3: f(x, y) = x^{2}y + y^{2} sin x",
      "Find f_{x} and f_{y}.",
      [
        { text: "For f_{x}, differentiate each term with y as a constant. We use d/dx (sin x) = cos x.", lines: ["f_{x} = d/dx (x^{2}y) + d/dx (y^{2} sin x)", "= y(2x) + y^{2}(cos x)", "= 2xy + y^{2} cos x"] },
        { text: "For f_{y}, differentiate each term with x as a constant.", lines: ["f_{y} = d/dy (x^{2}y) + d/dy (y^{2} sin x)", "= x^{2}(1) + sin x (2y)", "= x^{2} + 2y sin x"] },
      ],
      "Answer: f_{x} = 2xy + y^{2} cos x and f_{y} = x^{2} + 2y sin x.",
    ),
    W(
      "Example 4 (product rule): f(x, y) = x^{2}y sin x",
      "Find f_{x} and f_{y}.",
      [
        { text: "For f_{x}, y is a constant. Keep y outside and use the product rule on x^{2} and sin x.", lines: ["f_{x} = y d/dx (x^{2} sin x)"] },
        { text: "Product rule: first × derivative of second + second × derivative of first.", lines: ["= y [ x^{2} d/dx (sin x) + sin x d/dx (x^{2}) ]", "= y [ x^{2} cos x + sin x (2x) ]", "= x^{2}y cos x + 2xy sin x"] },
        { text: "For f_{y}, x^{2} sin x is a constant multiplier of y.", lines: ["f_{y} = x^{2} sin x d/dy (y) = x^{2} sin x"] },
      ],
      "Answer: f_{x} = x^{2}y cos x + 2xy sin x and f_{y} = x^{2} sin x.",
    ),
    W(
      "Example 5 (product and chain rule): f(x, y) = x^{2}y sin(x^{2}y)",
      "Find f_{x} and f_{y}.",
      [
        { text: "For f_{x}, y is a constant. Use the product rule on x^{2} and sin(x^{2}y).", lines: ["f_{x} = y [ x^{2} d/dx sin(x^{2}y) + sin(x^{2}y) d/dx (x^{2}) ]"] },
        { text: "Chain rule: d/dx sin(x^{2}y) = cos(x^{2}y) · d/dx (x^{2}y) = cos(x^{2}y)(2xy).", lines: ["= y [ x^{2} cos(x^{2}y)(2xy) + sin(x^{2}y)(2x) ]", "= y [ 2x^{3}y cos(x^{2}y) + 2x sin(x^{2}y) ]", "= 2x^{3}y^{2} cos(x^{2}y) + 2xy sin(x^{2}y)"] },
        { text: "For f_{y}, x^{2} is a constant. Use the product rule on y and sin(x^{2}y).", lines: ["f_{y} = x^{2} [ y d/dy sin(x^{2}y) + sin(x^{2}y) d/dy (y) ]"] },
        { text: "Chain rule: d/dy sin(x^{2}y) = cos(x^{2}y) · x^{2}.", lines: ["= x^{2} [ y cos(x^{2}y)(x^{2}) + sin(x^{2}y)(1) ]", "= x^{4}y cos(x^{2}y) + x^{2} sin(x^{2}y)"] },
      ],
      "Answer: f_{x} = 2x^{3}y^{2} cos(x^{2}y) + 2xy sin(x^{2}y) and f_{y} = x^{4}y cos(x^{2}y) + x^{2} sin(x^{2}y).",
    ),
    W(
      "Example 6 (logarithm): z = y ln(x^{2} + y^{2})",
      "Find ∂z/∂x.",
      [
        { text: "y is a constant. Use d/dx ln u = (1/u)(du/dx).", lines: ["∂z/∂x = y · [ 1 / (x^{2} + y^{2}) ] · d/dx (x^{2} + y^{2})"] },
        { text: "d/dx (x^{2} + y^{2}) = 2x + 0 = 2x.", lines: ["= y · [ 1 / (x^{2} + y^{2}) ] · 2x", "= 2xy / (x^{2} + y^{2})"] },
      ],
      "Answer: ∂z/∂x = 2xy / (x^{2} + y^{2}).",
    ),
    W(
      "Example 7 (quotient rule): f(x, y) = x / (x^{2} + y^{2})",
      "Find f_{x} and f_{y}.",
      [
        { text: "For f_{x}, let u = x and v = x^{2} + y^{2}. Then u' = 1 and v' = 2x.", lines: ["f_{x} = ( v u' - u v' ) / v^{2}", "= [ (x^{2} + y^{2})(1) - x(2x) ] / (x^{2} + y^{2})^{2}", "= ( x^{2} + y^{2} - 2x^{2} ) / (x^{2} + y^{2})^{2}", "= ( y^{2} - x^{2} ) / (x^{2} + y^{2})^{2}"] },
        { text: "For f_{y}, x is a constant. Now u = x has u' = 0 and v' = 2y.", lines: ["f_{y} = [ (x^{2} + y^{2})(0) - x(2y) ] / (x^{2} + y^{2})^{2}", "= -2xy / (x^{2} + y^{2})^{2}"] },
      ],
      "Answer: f_{x} = (y^{2} - x^{2}) / (x^{2} + y^{2})^{2} and f_{y} = -2xy / (x^{2} + y^{2})^{2}.",
    ),
    H("Functions of three variables"),
    P("For f(x, y, z) we take three partial derivatives:"),
    L([
      "f_{x} = ∂f/∂x: take y and z as constants and differentiate with respect to x.",
      "f_{y} = ∂f/∂y: consider x and z as constants and differentiate with respect to y.",
      "f_{z} = ∂f/∂z: take x and y as constants and differentiate with respect to z.",
    ]),
    W(
      "Example 8: f(x, y, z) = xyz",
      "Find f_{x}, f_{y} and f_{z}.",
      [
        { text: "Differentiate with respect to each letter, the other two are constants.", lines: ["f_{x} = yz d/dx (x) = yz(1) = yz", "f_{y} = xz d/dy (y) = xz(1) = xz", "f_{z} = xy d/dz (z) = xy(1) = xy"] },
      ],
      "Answer: f_{x} = yz, f_{y} = xz, f_{z} = xy.",
    ),
    W(
      "Example 9: f(x, y, z) = x^{2}y sin z",
      "Find f_{x}, f_{y} and f_{z}.",
      [
        { text: "For f_{x}: y sin z is a constant.", lines: ["f_{x} = y sin z (2x) = 2xy sin z"] },
        { text: "For f_{y}: x^{2} sin z is a constant.", lines: ["f_{y} = x^{2} sin z (1) = x^{2} sin z"] },
        { text: "For f_{z}: x^{2}y is a constant and d/dz (sin z) = cos z.", lines: ["f_{z} = x^{2}y cos z"] },
      ],
      "Answer: f_{x} = 2xy sin z, f_{y} = x^{2} sin z, f_{z} = x^{2}y cos z.",
    ),
    W(
      "Example 10: f(x, y, z) = x^{2}y e^{xyz}",
      "Find f_{x}, f_{y} and f_{z}.",
      [
        { text: "For f_{x}: y is a constant. Use the product rule on x^{2} and e^{xyz}.", lines: ["f_{x} = y [ x^{2} d/dx (e^{xyz}) + e^{xyz} d/dx (x^{2}) ]"] },
        { text: "Chain rule: d/dx (e^{xyz}) = e^{xyz} · yz.", lines: ["= y [ x^{2} e^{xyz}(yz) + e^{xyz}(2x) ]", "= y e^{xyz} [ x^{2}yz + 2x ]", "= e^{xyz} ( x^{2}y^{2}z + 2xy )"] },
        { text: "For f_{y}: x^{2} is a constant. Use the product rule on y and e^{xyz}.", lines: ["f_{y} = x^{2} [ y d/dy (e^{xyz}) + e^{xyz} d/dy (y) ]"] },
        { text: "Chain rule: d/dy (e^{xyz}) = e^{xyz} · xz.", lines: ["= x^{2} [ y e^{xyz}(xz) + e^{xyz}(1) ]", "= x^{2} e^{xyz} ( xyz + 1 )", "= e^{xyz} ( x^{3}yz + x^{2} )"] },
        { text: "For f_{z}: x^{2}y is a constant and d/dz (e^{xyz}) = e^{xyz} · xy.", lines: ["f_{z} = x^{2}y · e^{xyz} (xy)", "= x^{3}y^{2} e^{xyz}"] },
      ],
      "Answer: f_{x} = e^{xyz}(x^{2}y^{2}z + 2xy), f_{y} = e^{xyz}(x^{3}yz + x^{2}), f_{z} = x^{3}y^{2} e^{xyz}.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 5. Partial derivatives of higher order
// ---------------------------------------------------------------------------
const higher = {
  title: "Partial Derivatives of Higher Order",
  summary: "Second, third and higher partial derivatives, mixed derivatives and the order of differentiation.",
  theory: [
    H("Second order partial derivatives"),
    P("Let f(x, y) be a function. Then f_{x} and f_{y} are its first partial derivatives. Differentiating them again gives the **higher order** derivatives:"),
    T(
      ["Notation", "Meaning", "Name"],
      [
        ["f_{xx} = ∂²f/∂x²", "∂/∂x ( ∂f/∂x ) = ∂/∂x ( f_{x} )", "differentiate twice in x"],
        ["f_{yy} = ∂²f/∂y²", "∂/∂y ( ∂f/∂y ) = ∂/∂y ( f_{y} )", "differentiate twice in y"],
        ["f_{xy} = ∂²f/∂y∂x", "∂/∂y ( ∂f/∂x ) = ∂/∂y ( f_{x} )", "mixed: first x then y"],
        ["f_{yx} = ∂²f/∂x∂y", "∂/∂x ( ∂f/∂y ) = ∂/∂x ( f_{y} )", "mixed: first y then x"],
      ],
    ),
    NOTE("In the symbol ∂²f/∂y∂x we differentiate first with respect to the variable written nearest to f (that is x), then with respect to y. In the subscript f_{xy} we read from left to right: first x, then y.", "Order of differentiation"),
    NOTE("If f_{xy} and f_{yx} are continuous, then f_{xy} = f_{yx}. The order of differentiation does not matter (Clairaut's theorem). It is a good way to check your work.", "Equality of mixed derivatives"),
    W(
      "Example 1: f(x, y) = x^{2}y^{2}",
      "Find ∂²f/∂x².",
      [
        { text: "First derivative with respect to x (y^{2} is a constant).", lines: ["∂f/∂x = y^{2} d/dx (x^{2}) = 2xy^{2}"] },
        { text: "Differentiate again with respect to x.", lines: ["∂²f/∂x² = ∂/∂x (2xy^{2}) = 2y^{2}(1) = 2y^{2}"] },
      ],
      "Answer: ∂²f/∂x² = 2y².",
    ),
    W(
      "Example 2: f(x, y) = x cos y + y e^{x}",
      "Find f_{xx}, f_{yy}, f_{xy} and f_{yx}.",
      [
        { text: "First derivatives.", lines: ["f_{x} = ∂/∂x (x cos y) + ∂/∂x (y e^{x}) = cos y + y e^{x}", "f_{y} = ∂/∂y (x cos y) + ∂/∂y (y e^{x}) = -x sin y + e^{x}"] },
        { text: "f_{xx}: differentiate f_{x} with respect to x.", lines: ["f_{xx} = ∂/∂x (cos y + y e^{x}) = 0 + y e^{x} = y e^{x}"] },
        { text: "f_{yy}: differentiate f_{y} with respect to y.", lines: ["f_{yy} = ∂/∂y (-x sin y + e^{x}) = -x cos y + 0 = -x cos y"] },
        { text: "f_{xy}: differentiate f_{x} with respect to y.", lines: ["f_{xy} = ∂/∂y (cos y + y e^{x}) = -sin y + e^{x}"] },
        { text: "f_{yx}: differentiate f_{y} with respect to x.", lines: ["f_{yx} = ∂/∂x (-x sin y + e^{x}) = -sin y + e^{x}"] },
        { text: "Check: f_{xy} and f_{yx} are equal, as the theorem says.", lines: ["f_{xy} = f_{yx} = -sin y + e^{x}"] },
      ],
      "Answer: f_{xx} = y e^{x}, f_{yy} = -x cos y, f_{xy} = f_{yx} = e^{x} - sin y.",
    ),
    W(
      "Example 3: f(x, y) = x e^{xy}, find ∂³f/∂y²∂x",
      "Differentiate first with respect to x, then twice with respect to y.",
      [
        { text: "First, with respect to x: use the product rule on x and e^{xy}.", lines: ["∂f/∂x = x d/dx (e^{xy}) + e^{xy} d/dx (x)", "= x e^{xy}(y) + e^{xy}(1)", "= xy e^{xy} + e^{xy}"] },
        { text: "Now with respect to y: x is a constant.", lines: ["∂²f/∂y∂x = ∂/∂y ( xy e^{xy} + e^{xy} )", "= x [ y d/dy (e^{xy}) + e^{xy} d/dy (y) ] + e^{xy}(x)", "= x [ y e^{xy}(x) + e^{xy} ] + x e^{xy}", "= x^{2}y e^{xy} + x e^{xy} + x e^{xy}", "= e^{xy} ( x^{2}y + 2x )"] },
        { text: "Again with respect to y.", lines: ["∂³f/∂y²∂x = ∂/∂y [ e^{xy} ( x^{2}y + 2x ) ]", "= e^{xy}(x) ( x^{2}y + 2x ) + e^{xy}( x^{2} )", "= e^{xy} ( x^{3}y + 2x^{2} + x^{2} )", "= e^{xy} ( x^{3}y + 3x^{2} )"] },
      ],
      "Answer: ∂³f/∂y²∂x = e^{xy}(x³y + 3x²).",
    ),
    H("Higher rules: third order and above"),
    W(
      "Example 4: f(x, y) = y sin(xy), find ∂³f/∂x∂y²",
      "Differentiate twice with respect to y, then once with respect to x.",
      [
        { text: "First derivative with respect to y. Use the product rule on y and sin(xy).", lines: ["∂f/∂y = y d/dy sin(xy) + sin(xy) d/dy (y)", "= y cos(xy)(x) + sin(xy)", "= xy cos(xy) + sin(xy)"] },
        { text: "Second derivative with respect to y. x is a constant.", lines: ["∂²f/∂y² = x [ y d/dy cos(xy) + cos(xy) d/dy (y) ] + cos(xy)(x)", "= x [ y(-sin(xy))(x) + cos(xy) ] + x cos(xy)", "= -x²y sin(xy) + x cos(xy) + x cos(xy)", "= -x²y sin(xy) + 2x cos(xy)"] },
        { text: "Now differentiate with respect to x. Use the product rule on each term.", lines: ["∂³f/∂x∂y² = -y d/dx [ x² sin(xy) ] + 2 d/dx [ x cos(xy) ]"] },
        { text: "First part: d/dx [ x² sin(xy) ] = x² cos(xy)(y) + sin(xy)(2x).", lines: ["-y [ x²y cos(xy) + 2x sin(xy) ] = -x²y² cos(xy) - 2xy sin(xy)"] },
        { text: "Second part: d/dx [ x cos(xy) ] = x(-sin(xy))(y) + cos(xy)(1).", lines: ["2 [ -xy sin(xy) + cos(xy) ] = -2xy sin(xy) + 2 cos(xy)"] },
        { text: "Add the two parts.", lines: ["∂³f/∂x∂y² = -x²y² cos(xy) - 2xy sin(xy) - 2xy sin(xy) + 2 cos(xy)", "= -x²y² cos(xy) - 4xy sin(xy) + 2 cos(xy)"] },
      ],
      "Answer: ∂³f/∂x∂y² = 2 cos(xy) - 4xy sin(xy) - x²y² cos(xy).",
    ),
    W(
      "Example 5: f(x, y) = y²e^{x}, find ∂⁵f/∂x²∂y³",
      "Differentiate twice with respect to x, then three times with respect to y.",
      [
        { text: "First x-derivative (y² is a constant, d/dx e^{x} = e^{x}).", lines: ["∂f/∂x = y² e^{x}"] },
        { text: "Second x-derivative.", lines: ["∂²f/∂x² = y² e^{x}"] },
        { text: "First y-derivative (e^{x} is a constant).", lines: ["∂³f/∂x²∂y = e^{x} d/dy (y²) = 2y e^{x}"] },
        { text: "Second y-derivative.", lines: ["∂⁴f/∂x²∂y² = 2e^{x} d/dy (y) = 2e^{x}"] },
        { text: "Third y-derivative: 2e^{x} does not contain y, so it is a constant.", lines: ["∂⁵f/∂x²∂y³ = ∂/∂y (2e^{x}) = 0"] },
      ],
      "Answer: ∂⁵f/∂x²∂y³ = 0.",
    ),
    W(
      "Example 6: f(x, y) = x³y², find ∂⁵f/∂x²∂y³",
      "Differentiate twice with respect to x, then three times with respect to y.",
      [
        { text: "∂f/∂x (y² is a constant).", lines: ["∂f/∂x = y² d/dx (x³) = 3x²y²"] },
        { text: "∂²f/∂x².", lines: ["∂²f/∂x² = y² d/dx (3x²) = 6xy²"] },
        { text: "First y-derivative (6x is a constant).", lines: ["∂³f/∂x²∂y = 6x d/dy (y²) = 12xy"] },
        { text: "Second y-derivative.", lines: ["∂⁴f/∂x²∂y² = 12x d/dy (y) = 12x"] },
        { text: "Third y-derivative: 12x has no y.", lines: ["∂⁵f/∂x²∂y³ = ∂/∂y (12x) = 0"] },
      ],
      "Answer: ∂⁵f/∂x²∂y³ = 0.",
    ),
    TIP("A polynomial in y of degree 2 becomes zero after three y-derivatives. Spotting this saves a lot of work.", "Quick check"),
  ],
};

// ---------------------------------------------------------------------------
// 6. Laplace equation
// ---------------------------------------------------------------------------
const laplace = {
  title: "Laplace Equation",
  summary: "The Laplace equation, harmonic functions and how to test whether a function satisfies it.",
  theory: [
    H("Definition"),
    P("For a function f(x, y, z), the equation"),
    M(["∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z² = 0"]),
    P("is called the **Laplace equation**. For a function of two variables f(x, y) it is ∂²f/∂x² + ∂²f/∂y² = 0. A function that satisfies it is called a **harmonic function**. It is also written f_{xx} + f_{yy} + f_{zz} = 0, or ∇²f = 0."),
    TIP("To test a function: (1) find f_{xx}, (2) find f_{yy} (and f_{zz} if there is a z), (3) add them. If the sum is 0, the function satisfies the Laplace equation.", "Method"),
    W(
      "Example 1: f(x, y) = e^{x} sin y + e^{y} cos x",
      "Show that f satisfies the Laplace equation.",
      [
        { text: "First derivatives with respect to x.", lines: ["f_{x} = e^{x} sin y + e^{y}(-sin x) = e^{x} sin y - e^{y} sin x"] },
        { text: "Second derivative with respect to x.", lines: ["f_{xx} = e^{x} sin y - e^{y} cos x"] },
        { text: "First derivative with respect to y.", lines: ["f_{y} = e^{x} cos y + e^{y} cos x"] },
        { text: "Second derivative with respect to y.", lines: ["f_{yy} = -e^{x} sin y + e^{y} cos x"] },
        { text: "Add them.", lines: ["f_{xx} + f_{yy} = ( e^{x} sin y - e^{y} cos x ) + ( -e^{x} sin y + e^{y} cos x )", "= 0"] },
      ],
      "Since f_{xx} + f_{yy} = 0, f satisfies the Laplace equation.",
    ),
    W(
      "Example 2: f(x, y) = x² - y²",
      "Does f satisfy the Laplace equation?",
      [
        { text: "Differentiate twice with respect to x.", lines: ["f_{x} = 2x", "f_{xx} = 2"] },
        { text: "Differentiate twice with respect to y.", lines: ["f_{y} = -2y", "f_{yy} = -2"] },
        { text: "Add them.", lines: ["f_{xx} + f_{yy} = 2 + (-2) = 0"] },
      ],
      "Yes, f = x² - y² is harmonic.",
    ),
    W(
      "Example 3: f(x, y) = x² + y²",
      "Does f satisfy the Laplace equation?",
      [
        { text: "f_{xx}: f_{x} = 2x, so f_{xx} = 2.", lines: ["f_{xx} = 2"] },
        { text: "f_{yy}: f_{y} = 2y, so f_{yy} = 2.", lines: ["f_{yy} = 2"] },
        { text: "Add them.", lines: ["f_{xx} + f_{yy} = 2 + 2 = 4, which is not 0"] },
      ],
      "No, f = x² + y² is not harmonic.",
    ),
    W(
      "Example 4 (three variables): f(x, y, z) = x² + y² - 2z²",
      "Does f satisfy the Laplace equation?",
      [
        { text: "Differentiate twice with respect to each variable.", lines: ["f_{xx} = 2", "f_{yy} = 2", "f_{zz} = -4"] },
        { text: "Add them.", lines: ["f_{xx} + f_{yy} + f_{zz} = 2 + 2 - 4 = 0"] },
      ],
      "Yes, f satisfies the Laplace equation.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 7. Chain rule
// ---------------------------------------------------------------------------
const chain = {
  title: "Chain Rule",
  summary: "The chain rule for functions of several variables, with one parameter t and with two parameters s and t.",
  theory: [
    H("Chain rule with one parameter"),
    P("If f(x, y) depends on x and y, and x and y both depend on t, then f depends on t and"),
    M(["df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)"]),
    P("For three variables f(x, y, z) with x, y, z functions of t, add a third term (∂f/∂z)(dz/dt)."),
    W(
      "Example 1: f(x, y) = x²y², x = t², y = 2t³",
      "Find df/dt.",
      [
        { text: "Find the four small derivatives.", lines: ["∂f/∂x = 2xy²", "∂f/∂y = 2x²y", "dx/dt = 2t", "dy/dt = 6t²"] },
        { text: "Put them into the chain rule.", lines: ["df/dt = (2xy²)(2t) + (2x²y)(6t²)", "= 4xy²t + 12x²yt²"] },
        { text: "Replace x = t² and y = 2t³. First term: 4 · t² · (2t³)² · t.", lines: ["4(t²)(4t⁶)(t) = 16t⁹"] },
        { text: "Second term: 12 · (t²)² · 2t³ · t².", lines: ["12(t⁴)(2t³)(t²) = 24t⁹"] },
        { text: "Add them.", lines: ["df/dt = 16t⁹ + 24t⁹ = 40t⁹"] },
        { text: "Check by substituting first: f = (t²)²(2t³)² = t⁴ · 4t⁶ = 4t¹⁰.", lines: ["df/dt = 40t⁹  ✓"] },
      ],
      "Answer: df/dt = 40t⁹.",
    ),
    W(
      "Example 2: w = xy, x = cos t, y = sin t",
      "Find dw/dt.",
      [
        { text: "Small derivatives.", lines: ["∂w/∂x = y", "∂w/∂y = x", "dx/dt = -sin t", "dy/dt = cos t"] },
        { text: "Put them into the chain rule.", lines: ["dw/dt = y(-sin t) + x(cos t)"] },
        { text: "Replace x = cos t and y = sin t.", lines: ["= -sin t · sin t + cos t · cos t", "= -sin²t + cos²t", "= cos 2t"] },
      ],
      "Answer: dw/dt = cos²t - sin²t = cos 2t.",
    ),
    W(
      "Example 3: u = x² + y², x = e^{t}, y = e^{-t}",
      "Find du/dt.",
      [
        { text: "Small derivatives.", lines: ["∂u/∂x = 2x", "∂u/∂y = 2y", "dx/dt = e^{t}", "dy/dt = -e^{-t}"] },
        { text: "Put them into the chain rule.", lines: ["du/dt = 2x e^{t} + 2y(-e^{-t})"] },
        { text: "Replace x and y.", lines: ["= 2e^{t} · e^{t} - 2e^{-t} · e^{-t}", "= 2e^{2t} - 2e^{-2t}"] },
      ],
      "Answer: du/dt = 2e^{2t} - 2e^{-2t}.",
    ),
    H("Chain rule with two parameters"),
    P("If u depends on x and y, and x and y depend on s and t, then u depends on s and t, and"),
    M(["∂u/∂s = (∂u/∂x)(∂x/∂s) + (∂u/∂y)(∂y/∂s)", "∂u/∂t = (∂u/∂x)(∂x/∂t) + (∂u/∂y)(∂y/∂t)"]),
    W(
      "Example 4: u = sin(x + y), x = s²t, y = e^{s+t}",
      "Find ∂u/∂s and ∂u/∂t.",
      [
        { text: "Derivatives of u.", lines: ["∂u/∂x = cos(x + y)", "∂u/∂y = cos(x + y)"] },
        { text: "Derivatives of x and y.", lines: ["∂x/∂s = 2st", "∂x/∂t = s²", "∂y/∂s = e^{s+t}", "∂y/∂t = e^{s+t}"] },
        { text: "Use the chain rule for ∂u/∂s.", lines: ["∂u/∂s = cos(x + y)(2st) + cos(x + y)(e^{s+t})", "= cos(x + y) ( 2st + e^{s+t} )"] },
        { text: "Use the chain rule for ∂u/∂t.", lines: ["∂u/∂t = cos(x + y)(s²) + cos(x + y)(e^{s+t})", "= cos(x + y) ( s² + e^{s+t} )"] },
      ],
      "Answer: ∂u/∂s = cos(x + y)(2st + e^{s+t}) and ∂u/∂t = cos(x + y)(s² + e^{s+t}), where x + y = s²t + e^{s+t}.",
    ),
    W(
      "Example 5: z = x²y, x = s + t, y = s - t",
      "Find ∂z/∂s and ∂z/∂t.",
      [
        { text: "Derivatives of z.", lines: ["∂z/∂x = 2xy", "∂z/∂y = x²"] },
        { text: "Derivatives of x and y.", lines: ["∂x/∂s = 1, ∂x/∂t = 1", "∂y/∂s = 1, ∂y/∂t = -1"] },
        { text: "∂z/∂s.", lines: ["∂z/∂s = 2xy(1) + x²(1) = 2xy + x²"] },
        { text: "∂z/∂t.", lines: ["∂z/∂t = 2xy(1) + x²(-1) = 2xy - x²"] },
        { text: "Replace x = s + t and y = s - t. Note xy = s² - t².", lines: ["∂z/∂s = 2(s² - t²) + (s + t)²", "= 2s² - 2t² + s² + 2st + t² = 3s² + 2st - t²", "∂z/∂t = 2(s² - t²) - (s + t)²", "= 2s² - 2t² - s² - 2st - t² = s² - 2st - 3t²"] },
      ],
      "Answer: ∂z/∂s = 3s² + 2st - t² and ∂z/∂t = s² - 2st - 3t².",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 8. Directional derivative
// ---------------------------------------------------------------------------
const directional = {
  title: "Directional Derivative",
  summary: "The gradient, the directional derivative in any direction, its steps, and its properties (fastest increase, decrease and zero change).",
  theory: [
    H("Definition"),
    P("Let f(x, y) be a function with continuous partial derivatives at the point P(x_{0}, y_{0}), and let u = <u_{1}, u_{2}> be a **unit vector** that shows the direction in which we move. The directional derivative of f at P in the direction u is"),
    M(["D_{u} f(x_{0}, y_{0}) = lim (h -> 0) [ f(x_{0} + h u_{1}, y_{0} + h u_{2}) - f(x_{0}, y_{0}) ] / h", "D_{u} f(x_{0}, y_{0}) = ∇f(x_{0}, y_{0}) · u"]),
    P("The first form is the definition. The second is the one used in practice, where ∇f is the **gradient** and u is the unit vector."),
    H("Gradient and unit vector"),
    M([
      "∇f = <∂f/∂x, ∂f/∂y> = (∂f/∂x) i + (∂f/∂y) j",
      "∇f = <f_{x}, f_{y}, f_{z}> for three variables",
      "unit vector u = v / |v|, where v = a i + b j is the given direction",
    ]),
    P("We have three things: a function, a point and a vector. The vector must be turned into a **unit vector** (length 1) before we take the dot product."),
    H("Steps to find the directional derivative"),
    L(
      [
        "Find the gradient ∇f.",
        "Put in the point P to get the gradient at P.",
        "Find the unit vector u = v / |v|.",
        "Take the dot product ∇f(P) · u.",
      ],
      true,
    ),
    W(
      "Example 1: f(x, y) = x²y + y² at (1, 2), direction v = <3, 4>",
      "Find the directional derivative.",
      [
        { text: "Step 1: the gradient.", lines: ["∂f/∂x = 2xy, ∂f/∂y = x² + 2y", "∇f = <2xy, x² + 2y>"] },
        { text: "Step 2: the gradient at P(1, 2).", lines: ["∇f(1, 2) = <2(1)(2), 1² + 2(2)> = <4, 5>"] },
        { text: "Step 3: the unit vector.", lines: ["|v| = sqrt(3² + 4²) = sqrt(25) = 5", "u = <3, 4> / 5 = <3/5, 4/5>"] },
        { text: "Step 4: the dot product.", lines: ["D_{u} f(1, 2) = <4, 5> · <3/5, 4/5>", "= 4(3/5) + 5(4/5)", "= 12/5 + 20/5 = 32/5 = 6.4"] },
      ],
      "Answer: D_{u} f(1, 2) = 32/5 = 6.4.",
    ),
    W(
      "Example 2: f(x, y) = x² + xy at P(1, 2), direction (1/√2) i + (1/√2) j",
      "Find the directional derivative. The vector is already a unit vector.",
      [
        { text: "Check the length: sqrt(1/2 + 1/2) = 1, so it is already a unit vector.", lines: ["u = <1/√2, 1/√2>"] },
        { text: "Gradient.", lines: ["∂f/∂x = 2x + y, ∂f/∂y = x", "∇f = <2x + y, x>"] },
        { text: "Gradient at (1, 2).", lines: ["∇f(1, 2) = <2 + 2, 1> = <4, 1>"] },
        { text: "Dot product.", lines: ["D_{u} f = <4, 1> · <1/√2, 1/√2>", "= 4/√2 + 1/√2 = 5/√2"] },
      ],
      "Answer: D_{u} f(1, 2) = 5/√2 ≈ 3.54.",
    ),
    W(
      "Example 3: f(x, y) = 3x²y at P(1, 2), direction a = 3i + 4j",
      "Find the directional derivative.",
      [
        { text: "Gradient.", lines: ["∂f/∂x = 6xy, ∂f/∂y = 3x²", "∇f = <6xy, 3x²>"] },
        { text: "Gradient at (1, 2).", lines: ["∇f(1, 2) = <6(1)(2), 3(1)²> = <12, 3>"] },
        { text: "Unit vector.", lines: ["|a| = sqrt(9 + 16) = 5", "u = <3/5, 4/5>"] },
        { text: "Dot product.", lines: ["D_{u} f = 12(3/5) + 3(4/5) = 36/5 + 12/5 = 48/5"] },
      ],
      "Answer: D_{u} f(1, 2) = 48/5 = 9.6.",
    ),
    H("Functions of three variables"),
    W(
      "Example 4: f(x, y, z) = x² + 2y² - 3z² at P(1, 1, 1), direction i + j + k",
      "The vector i + j + k has length √3, so we must normalize it first.",
      [
        { text: "Gradient.", lines: ["f_{x} = 2x, f_{y} = 4y, f_{z} = -6z", "∇f = <2x, 4y, -6z>"] },
        { text: "Gradient at (1, 1, 1).", lines: ["∇f(1, 1, 1) = <2, 4, -6> = 2i + 4j - 6k"] },
        { text: "Unit vector.", lines: ["|v| = sqrt(1 + 1 + 1) = √3", "u = (i + j + k) / √3"] },
        { text: "Dot product.", lines: ["∇f · u = (2 + 4 - 6) / √3 = 0 / √3 = 0"] },
      ],
      "Answer: D_{u} f(1, 1, 1) = 0. (The dot product with the un-normalized vector is also 0.)",
    ),
    W(
      "Example 5: the same f and point, direction v = 2i + j + 3k",
      "Find the directional derivative in the direction of v.",
      [
        { text: "The gradient is the same: ∇f(1, 1, 1) = 2i + 4j - 6k.", lines: ["∇f(1, 1, 1) = <2, 4, -6>"] },
        { text: "Unit vector.", lines: ["|v| = sqrt(4 + 1 + 9) = √14", "u = <2, 1, 3> / √14"] },
        { text: "Dot product.", lines: ["∇f · v = 2(2) + 4(1) + (-6)(3) = 4 + 4 - 18 = -10", "D_{u} f = -10 / √14"] },
      ],
      "Answer: D_{u} f(1, 1, 1) = -10/√14 ≈ -2.67. The function is decreasing in this direction.",
    ),
    W(
      "Example 6: f(x, y, z) = x² + 2y² - 3y at (1, 1, 1), direction 2i + j + 3k",
      "Find the directional derivative. Note that z does not appear in f.",
      [
        { text: "Gradient. The derivative with respect to z is 0.", lines: ["f_{x} = 2x, f_{y} = 4y - 3, f_{z} = 0", "∇f = <2x, 4y - 3, 0>"] },
        { text: "Gradient at (1, 1, 1).", lines: ["∇f(1, 1, 1) = <2, 1, 0>"] },
        { text: "Unit vector.", lines: ["|v| = sqrt(4 + 1 + 9) = √14", "u = <2, 1, 3> / √14"] },
        { text: "Dot product.", lines: ["∇f · v = 2(2) + 1(1) + 0(3) = 5", "D_{u} f = 5 / √14"] },
      ],
      "Answer: D_{u} f(1, 1, 1) = 5/√14 ≈ 1.34.",
    ),
    H("Direction given by two points"),
    P("If the direction is from P(x_{1}, y_{1}, z_{1}) to Q(x_{2}, y_{2}, z_{2}), the vector is"),
    M(["PQ = (x_{2} - x_{1}) i + (y_{2} - y_{1}) j + (z_{2} - z_{1}) k"]),
    W(
      "Example 7: f(x, y, z) = x² - y² + 2z² at P(1, 2, 3), in the direction of PQ where Q(5, 0, 4)",
      "Find the directional derivative.",
      [
        { text: "Gradient.", lines: ["f_{x} = 2x, f_{y} = -2y, f_{z} = 4z", "∇f = <2x, -2y, 4z>"] },
        { text: "Gradient at P(1, 2, 3).", lines: ["∇f(1, 2, 3) = 2(1)i - 2(2)j + 4(3)k = 2i - 4j + 12k"] },
        { text: "Direction vector PQ = Q - P.", lines: ["PQ = (5 - 1)i + (0 - 2)j + (4 - 3)k = 4i - 2j + k"] },
        { text: "Unit vector.", lines: ["|PQ| = sqrt(16 + 4 + 1) = √21", "u = (4i - 2j + k) / √21 = <4/√21, -2/√21, 1/√21>"] },
        { text: "Dot product.", lines: ["D_{u} f = (2)(4/√21) + (-4)(-2/√21) + (12)(1/√21)", "= 8/√21 + 8/√21 + 12/√21", "= 28/√21"] },
      ],
      "Answer: D_{u} f(1, 2, 3) = 28/√21 ≈ 6.11.",
    ),
    H("Direction given by an angle"),
    P("In two dimensions, a unit vector at angle θ from the positive x-axis is u = cos θ i + sin θ j. For example, with θ = π/2: u = cos(π/2) i + sin(π/2) j = 0i + 1j = j, so D_{u} f = f_{y}."),
    H("Properties of the directional derivative"),
    M(["D_{u} f = ∇f · u = |∇f| cos θ"]),
    P("Here θ is the angle between the gradient vector ∇f and the unit vector u (we use |u| = 1)."),
    L(
      [
        "**Fastest increase.** f increases most rapidly when cos θ = 1, that is θ = 0, when u points in the direction of ∇f. At each point P, f increases most rapidly in the direction of ∇f, and the rate is D_{u} f = |∇f| cos 0 = |∇f|.",
        "**Fastest decrease.** f decreases most rapidly when cos θ = -1, that is θ = π, when u points opposite to ∇f (the direction -∇f). The rate is D_{u} f = |∇f| cos π = -|∇f|.",
        "**Zero change.** Any direction u perpendicular to ∇f is a direction of zero instantaneous change, because θ = π/2 and cos(π/2) = 0. Then D_{u} f = |∇f| · 0 = 0.",
      ],
      true,
    ),
    WARN("These properties assume ∇f is not the zero vector. If ∇f = 0 at a point, the directional derivative is 0 in every direction there. Also, zero instantaneous change at a point does not mean the function stays constant along the whole straight line in that direction.", "Important"),
    W(
      "Example 8: f(x, y) = x²/2 + y²/2 at P(1, 1)",
      "Find the directions of rapid increase, rapid decrease and no change.",
      [
        { text: "Find the gradient. Differentiate with respect to x, then y.", lines: ["∇f = (i ∂/∂x + j ∂/∂y)(x²/2 + y²/2)", "= i ∂/∂x (x²/2 + y²/2) + j ∂/∂y (x²/2 + y²/2)", "= i (2x/2 + 0) + j (0 + 2y/2)", "= x i + y j"] },
        { text: "Gradient at (1, 1).", lines: ["∇f(1, 1) = i + j"] },
        { text: "(a) Rapid increase: along the gradient. Its length is √(1² + 1²) = √2.", lines: ["u = (i + j) / √2 = (1/√2) i + (1/√2) j"] },
        { text: "(b) Rapid decrease: opposite to the gradient, that is -∇f.", lines: ["u = -(1/√2) i - (1/√2) j"] },
        { text: "(c) Zero change: perpendicular to the gradient. A vector v has to give a zero dot product with i + j. Try v = -i + j.", lines: ["(i + j) · (-i + j) = -1 + 1 = 0  ✓"] },
        { text: "Normalize v. Its length is √2.", lines: ["u = -(1/√2) i + (1/√2) j"] },
        { text: "The opposite direction also gives zero change.", lines: ["-u = (1/√2) i - (1/√2) j"] },
      ],
      "Summary: increase along (i + j)/√2, decrease along -(i + j)/√2, no change along ±(-i + j)/√2.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 9. Equation of a line
// ---------------------------------------------------------------------------
const lines = {
  title: "Equation of a Line",
  summary: "Forms of a straight line in two dimensions, parametric and symmetric equations of a line in three dimensions, and forms of a curve.",
  theory: [
    H("Line in two dimensions"),
    L(
      [
        "**Slope-intercept form:** y = mx + c, where m is the slope and c is the y-intercept.",
        "**Point-slope form:** if m is the slope and P_{0}(x_{0}, y_{0}) a point on the line, then y - y_{0} = m(x - x_{0}). The slope is m = rise / run = b / a, so y - y_{0} = (b/a)(x - x_{0}).",
        "**General equation:** Ax + By + C = 0.",
      ],
      true,
    ),
    H("Parametric equation of a line"),
    P("The parametric equations of a line in two dimensions passing through (x_{0}, y_{0}) and parallel to the vector a i + b j are"),
    M(["x = x_{0} + at,   y = y_{0} + bt"]),
    P("Eliminate t from both equations:"),
    M(["(x - x_{0}) / a = t,   (y - y_{0}) / b = t", "(x - x_{0}) / a = (y - y_{0}) / b", "y - y_{0} = (b/a)(x - x_{0})"]),
    P("In parametric vector form: r(t) = (x_{0} + at) i + (y_{0} + bt) j."),
    H("Line in three dimensions"),
    P("The parametric equations of a line in three dimensions through (x_{0}, y_{0}, z_{0}) and parallel to the vector a i + b j + c k are"),
    M(["x = x_{0} + at,   y = y_{0} + bt,   z = z_{0} + ct"]),
    P("Eliminate t (the **symmetric form**):"),
    M(["(x - x_{0}) / a = (y - y_{0}) / b = (z - z_{0}) / c"]),
    NOTE("If one of a, b, c is 0, do not divide by it. Write that coordinate on its own. For b = 0 the line lies in the plane y = y_{0}.", "Zero in the direction vector"),
    W(
      "Example 1: line through A(2, 4, 3) parallel to v = 4i + 0j - 7k",
      "Find the parametric equations and the symmetric form.",
      [
        { text: "Read the point and direction numbers.", lines: ["x_{0} = 2, y_{0} = 4, z_{0} = 3", "a = 4, b = 0, c = -7"] },
        { text: "Put them into x = x_{0} + at, y = y_{0} + bt, z = z_{0} + ct.", lines: ["x = 2 + 4t", "y = 4 + 0t = 4", "z = 3 - 7t"] },
        { text: "Symmetric form: because b = 0, we write y = 4 separately.", lines: ["(x - 2)/4 = (z - 3)/(-7),   y = 4"] },
      ],
      "Answer: x = 2 + 4t, y = 4, z = 3 - 7t.",
    ),
    W(
      "Example 2: line through P(1, 2, 3) and Q(5, 0, 4)",
      "Find the parametric equations (use two points).",
      [
        { text: "The direction vector is PQ = Q - P.", lines: ["PQ = (5 - 1)i + (0 - 2)j + (4 - 3)k = 4i - 2j + k"] },
        { text: "Use the point P(1, 2, 3) and a = 4, b = -2, c = 1.", lines: ["x = 1 + 4t", "y = 2 - 2t", "z = 3 + t"] },
        { text: "Check: at t = 1 we should reach Q.", lines: ["x = 5, y = 0, z = 4  ✓"] },
        { text: "Symmetric form.", lines: ["(x - 1)/4 = (y - 2)/(-2) = (z - 3)/1"] },
      ],
      "Answer: x = 1 + 4t, y = 2 - 2t, z = 3 + t.",
    ),
    H("Different forms of the equation of a curve"),
    P("Curves in the plane can be described in four ways."),
    T(
      ["Form", "Description", "Example"],
      [
        ["Explicit", "y = f(x)", "y = √(9 - x²), -3 ≤ x ≤ 3"],
        ["Implicit", "F(x, y) = 0", "x² + y² = 9, -3 ≤ x ≤ 3, 0 ≤ y ≤ 3"],
        ["Parametric", "x = f(t) and y = g(t)", "x = 3 cos θ, y = 3 sin θ, 0 ≤ θ ≤ π"],
        ["Parametric vector", "r(t) = f(t) i + g(t) j, a ≤ t ≤ b", "r(t) = 3 cos t i + 3 sin t j, 0 ≤ t ≤ π"],
      ],
    ),
    W(
      "Check that the parametric curve is a circle",
      "x = 3 cos θ, y = 3 sin θ. Show that it satisfies x² + y² = 9.",
      [
        { text: "Square both and add.", lines: ["x² + y² = 9 cos²θ + 9 sin²θ"] },
        { text: "Take 9 as a common factor and use cos²θ + sin²θ = 1.", lines: ["= 9(cos²θ + sin²θ) = 9(1) = 9"] },
      ],
      "So x² + y² = 9, a circle of radius 3. Because 0 ≤ θ ≤ π, we get only the upper half of it.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 10. Equation of a plane
// ---------------------------------------------------------------------------
const plane = {
  title: "Equation of a Plane",
  summary: "The point-normal form of a plane, the general equation ax + by + cz + d = 0, and the gradient as the normal vector.",
  theory: [
    H("Point-normal form"),
    P("A plane is completely determined if we know **one point** on it and the direction **perpendicular (normal)** to it."),
    P("Let a plane pass through P_{0}(x_{0}, y_{0}, z_{0}) with normal vector n = a i + b j + c k. Let P(x, y, z) be any point on the plane. Then the line P_{0}P lies in the plane, so n ⊥ P_{0}P (the symbol ⊥ means perpendicular), where"),
    M(["P_{0}P = (x - x_{0}) i + (y - y_{0}) j + (z - z_{0}) k"]),
    P("Perpendicular vectors have dot product 0, so n · P_{0}P = 0:"),
    M(["(a i + b j + c k) · ( (x - x_{0}) i + (y - y_{0}) j + (z - z_{0}) k ) = 0", "a(x - x_{0}) + b(y - y_{0}) + c(z - z_{0}) = 0"]),
    P("This is the required equation of the plane (the **point-normal form**). We use the theorem: if two vectors are perpendicular, their dot product is 0."),
    H("General form"),
    M([
      "ax - ax_{0} + by - by_{0} + cz - cz_{0} = 0",
      "ax + by + cz - ax_{0} - by_{0} - cz_{0} = 0",
      "ax + by + cz + d = 0,   where d = -ax_{0} - by_{0} - cz_{0}",
    ]),
    W(
      "Example 1: plane through (3, -1, 7) perpendicular to n = 4i + 2j - 5k",
      "Find the equation of the plane.",
      [
        { text: "Read the point and the normal.", lines: ["(x_{0}, y_{0}, z_{0}) = (3, -1, 7)", "a = 4, b = 2, c = -5"] },
        { text: "Point-normal form.", lines: ["4(x - 3) + 2(y + 1) - 5(z - 7) = 0"] },
        { text: "Open the brackets.", lines: ["4x - 12 + 2y + 2 - 5z + 35 = 0"] },
        { text: "Collect the numbers: -12 + 2 + 35 = 25.", lines: ["4x + 2y - 5z + 25 = 0"] },
      ],
      "Answer: 4x + 2y - 5z + 25 = 0, which has the form ax + by + cz + d = 0.",
    ),
    W(
      "Example 2: plane through the points A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)",
      "Find the equation of the plane. We build the normal from two vectors in the plane.",
      [
        { text: "Two vectors in the plane.", lines: ["AB = (0 - 1, 1 - 0, 0 - 0) = <-1, 1, 0>", "AC = (0 - 1, 0 - 0, 1 - 0) = <-1, 0, 1>"] },
        { text: "The normal is the cross product n = AB × AC.", lines: ["n = | i  j  k |", "    | -1 1  0 |", "    | -1 0  1 |"] },
        { text: "Expand the determinant.", lines: ["n = i(1·1 - 0·0) - j((-1)·1 - 0·(-1)) + k((-1)·0 - 1·(-1))", "= i(1) - j(-1) + k(1)", "= <1, 1, 1>"] },
        { text: "Point-normal form with A(1, 0, 0).", lines: ["1(x - 1) + 1(y - 0) + 1(z - 0) = 0", "x + y + z - 1 = 0"] },
        { text: "Check with B(0, 1, 0) and C(0, 0, 1).", lines: ["0 + 1 + 0 = 1  ✓", "0 + 0 + 1 = 1  ✓"] },
      ],
      "Answer: x + y + z = 1.",
    ),
    H("The gradient is normal to a line or plane"),
    P("**Line in two dimensions.** The line ax + by + c = 0. Let (x_{1}, y_{1}) and (x_{2}, y_{2}) lie on it. Then ax_{1} + by_{1} + c = 0 and ax_{2} + by_{2} + c = 0. Subtracting gives"),
    M(["a(x_{2} - x_{1}) + b(y_{2} - y_{1}) = 0"]),
    P("The vector v = (x_{2} - x_{1}) i + (y_{2} - y_{1}) j lies along the line. Take φ(x, y) = ax + by. Then φ_{x} = a, φ_{y} = b and ∇φ = a i + b j = n. The equation says n · v = 0, so **n and v are perpendicular**."),
    P("**Plane in three dimensions.** For two points (x_{1}, y_{1}, z_{1}) and (x_{2}, y_{2}, z_{2}) on the plane ax + by + cz + d = 0 we have"),
    M(["ax_{1} + by_{1} + cz_{1} + d = 0      (1)", "ax_{2} + by_{2} + cz_{2} + d = 0      (2)", "Subtract (1) from (2):", "a(x_{2} - x_{1}) + b(y_{2} - y_{1}) + c(z_{2} - z_{1}) = 0", "(a i + b j + c k) · [ (x_{2} - x_{1}) i + (y_{2} - y_{1}) j + (z_{2} - z_{1}) k ] = 0"]),
    P("With φ = ax + by + cz we get φ_{x} = a, φ_{y} = b, φ_{z} = c, so ∇φ = a i + b j + c k."),
    NOTE("∇φ is always normal to the plane.", "Key fact"),
  ],
};

// ---------------------------------------------------------------------------
// 11. Equation of the tangent plane and normal line
// ---------------------------------------------------------------------------
const tangent = {
  title: "Tangent Plane and Normal Line",
  summary: "The gradient is normal to a level curve or surface, the equation of the tangent plane and the normal line to a surface.",
  theory: [
    H("Gradients and tangents to curves"),
    P("Suppose a differentiable function f(x, y) has the constant value c along a smooth curve with parametric equations x = g(t), y = h(t), that is r = g(t) i + h(t) j. Then f(x, y) = c along the curve. Differentiate both sides with respect to t:"),
    M([
      "d/dt f( g(t), h(t) ) = d/dt (c)",
      "(∂f/∂x)(dg/dt) + (∂f/∂y)(dh/dt) = 0",
      "( ∂f/∂x i + ∂f/∂y j ) · ( dg/dt i + dh/dt j ) = 0",
      "∇f · dr/dt = 0",
    ]),
    P("So ∇f is perpendicular to the tangent vector dr/dt. This means ∇f is normal to the curve through (x_{0}, y_{0})."),
    H("Tangent plane and normal line to a surface"),
    P("Consider all curves through the point P_{0}(x_{0}, y_{0}, z_{0}) on the surface f(x, y, z) = 0. The plane that contains all the tangent lines to these curves at P_{0} is the **tangent plane** to the surface at P_{0}."),
    P("The straight line through P_{0} perpendicular to the tangent plane is the **normal line** (the surface normal) at P_{0}. If f_{x}, f_{y}, f_{z} are continuous at P_{0} and not all zero, the gradient ∇f = f_{x} i + f_{y} j + f_{z} k at P_{0} gives the direction of this normal vector."),
    H("Equations"),
    M([
      "Tangent plane at P_{0}(x_{0}, y_{0}, z_{0}):",
      "f_{x}(P_{0})(x - x_{0}) + f_{y}(P_{0})(y - y_{0}) + f_{z}(P_{0})(z - z_{0}) = 0",
      "",
      "Normal line at P_{0}:",
      "(x - x_{0}) / f_{x}(P_{0}) = (y - y_{0}) / f_{y}(P_{0}) = (z - z_{0}) / f_{z}(P_{0})",
    ]),
    TIP("Steps: (1) move everything to one side so the surface is f(x, y, z) = 0, (2) find f_{x}, f_{y}, f_{z}, (3) put in the point, (4) write the tangent plane, (5) write the normal line from the same three numbers.", "Method"),
    W(
      "Example 1: surface 9x² + 4y² - z² = 36 at P(2, 3, 6)",
      "Find the tangent plane and the normal line.",
      [
        { text: "Check that P lies on the surface.", lines: ["9(4) + 4(9) - 36 = 36 + 36 - 36 = 36  ✓"] },
        { text: "Write the surface as f(x, y, z) = 0.", lines: ["f(x, y, z) = 9x² + 4y² - z² - 36"] },
        { text: "Partial derivatives.", lines: ["f_{x} = 18x, f_{y} = 8y, f_{z} = -2z"] },
        { text: "Value at P(2, 3, 6).", lines: ["f_{x}(P) = 18(2) = 36", "f_{y}(P) = 8(3) = 24", "f_{z}(P) = -2(6) = -12"] },
        { text: "Tangent plane.", lines: ["36(x - 2) + 24(y - 3) - 12(z - 6) = 0"] },
        { text: "Divide the whole equation by 12.", lines: ["3(x - 2) + 2(y - 3) - (z - 6) = 0", "3x - 6 + 2y - 6 - z + 6 = 0", "3x + 2y - z - 6 = 0"] },
        { text: "Normal line. Use 36, 24, -12 or the shorter 3, 2, -1.", lines: ["(x - 2)/3 = (y - 3)/2 = (z - 6)/(-1)"] },
      ],
      "Tangent plane: 3x + 2y - z - 6 = 0. Normal line: (x - 2)/3 = (y - 3)/2 = (z - 6)/(-1).",
    ),
    W(
      "Example 2: surface z = x cos y - y e^{x} at (0, 0, 0)",
      "Find the tangent plane.",
      [
        { text: "Check that (0, 0, 0) lies on the surface.", lines: ["0 · cos 0 - 0 · e^{0} = 0  ✓"] },
        { text: "Move z to the right side so that f(x, y, z) = 0.", lines: ["f(x, y, z) = x cos y - y e^{x} - z"] },
        { text: "Partial derivatives.", lines: ["f_{x} = cos y - y e^{x}", "f_{y} = -x sin y - e^{x}", "f_{z} = -1"] },
        { text: "Values at (0, 0, 0).", lines: ["f_{x}(0, 0, 0) = cos 0 - 0 · e^{0} = 1 - 0 = 1", "f_{y}(0, 0, 0) = -0 · sin 0 - e^{0} = 0 - 1 = -1", "f_{z}(0, 0, 0) = -1"] },
        { text: "Tangent plane.", lines: ["1(x - 0) - 1(y - 0) - 1(z - 0) = 0", "x - y - z = 0"] },
        { text: "Normal line.", lines: ["x/1 = y/(-1) = z/(-1)"] },
      ],
      "Tangent plane: x - y - z = 0.",
    ),
    H("Tangent plane to z = f(x, y)"),
    P("If the surface is given as z = f(x, y), the tangent plane at (x_{0}, y_{0}, z_{0}) is"),
    M(["z - z_{0} = f_{x}(x_{0}, y_{0})(x - x_{0}) + f_{y}(x_{0}, y_{0})(y - y_{0})"]),
    W(
      "Example 3: surface z = x² + y² at the point (1, 2, 5)",
      "Find the tangent plane and the normal line.",
      [
        { text: "Check the point: 1 + 4 = 5.  ✓", lines: ["z_{0} = 5"] },
        { text: "Partial derivatives and their values at (1, 2).", lines: ["f_{x} = 2x, so f_{x}(1, 2) = 2", "f_{y} = 2y, so f_{y}(1, 2) = 4"] },
        { text: "Tangent plane.", lines: ["z - 5 = 2(x - 1) + 4(y - 2)", "z - 5 = 2x - 2 + 4y - 8", "2x + 4y - z - 5 = 0"] },
        { text: "Normal line. Write the surface as F = x² + y² - z, so F_{x} = 2, F_{y} = 4, F_{z} = -1 at the point.", lines: ["(x - 1)/2 = (y - 2)/4 = (z - 5)/(-1)"] },
      ],
      "Tangent plane: 2x + 4y - z = 5. Normal line: (x - 1)/2 = (y - 2)/4 = (z - 5)/(-1).",
    ),
  ],
};

// ---------------------------------------------------------------------------
// 12. Orthogonal surfaces (added so that the subject is complete)
// ---------------------------------------------------------------------------
const orthogonal = {
  title: "Orthogonal Surfaces",
  summary: "When two surfaces are orthogonal (cross at right angles) at a common point, tested with their gradient vectors.",
  theory: [
    H("Definition"),
    P("Two surfaces F(x, y, z) = 0 and G(x, y, z) = 0 that meet at a point P are **orthogonal** at P if their tangent planes at P are perpendicular. That happens exactly when their normal vectors ∇F and ∇G are perpendicular."),
    M(["∇F(P) · ∇G(P) = 0", "F_{x} G_{x} + F_{y} G_{y} + F_{z} G_{z} = 0   at P"]),
    TIP("Steps: (1) check that P lies on both surfaces, (2) find ∇F and ∇G, (3) put in P, (4) take the dot product. If it is 0 the surfaces are orthogonal at P.", "Method"),
    W(
      "Example 1: sphere x² + y² + z² = 4 and cone z² = x² + y² at P(1, 1, √2)",
      "Show that the surfaces are orthogonal at P.",
      [
        { text: "Check that P lies on both surfaces.", lines: ["Sphere: 1 + 1 + (√2)² = 1 + 1 + 2 = 4  ✓", "Cone: z² = 2 and x² + y² = 1 + 1 = 2  ✓"] },
        { text: "Write both as F = 0 and G = 0.", lines: ["F = x² + y² + z² - 4", "G = x² + y² - z²"] },
        { text: "Gradients.", lines: ["∇F = <2x, 2y, 2z>", "∇G = <2x, 2y, -2z>"] },
        { text: "Values at P(1, 1, √2).", lines: ["∇F(P) = <2, 2, 2√2>", "∇G(P) = <2, 2, -2√2>"] },
        { text: "Dot product.", lines: ["∇F · ∇G = 2(2) + 2(2) + (2√2)(-2√2)", "= 4 + 4 - 8", "= 0"] },
      ],
      "The dot product is 0, so the sphere and the cone are orthogonal at P.",
    ),
    W(
      "Example 2: find the constant a so that ax² - 2yz = (a + 4)x and 4x²y + z³ = 4 are orthogonal at (1, -1, 2)",
      "Use the orthogonality condition to find a.",
      [
        { text: "Check that the point is on the second surface: 4(1)(-1) + 8 = 4.  ✓", lines: ["G = 4x²y + z³ - 4"] },
        { text: "Write the first surface as F = 0.", lines: ["F = ax² - 2yz - (a + 4)x"] },
        { text: "Check the point on F: a + 4 - (a + 4) = 0.  ✓ for every a.", lines: ["F(1, -1, 2) = a(1) - 2(-1)(2) - (a + 4)(1) = a + 4 - a - 4 = 0"] },
        { text: "Gradient of F.", lines: ["F_{x} = 2ax - (a + 4), F_{y} = -2z, F_{z} = -2y", "∇F(1, -1, 2) = <2a - a - 4, -4, 2> = <a - 4, -4, 2>"] },
        { text: "Gradient of G.", lines: ["G_{x} = 8xy, G_{y} = 4x², G_{z} = 3z²", "∇G(1, -1, 2) = <-8, 4, 12>"] },
        { text: "Orthogonal means the dot product is 0.", lines: ["(a - 4)(-8) + (-4)(4) + (2)(12) = 0", "-8a + 32 - 16 + 24 = 0", "-8a + 40 = 0", "a = 5"] },
      ],
      "Answer: a = 5.",
    ),
    WARN("Always check that ∇F and ∇G are not the zero vector at the point. If ∇F = 0 there (for example F = x² + y² - z² at the origin), the tangent plane is not defined, so this test cannot be used.", "Careful"),
  ],
};

// ---------------------------------------------------------------------------
// 13. Solved practice questions (every step shown)
// ---------------------------------------------------------------------------
const practice = {
  title: "Solved Practice Questions",
  summary: "Questions from the instructor's notes and the PDFs, with every step solved in full.",
  theory: [
    NOTE("In some of the PDFs a few steps were cut off or mistyped and the answer was written directly. Here each question is solved again from the start, with every step.", "About these solutions"),
    H("Q1. Directions of increase, decrease and no change"),
    W(
      "Q1: f(x, y) = x²/2 + y²/2 at P(1, 1)",
      "Find the directions of rapid increase, rapid decrease and no change.",
      [
        { text: "Find the partial derivatives.", lines: ["∂f/∂x = 2x/2 = x", "∂f/∂y = 2y/2 = y"] },
        { text: "Write the gradient.", lines: ["∇f = x i + y j"] },
        { text: "Put in the point (1, 1).", lines: ["∇f(1, 1) = i + j"] },
        { text: "Rapid increase: the unit vector along ∇f. |i + j| = √(1² + 1²) = √2.", lines: ["u = (i + j)/√2 = (1/√2) i + (1/√2) j"] },
        { text: "Rapid decrease: the opposite direction.", lines: ["u = -(1/√2) i - (1/√2) j"] },
        { text: "No change: a vector perpendicular to i + j. Since (i + j) · (-i + j) = -1 + 1 = 0, take -i + j and normalize it.", lines: ["u = (-i + j)/√2 = -(1/√2) i + (1/√2) j", "Also valid: -u = (1/√2) i - (1/√2) j"] },
      ],
      "Both directions of zero change give D_{u} f = 0.",
    ),
    H("Q2. Equation of a plane"),
    W(
      "Q2: plane through (3, -1, 7) perpendicular to n = 4i + 2j - 5k",
      "Write the point-normal form and the general form.",
      [
        { text: "Point-normal form.", lines: ["4(x - 3) + 2(y - (-1)) - 5(z - 7) = 0", "4(x - 3) + 2(y + 1) - 5(z - 7) = 0"] },
        { text: "Open the brackets.", lines: ["4x - 12 + 2y + 2 - 5z + 35 = 0"] },
        { text: "Collect.", lines: ["4x + 2y - 5z + 25 = 0"] },
      ],
      "4x + 2y - 5z + 25 = 0",
    ),
    H("Q3. Line in three dimensions"),
    W(
      "Q3: line through A(2, 4, 3) parallel to v = 4i + 0j - 7k",
      "Find the parametric equations.",
      [
        { text: "x_{0} = 2, y_{0} = 4, z_{0} = 3 and a = 4, b = 0, c = -7.", lines: ["x = 2 + 4t", "y = 4 + 0t", "z = 3 - 7t"] },
      ],
      "x = 2 + 4t, y = 4, z = 3 - 7t.",
    ),
    H("Q4. Tangent plane to 9x² + 4y² - z² = 36"),
    W(
      "Q4: at the point P(2, 3, 6)",
      "Find the equation of the tangent plane.",
      [
        { text: "Write f(x, y, z) = 9x² + 4y² - z² - 36.", lines: ["f_{x} = 18x, f_{y} = 8y, f_{z} = -2z"] },
        { text: "Values at P.", lines: ["f_{x}(P) = 36, f_{y}(P) = 24, f_{z}(P) = -12"] },
        { text: "Tangent plane formula.", lines: ["36(x - 2) + 24(y - 3) - 12(z - 6) = 0"] },
        { text: "Divide by 12 and open the brackets.", lines: ["3(x - 2) + 2(y - 3) - (z - 6) = 0", "3x - 6 + 2y - 6 - z + 6 = 0", "3x + 2y - z - 6 = 0"] },
      ],
      "3x + 2y - z - 6 = 0",
    ),
    H("Q5. Tangent plane to z = x cos y - y e^{x}"),
    W(
      "Q5: at the point (0, 0, 0)",
      "Find the equation of the tangent plane. (In the PDF the line f = cos y - y e^x - z has a missing x. The correct function is below.)",
      [
        { text: "Write f(x, y, z) = x cos y - y e^{x} - z.", lines: ["f_{x} = cos y - y e^{x}", "f_{y} = -x sin y - e^{x}", "f_{z} = -1"] },
        { text: "Values at (0, 0, 0).", lines: ["f_{x} = cos 0 - 0 = 1", "f_{y} = 0 - e^{0} = -1", "f_{z} = -1"] },
        { text: "Tangent plane.", lines: ["1(x - 0) - 1(y - 0) - 1(z - 0) = 0", "x - y - z = 0"] },
      ],
      "x - y - z = 0",
    ),
    H("Q6. Directional derivative of x² + 2y² - 3z² at (1, 1, 1)"),
    W(
      "Q6: direction 2i + j + 3k",
      "Find the directional derivative.",
      [
        { text: "Gradient.", lines: ["∇f = <2x, 4y, -6z>", "∇f(1, 1, 1) = <2, 4, -6>"] },
        { text: "The direction vector must be a unit vector. Its length is √(4 + 1 + 9) = √14.", lines: ["u = <2, 1, 3>/√14"] },
        { text: "Dot product.", lines: ["2(2) + 4(1) + (-6)(3) = 4 + 4 - 18 = -10", "D_{u} f = -10/√14"] },
      ],
      "-10/√14 ≈ -2.67",
    ),
    H("Q7. Directional derivative from P to Q"),
    W(
      "Q7: f(x, y, z) = x² - y² + 2z², P(1, 2, 3), Q(5, 0, 4)",
      "Find the directional derivative at P in the direction of PQ.",
      [
        { text: "Gradient.", lines: ["∇f = <2x, -2y, 4z>"] },
        { text: "Gradient at P(1, 2, 3).", lines: ["∇f(1, 2, 3) = <2(1), -2(2), 4(3)> = <2, -4, 12>"] },
        { text: "Direction vector.", lines: ["PQ = <5 - 1, 0 - 2, 4 - 3> = <4, -2, 1>"] },
        { text: "Length of PQ.", lines: ["|PQ| = sqrt(16 + 4 + 1) = √21"] },
        { text: "Unit vector.", lines: ["u = <4, -2, 1>/√21"] },
        { text: "Dot product.", lines: ["D_{u} f = [ 2(4) + (-4)(-2) + 12(1) ] / √21", "= (8 + 8 + 12)/√21", "= 28/√21"] },
      ],
      "28/√21 ≈ 6.11",
    ),
    H("Q8. Directional derivative of f(x, y) = 3x²y"),
    W(
      "Q8: P(1, 2), direction a = 3i + 4j",
      "Find the directional derivative.",
      [
        { text: "Gradient.", lines: ["∇f = <6xy, 3x²>", "∇f(1, 2) = <12, 3>"] },
        { text: "Unit vector.", lines: ["|a| = 5, u = <3/5, 4/5>"] },
        { text: "Dot product.", lines: ["12(3/5) + 3(4/5) = 36/5 + 12/5 = 48/5"] },
      ],
      "48/5 = 9.6",
    ),
    H("Q9. Chain rule"),
    W(
      "Q9: u = sin(x + y), x = s²t, y = e^{s+t}",
      "Find ∂u/∂s and ∂u/∂t.",
      [
        { text: "∂u/∂x = ∂u/∂y = cos(x + y).", lines: ["∂x/∂s = 2st, ∂x/∂t = s²", "∂y/∂s = e^{s+t}, ∂y/∂t = e^{s+t}"] },
        { text: "∂u/∂s.", lines: ["= cos(x + y)(2st) + cos(x + y)(e^{s+t})", "= cos(x + y)(2st + e^{s+t})"] },
        { text: "∂u/∂t.", lines: ["= cos(x + y)(s²) + cos(x + y)(e^{s+t})", "= cos(x + y)(s² + e^{s+t})"] },
      ],
      "∂u/∂s = cos(x + y)(2st + e^{s+t}),  ∂u/∂t = cos(x + y)(s² + e^{s+t}).",
    ),
    H("Q10. Orthogonal surfaces"),
    W(
      "Q10: show that x² + y² + z² = 4 and z² = x² + y² are orthogonal at (1, 1, √2)",
      "Use the gradients.",
      [
        { text: "∇F for the sphere and ∇G for the cone.", lines: ["∇F = <2x, 2y, 2z> = <2, 2, 2√2> at P", "∇G = <2x, 2y, -2z> = <2, 2, -2√2> at P"] },
        { text: "Dot product.", lines: ["4 + 4 - 8 = 0"] },
      ],
      "The dot product is 0, so they are orthogonal.",
    ),
  ],
};

export const multivariableCalculusChapters = [
  functions,
  partial,
  atPoint,
  rules,
  higher,
  laplace,
  chain,
  directional,
  lines,
  plane,
  tangent,
  orthogonal,
  practice,
];
