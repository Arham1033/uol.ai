// ALL notes for Calculus, semester 2, live in this ONE file.
// Chapters are in teaching order (the list is at the bottom): 1 The derivative, 2 Rules of differentiation,
// 3 Exponential and logarithmic functions, 4 Trigonometric and inverse trigonometric functions,
// 5 Increasing and decreasing functions, maxima and minima, 6 Integration, 7 Methods of integration, 8 The definite integral.
// Pictures are in public/notes/semester-2/calculus/ and are added with IMG("file-name", "description", "caption").
// Block types: heading, subheading, paragraph, list, math, table, callout, image, qa and worked.
// A "worked" block is a scrolling box of solved examples. Each step has a question line and the working under it:
//   W(title, given, [{ text, lines: [...] }], answer)
// Powers are written ^{2}, small letters below are written _{x}. **word** highlights a key word.
// Every solution shows every step. Nothing is skipped.

const BASE = "/notes/semester-2/calculus";
const SIZES = {
  "abs-value-area": [1800, 920],
  "antiderivative-family": [1800, 960],
  "chain-rule-example": [1920, 920],
  "exp-log-tangents": [1880, 960],
  "integration-method-chooser": [1920, 1280],
  "max-min-cubic": [1840, 1040],
  "profit-maximum": [1800, 960],
  "riemann-area": [1880, 960],
  "secant-to-tangent": [1840, 1000],
  "sin-cos-slope": [1840, 1120],
};

const H = (text) => ({ type: "heading", text });
const SH = (text) => ({ type: "subheading", text });
const P = (text) => ({ type: "paragraph", text });
const L = (items, ordered = false) => ({ type: "list", ordered, items });
const M = (lines, caption) => (caption ? { type: "math", lines, caption } : { type: "math", lines });
const T = (headers, rows, caption) => ({ type: "table", headers, rows, caption });
const NOTE = (text, title) => ({ type: "callout", variant: "note", title, text });
const TIP = (text, title) => ({ type: "callout", variant: "tip", title, text });
const WARN = (text, title) => ({ type: "callout", variant: "warning", title, text });
const W = (title, given, steps, answer) => ({ type: "worked", title, given, steps, answer });
const IMG = (name, alt, caption) => ({
  type: "image",
  src: `${BASE}/${name}.webp`,
  alt,
  width: SIZES[name][0],
  height: SIZES[name][1],
  caption,
});
const SCEN = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.map(([question, answer]) => ({ type: "qa", question, answer })),
});

