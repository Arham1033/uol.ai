// ALL notes for Programming Fundamentals, semester 2, live in this ONE file.
// Chapters are in teaching order (the list is at the bottom): 1 Functions, 2 Scope, recursion and lambda,
// 3 Introduction to object-oriented programming, 4 Classes and objects, 5 Encapsulation and data hiding.
// Pictures are in public/notes/semester-2/programming-fundamentals/ and are added with IMG("file-name", "description", "caption").
// Block types: heading, subheading, paragraph, list, math, table, callout, image, qa, code, scrollbox and worked.
// Programs are written with PY(code) and the text they print with OUT(text).
// EX(title, [{ text, code, output }]) puts several programs in one scrolling box.
// Every program was run and the printed output is exactly what Python shows.

const BASE = "/notes/semester-2/programming-fundamentals";
const SIZES = {
  "access-levels": [2000, 1280],
  "class-and-objects": [2000, 1440],
  "local-global-scope": [2000, 1320],
  "recursion-call-stack": [2000, 1680],
};

const H = (text) => ({ type: "heading", text });
const SH = (text) => ({ type: "subheading", text });
const P = (text) => ({ type: "paragraph", text });
const L = (items, ordered = false) => ({ type: "list", ordered, items });
const T = (headers, rows, caption) => ({ type: "table", headers, rows, caption });
const NOTE = (text, title) => ({ type: "callout", variant: "note", title, text });
const TIP = (text, title) => ({ type: "callout", variant: "tip", title, text });
const WARN = (text, title) => ({ type: "callout", variant: "warning", title, text });
const PY = (code) => ({ type: "code", language: "python", code });
const OUT = (code) => ({ type: "code", language: "output", code });
const IMG = (name, alt, caption) => ({
  type: "image",
  src: `${BASE}/${name}.webp`,
  alt,
  width: SIZES[name][0],
  height: SIZES[name][1],
  caption,
});
// A scrolling box of programs. Each item has a line of explanation, the program and its printed output.
const EX = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.flatMap(({ text, code, output }) => [
    P(text),
    PY(code),
    ...(output ? [OUT(output)] : []),
  ]),
});
// A scrolling box of questions with answers.
const SCEN = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.map(([question, answer, code]) =>
    code ? { type: "qa", question, answer, code } : { type: "qa", question, answer }
  ),
});