// ---------------------------------------------------------------------------
// Chapter 1. The derivative
// ---------------------------------------------------------------------------
const chapter1 = {
  title: "Chapter 1: The Derivative",
  summary:
    "Meaning of the derivative as a rate of change and as the slope of a tangent, its notations, the definition by a limit (first principles) with solved examples, and a worked example with data.",
  theory: [
    H("What is a derivative?"),
    P("The **rate of change of a dependent variable with respect to one or more independent variables** is called the **derivative** (also called the **slope** or **gradient**)."),
    P("The symbol dy/dx is used for the derivative of y with respect to x. It is also written y'. Here **y is the dependent variable** and **x is the independent variable**."),
    SH("Notations for the derivative of y = f(x)"),
    T(
      ["Name", "Notation", "Remarks"],
      [
        ["**Leibniz**", "dy/dx, df/dx, d/dx f(x)", "Shows clearly which variable is differentiated with respect to which."],
        ["**Lagrange**", "f'(x), y'  (y prime)", "Short and the most common in calculations."],
        ["**Euler / Cauchy**", "D_{x} f", "D is the operator 'differentiate'."],
        ["**Newton**", "y with a dot (y dot)", "Used mainly when the independent variable is time."],
      ]
    ),
    NOTE("The derivative is always taken with respect to an independent variable. If y depends on x, the answer is a rate of change of y per unit change in x.", "Remember"),

    H("Definition of the derivative"),
    P("The derivative of a function f with respect to the variable x is the function f' whose value at x is"),
    M(["f'(x) = lim (h -> 0) [ f(x + h) - f(x) ] / h"], "provided the limit exists"),
    P("The process of calculating a derivative is called **differentiation**. Calculating a derivative from this limit is called differentiating **from first principles**."),
    SH("Geometric meaning: the slope of the tangent"),
    P("The quotient [f(x + h) − f(x)] / h is the slope of the **secant line** through the points (x, f(x)) and (x + h, f(x + h)). As h gets smaller the second point slides toward the first and the secant line becomes the **tangent line**. So **f'(x) is the slope of the tangent to the curve at x**."),
    IMG("secant-to-tangent", "Curve y = x squared with secant lines through P(1, 1) for h = 1, 0.5 and 0.1 approaching the tangent of slope 2, with a table of the slopes", "Secant slopes 3, 2.5, 2.1 settle at the tangent slope 2"),
    SH("Two basic results"),
    M(["d/dx (mx + b) = m", "d/dx (1/x) = -1/x^{2}"]),
    P("The first says a straight line has the same slope everywhere. The second is proved by first principles in the examples below."),

    H("Examples"),
    W(
      "Differentiation from first principles",
      "Use f'(x) = lim (h -> 0) [f(x + h) - f(x)] / h in every example.",
      [
        {
          text: "Example 1 (extra, simplest): f(x) = x^{2}.",
          lines: [
            "f(x + h) = (x + h)^{2} = x^{2} + 2xh + h^{2}",
            "[f(x + h) - f(x)] / h = (2xh + h^{2}) / h = 2x + h",
            "f'(x) = lim (h -> 0) (2x + h) = 2x",
          ],
        },
        {
          text: "Example 2: f(x) = x / (x - 1). Step 1: write f(x + h).",
          lines: ["f(x) = x / (x - 1)", "f(x + h) = (x + h) / (x + h - 1)"],
        },
        {
          text: "Step 2: form the difference quotient. Use a/b - c/d = (ad - bc) / bd.",
          lines: [
            "f(x + h) - f(x) = (x + h)/(x + h - 1) - x/(x - 1)",
            "= [ (x + h)(x - 1) - x(x + h - 1) ] / [ (x + h - 1)(x - 1) ]",
            "Top: (x^{2} - x + hx - h) - (x^{2} + hx - x) = -h",
            "[f(x + h) - f(x)] / h = (1/h) * (-h) / [ (x + h - 1)(x - 1) ] = -1 / [ (x + h - 1)(x - 1) ]",
          ],
        },
        {
          text: "Step 3: let h tend to 0.",
          lines: ["f'(x) = lim (h -> 0) -1 / [ (x + h - 1)(x - 1) ] = -1 / (x - 1)^{2}"],
        },
        {
          text: "Example 3 (sqrt = square root): find the derivative of y = sqrt(x). Step 1: f(x) = sqrt(x) and f(x + h) = sqrt(x + h).",
          lines: ["[f(x + h) - f(x)] / h = [ sqrt(x + h) - sqrt(x) ] / h"],
        },
        {
          text: "Step 2: multiply the top and bottom by the conjugate sqrt(x + h) + sqrt(x).",
          lines: [
            "= [ (x + h) - x ] / { h [ sqrt(x + h) + sqrt(x) ] }",
            "= h / { h [ sqrt(x + h) + sqrt(x) ] }",
            "= 1 / [ sqrt(x + h) + sqrt(x) ]",
          ],
        },
        {
          text: "Step 3: let h tend to 0.",
          lines: ["f'(x) = lim (h -> 0) 1 / [ sqrt(x + h) + sqrt(x) ] = 1 / (2 sqrt(x))"],
        },
      ],
      "Results: d/dx (x^{2}) = 2x;  d/dx [x/(x - 1)] = -1/(x - 1)^{2};  d/dx sqrt(x) = 1/(2 sqrt(x))."
    ),
    W(
      "A rate of change with data: a cyclist's distance",
      "A cyclist's distance from the start is s(t) = t^{2} metres after t seconds. Find the speed at t = 1 second.",
      [
        {
          text: "Average speed over a time interval = change in distance / change in time (the slope of a secant line).",
          lines: [
            "t = 1 to 2:     (4 - 1) / 1 = 3 m/s",
            "t = 1 to 1.5:   (2.25 - 1) / 0.5 = 2.5 m/s",
            "t = 1 to 1.1:   (1.21 - 1) / 0.1 = 2.1 m/s",
          ],
        },
        {
          text: "The shorter the interval, the closer the average speed gets to one number. That number is the speed at the instant t = 1, the derivative.",
          lines: ["ds/dt = 2t", "At t = 1: ds/dt = 2 m/s"],
        },
        {
          text: "The derivative also gives the speed at any other time, for example at t = 3 seconds.",
          lines: ["At t = 3: ds/dt = 2(3) = 6 m/s"],
        },
      ],
      "The speed is the derivative of the distance: 2 m/s at t = 1 and 6 m/s at t = 3. The cyclist speeds up."
    ),
    SCEN("Questions with answers: the derivative", [
      [
        "Question 1: What does f'(a) tell you about the graph of f at x = a?",
        "It is the **slope of the tangent line** to the curve at x = a. A positive value means the curve is rising there, a negative value means it is falling and zero means the tangent is horizontal.",
      ],
      [
        "Question 2: Write the derivative of y = f(x) in four ways.",
        "dy/dx (Leibniz), f'(x) or y' (Lagrange), D_{x} f (Euler/Cauchy) and y with a dot (Newton).",
      ],
      [
        "Question 3: Find d/dx (5x + 3) and d/dx (1/x).",
        "d/dx (5x + 3) = **5**, since a line mx + b has slope m. d/dx (1/x) = **-1/x^{2}**.",
      ],
      [
        "Question 4: Why do we multiply by the conjugate when differentiating sqrt(x) from first principles?",
        "The difference sqrt(x + h) - sqrt(x) tends to 0 and so does h, giving the form 0/0. Multiplying by sqrt(x + h) + sqrt(x) turns the top into (x + h) - x = h, which cancels with the h below so the limit can be found.",
      ],
      [
        "Question 5: A ball's height is s(t) = 5t^{2} metres. Estimate the speed at t = 2 using the interval 2 to 2.01, then find the exact value.",
        "Average speed = [5(2.01)^{2} - 5(2)^{2}] / 0.01 = (20.2005 - 20) / 0.01 = **20.05 m/s**. Exact: ds/dt = 10t = **20 m/s** at t = 2.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 2. Rules of differentiation
// ---------------------------------------------------------------------------
const chapter2 = {
  title: "Chapter 2: Rules of Differentiation",
  summary:
    "Constant, power, constant multiple, sum and difference, product, quotient, power of a function and chain rules, each with solved examples, practice questions with answers and a worked chain rule diagram.",
  theory: [
    H("Why we need rules"),
    P("Finding derivatives from the limit is slow. The rules below let us differentiate most functions quickly. Learn them in this order, because each rule is used by the next."),
    T(
      ["No.", "Rule", "Formula"],
      [
        ["1", "**Constant function**", "d/dx (c) = 0"],
        ["2", "**Power rule**", "d/dx (x^{n}) = n x^{n-1}"],
        ["3", "**Constant times a function**", "d/dx [c g(x)] = c g'(x)"],
        ["4", "**Sum or difference**", "d/dx [u ± v] = u' ± v'"],
        ["5", "**Product rule**", "d/dx (uv) = u'v + uv'"],
        ["6", "**Quotient rule**", "d/dx (u/v) = (v u' - u v') / v^{2},  v is not 0"],
        ["7", "**Power of a function**", "d/dx [w(x)]^{n} = n [w(x)]^{n-1} w'(x)"],
        ["8", "**Chain rule**", "dy/dx = (dy/du) (du/dx)"],
      ]
    ),

    H("1. Constant function rule"),
    P("If f(x) = c where c is a constant, then the derivative of f(x) is zero."),
    M(["f(x) = c   gives   f'(x) = 0", "Example: f(x) = 5   gives   f'(x) = 0"]),
    P("A constant never changes, so its rate of change is 0. Its graph is a horizontal line."),

    H("2. Power rule"),
    P("If f(x) = x^{n} where n is a real number, then f'(x) = n x^{n-1}. Bring the power down in front and reduce the power by one."),
    M(["f(x) = x^{n}   gives   f'(x) = n x^{n-1}", "y = x   gives   dy/dx = 1 x^{0} = 1"]),

    H("3. Constant times a function"),
    P("If f(x) = c g(x), where c is a constant and g is a differentiable function, then f'(x) = c g'(x). The constant simply stays in front."),

    H("4. Sum or difference of functions"),
    P("If f(x) = u(x) ± v(x), where u and v are differentiable, then f'(x) = u'(x) ± v'(x). Differentiate term by term."),

    H("5. Product rule"),
    P("If f(x) = u(x) v(x), where u and v are differentiable, then"),
    M(["f'(x) = u'(x) v(x) + u(x) v'(x)", "or  f'(x) = u(x) v'(x) + v(x) u'(x)"]),
    P("In words: derivative of the first times the second, plus the first times the derivative of the second."),

    H("6. Quotient rule"),
    P("If f(x) = u(x) / v(x), where u and v are differentiable and v(x) is not 0, then"),
    M(["f'(x) = [ v(x) u'(x) - u(x) v'(x) ] / [ v(x) ]^{2}"]),
    TIP("Say it as: bottom times derivative of top, minus top times derivative of bottom, all over bottom squared. The order of the two terms in the numerator matters because of the minus sign.", "How to remember"),

    H("7. Power of a function (general power rule)"),
    P("If f(x) = [w(x)]^{n}, where w(x) is a differentiable function and n is a real number, then"),
    M(["f'(x) = n [w(x)]^{n-1} w'(x)"]),
    P("Differentiate the outside power as usual and then multiply by the derivative of the inside function."),

    H("8. Chain rule"),
    P("If y = f(u) is a differentiable function of u and u = g(x) is a differentiable function of x, then"),
    M(["dy/dx = (dy/du) (du/dx)"]),
    IMG("chain-rule-example", "Chain of x to u = 4x squared to y = 5u squared + 3u + 4 with the derivatives multiplied to give 344 at x = 1", "The chain rule multiplies the rate of the outer step by the rate of the inner step"),
    NOTE("Rule 7 is the chain rule for the special case where the outer function is a power. In the same way the rules for e^{u}, ln u and the trigonometric functions all include the factor u' (the derivative of the inside).", "Link"),

    H("Solved examples"),
    W(
      "Rules 1 to 4: power, constant multiple, sum and difference",
      "Differentiate each function with respect to x.",
      [
        { text: "y = x^{2}", lines: ["dy/dx = 2 x^{2-1} = 2x"] },
        { text: "y = x^{3}", lines: ["dy/dx = 3 x^{3-1} = 3x^{2}"] },
        { text: "y = 2x^{2}", lines: ["dy/dx = 2 (2x^{2-1}) = 4x"] },
        {
          text: "y = 1/sqrt(x). Write the root as a power first: 1/sqrt(x) = x^{-1/2}.",
          lines: ["y' = (-1/2) x^{-1/2 - 1} = (-1/2) x^{-3/2}", "= -1 / (2 x^{3/2})"],
        },
        { text: "f(x) = 4 x^{5}", lines: ["f'(x) = 4 [5 x^{5-1}] = 20 x^{4}"] },
        {
          text: "f(x) = 2/x^{m}. Write it as 2 x^{-m}.",
          lines: ["f'(x) = 2 [ -m x^{-m-1} ] = -2m x^{-m-1}"],
        },
        {
          text: "f(x) = x^{5} + 4x^{3} - 2x^{2} + 4x - 10. Differentiate term by term; the constant -10 gives 0.",
          lines: ["f'(x) = 5x^{4} + 4(3x^{2}) - 2(2x) + 4(1) - 0", "f'(x) = 5x^{4} + 12x^{2} - 4x + 4"],
        },
        { text: "y = 3x - 4x^{2}", lines: ["y' = 3(1) - 4(2x) = 3 - 8x"] },
        {
          text: "y = 2x^{2} + 3x + 5",
          lines: ["dy/dx = 2(2x) + 3(1) + 0 = 4x + 3"],
        },
      ],
      "Always bring the power down, reduce it by 1, keep the constants in front and differentiate sums term by term."
    ),
    W(
      "Rules 5 and 6: product rule and quotient rule",
      "Use u'v + uv' for products and (v u' - u v')/v^{2} for quotients.",
      [
        {
          text: "f(x) = (x^{2} - 5)(x - x^{2}). Take u = x^{2} - 5 and v = x - x^{2}.",
          lines: [
            "u' = 2x,   v' = 1 - 2x",
            "f'(x) = u'v + uv' = (2x)(x - x^{2}) + (x^{2} - 5)(1 - 2x)",
            "= 2x^{2} - 2x^{3} + x^{2} - 2x^{3} - 5 + 10x",
            "= -4x^{3} + 3x^{2} + 10x - 5",
            "Check by expanding first: f = x^{3} - x^{4} - 5x + 5x^{2}, so f' = 3x^{2} - 4x^{3} - 5 + 10x. Same.",
          ],
        },
        {
          text: "y = (x + 1)(x + 2) by the product rule.",
          lines: ["dy/dx = (x + 1)(1) + (x + 2)(1) = 2x + 3"],
        },
        {
          text: "f(x) = (3x^{2} - 5) / (1 - x^{2}). Take u = 3x^{2} - 5 and v = 1 - x^{2}.",
          lines: [
            "u' = 6x,   v' = -2x",
            "f'(x) = [ v u' - u v' ] / v^{2} = [ (1 - x^{2})(6x) - (3x^{2} - 5)(-2x) ] / (1 - x^{2})^{2}",
            "Top: 6x - 6x^{3} + 6x^{3} - 10x = -4x",
            "f'(x) = -4x / (1 - x^{2})^{2}",
          ],
        },
        {
          text: "y = (x + 1) / (x + 2) by the quotient rule.",
          lines: [
            "dy/dx = [ (x + 2)(1) - (x + 1)(1) ] / (x + 2)^{2}",
            "= (x + 2 - x - 1) / (x + 2)^{2} = 1 / (x + 2)^{2}",
          ],
        },
      ],
      "Check: (3x^{2} - 5)/(1 - x^{2}) has derivative -4x/(1 - x^{2})^{2}, not -1/x. Always simplify the numerator fully."
    ),
    W(
      "Practice questions with full solutions",
      "Differentiate each. The final answers are given so you can check your own work.",
      [
        {
          text: "Question 1: differentiate (2x^{3} - 3x^{2} + 5) / (x^{2} + 1) by the quotient rule.",
          lines: [
            "u = 2x^{3} - 3x^{2} + 5, u' = 6x^{2} - 6x;   v = x^{2} + 1, v' = 2x",
            "Top: (x^{2} + 1)(6x^{2} - 6x) - (2x^{3} - 3x^{2} + 5)(2x)",
            "= 6x^{4} - 6x^{3} + 6x^{2} - 6x - 4x^{4} + 6x^{3} - 10x",
            "= 2x^{4} + 6x^{2} - 16x",
            "dy/dx = (2x^{4} + 6x^{2} - 16x) / (x^{2} + 1)^{2}",
          ],
        },
        {
          text: "Question 2: find dy/dx if y = (sqrt(x) + 1)(x^{3/2} - 1) / (sqrt(x) - 1). Simplify first, then differentiate.",
          lines: [
            "Let t = sqrt(x). Then x^{3/2} - 1 = t^{3} - 1 = (t - 1)(t^{2} + t + 1).",
            "So (x^{3/2} - 1)/(sqrt(x) - 1) = x + sqrt(x) + 1",
            "y = (sqrt(x) + 1)(x + sqrt(x) + 1) = x^{3/2} + 2x + 2 sqrt(x) + 1",
            "dy/dx = (3/2) sqrt(x) + 2 + 1/sqrt(x)",
          ],
        },
        {
          text: "Question 3: find the derivative of y = (2 sqrt(x) + 2)(x - sqrt(x)) with respect to x.",
          lines: [
            "Expand: y = 2x^{3/2} - 2x + 2x - 2 sqrt(x) = 2x^{3/2} - 2 x^{1/2}",
            "dy/dx = 3 x^{1/2} - x^{-1/2} = 3 sqrt(x) - 1/sqrt(x)",
            "= (3x - 1) / sqrt(x)",
          ],
        },
      ],
      "Answers: (1) (2x^{4} + 6x^{2} - 16x)/(x^{2} + 1)^{2};  (2) (3/2) sqrt(x) + 2 + 1/sqrt(x);  (3) (3x - 1)/sqrt(x)."
    ),
    W(
      "Rules 7 and 8: power of a function and chain rule",
      "Differentiate the outside, then multiply by the derivative of the inside.",
      [
        {
          text: "f(x) = (2x + 5)^{3}",
          lines: ["f'(x) = 3 (2x + 5)^{2} d/dx (2x + 5) = 3 (2x + 5)^{2} (2) = 6 (2x + 5)^{2}"],
        },
        {
          text: "f(x) = sqrt(3x + 7x^{2} + 3) = (3x + 7x^{2} + 3)^{1/2}",
          lines: [
            "f'(x) = (1/2) (3x + 7x^{2} + 3)^{-1/2} (3 + 14x)",
            "= (3 + 14x) / ( 2 sqrt(3x + 7x^{2} + 3) )",
          ],
        },
        {
          text: "f(x) = ( 3x / (1 - x^{2}) )^{5}. First find the derivative of the inside by the quotient rule.",
          lines: [
            "d/dx [ 3x/(1 - x^{2}) ] = [ (1 - x^{2})(3) - 3x(-2x) ] / (1 - x^{2})^{2}",
            "= (3 - 3x^{2} + 6x^{2}) / (1 - x^{2})^{2} = 3(1 + x^{2}) / (1 - x^{2})^{2}",
          ],
        },
        {
          text: "Now apply the power rule to the outside.",
          lines: [
            "f'(x) = 5 ( 3x/(1 - x^{2}) )^{4} * 3(1 + x^{2}) / (1 - x^{2})^{2}",
            "= 5 * 81x^{4} / (1 - x^{2})^{4} * 3(1 + x^{2}) / (1 - x^{2})^{2}",
            "= 1215 x^{4} (1 + x^{2}) / (1 - x^{2})^{6}",
          ],
        },
        {
          text: "Chain rule, question 1: y = 20 - 3u and u = 5x - 4. Find dy/dx.",
          lines: ["dy/du = -3,   du/dx = 5", "dy/dx = (dy/du)(du/dx) = (-3)(5) = -15"],
        },
        {
          text: "Chain rule, question 2: y = 5u^{2} + 3u + 4 and u = 4x^{2}. Find dy/dx.",
          lines: [
            "dy/du = 10u + 3,   du/dx = 8x",
            "dy/dx = (10u + 3)(8x)",
            "Replace u by 4x^{2}:  = (40x^{2} + 3)(8x) = 320x^{3} + 24x",
          ],
        },
        {
          text: "Find the derivative of (x^{3} + 1)^{9}. Let u = x^{3} + 1, so y = u^{9}.",
          lines: [
            "dy/du = 9u^{8},   du/dx = 3x^{2}",
            "dy/dx = 9 (x^{3} + 1)^{8} (3x^{2}) = 27 x^{2} (x^{3} + 1)^{8}",
          ],
        },
        {
          text: "Differentiate x^{2} + 1/x^{2} with respect to x - 1/x. Let y = x^{2} + 1/x^{2} and u = x - 1/x.",
          lines: [
            "dy/dx = 2x + (-2)/x^{3} = 2x - 2/x^{3} = 2(x^{4} - 1)/x^{3}",
            "du/dx = 1 + 1/x^{2} = (x^{2} + 1)/x^{2}",
            "dy/du = (dy/dx) / (du/dx) = [ 2(x^{2} - 1)(x^{2} + 1)/x^{3} ] * [ x^{2}/(x^{2} + 1) ]",
            "= 2(x^{2} - 1)/x = 2(x - 1/x)",
          ],
        },
      ],
      "Results: 6(2x + 5)^{2};  (3 + 14x)/(2 sqrt(3x + 7x^{2} + 3));  1215x^{4}(1 + x^{2})/(1 - x^{2})^{6};  -15;  320x^{3} + 24x;  27x^{2}(x^{3} + 1)^{8};  2(x - 1/x)."
    ),
    WARN("Do not write the derivative of a product as the product of the derivatives: d/dx (uv) is not u'v'. Likewise d/dx (u/v) is not u'/v'. Use rules 5 and 6.", "Common mistake"),
    SCEN("Questions with answers: rules of differentiation", [
      [
        "Question 1: Differentiate y = 7x^{4} - 3x^{2} + 9x - 6.",
        "Term by term: y' = 28x^{3} - 6x + 9 (the constant -6 gives 0).",
      ],
      [
        "Question 2: Which rule do you use for y = x^{2}(x + 1) and which for y = (x^{2} + 1)^{10}? Differentiate both.",
        "y = x^{2}(x + 1) is a product, so use the **product rule**: y' = 2x(x + 1) + x^{2}(1) = 3x^{2} + 2x. y = (x^{2} + 1)^{10} is a power of a function, so use the **general power rule**: y' = 10 (x^{2} + 1)^{9} (2x) = 20x (x^{2} + 1)^{9}.",
      ],
      [
        "Question 3: Find d/dx [ x / (x^{2} + 1) ].",
        "u = x, u' = 1, v = x^{2} + 1, v' = 2x. Result = [ (x^{2} + 1)(1) - x(2x) ] / (x^{2} + 1)^{2} = **(1 - x^{2}) / (x^{2} + 1)^{2}**.",
      ],
      [
        "Question 4: A shop's weekly cost is C(x) = 0.5x^{2} + 20x + 300 rupees for x items. Find the cost rate dC/dx at x = 40.",
        "dC/dx = x + 20, so at x = 40 it is **Rs. 60 per extra item**. The constant 300 (fixed cost) does not affect the rate.",
      ],
      [
        "Question 5: If y = u^{3} and u = 2x + 1, find dy/dx at x = 1.",
        "dy/du = 3u^{2}, du/dx = 2. dy/dx = 6u^{2} = 6(2x + 1)^{2}. At x = 1, u = 3, so dy/dx = **54**.",
      ],
      [
        "Question 6: State the quotient rule in words.",
        "The derivative of top over bottom is: (bottom times derivative of top) minus (top times derivative of bottom), all divided by the bottom squared.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 3. Exponential and logarithmic functions
// ---------------------------------------------------------------------------
const chapter3 = {
  title: "Chapter 3: Derivatives of Exponential and Logarithmic Functions",
  summary:
    "The exponential function e^{x} and a^{x}, the natural logarithm and log base a, logarithmic differentiation, with solved examples, a growth example with data and graphs of the tangent lines.",
  theory: [
    H("Exponential functions"),
    P("A function f defined by f(x) = a^{x}, where **a > 0, a is not 1** and x is any real number, is called an **exponential function**. If a = e, then y = a^{x} becomes y = e^{x}, which is called the **natural exponential function**."),
    SH("Rule 1: base e"),
    P("If f(x) = e^{u(x)}, where u(x) is differentiable, then the derivative is e^{u} times the derivative of the power:"),
    M(["d/dx ( e^{u(x)} ) = e^{u(x)} * d/dx ( u(x) )", "In particular  d/dx ( e^{x} ) = e^{x}"]),
    SH("Rule 2: any base a"),
    M(["d/dx ( a^{x} ) = a^{x} ln a", "d/dx ( a^{u} ) = a^{u} ln a * du/dx"]),
    P("**Proof of d/dx (a^{x}) = a^{x} ln a.** Write a^{x} = e^{x ln a}. Then"),
    M(["d/dx ( e^{x ln a} ) = e^{x ln a} * d/dx ( x ln a )", "= e^{x ln a} * ln a", "= a^{x} ln a      (because e^{x ln a} = a^{x})"]),

    H("Logarithmic functions"),
    SH("Rule 3: natural logarithm"),
    P("If f(x) = ln u(x), where u(x) is differentiable (and positive), then"),
    M(["f'(x) = u'(x) / u(x)", "In particular  d/dx ( ln x ) = 1/x"]),
    SH("Rule 4: logarithm to base a"),
    M(["d/dx ( log_{a} u ) = [ 1 / (u ln a) ] * du/dx"]),
    SH("Logarithmic differentiation"),
    P("For a function with a variable in both the base and the power, such as y = (ln x)^{x}, **take ln of both sides first**, then differentiate."),
    IMG("exp-log-tangents", "Graphs of y = e to the x with tangent at x = 1 and y = ln x with tangent at x = 2, with the slope of each tangent shown", "d/dx (e^{x}) = e^{x}: the slope equals the height. d/dx (ln x) = 1/x"),

    H("Solved examples"),
    W(
      "Exponential functions",
      "Use d/dx (e^{u}) = e^{u} u' and d/dx (a^{u}) = a^{u} (ln a) u'.",
      [
        {
          text: "f(x) = e^{x^{2}}. Here u = x^{2}, so u' = 2x.",
          lines: ["f'(x) = e^{x^{2}} * d/dx (x^{2}) = e^{x^{2}} (2x) = 2x e^{x^{2}}"],
        },
        {
          text: "f(x) = e^{sqrt(x)}. Here u = x^{1/2}, so u' = (1/2) x^{-1/2} = 1/(2 sqrt(x)).",
          lines: ["f'(x) = e^{sqrt(x)} * 1/(2 sqrt(x)) = e^{sqrt(x)} / (2 sqrt(x))"],
        },
        {
          text: "y = e^{x}. And y = e^{3x}.",
          lines: ["d/dx (e^{x}) = e^{x}", "d/dx (e^{3x}) = e^{3x} * d/dx (3x) = 3 e^{3x}"],
        },
        {
          text: "Find dy/dx for (i) y = e^{x^{2} + 1}.  Let u = x^{2} + 1.",
          lines: ["du/dx = 2x", "dy/dx = e^{u} du/dx = 2x e^{x^{2} + 1}"],
        },
        {
          text: "(ii) y = a^{sqrt(x)}. Let u = sqrt(x), so du/dx = 1/(2 sqrt(x)).",
          lines: [
            "dy/dx = a^{u} ln a * du/dx = a^{sqrt(x)} ln a * 1/(2 sqrt(x))",
            "= (ln a / 2) * a^{sqrt(x)} / sqrt(x)",
          ],
        },
        {
          text: "Differentiate y = a^{x} with respect to x using y = e^{x ln a}.",
          lines: ["dy/dx = e^{x ln a} ln a = a^{x} ln a"],
        },
      ],
      "Results: 2x e^{x^{2}};  e^{sqrt(x)}/(2 sqrt(x));  3e^{3x};  2x e^{x^{2}+1};  (ln a/2) a^{sqrt(x)}/sqrt(x);  a^{x} ln a."
    ),
    W(
      "Logarithmic functions",
      "Use d/dx (ln u) = u'/u and d/dx (log_{a} u) = u' / (u ln a).",
      [
        {
          text: "f(x) = ln x^{2}",
          lines: ["f'(x) = (1/x^{2}) d/dx (x^{2}) = 2x / x^{2} = 2/x"],
        },
        {
          text: "f(x) = ln (1 + x^{2} + x^{3})",
          lines: ["f'(x) = [ 1/(1 + x^{2} + x^{3}) ] (2x + 3x^{2}) = (2x + 3x^{2}) / (1 + x^{2} + x^{3})"],
        },
        {
          text: "f(x) = ln [ (3x^{2} + 1) / (2x^{2}) ]. First apply the quotient rule inside.",
          lines: [
            "Let u = (3x^{2} + 1)/(2x^{2}).  du/dx = [ 2x^{2}(6x) - (3x^{2} + 1)(4x) ] / (2x^{2})^{2}",
            "= (12x^{3} - 12x^{3} - 4x) / (4x^{4}) = -4x / (4x^{4}) = -1/x^{3}",
            "f'(x) = u'/u = (-1/x^{3}) * 2x^{2}/(3x^{2} + 1) = -2 / [ x (3x^{2} + 1) ]",
          ],
        },
        {
          text: "A shorter way for the same question: split the logarithm first.",
          lines: [
            "ln [ (3x^{2} + 1)/(2x^{2}) ] = ln (3x^{2} + 1) - ln 2 - 2 ln x",
            "f'(x) = 6x/(3x^{2} + 1) - 2/x = [ 6x^{2} - 2(3x^{2} + 1) ] / [ x (3x^{2} + 1) ] = -2 / [ x (3x^{2} + 1) ]",
          ],
        },
        {
          text: "y = ln x and y = ln 2x.",
          lines: ["d/dx (ln x) = 1/x", "d/dx (ln 2x) = (1/(2x)) * 2 = 1/x"],
        },
        {
          text: "Find dy/dx if y = log_{10} (ax^{2} + bx + c). Let u = ax^{2} + bx + c.",
          lines: [
            "dy/du = 1/(u ln 10),   du/dx = 2ax + b",
            "dy/dx = (2ax + b) / [ (ax^{2} + bx + c) ln 10 ]",
          ],
        },
        {
          text: "Differentiate ln (x^{2} + 2x) with respect to x.",
          lines: ["d/dx = (2x + 2) / (x^{2} + 2x) = 2(x + 1) / (x^{2} + 2x)"],
        },
        {
          text: "Differentiate (ln x)^{x} with respect to x. Take ln of both sides.",
          lines: [
            "y = (ln x)^{x}",
            "ln y = x ln (ln x)",
            "Differentiate both sides (product rule on the right):",
            "(1/y) dy/dx = 1 * ln (ln x) + x * [ 1/ln x ] * (1/x) = ln (ln x) + 1/ln x",
            "dy/dx = y [ ln (ln x) + 1/ln x ] = (ln x)^{x} [ ln (ln x) + 1/ln x ]",
          ],
        },
      ],
      "Results: 2/x;  (2x + 3x^{2})/(1 + x^{2} + x^{3});  -2/[x(3x^{2} + 1)];  1/x;  (2ax + b)/[(ax^{2} + bx + c) ln 10];  2(x + 1)/(x^{2} + 2x);  (ln x)^{x}[ln (ln x) + 1/ln x]."
    ),
    W(
      "Growth with data: a bacteria culture",
      "A culture has N(t) = 500 e^{0.4t} bacteria after t hours. Find how fast the number is growing after 2 hours.",
      [
        {
          text: "Differentiate with the exponential rule. Here u = 0.4t, so u' = 0.4.",
          lines: ["dN/dt = 500 * e^{0.4t} * 0.4 = 200 e^{0.4t}"],
        },
        {
          text: "Put t = 2. Use e^{0.8} = 2.2255.",
          lines: ["N(2) = 500 * 2.2255 = 1112.8 bacteria", "dN/dt at t = 2 = 200 * 2.2255 = 445.1 bacteria per hour"],
        },
        {
          text: "Compare the rate with the size.",
          lines: ["dN/dt = 0.4 N(t)   (445.1 = 0.4 * 1112.8)"],
        },
      ],
      "After 2 hours there are about 1,113 bacteria, growing at about 445 per hour. The growth rate is always 40% of the current size, which is the key property of exponential growth."
    ),
    SCEN("Questions with answers: exponential and logarithmic functions", [
      [
        "Question 1: Find d/dx (e^{5x}) and d/dx (e^{-x^{2}}).",
        "d/dx (e^{5x}) = **5e^{5x}**. d/dx (e^{-x^{2}}) = e^{-x^{2}} (-2x) = **-2x e^{-x^{2}}**.",
      ],
      [
        "Question 2: Find d/dx (2^{x}) and d/dx (10^{3x}).",
        "d/dx (2^{x}) = **2^{x} ln 2**. d/dx (10^{3x}) = 10^{3x} (ln 10)(3) = **3 ln 10 * 10^{3x}**.",
      ],
      [
        "Question 3: Differentiate y = ln (5x - 2).",
        "y' = 5/(5x - 2).",
      ],
      [
        "Question 4: Why is the derivative of ln (kx) the same as the derivative of ln x for any constant k > 0?",
        "ln (kx) = ln k + ln x, and ln k is a constant whose derivative is 0. So d/dx ln (kx) = 1/x. The graph of ln (kx) is just the graph of ln x moved up by ln k.",
      ],
      [
        "Question 5: If y = x^{x}, find dy/dx.",
        "Take logs: ln y = x ln x. Then (1/y) y' = ln x + 1, so **y' = x^{x} (ln x + 1)**.",
      ],
      [
        "Question 6: The value of an investment is V(t) = 10,000 e^{0.05t} rupees. At what rate is it growing at t = 0?",
        "dV/dt = 500 e^{0.05t}. At t = 0 the rate is **Rs. 500 per year**.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 4. Trigonometric and inverse trigonometric functions
// ---------------------------------------------------------------------------
const chapter4 = {
  title: "Chapter 4: Derivatives of Trigonometric and Inverse Trigonometric Functions",
  summary:
    "The six trigonometric derivatives (with the proof for tan x), chains of trigonometric functions, the inverse trigonometric derivatives with a proof of the sin inverse rule, solved examples and a graph of sin x and its derivative.",
  theory: [
    H("Derivatives of the six trigonometric functions"),
    T(
      ["Function", "Derivative"],
      [
        ["sin x", "cos x"],
        ["cos x", "- sin x"],
        ["tan x", "sec^{2} x"],
        ["cot x", "- cosec^{2} x"],
        ["sec x", "sec x tan x"],
        ["cosec x", "- cosec x cot x"],
      ]
    ),
    NOTE("The three functions that start with 'co' (cos, cot, cosec) all have a minus sign in their derivatives.", "Memory aid"),
    IMG("sin-cos-slope", "Graph of sin x above graph of cos x with the slope of sin x marked at 0, pi/2, pi, 3pi/2 and 2pi", "The values of cos x are the slopes of sin x"),
    SH("With a function inside"),
    P("When the angle is a function u of x, multiply by u' (chain rule):"),
    M(["d/dx sin u = cos u * u'", "d/dx cos u = - sin u * u'", "d/dx tan u = sec^{2} u * u'", "d/dx sec u = sec u tan u * u'"]),

    H("Derivatives of the inverse trigonometric functions"),
    T(
      ["Function", "Derivative", "Valid for"],
      [
        ["sin^{-1} x", "1 / sqrt(1 - x^{2})", "-1 < x < 1"],
        ["cos^{-1} x", "- 1 / sqrt(1 - x^{2})", "-1 < x < 1"],
        ["tan^{-1} x", "1 / (1 + x^{2})", "all x"],
        ["cot^{-1} x", "- 1 / (1 + x^{2})", "all x"],
        ["sec^{-1} x", "1 / ( |x| sqrt(x^{2} - 1) )", "|x| > 1"],
        ["cosec^{-1} x", "- 1 / ( |x| sqrt(x^{2} - 1) )", "|x| > 1"],
      ]
    ),
    SH("Proof of d/dx (sin^{-1} x) = 1/sqrt(1 - x^{2})"),
    M([
      "Let y = sin^{-1} x.  Then x = sin y, for y in [-pi/2, pi/2].",
      "Differentiate both sides with respect to x:",
      "1 = d/dx (sin y) = (d/dy)(sin y) * dy/dx = cos y * dy/dx",
      "dy/dx = 1 / cos y,   for y in (-pi/2, pi/2)",
      "cos y is positive there, so cos y = sqrt(1 - sin^{2} y) = sqrt(1 - x^{2})",
      "Hence d/dx (sin^{-1} x) = 1 / sqrt(1 - x^{2}),   for -1 < x < 1",
    ]),

    H("Solved examples"),
    W(
      "Trigonometric derivatives",
      "Use the table above and the chain rule.",
      [
        {
          text: "Prove d/dx (tan x) = sec^{2} x by writing tan x = sin x / cos x and using the quotient rule.",
          lines: [
            "d/dx (sin x / cos x) = [ cos x * cos x - sin x * (-sin x) ] / cos^{2} x",
            "= (cos^{2} x + sin^{2} x) / cos^{2} x = 1 / cos^{2} x = sec^{2} x",
          ],
        },
        {
          text: "Find the derivative of y = sec x. Write sec x = 1/cos x.",
          lines: [
            "y' = [ cos x * 0 - 1 * (-sin x) ] / cos^{2} x = sin x / cos^{2} x",
            "= (1/cos x)(sin x/cos x) = sec x tan x",
          ],
        },
        {
          text: "Differentiate y = sin (3x^{2}). Inside u = 3x^{2}, u' = 6x.",
          lines: ["y' = cos (3x^{2}) * 6x = 6x cos (3x^{2})"],
        },
        {
          text: "Differentiate y = cos (2x + 1).",
          lines: ["y' = - sin (2x + 1) * 2 = -2 sin (2x + 1)"],
        },
        {
          text: "Differentiate y = tan 5x.",
          lines: ["y' = sec^{2} (5x) * 5 = 5 sec^{2} 5x"],
        },
        {
          text: "Differentiate sin^{3} x with respect to cos^{2} x. Let y = sin^{3} x and u = cos^{2} x.",
          lines: [
            "dy/dx = 3 sin^{2} x cos x",
            "du/dx = 2 cos x (-sin x) = -2 sin x cos x",
            "dy/du = (dy/dx) / (du/dx) = 3 sin^{2} x cos x / (-2 sin x cos x) = -(3/2) sin x",
          ],
        },
      ],
      "Results: sec^{2} x;  sec x tan x;  6x cos (3x^{2});  -2 sin (2x + 1);  5 sec^{2} 5x;  -(3/2) sin x."
    ),
    W(
      "Inverse trigonometric derivatives",
      "Use d/dx (sin^{-1} u) = u'/sqrt(1 - u^{2}) and d/dx (tan^{-1} u) = u'/(1 + u^{2}).",
      [
        {
          text: "y = tan^{-1} (2x). Here u = 2x, u' = 2.",
          lines: ["y' = 2 / (1 + (2x)^{2}) = 2 / (1 + 4x^{2})"],
        },
        {
          text: "y = sin^{-1} (x^{2}). Here u = x^{2}, u' = 2x.",
          lines: ["y' = 2x / sqrt(1 - (x^{2})^{2}) = 2x / sqrt(1 - x^{4})"],
        },
        {
          text: "y = x tan^{-1} x. Use the product rule.",
          lines: ["y' = 1 * tan^{-1} x + x * 1/(1 + x^{2}) = tan^{-1} x + x/(1 + x^{2})"],
        },
      ],
      "Results: 2/(1 + 4x^{2});  2x/sqrt(1 - x^{4});  tan^{-1} x + x/(1 + x^{2})."
    ),
    W(
      "A rate with data: a swing",
      "The horizontal position of a swinging weight is x(t) = 4 sin (2t) centimetres at time t seconds. Find its velocity at t = 0 and t = pi/4.",
      [
        {
          text: "Differentiate with the chain rule. Inside u = 2t, u' = 2.",
          lines: ["v(t) = dx/dt = 4 cos (2t) * 2 = 8 cos (2t)"],
        },
        {
          text: "Evaluate.",
          lines: [
            "t = 0:     v = 8 cos 0 = 8 cm/s   (fastest: passing the centre)",
            "t = pi/4:  v = 8 cos (pi/2) = 0 cm/s   (at the end of the swing: stops for an instant)",
          ],
        },
      ],
      "The velocity is 8 cm/s at t = 0 and 0 at t = pi/4. This is exactly the pattern in the graph of sin x and cos x."
    ),
    SCEN("Questions with answers: trigonometric functions", [
      [
        "Question 1: Differentiate y = sin x cos x.",
        "Product rule: y' = cos x cos x + sin x (-sin x) = cos^{2} x - sin^{2} x = **cos 2x**.",
      ],
      [
        "Question 2: Differentiate y = cot x using the quotient rule on cos x / sin x.",
        "y' = [ sin x (-sin x) - cos x (cos x) ] / sin^{2} x = -(sin^{2} x + cos^{2} x)/sin^{2} x = **-cosec^{2} x**.",
      ],
      [
        "Question 3: Find d/dx (sin^{2} x) and d/dx (sin x^{2}). Are they equal?",
        "d/dx (sin^{2} x) = 2 sin x cos x. d/dx (sin x^{2}) = cos (x^{2}) * 2x = 2x cos x^{2}. They are **not equal**: sin^{2} x means (sin x)^{2} but sin x^{2} means sin of (x^{2}).",
      ],
      [
        "Question 4: Differentiate y = cos^{-1} (3x).",
        "y' = -3 / sqrt(1 - 9x^{2}).",
      ],
      [
        "Question 5: Why is the domain for d/dx (sin^{-1} x) only -1 < x < 1?",
        "Because sin^{-1} x is defined only for -1 to 1 and, at the end points, cos y = 0 so the derivative 1/cos y would need division by zero (the tangent is vertical there).",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 5. Increasing and decreasing functions, maxima and minima
// ---------------------------------------------------------------------------
const chapter5 = {
  title: "Chapter 5: Increasing and Decreasing Functions, Maxima and Minima",
  summary:
    "How the sign of the derivative shows where a function rises or falls, critical points, the second derivative test, solved examples and two real-life optimisation problems with graphs.",
  theory: [
    H("Increasing and decreasing functions"),
    P("Let f be a function defined on an interval I, and let x_{1} and x_{2} be any two numbers in I."),
    L([
      "f is **increasing** on I if x_{1} < x_{2} implies f(x_{1}) < f(x_{2}). The graph goes up as you move to the right.",
      "f is **decreasing** on I if x_{1} < x_{2} implies f(x_{1}) > f(x_{2}). The graph goes down as you move to the right.",
    ]),
    SH("Test with the first derivative"),
    T(
      ["Sign of f'(x) on an interval", "Behaviour of f"],
      [
        ["f'(x) > 0", "f is increasing"],
        ["f'(x) < 0", "f is decreasing"],
        ["f'(x) = 0", "tangent is horizontal (a critical or stationary point)"],
      ]
    ),
    P("The derivative is the slope of the tangent. A positive slope means the curve climbs, a negative slope means it falls."),

    H("Maxima and minima"),
    L([
      "**Critical (stationary) points:** the values of x where f'(x) = 0. These are the only candidates for a maximum or a minimum.",
      "**Local maximum:** a point where the curve changes from rising to falling.",
      "**Local minimum:** a point where the curve changes from falling to rising.",
    ]),
    SH("Second derivative test"),
    P("At a critical point x = c (where f'(c) = 0) find f''(c):"),
    T(
      ["Value of f''(c)", "Conclusion"],
      [
        ["f''(c) > 0", "f has a **minimum** at c (curve bends upward like a cup)"],
        ["f''(c) < 0", "f has a **maximum** at c (curve bends downward like a cap)"],
        ["f''(c) = 0", "test fails: use the sign of f' on both sides (possible point of inflection)"],
      ]
    ),
    SH("Steps to find maximum and minimum values"),
    L(
      [
        "Find f'(x).",
        "Solve f'(x) = 0 to get the critical points.",
        "Find f''(x).",
        "Put each critical point into f''(x) and read its sign.",
        "Put each critical point into f(x) to get the maximum or minimum value.",
      ],
      true
    ),
    IMG("max-min-cubic", "Graph of the cubic f(x) = x cubed minus 18 x squared plus 96 x with a maximum at x = 4 and a minimum at x = 8", "The curve rises up to x = 4, falls between x = 4 and x = 8, then rises again"),

    H("Solved examples"),
    W(
      "Maximum and minimum of a cubic",
      "Find the maximum and minimum values of f(x) = x^{3} - 18x^{2} + 96x.",
      [
        {
          text: "Find the first derivative.",
          lines: ["f'(x) = 3x^{2} - 36x + 96"],
        },
        {
          text: "Put f'(x) = 0 to find the critical points.",
          lines: [
            "3x^{2} - 36x + 96 = 0",
            "Divide by 3:  x^{2} - 12x + 32 = 0",
            "(x - 4)(x - 8) = 0",
            "x = 4  or  x = 8",
          ],
        },
        {
          text: "Find the second derivative.",
          lines: ["f''(x) = 6x - 36"],
        },
        {
          text: "Test x = 4.",
          lines: ["f''(4) = 24 - 36 = -12 < 0, so f has a **maximum** at x = 4.", "f(4) = 64 - 288 + 384 = 160"],
        },
        {
          text: "Test x = 8.",
          lines: ["f''(8) = 48 - 36 = 12 > 0, so f has a **minimum** at x = 8.", "f(8) = 512 - 1152 + 768 = 128"],
        },
        {
          text: "Where is f increasing and decreasing? Look at the sign of f'(x) = 3(x - 4)(x - 8).",
          lines: [
            "x < 4:       both factors negative, f' > 0, increasing",
            "4 < x < 8:   one factor negative, f' < 0, decreasing",
            "x > 8:       both factors positive, f' > 0, increasing",
          ],
        },
      ],
      "Local maximum 160 at x = 4. Local minimum 128 at x = 8. Increasing for x < 4 and x > 8, decreasing for 4 < x < 8."
    ),
    W(
      "Increasing and decreasing: a quadratic",
      "Find where f(x) = x^{2} - 6x + 5 is increasing and where it is decreasing.",
      [
        {
          text: "Differentiate.",
          lines: ["f'(x) = 2x - 6 = 2(x - 3)"],
        },
        {
          text: "Critical point.",
          lines: ["f'(x) = 0 gives x = 3"],
        },
        {
          text: "Read the sign.",
          lines: ["x < 3:  f' < 0, decreasing", "x > 3:  f' > 0, increasing"],
        },
        {
          text: "Second derivative test and the value.",
          lines: ["f''(x) = 2 > 0, so x = 3 is a minimum.", "f(3) = 9 - 18 + 5 = -4"],
        },
      ],
      "Decreasing for x < 3, increasing for x > 3, minimum value -4 at x = 3."
    ),

    H("Applications with data"),
    W(
      "Maximum profit: a juice stall",
      "A juice stall sells x glasses a day. Its daily profit in rupees is P(x) = -2x^{2} + 120x - 800. Find the number of glasses that gives the maximum profit and the profit.",
      [
        {
          text: "Differentiate.",
          lines: ["P'(x) = -4x + 120"],
        },
        {
          text: "Critical point.",
          lines: ["-4x + 120 = 0", "x = 30"],
        },
        {
          text: "Second derivative test.",
          lines: ["P''(x) = -4 < 0 for every x, so x = 30 is a maximum."],
        },
        {
          text: "Maximum profit.",
          lines: ["P(30) = -2(900) + 120(30) - 800 = -1800 + 3600 - 800 = 1000"],
        },
        {
          text: "Check with other values.",
          lines: ["P(20) = -800 + 2400 - 800 = 800", "P(40) = -3200 + 4800 - 800 = 800", "Both are smaller than 1000, as expected."],
        },
      ],
      "Selling 30 glasses a day gives the maximum profit of Rs. 1,000."
    ),
    IMG("profit-maximum", "Parabola of daily profit against glasses sold, peaking at Rs. 1000 when 30 glasses are sold", "Profit rises to the top of the curve at x = 30, then falls"),
    W(
      "Largest area: a rectangle with fixed perimeter",
      "A farmer has 40 metres of fencing. What rectangle gives the largest area?",
      [
        {
          text: "Let the length be x. The perimeter is 40, so 2(x + width) = 40 and width = 20 - x.",
          lines: ["Area A(x) = x(20 - x) = 20x - x^{2}"],
        },
        {
          text: "Differentiate and set equal to zero.",
          lines: ["A'(x) = 20 - 2x", "20 - 2x = 0, so x = 10"],
        },
        {
          text: "Second derivative.",
          lines: ["A''(x) = -2 < 0, so x = 10 is a maximum."],
        },
        {
          text: "Dimensions and area.",
          lines: ["length = 10 m, width = 20 - 10 = 10 m", "A(10) = 10 * 10 = 100 m^{2}"],
        },
      ],
      "The best rectangle is a square, 10 m by 10 m, with area 100 m^{2}."
    ),
    SCEN("Questions with answers: maxima and minima", [
      [
        "Question 1: Find the critical points of f(x) = x^{3} - 3x.",
        "f'(x) = 3x^{2} - 3 = 3(x - 1)(x + 1) = 0, so **x = 1 and x = -1**. f''(x) = 6x: f''(1) = 6 > 0 gives a minimum with f(1) = -2. f''(-1) = -6 < 0 gives a maximum with f(-1) = 2.",
      ],
      [
        "Question 2: Is f(x) = e^{x} increasing or decreasing?",
        "f'(x) = e^{x} > 0 for all x, so f is **increasing everywhere**. It has no critical point.",
      ],
      [
        "Question 3: Find the minimum value of f(x) = x^{2} + 4/x for x > 0.",
        "f'(x) = 2x - 4/x^{2} = 0 gives 2x^{3} = 4, so x^{3} = 2 and x = 2^{1/3}. f''(x) = 2 + 8/x^{3} > 0, so it is a minimum. f(2^{1/3}) = 2^{2/3} + 4/2^{1/3} = 2^{2/3} + 2^{5/3} = 3 * 2^{2/3}, about **4.76**.",
      ],
      [
        "Question 4: What does f''(c) = 0 tell us about a critical point c?",
        "Nothing by itself. For example, f(x) = x^{3} has f'(0) = 0 and f''(0) = 0 but x = 0 is neither a maximum nor a minimum. Check the sign of f' on both sides of c.",
      ],
      [
        "Question 5: Find where f(x) = 2x^{3} - 9x^{2} + 12x is increasing.",
        "f'(x) = 6x^{2} - 18x + 12 = 6(x - 1)(x - 2). It is positive when x < 1 or x > 2, so f is **increasing for x < 1 and x > 2**, decreasing for 1 < x < 2.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 6. Integration
// ---------------------------------------------------------------------------
const chapter6 = {
  title: "Chapter 6: Integration",
  summary:
    "The anti-derivative, differentials, the constant of integration, the standard integration formulas including the (ax + b) forms, and examples with distance and cost data.",
  theory: [
    H("Anti-derivative"),
    P("A function F is called an **anti-derivative** (or **integral**) of f on an interval if F'(x) = f(x) for every x in that interval. Integration is the reverse of differentiation."),
    M(["If d/dx F(x) = f(x)   then   ∫ f(x) dx = F(x) + C"]),
    L([
      "The symbol ∫ is the **integral sign**, f(x) is the **integrand**, and dx shows that the variable is x.",
      "**C** is the **constant of integration**. Different values of C give different anti-derivatives of the same function.",
    ]),
    SH("Why we add C"),
    P("The functions x^{2}, x^{2} + 5 and x^{2} - 3 all have the derivative 2x, because the derivative of a constant is zero. So when we integrate 2x we cannot tell which constant was there, and we write ∫ 2x dx = x^{2} + C."),
    IMG("antiderivative-family", "A family of parabolas y = x squared plus C for different values of C, all with the same slope at each x", "Every curve in the family has the same slope 2x at a given x"),

    H("Differentials"),
    P("If y = f(x), then the **differential** of y is dy = f'(x) dx. The differential of x is dx."),
    M(["y = x^{3}   gives   dy = 3x^{2} dx", "y = sin x   gives   dy = cos x dx"]),
    P("Integration of dy = f'(x) dx gives back y, that is ∫ dy = y + C."),

    H("Standard integrals"),
    T(
      ["Integral", "Result"],
      [
        ["∫ k dx   (k a constant)", "kx + C"],
        ["∫ x^{n} dx   (n is not -1)", "x^{n+1} / (n + 1) + C"],
        ["∫ (1/x) dx", "ln |x| + C"],
        ["∫ e^{x} dx", "e^{x} + C"],
        ["∫ a^{x} dx", "a^{x} / ln a + C"],
        ["∫ sin x dx", "- cos x + C"],
        ["∫ cos x dx", "sin x + C"],
        ["∫ sec^{2} x dx", "tan x + C"],
        ["∫ cosec^{2} x dx", "- cot x + C"],
        ["∫ sec x tan x dx", "sec x + C"],
        ["∫ cosec x cot x dx", "- cosec x + C"],
        ["∫ 1/sqrt(1 - x^{2}) dx", "sin^{-1} x + C"],
        ["∫ 1/(1 + x^{2}) dx", "tan^{-1} x + C"],
        ["∫ 1/( x sqrt(x^{2} - 1) ) dx", "sec^{-1} x + C"],
      ]
    ),
    SH("Rules"),
    M([
      "∫ k f(x) dx = k ∫ f(x) dx",
      "∫ [ f(x) + g(x) ] dx = ∫ f(x) dx + ∫ g(x) dx",
      "∫ [ f(x) - g(x) ] dx = ∫ f(x) dx - ∫ g(x) dx",
    ]),
    SH("Formulas with (ax + b)"),
    P("When the angle or power is the linear expression ax + b, divide the usual result by **a**:"),
    T(
      ["Integral", "Result"],
      [
        ["∫ (ax + b)^{n} dx", "(ax + b)^{n+1} / [ a(n + 1) ] + C"],
        ["∫ 1/(ax + b) dx", "(1/a) ln |ax + b| + C"],
        ["∫ e^{ax+b} dx", "(1/a) e^{ax+b} + C"],
        ["∫ sin (ax + b) dx", "-(1/a) cos (ax + b) + C"],
        ["∫ cos (ax + b) dx", "(1/a) sin (ax + b) + C"],
        ["∫ sec^{2} (ax + b) dx", "(1/a) tan (ax + b) + C"],
      ]
    ),
    WARN("Always check an integral by differentiating the answer. You must get the integrand back.", "Check your answer"),

    H("Solved examples"),
    W(
      "Basic integrals",
      "Use the power rule and the standard table.",
      [
        {
          text: "∫ x^{5} dx",
          lines: ["= x^{6} / 6 + C"],
        },
        {
          text: "∫ (3x^{2} - 4x + 7) dx",
          lines: ["= 3(x^{3}/3) - 4(x^{2}/2) + 7x + C", "= x^{3} - 2x^{2} + 7x + C"],
        },
        {
          text: "∫ sqrt(x) dx. Write sqrt(x) = x^{1/2}.",
          lines: ["= x^{3/2} / (3/2) + C = (2/3) x^{3/2} + C"],
        },
        {
          text: "∫ (1/x^{2}) dx. Write 1/x^{2} = x^{-2}.",
          lines: ["= x^{-1} / (-1) + C = -1/x + C"],
        },
        {
          text: "∫ (2e^{x} + 5 cos x) dx",
          lines: ["= 2e^{x} + 5 sin x + C"],
        },
        {
          text: "∫ (2x + 1)^{3} dx. Here a = 2, so divide by 2.",
          lines: ["= (2x + 1)^{4} / (2 * 4) + C = (2x + 1)^{4} / 8 + C"],
        },
        {
          text: "∫ cos 5x dx",
          lines: ["= (1/5) sin 5x + C"],
        },
        {
          text: "∫ e^{3x} dx",
          lines: ["= (1/3) e^{3x} + C"],
        },
        {
          text: "∫ 1/(4x - 1) dx",
          lines: ["= (1/4) ln |4x - 1| + C"],
        },
      ],
      "Results: x^{6}/6;  x^{3} - 2x^{2} + 7x;  (2/3)x^{3/2};  -1/x;  2e^{x} + 5 sin x;  (2x+1)^{4}/8;  (1/5) sin 5x;  (1/3)e^{3x};  (1/4) ln|4x - 1|  (each plus C)."
    ),
    W(
      "Distance from speed",
      "A car's speed is v(t) = 3t^{2} metres per second. It starts at the point s = 0 at time t = 0. Find its position s(t) and its position at t = 4.",
      [
        {
          text: "Position is the anti-derivative of speed: s = ∫ v dt.",
          lines: ["s(t) = ∫ 3t^{2} dt = t^{3} + C"],
        },
        {
          text: "Use the starting condition s(0) = 0.",
          lines: ["0 = 0 + C, so C = 0", "s(t) = t^{3}"],
        },
        {
          text: "Position at t = 4.",
          lines: ["s(4) = 4^{3} = 64 metres"],
        },
      ],
      "s(t) = t^{3}, and the car is 64 m from the start after 4 seconds."
    ),
    W(
      "Total cost from marginal cost",
      "A factory's marginal cost is MC = 6x + 10 rupees per unit, and the fixed cost is Rs. 500. Find the total cost function and the cost of making 20 units.",
      [
        {
          text: "Total cost is the anti-derivative of marginal cost.",
          lines: ["C(x) = ∫ (6x + 10) dx = 3x^{2} + 10x + K"],
        },
        {
          text: "At x = 0 the cost is the fixed cost, so K = 500.",
          lines: ["C(x) = 3x^{2} + 10x + 500"],
        },
        {
          text: "Cost of 20 units.",
          lines: ["C(20) = 3(400) + 10(20) + 500 = 1200 + 200 + 500 = 1900"],
        },
      ],
      "C(x) = 3x^{2} + 10x + 500, and 20 units cost Rs. 1,900."
    ),
    SCEN("Questions with answers: integration basics", [
      [
        "Question 1: Evaluate ∫ (x^{3} + 1/x) dx.",
        "= x^{4}/4 + ln |x| + C.",
      ],
      [
        "Question 2: Evaluate ∫ sin (2x) dx and check by differentiating.",
        "∫ sin 2x dx = -(1/2) cos 2x + C. Check: d/dx [ -(1/2) cos 2x ] = -(1/2)(-sin 2x)(2) = sin 2x.",
      ],
      [
        "Question 3: Evaluate ∫ (x + 1/x)^{2} dx.",
        "Expand: (x + 1/x)^{2} = x^{2} + 2 + 1/x^{2}. So ∫ = x^{3}/3 + 2x - 1/x + C.",
      ],
      [
        "Question 4: Find the curve y = f(x) with slope 4x at every point that passes through (1, 5).",
        "y = ∫ 4x dx = 2x^{2} + C. Put x = 1, y = 5: 5 = 2 + C, so C = 3. The curve is **y = 2x^{2} + 3**.",
      ],
      [
        "Question 5: Why does ∫ x^{n} dx fail for n = -1?",
        "The formula would divide by n + 1 = 0. For n = -1 the integrand is 1/x and the result is ln |x| + C.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 7. Methods of integration
// ---------------------------------------------------------------------------
const chapter7 = {
  title: "Chapter 7: Methods of Integration",
  summary:
    "Integration by simplifying the integrand, by substitution and by parts, with every question from the notes solved step by step and a chart for choosing the method.",
  theory: [
    H("Choosing a method"),
    P("Most integrals are not in the standard table. Three methods change them into ones that are:"),
    L([
      "**Direct (algebraic or trigonometric) simplification:** expand, divide, or use an identity until the integrand is a sum of standard forms.",
      "**Substitution:** replace a part of the integrand by a new variable u so that the integral becomes simple.",
      "**Integration by parts:** for a product of two different kinds of functions.",
    ]),
    IMG("integration-method-chooser", "Flow chart that helps choose between simplifying, substitution and integration by parts", "Try them in this order"),

    H("Method 1: Simplifying the integrand"),
    SH("Identities that help"),
    M([
      "sin^{2} x = (1 - cos 2x) / 2",
      "cos^{2} x = (1 + cos 2x) / 2",
      "1 + cos 2x = 2 cos^{2} x",
      "1 + tan^{2} x = sec^{2} x",
    ]),
    W(
      "Simplify, then integrate",
      "Each integral is changed into a sum of standard forms.",
      [
        {
          text: "∫ (x + 1)(x - 3) dx. Multiply out first.",
          lines: [
            "(x + 1)(x - 3) = x^{2} - 2x - 3",
            "∫ = x^{3}/3 - x^{2} - 3x + C",
          ],
        },
        {
          text: "∫ x / (x + 2) dx. Add and subtract 2 in the top.",
          lines: [
            "x/(x + 2) = (x + 2 - 2)/(x + 2) = 1 - 2/(x + 2)",
            "∫ = x - 2 ln |x + 2| + C",
          ],
        },
        {
          text: "∫ 1 / ( sqrt(x) (sqrt(x) + 1) ) dx. Let u = sqrt(x) + 1, so du = dx/(2 sqrt(x)).",
          lines: [
            "dx / sqrt(x) = 2 du",
            "∫ 2 du / u = 2 ln |u| + C = 2 ln ( sqrt(x) + 1 ) + C",
          ],
        },
        {
          text: "∫ 1 / ( sqrt(x + 1) - sqrt(x) ) dx. Multiply top and bottom by the conjugate.",
          lines: [
            "1/(sqrt(x+1) - sqrt(x)) * (sqrt(x+1) + sqrt(x))/(sqrt(x+1) + sqrt(x)) = (sqrt(x+1) + sqrt(x)) / ((x + 1) - x) = sqrt(x+1) + sqrt(x)",
            "∫ = (2/3)(x + 1)^{3/2} + (2/3) x^{3/2} + C",
          ],
        },
        {
          text: "∫ (sin x + cos^{3} x) / (cos^{2} x sin x) dx. Split into two fractions.",
          lines: [
            "sin x/(cos^{2} x sin x) = 1/cos^{2} x = sec^{2} x",
            "cos^{3} x/(cos^{2} x sin x) = cos x / sin x = cot x",
            "∫ = ∫ sec^{2} x dx + ∫ cot x dx = tan x + ln |sin x| + C",
          ],
        },
        {
          text: "∫ (3 - cos 2x) / (1 + cos 2x) dx. Use 1 + cos 2x = 2 cos^{2} x and cos 2x = 2 cos^{2} x - 1.",
          lines: [
            "3 - cos 2x = 3 - (2 cos^{2} x - 1) = 4 - 2 cos^{2} x",
            "(4 - 2 cos^{2} x)/(2 cos^{2} x) = 2 sec^{2} x - 1",
            "∫ = 2 tan x - x + C",
          ],
        },
      ],
      "Results: x^{3}/3 - x^{2} - 3x;  x - 2 ln|x+2|;  2 ln(sqrt(x)+1);  (2/3)(x+1)^{3/2} + (2/3)x^{3/2};  tan x + ln|sin x|;  2 tan x - x  (each plus C)."
    ),
    W(
      "Practice questions solved",
      "More integrals of the same kind.",
      [
        {
          text: "∫ sin^{2} x dx",
          lines: ["sin^{2} x = (1 - cos 2x)/2", "∫ = x/2 - (sin 2x)/4 + C"],
        },
        {
          text: "∫ (e^{2x} + e^{x}) / e^{3x} dx",
          lines: [
            "(e^{2x} + e^{x})/e^{3x} = e^{-x} + e^{-2x}",
            "∫ = -e^{-x} - (1/2) e^{-2x} + C",
          ],
        },
        {
          text: "∫ sin ((a + b) x) dx. The number a + b is a constant.",
          lines: ["∫ = - cos ((a + b) x) / (a + b) + C"],
        },
        {
          text: "∫ (1 - x^{2}) / (1 + x^{2}) dx",
          lines: [
            "(1 - x^{2})/(1 + x^{2}) = (2 - (1 + x^{2}))/(1 + x^{2}) = 2/(1 + x^{2}) - 1",
            "∫ = 2 tan^{-1} x - x + C",
          ],
        },
        {
          text: "∫ sqrt(y) (y + 1) / y dy",
          lines: [
            "sqrt(y)(y + 1)/y = (y + 1)/sqrt(y) = y^{1/2} + y^{-1/2}",
            "∫ = (2/3) y^{3/2} + 2 y^{1/2} + C",
          ],
        },
      ],
      "Results: x/2 - sin 2x/4;  -e^{-x} - e^{-2x}/2;  -cos((a+b)x)/(a+b);  2 tan^{-1} x - x;  (2/3)y^{3/2} + 2 y^{1/2}  (each plus C)."
    ),

    H("Method 2: Substitution"),
    P("If the integrand contains a function u(x) and, as a factor, its derivative u'(x), put u = u(x) and du = u'(x) dx. Then change the whole integral into one in u, integrate, and go back to x."),
    M(["∫ f( u(x) ) u'(x) dx = ∫ f(u) du"]),
    W(
      "Substitution examples",
      "Choose u so that du appears in the integral.",
      [
        {
          text: "∫ x / sqrt(4 + x^{2}) dx. Let u = 4 + x^{2}, so du = 2x dx and x dx = du/2.",
          lines: [
            "∫ (1/2) u^{-1/2} du = (1/2) * 2 u^{1/2} + C",
            "= sqrt(4 + x^{2}) + C",
          ],
        },
        {
          text: "∫ cot ( sqrt(x) ) / sqrt(x) dx. Let u = sqrt(x), so du = dx / (2 sqrt(x)) and dx/sqrt(x) = 2 du.",
          lines: [
            "∫ 2 cot u du = 2 ln |sin u| + C",
            "= 2 ln | sin sqrt(x) | + C",
          ],
        },
        {
          text: "∫ 1 / ( x (ln 2x)^{3} ) dx. Let u = ln 2x, so du = dx/x.",
          lines: [
            "∫ u^{-3} du = u^{-2}/(-2) + C",
            "= -1 / ( 2 (ln 2x)^{2} ) + C",
          ],
        },
        {
          text: "∫ a^{x^{2}} x dx. Let u = x^{2}, so x dx = du/2.",
          lines: [
            "∫ (1/2) a^{u} du = (1/2) a^{u}/ln a + C",
            "= a^{x^{2}} / (2 ln a) + C",
          ],
        },
        {
          text: "A custom example: ∫ 2x (x^{2} + 3)^{4} dx. Let u = x^{2} + 3, so du = 2x dx.",
          lines: [
            "∫ u^{4} du = u^{5}/5 + C",
            "= (x^{2} + 3)^{5} / 5 + C",
          ],
        },
      ],
      "Results: sqrt(4 + x^{2});  2 ln|sin sqrt(x)|;  -1/(2(ln 2x)^{2});  a^{x^{2}}/(2 ln a);  (x^{2} + 3)^{5}/5  (each plus C)."
    ),

    H("Method 3: Integration by parts"),
    P("For a product of two functions u and v:"),
    M(["∫ u dv = u v - ∫ v du", "or   ∫ u v' dx = u v - ∫ u' v dx"]),
    NOTE("Choose u by the word **LIATE**: Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential. The function that comes first in this list is taken as u; the other part, with dx, is dv.", "How to choose u"),
    W(
      "Integration by parts examples",
      "Take u as the function that becomes simpler when differentiated.",
      [
        {
          text: "∫ x cos x dx. Let u = x, dv = cos x dx, so du = dx and v = sin x.",
          lines: [
            "∫ x cos x dx = x sin x - ∫ sin x dx",
            "= x sin x + cos x + C",
          ],
        },
        {
          text: "∫ x e^{x} dx. Let u = x, dv = e^{x} dx, so du = dx and v = e^{x}.",
          lines: [
            "= x e^{x} - ∫ e^{x} dx",
            "= x e^{x} - e^{x} + C = e^{x}(x - 1) + C",
          ],
        },
        {
          text: "∫ x^{5} ln x dx. Let u = ln x, dv = x^{5} dx, so du = dx/x and v = x^{6}/6.",
          lines: [
            "= (x^{6}/6) ln x - ∫ (x^{6}/6)(1/x) dx",
            "= (x^{6}/6) ln x - (1/6) ∫ x^{5} dx",
            "= (x^{6}/6) ln x - x^{6}/36 + C",
          ],
        },
        {
          text: "∫ x tan^{2} x dx. First use tan^{2} x = sec^{2} x - 1.",
          lines: [
            "∫ x tan^{2} x dx = ∫ x sec^{2} x dx - ∫ x dx",
            "For ∫ x sec^{2} x dx take u = x, dv = sec^{2} x dx, so v = tan x:",
            "∫ x sec^{2} x dx = x tan x - ∫ tan x dx = x tan x + ln |cos x|",
            "Result: x tan x + ln |cos x| - x^{2}/2 + C",
          ],
        },
        {
          text: "∫ ln x dx. Write it as ∫ 1 * ln x dx with u = ln x, dv = dx, so du = dx/x and v = x.",
          lines: [
            "= x ln x - ∫ x (1/x) dx",
            "= x ln x - x + C",
          ],
        },
      ],
      "Results: x sin x + cos x;  x e^{x} - e^{x};  (x^{6}/6) ln x - x^{6}/36;  x tan x + ln|cos x| - x^{2}/2;  x ln x - x  (each plus C)."
    ),
    SCEN("Questions with answers: methods of integration", [
      [
        "Question 1: Evaluate ∫ x e^{x^{2}} dx.",
        "Let u = x^{2}, du = 2x dx. Then ∫ (1/2) e^{u} du = (1/2) e^{u} + C = **(1/2) e^{x^{2}} + C**.",
      ],
      [
        "Question 2: Evaluate ∫ x sin x dx.",
        "By parts with u = x, dv = sin x dx, v = -cos x: = -x cos x + ∫ cos x dx = **-x cos x + sin x + C**.",
      ],
      [
        "Question 3: Evaluate ∫ tan x dx.",
        "tan x = sin x / cos x. Let u = cos x, du = -sin x dx. ∫ = -∫ du/u = **-ln |cos x| + C**.",
      ],
      [
        "Question 4: Evaluate ∫ cos^{2} x dx.",
        "cos^{2} x = (1 + cos 2x)/2, so ∫ = **x/2 + (sin 2x)/4 + C**.",
      ],
      [
        "Question 5: Which method should be used for ∫ x^{2} ln x dx and why?",
        "By parts, because it is a product of an algebraic function and a logarithm. By LIATE, u = ln x and dv = x^{2} dx, which gives (x^{3}/3) ln x - x^{3}/9 + C.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 8. The definite integral
// ---------------------------------------------------------------------------
const chapter8 = {
  title: "Chapter 8: The Definite Integral",
  summary:
    "The definite integral as area, the Fundamental Theorem of Calculus, its properties, Riemann sums with a table of values, and every exercise from the notes solved.",
  theory: [
    H("Definition"),
    P("The **definite integral** of f from a to b is a number. It is the signed area between the graph of f and the x-axis from x = a to x = b. The numbers a and b are the **lower limit** and the **upper limit**."),
    M(["∫_{a}^{b} f(x) dx"]),
    P("Area above the x-axis counts as positive, and area below the x-axis counts as negative."),
    SH("Fundamental Theorem of Calculus"),
    P("If F is any anti-derivative of f, that is F'(x) = f(x), then"),
    M(["∫_{a}^{b} f(x) dx = F(b) - F(a) = [ F(x) ]_{a}^{b}"]),
    NOTE("The constant C cancels in F(b) - F(a), so it is not written in a definite integral.", "No constant C"),

    H("Properties"),
    T(
      ["Property", "Statement"],
      [
        ["Same limits", "∫_{a}^{a} f(x) dx = 0"],
        ["Reverse limits", "∫_{b}^{a} f(x) dx = - ∫_{a}^{b} f(x) dx"],
        ["Constant multiple", "∫_{a}^{b} k f(x) dx = k ∫_{a}^{b} f(x) dx"],
        ["Sum and difference", "∫_{a}^{b} [ f(x) ± g(x) ] dx = ∫_{a}^{b} f(x) dx ± ∫_{a}^{b} g(x) dx"],
        ["Additivity", "∫_{a}^{b} f(x) dx + ∫_{b}^{c} f(x) dx = ∫_{a}^{c} f(x) dx"],
      ]
    ),

    H("Area as a limit of sums"),
    P("Divide [a, b] into n strips of width Δx = (b - a)/n. Add the areas of the rectangles. As n grows, the sum approaches the exact area, which is the definite integral."),
    IMG("riemann-area", "Rectangles under the curve y = x squared from 0 to 3 filling in more of the area as the number of strips increases", "More strips give a better fit to the area under the curve"),
    W(
      "Riemann sums for x² on [0, 3]",
      "Use n equal strips of width 3/n and take the height at the right end (or left end) of each strip.",
      [
        {
          text: "Right end of strip i is x_{i} = 3i/n, so the height is (3i/n)^{2} = 9i^{2}/n^{2}.",
          lines: [
            "Right sum = Σ (9i^{2}/n^{2}) (3/n) = (27/n^{3}) Σ i^{2}",
            "Use Σ i^{2} = n(n + 1)(2n + 1)/6 (i from 1 to n):",
            "Right sum = (27/n^{3}) * n(n + 1)(2n + 1)/6 = 9 + 13.5/n + 4.5/n^{2}",
          ],
        },
        {
          text: "Left sum uses the heights at i - 1 instead of i.",
          lines: ["Left sum = 9 - 13.5/n + 4.5/n^{2}"],
        },
        {
          text: "Put in values of n.",
          lines: [
            "n = 6:     left 6.875    right 11.375",
            "n = 24:    left 8.445    right 9.570",
            "n = 100:   left 8.865    right 9.135",
            "n = 1000:  left 8.9865   right 9.0135",
          ],
        },
        {
          text: "Let n become very large. The terms with n in the bottom go to 0.",
          lines: ["Both sums approach 9, so ∫_{0}^{3} x^{2} dx = 9", "Check with the theorem: [ x^{3}/3 ]_{0}^{3} = 27/3 - 0 = 9"],
        },
      ],
      "The area under y = x² from 0 to 3 is exactly 9. The left sums are always below 9 and the right sums are always above 9."
    ),

    H("Solved examples"),
    W(
      "Definite integrals",
      "Find an anti-derivative, then subtract F(a) from F(b).",
      [
        {
          text: "∫_{-1}^{3} (x^{3} + 3x^{2}) dx",
          lines: [
            "F(x) = x^{4}/4 + x^{3}",
            "F(3) = 81/4 + 27 = 20.25 + 27 = 47.25",
            "F(-1) = 1/4 - 1 = -0.75",
            "Integral = 47.25 - (-0.75) = 48",
          ],
        },
        {
          text: "∫_{0}^{π/4} sec x (sec x + tan x) dx. Expand first.",
          lines: [
            "= ∫ (sec^{2} x + sec x tan x) dx = [ tan x + sec x ]",
            "At π/4: tan = 1, sec = sqrt(2), so 1 + sqrt(2)",
            "At 0: tan = 0, sec = 1, so 0 + 1 = 1",
            "Integral = (1 + sqrt(2)) - 1 = sqrt(2)",
          ],
        },
        {
          text: "∫_{-1}^{2} (x + |x|) dx. Split at x = 0 where |x| changes.",
          lines: [
            "For x between -1 and 0: |x| = -x, so x + |x| = 0.",
            "For x between 0 and 2: |x| = x, so x + |x| = 2x.",
            "∫_{-1}^{0} 0 dx + ∫_{0}^{2} 2x dx = 0 + [ x^{2} ]_{0}^{2} = 4",
          ],
        },
        {
          text: "∫_{1}^{2} (x^{2} + 1)/(x + 1) dx. Divide first.",
          lines: [
            "(x^{2} + 1)/(x + 1) = x - 1 + 2/(x + 1)",
            "F(x) = x^{2}/2 - x + 2 ln (x + 1)",
            "F(2) = 2 - 2 + 2 ln 3 = 2 ln 3",
            "F(1) = 1/2 - 1 + 2 ln 2 = -1/2 + 2 ln 2",
            "Integral = 2 ln 3 + 1/2 - 2 ln 2 = 1/2 + 2 ln (3/2) = 1.311",
          ],
        },
        {
          text: "∫_{0}^{π/6} x cos x dx. Integrate by parts with u = x, dv = cos x dx.",
          lines: [
            "∫ x cos x dx = x sin x + cos x",
            "At π/6: (π/6)(1/2) + sqrt(3)/2 = π/12 + sqrt(3)/2",
            "At 0: 0 + 1 = 1",
            "Integral = π/12 + sqrt(3)/2 - 1 = 0.128",
          ],
        },
        {
          text: "∫_{1}^{e} x ln x dx. By parts with u = ln x, dv = x dx.",
          lines: [
            "∫ x ln x dx = (x^{2}/2) ln x - ∫ x/2 dx = (x^{2}/2) ln x - x^{2}/4",
            "At e: e^{2}/2 - e^{2}/4 = e^{2}/4",
            "At 1: 0 - 1/4 = -1/4",
            "Integral = e^{2}/4 + 1/4 = (e^{2} + 1)/4 = 2.097",
          ],
        },
      ],
      "Results: 48;  sqrt(2);  4;  1/2 + 2 ln(3/2) ≈ 1.311;  π/12 + sqrt(3)/2 - 1 ≈ 0.128;  (e^{2} + 1)/4 ≈ 2.097."
    ),
    IMG("abs-value-area", "Graph of y = x + |x| from minus 1 to 2 which is zero for negative x and 2x for positive x with the shaded triangle of area 4", "x + |x| is zero on the left and 2x on the right, so the area is the triangle under 2x"),
    W(
      "Using the properties of integrals",
      "Suppose ∫_{-2}^{1} f(x) dx = 5, ∫_{1}^{3} f(x) dx = 4 and ∫_{-2}^{1} g(x) dx = -2. Find the following.",
      [
        {
          text: "∫_{-2}^{3} f(x) dx. Use additivity.",
          lines: ["= ∫_{-2}^{1} f dx + ∫_{1}^{3} f dx = 5 + 4 = 9"],
        },
        {
          text: "∫_{-2}^{1} [ 2 f(x) + 3 g(x) ] dx. Use the sum and constant multiple properties.",
          lines: ["= 2(5) + 3(-2) = 10 - 6 = 4"],
        },
        {
          text: "3 ∫_{-2}^{1} f(x) dx - 2 ∫_{-2}^{1} g(x) dx",
          lines: ["= 3(5) - 2(-2) = 15 + 4 = 19"],
        },
        {
          text: "∫_{3}^{1} f(x) dx. Reverse the limits.",
          lines: ["= - ∫_{1}^{3} f(x) dx = -4"],
        },
      ],
      "Results: 9;  4;  19;  -4."
    ),

    H("Application with data"),
    W(
      "Water flowing into a tank",
      "Water flows into a tank at the rate r(t) = 2t + 1 litres per minute. How much water enters during the first 4 minutes?",
      [
        {
          text: "The total change is the area under the rate graph, so it is the definite integral of the rate.",
          lines: ["Amount = ∫_{0}^{4} (2t + 1) dt"],
        },
        {
          text: "Integrate.",
          lines: ["F(t) = t^{2} + t"],
        },
        {
          text: "Subtract.",
          lines: ["F(4) = 16 + 4 = 20", "F(0) = 0", "Amount = 20 - 0 = 20"],
        },
        {
          text: "Check with a table of the rate.",
          lines: [
            "t = 0: rate 1    t = 1: rate 3    t = 2: rate 5    t = 3: rate 7    t = 4: rate 9",
            "The graph is a straight line from 1 to 9, a trapezoid of width 4: area = (1 + 9)/2 * 4 = 20",
          ],
        },
      ],
      "20 litres of water enter the tank in the first 4 minutes."
    ),
    SCEN("Questions with answers: definite integrals", [
      [
        "Question 1: Evaluate ∫_{0}^{2} (3x^{2} + 2x) dx.",
        "F(x) = x^{3} + x^{2}. F(2) = 8 + 4 = 12 and F(0) = 0, so the integral is **12**.",
      ],
      [
        "Question 2: Evaluate ∫_{0}^{π} sin x dx.",
        "[ -cos x ] from 0 to π = -cos π - (-cos 0) = 1 + 1 = **2**.",
      ],
      [
        "Question 3: Evaluate ∫_{0}^{1} e^{x} dx.",
        "[ e^{x} ] from 0 to 1 = e - 1, about **1.718**.",
      ],
      [
        "Question 4: Why is ∫_{-1}^{1} x^{3} dx equal to 0?",
        "F(x) = x^{4}/4, so F(1) - F(-1) = 1/4 - 1/4 = 0. The area above the axis for x > 0 cancels the equal area below it for x < 0.",
      ],
      [
        "Question 5: The speed of a runner is v(t) = 6 - t metres per second for 0 to 6 seconds. How far does she run?",
        "Distance = ∫_{0}^{6} (6 - t) dt = [ 6t - t^{2}/2 ] = 36 - 18 = **18 metres**.",
      ],
    ]),
  ],
};

export const calculusChapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8];