// ---------------------------------------------------------------------------
// Chapter 1. Functions in Python
// ---------------------------------------------------------------------------
const chapter1 = {
  title: "Chapter 1: Functions in Python",
  summary:
    "What a function is, why we use functions, the def syntax, built-in and user-defined functions, parameters and arguments (positional, keyword and default), the return statement and returning several values, with programs and their output.",
  theory: [
    H("What is a function?"),
    P("A **function** is a block of reusable code that performs one specific task. Once it is written, it can be used again and again by calling its name. Functions reduce repeated code and make a program easier to read."),
    SH("Why use functions?"),
    L([
      "**Code reuse:** write the code once and call it wherever it is needed.",
      "**Modularity:** a big program is split into small parts, each doing one job.",
      "**Simpler testing and debugging:** each small function can be tested on its own.",
    ]),
    SH("Syntax"),
    PY(`def function_name(parameters):
    # code block
    return value`),
    L([
      "**def** is the keyword that starts a function definition.",
      "The **function name** follows the rules for variable names.",
      "**Parameters** are the names inside the brackets. A function may have none.",
      "The code block under the colon must be **indented**.",
      "**return** sends a value back to the place where the function was called.",
    ]),
    SH("A simple function"),
    P("Defining a function does not run it. The code inside runs only when the function is **called**."),
    PY(`def greet():
    print('Hello! Welcome to Python.')

greet()`),
    OUT("Hello! Welcome to Python."),
    NOTE("Calling a function you have not defined, or forgetting the brackets, are two of the most common errors. greet without brackets refers to the function but does not run it.", "Remember"),

    H("Types of functions"),
    T(
      ["Type", "Meaning", "Examples"],
      [
        ["Built-in", "Already provided by Python", "len, type, range, print, max, min, sum"],
        ["User-defined", "Created by the programmer with def", "greet, add, square"],
        ["Anonymous", "Small function with no name, made with lambda", "lambda x: x * x"],
      ]
    ),
    SH("Built-in functions"),
    PY(`print(len('Python'))
print(max(10, 25, 5))
print(min(10, 25, 5))
print(sum([10, 25, 5]))`),
    OUT(`6
25
5
40`),
    SH("User-defined function"),
    PY(`def add(a, b):
    return a + b

print(add(5, 3))`),
    OUT("8"),

    H("Parameters and arguments"),
    L([
      "**Parameters** are the variables named in the function definition.",
      "**Arguments** are the actual values passed when the function is called.",
    ]),
    PY(`def add(a, b):      # a and b are parameters
    return a + b

print(add(5, 3))    # 5 and 3 are arguments`),
    OUT("8"),
    SH("Positional arguments"),
    P("Arguments are matched to parameters by **position**: the first argument goes to the first parameter, and so on. Changing the order changes the result."),
    PY(`def subtract(a, b):
    return a - b

print(subtract(10, 5))
print(subtract(5, 10))`),
    OUT(`5
-5`),
    SH("Keyword arguments"),
    P("Arguments can be given by **name**, so their order does not matter."),
    PY(`def info(name, age):
    print(name, age)

info(age=21, name='Ali')`),
    OUT("Ali 21"),
    SH("Default arguments"),
    P("A parameter can be given a **default value**. It is used when the caller does not pass that argument."),
    PY(`def greet(name='Student'):
    print('Hello,', name)

greet()
greet('Asif')`),
    OUT(`Hello, Student
Hello, Asif`),
    TIP("Parameters with default values must come after the parameters without defaults. def f(a, b=2) is correct, but def f(a=1, b) is a syntax error.", "Order of parameters"),

    H("The return statement"),
    P("**return** ends the function and sends a value back to the caller. A function that has no return statement gives back the special value None."),
    PY(`def square(x):
    return x * x

print(square(5))`),
    OUT("25"),
    SH("Multiple return values"),
    P("A function can return more than one value. Python packs them into a tuple, and the caller can unpack them into separate variables."),
    PY(`def calculate(a, b):
    return a + b, a * b

sum_, prod_ = calculate(3, 4)
print(sum_, prod_)`),
    OUT("7 12"),
    SH("print versus return"),
    T(
      ["print()", "return"],
      [
        ["Shows a value on the screen", "Gives a value back to the program"],
        ["The value cannot be used afterwards", "The value can be stored or used in another calculation"],
        ["Function result is None", "Function result is the returned value"],
      ]
    ),
    EX("Programs: print versus return", [
      {
        text: "Program 1: A function that only prints. Its result is None, so we cannot add to it.",
        code: `def show_total(a, b):
    print(a + b)

result = show_total(2, 3)
print(result)`,
        output: `5
None`,
      },
      {
        text: "Program 2: The same job with return. The result can now be used in further work.",
        code: `def total(a, b):
    return a + b

result = total(2, 3)
print(result)
print(result * 10)`,
        output: `5
50`,
      },
    ]),

    H("Custom programs with data"),
    EX("Programs: functions with data (scroll to see all)", [
      {
        text: "Program 1: Bill with tax. A shop adds 10 percent tax to a price. The tax rate is a default argument.",
        code: `def bill(price, tax=10):
    return price + price * tax / 100

print(bill(500))
print(bill(500, 5))
print(bill(price=1200, tax=15))`,
        output: `550.0
525.0
1380.0`,
      },
      {
        text: "Program 2: Temperature conversion. One function, called with several values from a list.",
        code: `def to_fahrenheit(c):
    return c * 9 / 5 + 32

for temp in [0, 25, 37, 100]:
    print(temp, 'C =', to_fahrenheit(temp), 'F')`,
        output: `0 C = 32.0 F
25 C = 77.0 F
37 C = 98.6 F
100 C = 212.0 F`,
      },
      {
        text: "Program 3: Rectangle area and perimeter returned together (multiple return values).",
        code: `def rectangle(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

a, p = rectangle(8, 5)
print('Area =', a)
print('Perimeter =', p)`,
        output: `Area = 40
Perimeter = 26`,
      },
      {
        text: "Program 4: Greeting with keyword arguments. The order of the arguments does not matter.",
        code: `def introduce(name, city, age):
    print(name, 'is', age, 'years old and lives in', city)

introduce('Sara', 'Layyah', 20)
introduce(age=19, city='Multan', name='Ahmed')`,
        output: `Sara is 20 years old and lives in Layyah
Ahmed is 19 years old and lives in Multan`,
      },
    ]),
    SCEN("Questions with answers: functions", [
      [
        "Question 1: What is the difference between a parameter and an argument?",
        "A parameter is the name used in the function definition. An argument is the value given to it when the function is called. In def add(a, b) the names a and b are parameters. In add(5, 3) the values 5 and 3 are arguments.",
      ],
      [
        "Question 2: What does this program print?",
        "It prints 2, then None. The function has no return statement, so result is None.",
        `def f(x):
    print(x)

result = f(2)
print(result)`,
      ],
      [
        "Question 3: Write a function cube(n) that returns the cube of n and show its use.",
        "The function returns n * n * n. cube(3) gives 27 and cube(-2) gives -8.",
        `def cube(n):
    return n * n * n

print(cube(3))
print(cube(-2))`,
      ],
      [
        "Question 4: Why is def f(a=1, b): not allowed?",
        "A parameter with a default value cannot come before one without a default, because Python would not know which argument belongs to which parameter. The correct form is def f(b, a=1).",
      ],
      [
        "Question 5: Name the three types of functions in Python.",
        "Built-in functions (len, type, range, print), user-defined functions (made with def) and anonymous functions (made with lambda).",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 2. Scope, recursion and lambda
// ---------------------------------------------------------------------------
const chapter2 = {
  title: "Chapter 2: Scope, Nested Functions, Recursion and Lambda",
  summary:
    "Local and global variables, the global keyword, nested functions, docstrings, recursion with factorial and Fibonacci, lambda functions, functions with loops and lists, practical examples, solved exercises and common mistakes.",
  theory: [
    H("Variable scope"),
    P("The **scope** of a variable is the part of the program where it can be used."),
    L([
      "**Local variable:** created inside a function. It exists only while that function runs.",
      "**Global variable:** created outside every function. It can be read anywhere in the program.",
    ]),
    SH("Local versus global example"),
    P("The function show() has its own x. It does not change the global x."),
    PY(`x = 10

def show():
    x = 5
    print('Inside:', x)

show()
print('Outside:', x)`),
    OUT(`Inside: 5
Outside: 10`),
    IMG("local-global-scope", "Two boxes showing a global x equal to 10 and a function with its own local x equal to 5, and a second program using the global keyword to change x to 20", "Left: a local x hides the global x. Right: the global keyword changes the global x"),
    SH("The global keyword"),
    P("To **change** a global variable from inside a function, declare it with the **global** keyword."),
    PY(`x = 10

def modify():
    global x
    x = 20

modify()
print(x)`),
    OUT("20"),
    WARN("Without the global keyword, x = 20 inside modify() would create a new local variable and the global x would stay 10.", "Common confusion"),

    H("Nested functions"),
    P("A function can be defined **inside** another function. The inner function can only be called from inside the outer function."),
    PY(`def outer():
    def inner():
        print('Inner function called')
    inner()

outer()`),
    OUT("Inner function called"),

    H("Docstrings"),
    P("A **docstring** is a string written in triple quotes on the first line of a function. It describes what the function does and can be read with the __doc__ attribute."),
    PY(`def add(a, b):
    """Adds two numbers"""
    return a + b

print(add.__doc__)`),
    OUT("Adds two numbers"),

    H("Recursion"),
    P("**Recursion** means a function calls itself. It is used for repetitive tasks such as factorial and the Fibonacci series. Every recursive function needs two parts:"),
    L([
      "A **base case** that stops the calls (for factorial, n equal to 0).",
      "A **recursive case** that calls the function again with a smaller input.",
    ]),
    SH("Factorial"),
    P("The factorial of n is n * (n - 1) * ... * 1, and 0! = 1. It can be written as n! = n * (n - 1)!."),
    PY(`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))`),
    OUT("120"),
    IMG("recursion-call-stack", "Flow of factorial of 5 with calls going down to factorial of 0 and the returned values 1, 1, 2, 6, 24 and 120 coming back up", "factorial(5) waits for factorial(4), which waits for factorial(3), and so on until n is 0"),
    SH("Fibonacci series"),
    P("Each Fibonacci number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, ..."),
    PY(`def fib(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

for i in range(6):
    print(fib(i))`),
    OUT(`0
1
1
2
3
5`),
    WARN("A recursive function with no base case calls itself forever and Python stops it with a RecursionError.", "Always have a base case"),

    H("Lambda (anonymous) functions"),
    P("A **lambda** function is a small function written in one line without a name. It can take any number of arguments but has only one expression, whose value is returned automatically."),
    PY(`# lambda arguments: expression
square = lambda x: x * x
print(square(6))`),
    OUT("36"),
    SH("Example: even or odd"),
    PY(`is_even = lambda x: x % 2 == 0
print(is_even(7))
print(is_even(10))`),
    OUT(`False
True`),
    T(
      ["def function", "lambda function"],
      [
        ["Has a name", "No name of its own (usually stored in a variable)"],
        ["Can have many statements", "Only one expression"],
        ["Uses return", "Returns the value of the expression automatically"],
        ["Used for larger tasks", "Used for small, short tasks"],
      ]
    ),

    H("More function examples"),
    EX("Programs: loops, lists and composition (scroll to see all)", [
      {
        text: "Function with a loop: a multiplication table.",
        code: `def table(n):
    for i in range(1, 11):
        print(f'{n} x {i} = {n*i}')

table(3)`,
        output: `3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,
      },
      {
        text: "Function returning a list: the even numbers up to a limit, built with a list comprehension. Notice that 0 is also even.",
        code: `def even_numbers(limit):
    return [x for x in range(limit + 1) if x % 2 == 0]

print(even_numbers(10))`,
        output: "[0, 2, 4, 6, 8, 10]",
      },
      {
        text: "Function composition: the result of one function becomes the input of another. multiply(2, 3) is 6 and square(6) is 36.",
        code: `def multiply(a, b): return a * b

def square(x): return x * x

print(square(multiply(2, 3)))`,
        output: "36",
      },
    ]),

    H("Practical examples"),
    EX("Programs: practical examples 1 to 5 (scroll to see all)", [
      {
        text: "Practical example 1: Average marks. sum() adds the list and len() counts the items.",
        code: `def average(marks):
    return sum(marks) / len(marks)

print(average([80, 90, 70]))`,
        output: "80.0",
      },
      {
        text: "Practical example 2: Student grade. The conditions are checked from top to bottom, so 85 is not 90 or above but is 80 or above.",
        code: `def grade(marks):
    if marks >= 90: return 'A'
    elif marks >= 80: return 'B'
    else: return 'C'

print(grade(85))`,
        output: "B",
      },
      {
        text: "Practical example 3: Prime check. A number is prime if no number from 2 up to num - 1 divides it exactly.",
        code: `def is_prime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

print(is_prime(11))
print(is_prime(12))`,
        output: `True
False`,
      },
      {
        text: "Practical example 4: Reverse a string. The slice [::-1] reads the text from the end to the start.",
        code: `def reverse(text):
    return text[::-1]

print(reverse('Python'))`,
        output: "nohtyP",
      },
      {
        text: "Practical example 5: Maximum of a list with the built-in max().",
        code: `def find_max(lst):
    return max(lst)

print(find_max([4, 7, 2, 9]))`,
        output: "9",
      },
      {
        text: "Improvement to example 3: the program above says 1 is prime, but 1 is not prime. A better version rejects numbers below 2 and stops checking at the square root.",
        code: `def is_prime(num):
    if num < 2:
        return False
    i = 2
    while i * i <= num:
        if num % i == 0:
            return False
        i += 1
    return True

print(is_prime(1))
print(is_prime(2))
print(is_prime(11))
print(is_prime(49))`,
        output: `False
True
True
False`,
      },
      {
        text: "A custom program: a function that checks a password length and returns a message.",
        code: `def check_password(password):
    if len(password) >= 8:
        return 'Strong enough'
    return 'Too short'

print(check_password('abc123'))
print(check_password('python2026'))`,
        output: `Too short
Strong enough`,
      },
    ]),

    H("Exercises with solutions"),
    EX("Exercises 1 to 4 solved (scroll to see all)", [
      {
        text: "Exercise 1: Write a function to calculate the area and perimeter of a rectangle.",
        code: `def rectangle(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

area, perimeter = rectangle(12, 7)
print('Area:', area)
print('Perimeter:', perimeter)`,
        output: `Area: 84
Perimeter: 38`,
      },
      {
        text: "Exercise 2: Write a recursive function to compute the factorial of a given number. Here 6! = 6 * 5 * 4 * 3 * 2 * 1.",
        code: `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(6))
print(factorial(0))`,
        output: `720
1`,
      },
      {
        text: "Exercise 3: Write a function that takes a list of numbers and returns the sum of the even numbers. In [3, 8, 5, 10, 7, 4] the even numbers are 8, 10 and 4, and 8 + 10 + 4 = 22.",
        code: `def sum_of_evens(numbers):
    total = 0
    for n in numbers:
        if n % 2 == 0:
            total += n
    return total

print(sum_of_evens([3, 8, 5, 10, 7, 4]))`,
        output: "22",
      },
      {
        text: "Exercise 4: Write a program to check a palindrome using functions. A palindrome reads the same forwards and backwards.",
        code: `def is_palindrome(text):
    text = text.lower()
    return text == text[::-1]

for word in ['madam', 'level', 'python']:
    if is_palindrome(word):
        print(word, 'is a palindrome')
    else:
        print(word, 'is not a palindrome')`,
        output: `madam is a palindrome
level is a palindrome
python is not a palindrome`,
      },
    ]),

    H("Common mistakes"),
    L([
      "**Missing function call:** writing greet instead of greet(), so nothing runs.",
      "**Not using return properly:** printing a value inside the function when the result is needed elsewhere.",
      "**Forgetting indentation:** the code block of a function must be indented.",
      "**Confusing local and global scope:** a variable made inside a function is not available outside it.",
    ]),
    SCEN("Questions with answers: scope, recursion and lambda", [
      [
        "Question 1: What is printed by this program and why?",
        "It prints 5 and then 10. The x = 5 inside the function is a local variable, so the global x stays 10.",
        `x = 10

def f():
    x = 5
    print(x)

f()
print(x)`,
      ],
      [
        "Question 2: Write a lambda that returns the cube of a number.",
        "cube = lambda n: n * n * n. Then cube(3) is 27.",
      ],
      [
        "Question 3: Write a recursive function to find the sum of the numbers from 1 to n.",
        "The base case is n equal to 0, which returns 0. Otherwise the function returns n plus the sum of the numbers up to n - 1. total(4) = 4 + 3 + 2 + 1 = 10.",
        `def total(n):
    if n == 0:
        return 0
    return n + total(n - 1)

print(total(4))`,
      ],
      [
        "Question 4: Why does a recursive function need a base case?",
        "The base case stops the function from calling itself. Without it the calls never end and Python raises a RecursionError.",
      ],
      [
        "Question 5: What is the value of fib(6)?",
        "The series starts 0, 1, 1, 2, 3, 5, 8. The number at position 6 is 8, so fib(6) = fib(5) + fib(4) = 5 + 3 = 8.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 3. Introduction to object-oriented programming
// ---------------------------------------------------------------------------
const chapter3 = {
  title: "Chapter 3: Introduction to Object-Oriented Programming",
  summary:
    "Programming paradigms, procedural and object-oriented programming compared, why OOP is used, real-world modelling, a review of Python basics, problem modelling and the basic OOP terms.",
  theory: [
    H("Object-oriented programming (OOP)"),
    P("**Object-oriented programming** is a programming style in which programs are designed with **objects** and **classes**. A class describes a kind of thing, and an object is one real thing of that kind."),
    L([
      "A car in general is a **class**.",
      "Your own particular car, with its model and colour, is an **object**.",
    ]),
    P("In every OOP program there are four basic ideas: the **class**, the **object**, the **attributes** (properties, the data an object holds) and the **methods** (functions written inside a class)."),

    H("Programming paradigms"),
    P("A **programming paradigm** is a method or style of programming. The four common paradigms are:"),
    T(
      ["Paradigm", "Main idea"],
      [
        ["Procedural programming", "The program is a list of steps, organised into functions"],
        ["Object-oriented programming", "The program is built from objects that hold data and behaviour"],
        ["Functional programming", "The program is built by combining functions, avoiding changing data"],
        ["Event-driven programming", "The program reacts to events such as a click or a key press"],
      ]
    ),
    SH("The four pillars of OOP"),
    L([
      "**Encapsulation:** keeping data and the methods that use it together, and controlling access to it.",
      "**Inheritance:** a new class takes the features of an existing class.",
      "**Polymorphism:** the same method name can behave differently for different objects.",
      "**Abstraction:** showing only what is needed and hiding the inner details.",
    ]),
    NOTE("Encapsulation is covered in Chapter 5. Inheritance, polymorphism and abstraction follow in later topics.", "Where each pillar is covered"),

    H("Procedural programming"),
    L([
      "The program is written as step-by-step instructions (it is based on steps).",
      "The focus is on **functions and procedures**.",
      "Example: a basic calculator program.",
    ]),
    PY(`def add(a, b):
    return a + b

print(add(4, 6))`),
    OUT("10"),

    H("Object-oriented programming style"),
    L([
      "The program is built using **objects** (based on classes).",
      "The focus is on **data and behaviour together**.",
      "Examples: Student, Car and Bank Account models.",
    ]),
    SH("Procedural versus OOP"),
    T(
      ["Procedural", "Object-oriented"],
      [
        ["Function based", "Class based"],
        ["Less secure: data is open to every function", "More secure: data can be protected inside objects"],
        ["Code is harder to reuse in large programs", "Reusable through classes"],
        ["Data and functions are separate", "Data and functions are kept together"],
      ]
    ),
    SH("The same task in both styles"),
    P("A student's marks are stored and displayed. First in procedural style, then in object-oriented style."),
    EX("Programs: procedural style and OOP style", [
      {
        text: "Procedural style: the data sits in variables and a separate function uses it.",
        code: `name = 'Ali'
marks = 90

def show(name, marks):
    print(name, 'scored', marks)

show(name, marks)`,
        output: "Ali scored 90",
      },
      {
        text: "OOP style: the data and the function (method) are placed together inside the class Student.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def show(self):
        print(self.name, 'scored', self.marks)

s1 = Student('Ali', 90)
s1.show()`,
        output: "Ali scored 90",
      },
    ]),

    H("Why OOP is important"),
    L([
      "**Code reusability:** a class written once can be used many times.",
      "**Better code organisation:** related data and functions stay together.",
      "**Easy maintenance:** a change in one class does not break the rest.",
      "**Real-world problem modelling:** programs match real things such as students and accounts.",
      "**Industry standard approach:** large software systems are built this way.",
    ]),
    SH("Python and OOP"),
    L([
      "Python supports OOP fully.",
      "Everything in Python is an object, even numbers and strings.",
      "Python supports classes, inheritance and polymorphism.",
    ]),
    PY(`print(type(10))
print(type('Ali'))
print(type([1, 2, 3]))`),
    OUT(`<class 'int'>
<class 'str'>
<class 'list'>`),

    H("Real-world example of OOP"),
    T(
      ["Part", "Student object"],
      [
        ["Object", "Student"],
        ["Attributes", "Name, RollNo, Marks"],
        ["Methods", "Study(), AttendClass(), GiveExam()"],
      ]
    ),

    H("Review of Python basics"),
    P("Before writing classes we review the Python that classes are built from."),
    SH("Variables"),
    L([
      "Variables store data.",
      "There is no need to declare the type: Python decides it from the value.",
    ]),
    PY(`x = 10
y = 'Ali'
print(x, y)`),
    OUT("10 Ali"),
    SH("Data types"),
    T(
      ["Type", "Meaning", "Example"],
      [
        ["int", "Whole number", "25"],
        ["float", "Number with a decimal point", "3.14"],
        ["string (str)", "Text", "'Ali'"],
        ["list", "Ordered collection that can be changed", "[10, 20, 30]"],
        ["dictionary (dict)", "Collection of key and value pairs", "{'name': 'Ali', 'age': 20}"],
        ["boolean (bool)", "True or False", "True"],
      ]
    ),
    SH("Input and output"),
    P("input() reads text typed by the user and print() shows output."),
    PY(`name = input('Enter name: ')
print(name)`),
    OUT(`Enter name: Rania
Rania`),
    SH("Conditional statements"),
    P("The forms are if, if-else and if-elif-else."),
    PY(`marks = 72
if marks >= 80:
    print('Distinction')
elif marks >= 50:
    print('Pass')
else:
    print('Fail')`),
    OUT("Pass"),
    SH("Loops"),
    L([
      "**for loop:** used when the number of repetitions is **known**.",
      "**while loop:** used when the number of repetitions is **unknown** and depends on a condition.",
      "Loop control statements: break and continue.",
    ]),
    PY(`for i in range(1, 4):
    print('for loop:', i)

count = 3
while count > 0:
    print('while loop:', count)
    count -= 1`),
    OUT(`for loop: 1
for loop: 2
for loop: 3
while loop: 3
while loop: 2
while loop: 1`),
    SH("Functions"),
    P("Functions give code reusability. A function has a definition, parameters and a return value (see Chapters 1 and 2)."),

    H("Problem modelling"),
    P("Before writing code we decide what the program is about. Problem modelling has three steps:"),
    L(
      [
        "Identify the **entities** (the main things in the problem).",
        "Identify the **attributes** (the data each entity holds).",
        "Identify the **behaviours** (what each entity can do).",
      ],
      true
    ),
    SH("Example: a library system"),
    T(
      ["Step", "Result"],
      [
        ["Objects (entities)", "Book, Student, Librarian"],
        ["Attributes", "Book Name, ID"],
        ["Methods", "IssueBook(), ReturnBook()"],
      ]
    ),
    SH("From real world to classes"),
    P("A real-world object becomes a programming class. Example: a car becomes the class Car."),
    EX("Programs: custom examples of problem modelling", [
      {
        text: "A car turned into a class. Attributes: model and colour. Methods: start() and stop().",
        code: `class Car:
    def __init__(self, model, colour):
        self.model = model
        self.colour = colour

    def start(self):
        print(self.model, 'has started')

    def stop(self):
        print(self.model, 'has stopped')

car1 = Car('Honda', 'white')
car1.start()
car1.stop()`,
        output: `Honda has started
Honda has stopped`,
      },
      {
        text: "A library book turned into a class. Attributes: name and ID. Method: issue_book().",
        code: `class Book:
    def __init__(self, name, book_id):
        self.name = name
        self.book_id = book_id
        self.issued = False

    def issue_book(self):
        self.issued = True
        print(self.name, 'issued')

    def return_book(self):
        self.issued = False
        print(self.name, 'returned')

b1 = Book('Python Basics', 101)
b1.issue_book()
b1.return_book()`,
        output: `Python Basics issued
Python Basics returned`,
      },
    ]),
    H("Lab task: five real-world objects"),
    P("Each real-world object is described by its attributes and methods."),
    T(
      ["Object", "Attributes", "Methods"],
      [
        ["Student", "name, roll number, marks", "study(), attend_class(), give_exam()"],
        ["Car", "model, colour, speed", "start(), stop(), accelerate()"],
        ["Mobile phone", "brand, battery level, number", "call(), send_message(), charge()"],
        ["Bank account", "account number, owner, balance", "deposit(), withdraw(), check_balance()"],
        ["Teacher", "name, subject, salary", "teach(), set_paper(), check_papers()"],
      ]
    ),

    H("Basic OOP terms"),
    T(
      ["Term", "Meaning", "Example"],
      [
        ["Class", "Blueprint or template for objects", "class Student"],
        ["Object", "A real instance of a class", "std1 = Student('Ali')"],
        ["Attribute", "A variable that holds data of the object", "name, marks"],
        ["Method", "A function inside a class that gives behaviour", "study()"],
        ["Constructor", "Special method that runs when an object is created", "__init__()"],
      ]
    ),
    SCEN("Questions with answers: introduction to OOP", [
      [
        "Question 1: What is the difference between a real-world object and a programming object?",
        "A real-world object is a thing that exists, such as a car. A programming object is the model of that thing inside a program. It stores the thing's features as attributes and its actions as methods.",
      ],
      [
        "Question 2: Why is OOP needed in the software industry?",
        "Software today is large and complex. OOP helps because it models real-world things, keeps data and functions in one place, makes code reusable, gives better organisation and security, and makes large systems easy to maintain.",
      ],
      [
        "Question 3: Compare procedural and object-oriented programming.",
        "Procedural programming is function based and the data is separate from the functions, so it is less secure. OOP is class based, keeps data and behaviour together, is more secure and is reusable.",
      ],
      [
        "Question 4: Name the four main paradigms and the four pillars of OOP.",
        "Paradigms: procedural, object-oriented, functional and event-driven. Pillars: encapsulation, inheritance, polymorphism and abstraction.",
      ],
      [
        "Question 5: A hospital system has doctors and patients. Identify the entities, one attribute of each and one method of each.",
        "Entities: Doctor and Patient. Doctor attribute: speciality. Doctor method: treat(). Patient attribute: name. Patient method: book_appointment().",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 4. Classes and objects
// ---------------------------------------------------------------------------
const chapter4 = {
  title: "Chapter 4: Classes and Objects",
  summary:
    "Writing a class in Python, creating objects, class versus object, instance and class attributes, methods and the self keyword, the constructor, accessing attributes, complete programs, common mistakes and best practices.",
  theory: [
    H("What is a class?"),
    L([
      "A class is a **blueprint or template** for objects.",
      "It defines the **properties and behaviours** (the structure) of the objects.",
      "It is the **logical structure** for objects: it does not hold real data until an object is made.",
    ]),
    SH("Real-world example"),
    L([
      "Class: Student.",
      "Objects: Ali, Ahmed, Sara.",
      "Each object has its own data.",
    ]),
    SH("Class syntax in Python"),
    PY(`class ClassName:
    # attributes
    # methods`),
    SH("First class"),
    P("The keyword pass means the class has no content yet. It is used when a class is only a concept."),
    PY(`class Student:
    pass`),

    H("What is an object?"),
    L([
      "An object is an **instance of a class**.",
      "It is a real-world entity.",
      "It uses the features of the class.",
    ]),
    SH("Creating objects"),
    PY(`obj1 = ClassName()

# Example
std1 = Student()`),
    SH("Class versus object"),
    T(
      ["Class", "Object"],
      [
        ["Blueprint", "Real instance"],
        ["Written once", "Many can be created from one class"],
        ["No data of its own", "Holds its own data"],
        ["Student", "Ali, Ahmed, Sara"],
      ]
    ),
    IMG("class-and-objects", "The class Student with attributes name and marks and the methods study, with three objects std1 for Ali, std2 for Ahmed and std3 for Sara, each holding its own name and marks", "One class can create many objects, and each object keeps its own values"),
    EX("Programs: classes and objects", [
      {
        text: "Program 1: Two objects of one class. They are separate objects in memory, so == compares them as different.",
        code: `class Student:
    pass

std1 = Student()
std2 = Student()
print(type(std1))
print(std1 == std2)`,
        output: `<class '__main__.Student'>
False`,
      },
      {
        text: "Program 2: Adding data to objects one by one. Each object holds its own name.",
        code: `class Student:
    pass

std1 = Student()
std1.name = 'Ali'
std2 = Student()
std2.name = 'Sara'
print(std1.name)
print(std2.name)`,
        output: `Ali
Sara`,
      },
    ]),

    H("Attributes"),
    L([
      "Attributes are **variables inside a class**.",
      "They represent the **data of an object**.",
    ]),
    SH("Types of attributes"),
    T(
      ["Type", "Meaning"],
      [
        ["Instance attribute", "Unique for each object. Defined using the constructor."],
        ["Class attribute", "Shared by all objects of the class. Defined directly in the class body."],
      ]
    ),
    EX("Programs: instance and class attributes", [
      {
        text: "An instance attribute (name) is different for each object, but a class attribute (university) is shared by every object.",
        code: `class Student:
    university = 'University of Layyah'    # class attribute

    def __init__(self, name):
        self.name = name                   # instance attribute

a = Student('Ali')
b = Student('Sara')
print(a.name, a.university)
print(b.name, b.university)`,
        output: `Ali University of Layyah
Sara University of Layyah`,
      },
      {
        text: "Changing the class attribute changes it for every object.",
        code: `class Student:
    university = 'University of Layyah'

a = Student()
b = Student()
Student.university = 'Layyah Campus'
print(a.university)
print(b.university)`,
        output: `Layyah Campus
Layyah Campus`,
      },
    ]),

    H("Methods"),
    L([
      "A method is a **function inside a class**.",
      "It defines the **behaviour of an object**.",
    ]),
    SH("Method example"),
    PY(`class Student:
    def study(self):
        print('Studying')

std1 = Student()
std1.study()`),
    OUT("Studying"),
    SH("The self keyword"),
    L([
      "self refers to the **current object**, the one that called the method.",
      "It **must be the first parameter** of every method in a class.",
      "Python passes it automatically: std1.study() is the same as Student.study(std1).",
    ]),

    H("Constructor"),
    L([
      "The constructor is a **special method** named __init__.",
      "It is **called automatically when an object is created**.",
      "It is used for **initialisation**, which means giving the object its first values.",
    ]),
    SH("Constructor syntax"),
    PY(`def __init__(self):
    # initialization`),
    SH("Constructor example"),
    PY(`class Student:
    def __init__(self, name):
        self.name = name`),
    SH("Creating an object with a constructor"),
    P("The value in the brackets is passed to the constructor's name parameter."),
    PY(`class Student:
    def __init__(self, name):
        self.name = name

std1 = Student('Ali')
print(std1.name)`),
    OUT("Ali"),
    SH("Accessing attributes"),
    P("Attributes are read with the dot: object.attribute. Inside a class they are written with self."),
    PY(`class Student:
    def __init__(self, name):
        self.name = name

std1 = Student('Ali')
print(std1.name)       # read the attribute with the dot`),
    OUT("Ali"),
    SH("Multiple attributes"),
    PY(`class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

std1 = Student('Ali', 90)
print(std1.name)
print(std1.marks)`),
    OUT(`Ali
90`),
    SH("Object interaction"),
    P("Methods of an object can use the attributes the constructor stored. This is how an object uses its own data."),
    EX("Programs: constructor, methods and self (scroll to see all)", [
      {
        text: "Program 1: A method that uses self to read the object's own attributes.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def show(self):
        print(self.name, 'has', self.marks, 'marks')

std1 = Student('Ali', 90)
std2 = Student('Sara', 82)
std1.show()
std2.show()`,
        output: `Ali has 90 marks
Sara has 82 marks`,
      },
      {
        text: "Program 2: Real-world modelling. Class Car with attributes model and colour and methods start() and stop().",
        code: `class Car:
    def __init__(self, model, colour):
        self.model = model
        self.colour = colour

    def start(self):
        print(self.model, 'started')

    def stop(self):
        print(self.model, 'stopped')

car1 = Car('Toyota', 'red')
print(car1.colour)
car1.start()
car1.stop()`,
        output: `red
Toyota started
Toyota stopped`,
      },
      {
        text: "Program 3: A method that changes an attribute. Each object keeps its own count.",
        code: `class Counter:
    def __init__(self):
        self.count = 0

    def add(self):
        self.count += 1

c1 = Counter()
c2 = Counter()
c1.add()
c1.add()
c2.add()
print(c1.count)
print(c2.count)`,
        output: `2
1`,
      },
      {
        text: "Program 4: A method with a parameter and a return value. The student's result is worked out from the marks.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def result(self):
        if self.marks >= 50:
            return self.name + ' passed'
        return self.name + ' failed'

s1 = Student('Ahmed', 75)
s2 = Student('Zara', 40)
print(s1.result())
print(s2.result())`,
        output: `Ahmed passed
Zara failed`,
      },
      {
        text: "Program 5: A rectangle class. A method calculates the area from the object's own length and width.",
        code: `class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

r = Rectangle(8, 5)
print('Area:', r.area())
print('Perimeter:', r.perimeter())`,
        output: `Area: 40
Perimeter: 26`,
      },
    ]),

    H("Mini program and lab activity"),
    EX("Programs: mini program and lab activity", [
      {
        text: "Mini program: class Car with one attribute, model.",
        code: `class Car:
    def __init__(self, model):
        self.model = model

car1 = Car('Honda')
print(car1.model)`,
        output: "Honda",
      },
      {
        text: "Lab activity: Create the class Book with the attributes title and author and the method display().",
        code: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def display(self):
        print('Title:', self.title)
        print('Author:', self.author)

book1 = Book('Python Crash Course', 'Eric Matthes')
book1.display()`,
        output: `Title: Python Crash Course
Author: Eric Matthes`,
      },
    ]),

    H("Common student mistakes"),
    L([
      "**Forgetting self:** leaving self out of a method's parameters or writing name instead of self.name.",
      "**Wrong constructor syntax:** writing _init_ with one underscore, or __init__ without self.",
      "**Wrong object creation:** forgetting the brackets (std1 = Student) or passing the wrong number of arguments.",
    ]),
    TIP("Check this rule: if the constructor is def __init__(self, name, marks), then creating the object needs exactly two arguments, Student('Ali', 90).", "Matching arguments"),
    H("Best practices"),
    L([
      "Use **meaningful class names** that start with a capital letter (Student, BankAccount).",
      "Use **clear method names** that say what the method does (show, add_marks).",
      "Use **proper indentation** inside the class and its methods.",
    ]),
    P("**Why classes improve code structure:** by organising related data and functions into one unit, a class makes code more modular, reusable and easy to maintain."),
    SCEN("Questions with answers: classes and objects", [
      [
        "Question 1: What error does this program give and how is it fixed?",
        "It gives a TypeError because the constructor needs a name but none was passed. Writing Student('Ali') fixes it.",
        `class Student:
    def __init__(self, name):
        self.name = name

std1 = Student()`,
      ],
      [
        "Question 2: What does this program print?",
        "It prints 10 and then 20. Each object keeps its own x, so changing b does not change a.",
        `class Box:
    def __init__(self, x):
        self.x = x

a = Box(10)
b = Box(10)
b.x = 20
print(a.x)
print(b.x)`,
      ],
      [
        "Question 3: What is self?",
        "self is the object that is calling the method. Python passes it automatically as the first argument, so inside the method self.name means the name of that particular object.",
      ],
      [
        "Question 4: Write a class MobilePhone with the attributes brand and battery (a number) and a method that prints the battery level.",
        "The constructor stores the brand and battery. The method show_battery() prints them.",
        `class MobilePhone:
    def __init__(self, brand, battery):
        self.brand = brand
        self.battery = battery

    def show_battery(self):
        print(self.brand, 'battery:', self.battery, '%')

phone = MobilePhone('Samsung', 85)
phone.show_battery()`,
      ],
      [
        "Question 5: What is the difference between a class attribute and an instance attribute?",
        "A class attribute is written in the class body and is shared by all objects. An instance attribute is created in __init__ with self and is separate for each object.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 5. Encapsulation and data hiding
// ---------------------------------------------------------------------------
const chapter5 = {
  title: "Chapter 5: Encapsulation and Data Hiding",
  summary:
    "Encapsulation, data hiding, public, protected and private members, name mangling, getter and setter methods, complete programs with data, advantages, common mistakes and best practices.",
  theory: [
    H("What is encapsulation?"),
    L([
      "**Binding data and methods together** in a single unit (the class).",
      "**Restricting direct access to data.**",
      "It **improves security and control**.",
    ]),
    SH("Real-world example: an ATM machine"),
    L([
      "The user cannot reach the machine's internal data directly.",
      "The user works through an interface: the PIN and the buttons.",
    ]),
    SH("Why encapsulation is important"),
    L([
      "**Data protection:** outside code cannot damage the data by accident.",
      "**Code flexibility:** the inside of a class can change without breaking other code.",
      "**Better control over data:** the class decides what values are allowed.",
      "**Easier maintenance.**",
    ]),

    H("Data hiding"),
    P("**Data hiding** means class data is kept **private** and cannot be accessed directly from outside the class. It hides the internal details of an object and provides **controlled access**: the data is reached only through methods, such as a getter or a setter."),

    H("Access modifiers"),
    P("Access modifiers decide who may use a member (an attribute or a method) of a class. Python has three levels: public, protected and private."),
    IMG("access-levels", "Table comparing public, protected and private members for access inside the class, in a child class and outside the class", "Python marks protected with one underscore and private with two underscores"),
    T(
      ["Level", "How it is written", "Meaning"],
      [
        ["Public", "name", "Accessible anywhere. This is the default in Python."],
        ["Protected", "_marks", "Should not be accessed directly from outside. Meant for the class and its child classes."],
        ["Private", "__fee", "Strong data protection. Meant for use inside the class only."],
      ]
    ),
    SH("Public members"),
    PY(`class Student:
    def __init__(self):
        self.name = 'Ali'

s = Student()
print(s.name)`),
    OUT("Ali"),
    SH("Protected members"),
    P("A protected member starts with a **single underscore** (_). It should not be accessed directly from outside. It is accessible within the class and its child classes. In Python this is a naming rule that programmers agree to follow; the language does not block access."),
    PY(`class Student:
    def __init__(self):
        self._marks = 80

class Graduate(Student):
    def show(self):
        print('Marks:', self._marks)    # a child class uses it

g = Graduate()
g.show()`),
    OUT("Marks: 80"),
    SH("Private members"),
    P("A private member starts with a **double underscore** (__). It gives strong data protection. Outside the class the name cannot be used directly."),
    PY(`class Student:
    def __init__(self):
        self.__fee = 5000

s = Student()
print(s.__fee)`),
    OUT(`AttributeError: 'Student' object has no attribute '__fee'`),
    SH("Name mangling"),
    P("Python changes the name of a private variable inside the class to **_ClassName__variable**. This is called **name mangling** and is the reason s.__fee does not work from outside."),
    PY(`class Student:
    def __init__(self):
        self.__fee = 5000

s = Student()
print(s._Student__fee)`),
    OUT("5000"),
    NOTE("The mangled name shows that Python hides private data by renaming it, not by locking it. Good programs never use the mangled name; they use methods instead.", "Good practice"),

    H("Accessing private members indirectly"),
    P("Methods of the class are used to reach private data. There are two kinds:"),
    T(
      ["Method", "Purpose", "Example name"],
      [
        ["Getter", "Used to **read** private data", "get_fee(self)"],
        ["Setter", "Used to **modify** private data", "set_fee(self, value)"],
      ]
    ),
    SH("Getter and setter example"),
    PY(`class Student:
    def __init__(self):
        self.__marks = 0

    def set_marks(self, m):
        self.__marks = m

    def get_marks(self):
        return self.__marks`),
    SH("Complete encapsulation example with object usage"),
    PY(`class Student:
    def __init__(self):
        self.__marks = 0

    def set_marks(self, m):
        self.__marks = m

    def get_marks(self):
        return self.__marks

s1 = Student()
s1.set_marks(90)
print(s1.get_marks())`),
    OUT("90"),

    H("Programs with data"),
    EX("Programs: encapsulation in use (scroll to see all)", [
      {
        text: "Program 1: Private fee with a getter and a setter. The fee can be read and changed only through methods.",
        code: `class Student:
    def __init__(self, name):
        self.name = name
        self.__fee = 5000

    def get_fee(self):
        return self.__fee

    def set_fee(self, value):
        self.__fee = value

s = Student('Ali')
print(s.get_fee())
s.set_fee(6500)
print(s.get_fee())`,
        output: `5000
6500`,
      },
      {
        text: "Program 2: A setter that protects the data. The setter accepts only marks from 0 to 100. This is the real benefit of encapsulation: the class controls what values are allowed.",
        code: `class Student:
    def __init__(self):
        self.__marks = 0

    def set_marks(self, m):
        if 0 <= m <= 100:
            self.__marks = m
        else:
            print('Invalid marks')

    def get_marks(self):
        return self.__marks

s = Student()
s.set_marks(85)
print(s.get_marks())
s.set_marks(150)
print(s.get_marks())`,
        output: `85
Invalid marks
85`,
      },
      {
        text: "Program 3: Mini program, BankAccount. The balance is private. Money can only be added or removed through the methods, and withdrawing more than the balance is refused.",
        code: `class BankAccount:
    def __init__(self):
        self.__balance = 0

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print('Insufficient balance')

    def get_balance(self):
        return self.__balance

acc = BankAccount()
acc.deposit(5000)
acc.withdraw(1500)
print(acc.get_balance())
acc.withdraw(10000)
print(acc.get_balance())`,
        output: `3500
Insufficient balance
3500`,
      },
      {
        text: "Program 4: Lab activity. Create a class Employee with a private variable salary and a getter and a setter. The setter refuses a salary below zero.",
        code: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary

    def get_salary(self):
        return self.__salary

    def set_salary(self, value):
        if value >= 0:
            self.__salary = value
        else:
            print('Salary cannot be negative')

emp = Employee('Hamza', 60000)
print(emp.name, emp.get_salary())
emp.set_salary(65000)
print(emp.get_salary())
emp.set_salary(-100)`,
        output: `Hamza 60000
65000
Salary cannot be negative`,
      },
      {
        text: "Program 5: A hospital record. The patient's diagnosis is private and only a method may show it.",
        code: `class Patient:
    def __init__(self, name, diagnosis):
        self.name = name
        self.__diagnosis = diagnosis

    def show_record(self):
        print(self.name, '-', self.__diagnosis)

p = Patient('Noor', 'Flu')
p.show_record()`,
        output: "Noor - Flu",
      },
    ]),

    H("Advantages of encapsulation"),
    L([
      "**Security:** private data is protected from outside changes.",
      "**Flexibility:** the inside of a class can be changed without affecting users of the class.",
      "**Controlled access:** getters and setters decide what may be read or written.",
      "**Modular code:** each class is a self-contained unit.",
    ]),
    H("Encapsulation in real projects"),
    L([
      "**Banking systems:** balances are private and changed only by deposit and withdraw methods.",
      "**Hospital systems:** patient records are protected.",
      "**University portals:** marks and fee records are hidden from other users.",
    ]),
    H("Common student mistakes"),
    L([
      "**Direct access of private variables:** writing s.__fee from outside the class.",
      "**Forgetting self:** writing __balance instead of self.__balance inside a method.",
      "**Wrong getter and setter logic:** a getter that forgets return, or a setter that does not store the value.",
    ]),
    H("Best practices"),
    L([
      "Use **private variables for sensitive data** (balance, fee, salary, marks).",
      "Use **methods for access** to those variables.",
      "Follow **naming conventions**: one underscore for protected, two underscores for private.",
    ]),
    P("**Why data hiding is important in industry:** it protects sensitive information in banking and hospital systems, keeps the data correct (data integrity), simplifies the interaction between parts of a system, and improves the design of large software."),
    SCEN("Questions with answers: encapsulation and data hiding", [
      [
        "Question 1: What error does this program give and why?",
        "It gives an AttributeError. The variable __balance is private, so it cannot be used directly from outside the class. The account should be read with a getter method.",
        `class Account:
    def __init__(self):
        self.__balance = 1000

a = Account()
print(a.__balance)`,
      ],
      [
        "Question 2: What does this program print?",
        "It prints 80 and then 10. The attribute _marks is protected, which is only a naming rule, so Python still allows the change from outside. The rule asks programmers not to do this. A private name with two underscores would not allow it.",
        `class Student:
    def __init__(self):
        self._marks = 80

s = Student()
print(s._marks)
s._marks = 10
print(s._marks)`,
      ],
      [
        "Question 3: Why should a setter check the value before storing it?",
        "A setter is the only door to the private data, so it is the place to refuse wrong values, for example marks above 100 or a negative balance. Without the check, encapsulation would protect nothing.",
      ],
      [
        "Question 4: Difference between public, protected and private members.",
        "Public members have no underscore and can be used anywhere. Protected members start with one underscore and should be used only inside the class and its child classes. Private members start with two underscores and are meant for use inside the class only.",
      ],
      [
        "Question 5: Write a class Teacher with a private salary, a getter and a setter.",
        "The salary is stored as self.__salary. get_salary() returns it and set_salary() changes it.",
        `class Teacher:
    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary

    def get_salary(self):
        return self.__salary

    def set_salary(self, value):
        self.__salary = value

t = Teacher('Ms. Iqra', 90000)
t.set_salary(95000)
print(t.get_salary())`,
      ],
    ]),
  ],
};

export const programmingFundamentalsChapters = [chapter1, chapter2, chapter3, chapter4, chapter5];
