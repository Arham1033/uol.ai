// ALL notes for Data Structures (semester 3) live in this ONE file.
// It is a list of chapters, in reading order. To reorder chapters, move a
// chapter inside the list at the bottom. To add a chapter, add one more
// `const` below and put its name in the list.
//
// Block types: heading, subheading, paragraph, list, code, math, table, callout,
// image, qa (a practice question with its answer on the next line),
// slides (lecture slides in a box that scrolls) and steps (a small worked
// example drawn as boxes, in a box that scrolls).
// Powers are written with ^{...}, for example n^{2}, and show as small raised text.
// Programs: only a few simple ones are included. Where you see
// "# Write your Python program here" you can type your own program.
//
// Lecture slides used in the examples: public/notes/semester-3/data-structure/examples/slides/

const introduction = {
  title: "Introduction to Data Structures",
  summary: "Data and entities, why data structures matter, efficiency, the types of data structures, abstract data types and the basic algorithms.",
  theory: [
    {
      type: "heading",
      text: "Data and entity",
    },
    {
      type: "paragraph",
      text: "Data are simply values or sets of values. A data item is a single unit of value, such as the number 34 or the word \"John\". A data item that can be broken into smaller parts is called a group item: an employee name, for example, can be divided into first name, middle name and last name.",
    },
    {
      type: "paragraph",
      text: "An entity is something that has certain attributes (properties) which can be given values. The values may be numeric or non-numeric. A student, a book, a bank account and an employee are all entities.",
    },
    {
      type: "table",
      headers: ["Attribute","Name","Age","Gender","Number"],
      rows: [
        ["Value","John","34","Male","134-24553-3"],
      ],
      caption: "The entity \"employee\" with four attributes and their values (example from the lecture).",
    },
    {
      type: "paragraph",
      text: "In a program we store an entity's attribute values together. Python's dictionary is a natural way to do this:",
    },
    {
      type: "code",
      language: "python",
      code: `# One entity (an employee) with its attributes and values
employee = {
    "name": "John",
    "age": 34,
    "gender": "Male",
    "number": "134-24553-3",
}

# A collection of entities is a list of such records
employees = [
    employee,
    {"name": "Sara", "age": 29, "gender": "Female", "number": "134-24554-1"},
]

for e in employees:
    print(e["name"], "is", e["age"], "years old")`,
    },
    {
      type: "code",
      language: "output",
      code: `John is 34 years old
Sara is 29 years old`,
    },
    {
      type: "heading",
      text: "What is a data structure?",
    },
    {
      type: "paragraph",
      text: "A data structure is a particular way of organising data in the computer's memory so that it can be stored, searched and changed efficiently. You have already met one: the array, a collection of memory cells that sit one after another in memory. There are many other ways to organise data, and each one is good at some jobs and poor at others.",
    },
    {
      type: "paragraph",
      text: "A data structure is not a programming language such as C, C++, Java or Python. It is an idea, a set of rules and algorithms for organising data, that you can implement in any language.",
    },
    {
      type: "heading",
      text: "Why do we need data structures?",
    },
    {
      type: "list",
      items: [
        "Data structures organise data so that programs become more efficient.",
        "Computers keep getting more powerful (faster CPUs, faster networks, bigger disks), so people attempt more and more complex problems.",
        "More complex applications demand more calculations and more resources.",
        "The choice of data structure and algorithm can be the difference between a program that finishes in a few seconds and one that needs many days.",
      ],
    },
    {
      type: "paragraph",
      text: "Think of a dictionary. If the words were printed in random order, finding one word would mean reading every page. Because the words are kept in alphabetical order, you can open the book near the right place. The organisation of the data is what makes the search fast. Data structures do the same for programs.",
    },
    {
      type: "heading",
      text: "Efficiency",
    },
    {
      type: "paragraph",
      text: "A solution is efficient if it solves the problem within its resource constraints. The two resources we measure are:",
    },
    {
      type: "list",
      items: [
        "Time: how long the program takes to run.",
        "Space: how much memory (or disk) the program uses.",
      ],
    },
    {
      type: "paragraph",
      text: "The cost of a solution is the amount of these resources that the solution consumes. A good programmer looks for the solution with the lowest cost that still fits the problem. Chapter 3 shows how to measure this cost with time and space complexity.",
    },
    {
      type: "heading",
      text: "Types of data structures",
    },
    {
      type: "paragraph",
      text: "Data structures are divided into primitive and non-primitive structures.",
    },
    {
      type: "subheading",
      text: "Primitive data structures",
    },
    {
      type: "paragraph",
      text: "Primitive data structures are the basic data types built into the language. Integer, float, double, character, Boolean and pointer are examples. Each one holds a single value.",
    },
    {
      type: "subheading",
      text: "Non-primitive data structures",
    },
    {
      type: "paragraph",
      text: "Non-primitive data structures are the more complex structures built from primitive types. Most are defined by the programmer, although many languages also provide built-in support for them. These are the structures on which we perform the major operations such as sorting, searching and merging. They fall into two groups:",
    },
    {
      type: "table",
      headers: ["Group","Meaning","Examples"],
      rows: [
        ["Linear","Elements are arranged one after another in a sequence; each element has at most one predecessor and one successor.","Array, linked list, stack, queue"],
        ["Non-linear","Elements are arranged in a hierarchy or network, so one element can connect to several others.","Tree, binary tree, binary search tree, heap, hash table, graph"],
      ],
      caption: "Classification of non-primitive data structures.",
    },
    {
      type: "paragraph",
      text: "The lecture also describes a second way of grouping them: primitive (int, float, bool, char), composite (a struct, array or string made from primitives or other composites) and abstract (defined by behaviour, such as a stack, queue, set, tuple or graph).",
    },
    {
      type: "heading",
      text: "Abstract data type (ADT)",
    },
    {
      type: "paragraph",
      text: "An abstract data type describes WHAT a data structure does without saying HOW it does it. It is defined by a set of rules: the data it holds and the operations that are allowed on that data. A stack, for example, is defined by push, pop and top, and it does not matter whether the programmer stores the items in an array or in a linked list.",
    },
    {
      type: "paragraph",
      text: "The lecture shows this relationship as a chain: algorithms give rise to abstract data types, and an abstract data type is a set of rules. A data structure is a concrete implementation of an ADT.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Why ADTs are useful",
      text: "We publish the interface (the list of operations) and keep the freedom to change the implementation later without affecting the programs that use it. Chapters 2 and 9 show the same List interface implemented in different ways: with an array, a singly linked list, a doubly linked list and a circularly linked list.",
    },
    {
      type: "heading",
      text: "Algorithms of data structures",
    },
    {
      type: "paragraph",
      text: "An algorithm is a step-by-step procedure that defines a set of instructions to be executed in a certain order to get the desired output. Algorithms are written independently of any programming language, so one algorithm can be implemented in many languages.",
    },
    {
      type: "paragraph",
      text: "From the data-structure point of view, the important categories of algorithms are:",
    },
    {
      type: "table",
      headers: ["Algorithm","Purpose"],
      rows: [
        ["Search","Find an item in a data structure."],
        ["Sort","Arrange the items in a certain order (for example ascending)."],
        ["Insert","Add a new item to the data structure."],
        ["Update","Change an existing item."],
        ["Delete","Remove an existing item."],
      ],
    },
    {
      type: "paragraph",
      text: "Well-known problems that are solved with data structures and algorithms include the Fibonacci number series, the knapsack problem, all-pairs shortest paths (Floyd-Warshall), shortest paths (Dijkstra) and project scheduling. You will meet several of these in later courses.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Data = values; entity = something with attributes that have values.",
        "A data structure organises data in memory for efficient use; it is not a programming language.",
        "Efficiency is measured by time and space.",
        "Primitive: int, float, char, bool, pointer. Non-primitive: linear (array, list, stack, queue) and non-linear (tree, graph, heap, hash table).",
        "An ADT specifies the operations, not the implementation.",
        "The five basic algorithm categories: search, sort, insert, update, delete.",
      ],
    },
  ],
};

const arraysAndLists = {
  title: "Arrays and Lists",
  summary: "How arrays are stored, what insertion and deletion cost, the List abstract data type and simple Python list operations.",
  theory: [
    {
      type: "heading",
      text: "Arrays",
    },
    {
      type: "paragraph",
      text: "An array is a group of consecutive memory locations that share one name and one data type. A simple variable is a single memory location with its own name and type. An array is a collection of adjacent locations (called cells or elements) that have one collective name.",
    },
    {
      type: "paragraph",
      text: "In Python an array is kept in a list. For example x = [10, 20, 30, 40, 50, 60] creates six cells named x. The cells are numbered with consecutive integers starting from 0, and you reach a cell with the name and its index: x[0], x[1], x[2], x[3], x[4], x[5].",
    },
    {
      type: "math",
      lines: ["address of x[i] = base address + i * size of one element"],
      caption: "Because the cells are contiguous, the computer can jump straight to any element with this formula. That is why reading x[i] takes constant time.",
    },
    {
      type: "paragraph",
      text: "Reading and changing array cells in Python takes only a few lines:",
    },
    {
      type: "code",
      language: "python",
      code: `x = [10, 20, 30, 40, 50]

print(x[0])        # first element
print(x[4])        # last element
x[1] = 25          # change one value
print(x)
print(len(x))      # number of elements`,
    },
    {
      type: "code",
      language: "output",
      code: `10
50
[10, 25, 30, 40, 50]
5`,
    },
    {
      type: "subheading",
      text: "Inserting and deleting in an array",
    },
    {
      type: "paragraph",
      text: "Elements of an array sit side by side, so there is no free gap in the middle. To insert a value at position p, every element from p onwards must first move one place to the right. To delete the element at position p, every later element must move one place to the left to close the gap.",
    },
    {
      type: "list",
      items: [
        "Worst case: insert or delete at the beginning, because all n elements must shift.",
        "Best case: insert or delete at the end, because nothing has to shift.",
        "Reading or changing an element by its index is always fast (constant time).",
      ],
    },
    {
      type: "table",
      headers: ["Operation on an array","Time","Why"],
      rows: [
        ["Access by index","O(1)","Address is computed directly."],
        ["Search (unsorted)","O(n)","May have to look at every element."],
        ["Insert at the end","O(1)","Nothing to shift (if there is free space)."],
        ["Insert at the beginning or middle","O(n)","Elements must shift right."],
        ["Delete at the beginning or middle","O(n)","Elements must shift left."],
      ],
    },
    {
      type: "heading",
      text: "The List data structure",
    },
    {
      type: "paragraph",
      text: "The List is among the most generic of data structures. Real-life lists are everywhere: a shopping list, a grocery list, the people to invite to dinner, the presents to buy.",
    },
    {
      type: "list",
      items: [
        "A list is a collection of items that are all of the same type (grocery items, integers, names).",
        "The items, or elements, are stored in some particular order.",
        "New elements can be inserted into various positions, and any element can be removed.",
      ],
    },
    {
      type: "paragraph",
      text: "A list is a set of elements in a linear order. For example the values a1, a2, a3, a4 can be arranged as the list (a3, a1, a2, a4). Here a3 is the first element and a1 is the second. The order is important: it is an ordered collection, not just a random bag of values.",
    },
    {
      type: "subheading",
      text: "List operations",
    },
    {
      type: "table",
      headers: ["Operation","What it does"],
      rows: [
        ["createList()","Create a new (empty) list."],
        ["copy()","Set one list to be a copy of another."],
        ["clear()","Remove all elements from the list."],
        ["insert(X, position)","Insert element X at a particular position."],
        ["remove(position)","Remove the element at some position."],
        ["get(position)","Get the element at a given position."],
        ["update(X, position)","Replace the element at a given position with X."],
        ["find(X)","Determine whether the element X is in the list."],
        ["length()","Return the number of elements."],
      ],
      caption: "The List ADT operations from the lecture.",
    },
    {
      type: "paragraph",
      text: "We have to decide what \"a particular position\" means. There are two possibilities:",
    },
    {
      type: "list",
      items: [
        "Use the actual index of the element (insert after element 3, get element number 6). This is the approach taken by arrays.",
        "Use a \"current\" marker (pointer) that refers to one position in the list.",
      ],
    },
    {
      type: "paragraph",
      text: "If we use a current marker, four extra methods are useful:",
    },
    {
      type: "table",
      headers: ["Method","What it does"],
      rows: [
        ["start()","Move the current marker to the very first element."],
        ["tail()","Move the current marker to the very last element."],
        ["next()","Move the current position forward one element."],
        ["back()","Move the current position backward one element."],
      ],
    },
    {
      type: "subheading",
      text: "Simple list operations in Python",
    },
    {
      type: "paragraph",
      text: "A Python list is a ready-made dynamic array. Its methods map directly onto the List operations: append() and insert() add, remove() deletes, index() finds a value's position, and len() gives the length. For text, find() returns the position (or -1).",
    },
    {
      type: "code",
      language: "python",
      code: `items = ["milk", "eggs"]

items.append("bread")      # add at the end
items.insert(1, "rice")    # add at position 1
items.remove("eggs")       # remove by value
print(items)

print(items.index("bread"))   # find: position of a value
print("rice" in items)        # is it in the list?
print(len(items))             # how many items

word = "data structures"
print(word.find("struct"))    # find in text: position, or -1`,
    },
    {
      type: "code",
      language: "output",
      code: `['milk', 'rice', 'bread']
2
True
3
5`,
    },
    {
      type: "callout",
      variant: "note",
      title: "find() or index()?",
      text: "Text (strings) has find(), which returns -1 when nothing matches. A list has index() instead, which gives an error when the value is missing, so check with the word in first.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "An array is a block of consecutive cells with one name and one type; indexes start at 0.",
        "Array access is O(1); inserting or deleting near the start is O(n) because of shifting.",
        "A list is an ordered collection; the order matters.",
        "List operations: createList, copy, clear, insert, remove, get, update, find, length.",
        "Position can mean an index (arrays) or a current marker moved by start, tail, next and back.",
      ],
    },
  ],
};

const algorithmAnalysis = {
  title: "Algorithm Analysis: Time and Space Complexity",
  summary: "How to measure the cost of an algorithm: Big-O notation, time complexity, space complexity and five worked loop examples.",
  theory: [
    {
      type: "heading",
      text: "Why analyse algorithms?",
    },
    {
      type: "paragraph",
      text: "Two programs can solve the same problem and still behave very differently when the input becomes large. To compare them fairly we do not use a stopwatch, because the result depends on the computer, the language and what else is running. Instead we count how the number of basic steps grows as the input size n grows. This is called the complexity of the algorithm.",
    },
    {
      type: "list",
      items: [
        "Time complexity: how the running time (number of steps) grows with the input size n.",
        "Space complexity: how the extra memory needed grows with the input size n.",
      ],
    },
    {
      type: "heading",
      text: "Big-O notation",
    },
    {
      type: "paragraph",
      text: "Big-O notation describes an upper bound on the growth rate of an algorithm. When we write O(n^{2}) we mean \"the number of steps grows no faster than a constant times n^{2}\". Two simplifications make it easy to use:",
    },
    {
      type: "list",
      items: [
        "Drop constant factors: 3n and n/2 are both O(n).",
        "Keep only the fastest-growing term: n^{2} + 5n + 20 is O(n^{2}), because for large n the n^{2} term dominates.",
      ],
    },
    {
      type: "subheading",
      text: "Best, worst and average case",
    },
    {
      type: "paragraph",
      text: "For many algorithms the running time depends on the input itself, not only on its size. We therefore talk about three cases. For linear search, the best case is finding the item at the first position, the worst case is finding it at the last position (or not at all), and the average case is somewhere in between. Unless told otherwise, the complexity you are asked for is normally the worst case.",
    },
    {
      type: "subheading",
      text: "Common growth rates",
    },
    {
      type: "table",
      headers: ["Big-O","Name","Typical example"],
      rows: [
        ["O(1)","Constant","Reading arr[i]; push or pop on a stack"],
        ["O(log n)","Logarithmic","Binary search; a loop that halves its counter"],
        ["O(n)","Linear","Linear search; one loop over the data"],
        ["O(n log n)","Linearithmic","Merge sort; quick sort (average)"],
        ["O(n^{2})","Quadratic","Bubble, selection and insertion sort; two nested loops"],
        ["O(2^{n})","Exponential","Trying every subset of n items"],
      ],
      caption: "From fastest to slowest growth.",
    },
    {
      type: "table",
      headers: ["n","log n","n log n","n^{2}"],
      rows: [
        ["10","about 3","about 33","100"],
        ["100","about 7","about 664","10,000"],
        ["1,000","about 10","about 9,966","1,000,000"],
      ],
      caption: "Approximate number of steps (log base 2). Doubling n makes a quadratic algorithm four times slower, but a logarithmic one only one step slower.",
    },
    {
      type: "heading",
      text: "Time complexity: simple rules",
    },
    {
      type: "list",
      items: [
        "A single statement (assignment, comparison, arithmetic) takes constant time, O(1).",
        "Statements one after another: add their costs, then keep the largest term.",
        "A loop that runs n times with O(1) work inside costs O(n).",
        "Nested loops: multiply the number of iterations. Two loops of n iterations each cost O(n^{2}).",
        "A loop whose counter is halved (or doubled) each time runs about log n times.",
        "An if / else costs the more expensive of its two branches (in the worst case).",
      ],
    },
    {
      type: "heading",
      text: "Worked examples",
    },
    {
      type: "paragraph",
      text: "The following five examples come from the time-complexity worksheet, written as Python. Read each one and count how many times the loop body runs.",
    },
    {
      type: "subheading",
      text: "Example 1: a loop that skips every other value",
    },
    {
      type: "code",
      language: "python",
      code: `i = 0
while i < n:
    print(i)
    i = i + 1    # inside the body
    i = i + 1    # the loop's own step`,
    },
    {
      type: "paragraph",
      text: "The loop condition goes up to n, but i is increased twice in every round (once inside the body, once in the for statement). The body therefore runs only about n/2 times. The time complexity is O(n/2), which is the same as O(n), because constant factors are ignored.",
    },
    {
      type: "subheading",
      text: "Example 2: two nested loops",
    },
    {
      type: "code",
      language: "python",
      code: `for i in range(n):
    for j in range(n):
        print(i)`,
    },
    {
      type: "paragraph",
      text: "For one value of i, the inner loop runs n times. The outer loop has n values of i, so the body runs n x n = n^{2} times in total. The time complexity is O(n^{2}).",
    },
    {
      type: "subheading",
      text: "Example 3: halving the counter",
    },
    {
      type: "code",
      language: "python",
      code: `i = n
while i:
    print(i)
    i = i // 2`,
    },
    {
      type: "paragraph",
      text: "After every round the value of i becomes half of what it was: n, n/2, n/4, n/8, ... down to 1. The number of times you can halve n before reaching 1 is log₂(n), so the time complexity is O(log n).",
    },
    {
      type: "subheading",
      text: "Example 4: only decisions",
    },
    {
      type: "code",
      language: "python",
      code: `if i > j:
    if j > 23:
        print(j)
    else:
        print(i)`,
    },
    {
      type: "paragraph",
      text: "There are two conditional statements and each one costs O(1). Two constant costs add up to another constant, so the time complexity is O(1).",
    },
    {
      type: "subheading",
      text: "Example 5: a loop inside a loop that halves",
    },
    {
      type: "code",
      language: "python",
      code: `for i in range(n):
    j = 1
    while j < n:
        print(i)
        j = j * 2`,
    },
    {
      type: "paragraph",
      text: "The inner loop doubles j each time, so it runs about log n times. The outer loop runs n times. The total is n x log n, so the time complexity is O(n log n).",
    },
    {
      type: "heading",
      text: "Space complexity",
    },
    {
      type: "paragraph",
      text: "Space complexity measures how much extra memory an algorithm needs as the input grows. It is usually written in Big-O too. We normally count the auxiliary space (the extra variables, arrays and recursion stack the algorithm creates) and not the space that holds the input itself.",
    },
    {
      type: "table",
      headers: ["Algorithm","Extra space","Why"],
      rows: [
        ["Linear search","O(1)","Only a loop index and a few variables."],
        ["Selection, insertion and bubble sort","O(1)","Sort in place using a few temporary variables."],
        ["Sum of a list with a loop","O(1)","One running total."],
        ["Sum of a list with recursion","O(n)","n nested function calls wait on the call stack."],
        ["Merge sort","O(n)","Needs a temporary array to merge into."],
        ["Making a copy of a list","O(n)","New list of the same size."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Space complexity of linear search",
      text: "Linear search uses no extra space, so its space complexity is O(1). (The array itself takes O(n) space, but that is the input and is not counted as extra.)",
    },
    {
      type: "heading",
      text: "Practice questions",
    },
    {
      type: "paragraph",
      text: "Work each one out first, then read the answer under it.",
    },
    {
      type: "qa",
      question: "Q1. What is the time complexity of this code?",
      code: `for i in range(n):
    print(i)`,
      answer: "O(n). One loop of n iterations.",
    },
    {
      type: "qa",
      question: "Q2. What is the time complexity of this code?",
      code: `for i in range(n):
    for j in range(i):
        print(j)`,
      answer: "O(n^{2}). The inner loop runs 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 times, which is about n^{2}/2.",
    },
    {
      type: "qa",
      question: "Q3. What is the time complexity of this code?",
      code: `i = 1
while i < n:
    print(i)
    i = i * 3`,
      answer: "O(log n). i is multiplied by 3 each time, so the loop runs about log base 3 of n times, which is O(log n).",
    },
    {
      type: "qa",
      question: "Q4. What is the time complexity of this code?",
      code: `for i in range(n):
    print(i)
for j in range(n):
    print(j)`,
      answer: "O(n). Two loops one after the other: n + n = 2n, which is O(n). (Loops are added when they follow each other and multiplied only when they are nested.)",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Complexity describes how cost grows with n, not the exact time on one machine.",
        "Big-O: drop constants and lower-order terms.",
        "Order: O(1) < O(log n) < O(n) < O(n log n) < O(n^{2}) < O(2^{n}).",
        "Nested loops multiply; consecutive loops add; halving gives log n.",
        "Space complexity counts extra memory (including the recursion stack) but not the input.",
      ],
    },
  ],
};

const searching = {
  title: "Searching: Linear and Binary Search",
  summary: "Finding a value in an array: sequential (linear) search with its algorithm and complexity, and binary search on sorted data.",
  theory: [
    {
      type: "heading",
      text: "Searching in an array",
    },
    {
      type: "paragraph",
      text: "Searching is the process of finding the required data in an array. It becomes more important when the array is very large, because looking at every element one by one becomes slow. The two classic methods are:",
    },
    {
      type: "list",
      items: [
        "Sequential search, also called linear search.",
        "Binary search (needs a sorted array).",
      ],
    },
    {
      type: "heading",
      text: "Sequential (linear) search",
    },
    {
      type: "paragraph",
      text: "Sequential search is the simplest way to search an array for a desired value. You walk through the array from the first element and compare each element with the value you want. Loops are used to visit the elements.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Visit the first element of the array and compare it with the required value.",
        "If it matches, the search is complete.",
        "If it does not match, move to the next element and repeat the same process.",
        "If you reach the end of the array without a match, the value is not in the array.",
      ],
    },
    {
      type: "paragraph",
      text: "Example from the lecture: suppose we have a list of 100 numbers and want to know whether a particular number is in it. We keep the numbers in an array of size 100 and write a loop that compares every element with the number. The loop stops as soon as the number is found or when all the elements have been compared.",
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Start at the first item of the list.",
        "Compare it with the value you are looking for (the target).",
        "If they are equal, stop: the target is found at this position.",
        "If not, move to the next item and compare again.",
        "If you run out of items, the target is not in the list.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `LINEAR SEARCH (list, target)
  look at each item of the list, from the first to the last:
    if the item equals the target:
      return its position
  return "not found"`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "subheading",
      text: "Worked example",
    },
    {
      type: "paragraph",
      text: "Linear search simply walks along the list from the first item to the last. At every item it asks one question: is this the one I want? It stops as soon as the answer is yes. If it reaches the end, the target is not in the list. The example below uses the numbers from the lecture.",
    },
    {
      type: "paragraph",
      text: "Search for 33 in the array [56, 78, 33, 81, 12]. Compare 56 (no), then 78 (no), then 33 (yes). The value is found at index 2 after 3 comparisons. Searching for 99 would compare all 5 elements and then report \"not found\".",
    },
    {
      type: "steps",
      title: "Linear search: find 33 in [56, 78, 33, 81, 12]",
      indexes: true,
      steps: [
        {"text":"Look at index 0: the value is 56. It is not 33, so move on to the next item.","groups":[["56:c","78","33","81","12"]]},
        {"text":"Look at index 1: the value is 78. It is not 33, so move on to the next item.","groups":[["56","78:c","33","81","12"]]},
        {"text":"Look at index 2: the value is 33. That is the target 33, so we stop. Found at index 2, after 3 comparisons.","groups":[["56","78","33:f","81","12"]]},
      ],
    },
    {
      type: "subheading",
      text: "Python program for linear search",
    },
    {
      type: "code",
      language: "python",
      code: `arr = [2, 4, 6, 8, 10, 1]
key = 6
found = False

for i in range(len(arr)):
    if arr[i] == key:
        found = True
        print(f"Found successfully on index: {i}.")
        break
else:
    print(f"Not found: {found}")
`,
    },
    {
      type: "subheading",
      text: "Complexity of linear search",
    },
    {
      type: "table",
      headers: ["Case","Comparisons","Complexity"],
      rows: [
        ["Best case","The value is the first element: 1 comparison","O(1)"],
        ["Average case","About n / 2 comparisons","O(n)"],
        ["Worst case","The value is the last element, or is missing: n comparisons","O(n)"],
        ["Space (extra memory)","A loop index only","O(1)"],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "When to use it",
      text: "Linear search works on any array, sorted or not, and it is the right choice for short or unsorted data. For a large sorted array there is a much faster method: binary search.",
    },
    {
      type: "heading",
      text: "Binary search",
    },
    {
      type: "paragraph",
      text: "Binary search finds a value in a SORTED array by repeatedly cutting the search range in half. It compares the target with the middle element:",
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "The list must already be sorted.",
        "Look at the middle item.",
        "If it equals the target, stop: found.",
        "If the target is smaller, throw away the middle item and everything to its right, and repeat on the left half.",
        "If the target is bigger, throw away the middle item and everything to its left, and repeat on the right half.",
        "If no items are left, the target is not in the list.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `BINARY SEARCH (sorted list, target)
  while some items are still left to look at:
    find the middle item
    if the middle item equals the target:
      return its position
    if the target is smaller:
      keep only the items to the left of the middle
    otherwise:
      keep only the items to the right of the middle
  return "not found"`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "paragraph",
      text: "Binary search works like guessing a number between 1 and 100: you always guess the middle, and each answer (higher or lower) lets you throw away half of the numbers. That is why it is so fast. It only works if the list is sorted, because 'smaller than the middle' must really mean 'somewhere on the left'.",
    },
    {
      type: "paragraph",
      text: "Worked example: find 45 in [3, 9, 14, 22, 31, 45, 58, 67]. The first middle element is 22. Since 45 is larger, the left half is thrown away. The new middle is 45, so the search ends after only 2 comparisons. A linear search would have needed 6.",
    },
    {
      type: "steps",
      title: "Binary search: find 45 in [3, 9, 14, 22, 31, 45, 58, 67]",
      indexes: true,
      steps: [
        {"text":"Middle item (index 3) is 22. The target 45 is bigger, so throw away the left half.","groups":[["3","9","14","22:c","31","45","58","67"]]},
        {"text":"Middle item (index 5) is 45. It equals the target 45: found after 2 comparisons.","groups":[["3:d","9:d","14:d","22:d","31","45:f","58","67"]]},
      ],
    },
    {
      type: "subheading",
      text: "Python program for binary search",
    },
    {
      type: "code",
      language: "python",
      code: `arr = [1, 3, 5, 7, 9, 11]
key = 9
low = 0
high = len(arr) - 1

while low <= high:
    mid_index = (low + high) // 2
    if arr[mid_index] == key:
        print(f"Found successfully on index: {mid_index}.")
        break

    elif arr[mid_index] > key:
        high = mid_index - 1
    else:
        low = mid_index + 1
else:
    print("Not found.")
`,
    },
    {
      type: "paragraph",
      text: "Each comparison removes half of the remaining elements, so the number of comparisons is about log₂(n). For one million sorted elements, binary search needs at most about 20 comparisons, while linear search may need up to 1,000,000.",
    },
    {
      type: "table",
      headers: ["","Linear search","Binary search"],
      rows: [
        ["Array must be sorted?","No","Yes"],
        ["Best case","O(1)","O(1)"],
        ["Worst case","O(n)","O(log n)"],
        ["Extra space","O(1)","O(1) iterative, O(log n) recursive"],
        ["Best used for","Small or unsorted data","Large sorted data"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Common mistake",
      text: "Binary search on an array that is NOT sorted gives wrong answers. If the data is unsorted you must either sort it first (see the sorting chapters) or use linear search.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Linear search checks elements one by one: O(n) worst case, O(1) best case, O(1) extra space.",
        "Binary search halves the range each step: O(log n), but the array must be sorted.",
        "Linear search returns the index of the first match (or -1 if none).",
      ],
    },
  ],
};

const selectionSort = {
  title: "Sorting and Selection Sort",
  summary: "What sorting is, the vocabulary of sorting algorithms, and a full explanation of selection sort with a step-by-step example.",
  theory: [
    {
      type: "heading",
      text: "What is sorting?",
    },
    {
      type: "paragraph",
      text: "Sorting takes an unordered collection and makes it an ordered one. For numbers the usual order is ascending (smallest first), for example 5, 12, 35, 42, 77, 101, but it can also be descending, or alphabetical for names.",
    },
    {
      type: "paragraph",
      text: "Sorted data is much easier to work with: a sorted array can be searched with binary search in O(log n), duplicates sit next to each other, and the smallest and largest values are at the ends. That is why sorting is one of the most studied problems in computer science.",
    },
    {
      type: "subheading",
      text: "Words you will meet",
    },
    {
      type: "table",
      headers: ["Term","Meaning"],
      rows: [
        ["Comparison-based","The algorithm decides the order by comparing two elements at a time."],
        ["In-place","The algorithm sorts inside the original array and needs only O(1) extra memory."],
        ["Stable","Elements with equal keys stay in the same relative order after sorting."],
        ["Pass","One complete sweep of the algorithm over the array (or the part that is still unsorted)."],
      ],
    },
    {
      type: "paragraph",
      text: "This chapter and the next two cover the three simple quadratic sorts: selection sort, insertion sort and bubble sort. Chapter 8 then covers the faster merge sort and quick sort.",
    },
    {
      type: "heading",
      text: "Selection sort",
    },
    {
      type: "paragraph",
      text: "Selection sort is an in-place, comparison-based algorithm. It divides the list into two parts: the sorted part at the left end and the unsorted part at the right end. At the start the sorted part is empty and the unsorted part is the whole list.",
    },
    {
      type: "paragraph",
      text: "In each pass the algorithm SELECTS the smallest element of the unsorted part and swaps it with the first element of the unsorted part. The sorted part then grows by one element, and the unsorted part shrinks by one.",
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Think of the list as two parts: a sorted part on the left (empty at the start) and an unsorted part on the right.",
        "Look through the unsorted part and find the smallest item.",
        "Swap that smallest item with the first item of the unsorted part.",
        "The sorted part is now one item longer. Repeat from step 2.",
        "Stop when only one item is left: the list is sorted.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `SELECTION SORT (list)
  repeat until the unsorted part has only one item:
    find the smallest item in the unsorted part
    swap it with the first item of the unsorted part
    the sorted part grows by one item`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "subheading",
      text: "Worked example (from the lecture)",
    },
    {
      type: "paragraph",
      text: "Selection sort keeps two parts: a sorted part on the left (shown in green) and an unsorted part on the right. In every pass it SELECTS the smallest item of the unsorted part and swaps it to the front of that part, so the green part grows by one item each pass. In the boxes below, the blue box is the smallest item and the yellow box is the position it will be swapped into.",
    },
    {
      type: "paragraph",
      text: "Sort [56, 78, 33, 81, 12]. The bar | separates the sorted part (left) from the unsorted part (right).",
    },
    {
      type: "table",
      headers: ["Pass","Unsorted part searched","Smallest found","Array after the swap"],
      rows: [
        ["Start","56, 78, 33, 81, 12","-","56 78 33 81 12"],
        ["1","56, 78, 33, 81, 12","12 (index 4)","12 | 78 33 81 56"],
        ["2","78, 33, 81, 56","33 (index 2)","12 33 | 78 81 56"],
        ["3","78, 81, 56","56 (index 4)","12 33 56 | 81 78"],
        ["4","81, 78","78 (index 4)","12 33 56 78 | 81"],
      ],
      caption: "Four passes sort five elements: the last element is automatically in the right place.",
    },
    {
      type: "paragraph",
      text: "With n elements, selection sort needs n - 1 passes. After the last pass the last element is already correct, so no further pass is needed.",
    },
    {
      type: "slides",
      title: "Lecture slides: selection sort example",
      pages: [
        {"src":"/notes/semester-3/data-structure/examples/slides/selection-01.webp","alt":"Selection sort example, slide 1","width":1334,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/selection-02.webp","alt":"Selection sort example, slide 2","width":1334,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/selection-03.webp","alt":"Selection sort example, slide 3","width":1334,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/selection-04.webp","alt":"Selection sort example, slide 4","width":1334,"height":750},
        
      ],
    },
    {
      type: "steps",
      title: "Selection sort: [56, 78, 33, 81, 12]",
      steps: [
        {"text":"Pass 1: the smallest of the unsorted part is 12. Swap it with 56, the first unsorted item.","groups":[["56:c","78","33","81","12:p"]]},
        {"text":"Pass 2: the smallest of the unsorted part is 33. Swap it with 78, the first unsorted item.","groups":[["12:s","78:c","33:p","81","56"]]},
        {"text":"Pass 3: the smallest of the unsorted part is 56. Swap it with 78, the first unsorted item.","groups":[["12:s","33:s","78:c","81","56:p"]]},
        {"text":"Pass 4: the smallest of the unsorted part is 78. Swap it with 81, the first unsorted item.","groups":[["12:s","33:s","56:s","81:c","78:p"]]},
        {"text":"Only one item is left, and it is in the right place. The list is sorted.","groups":[["12:s","33:s","56:s","78:s","81:s"]]},
      ],
    },
    {
      type: "subheading",
      text: "Python program for selection sort",
    },
    {
      type: "code",
      language: "python",
      code: `arr = [12, 3, 15, 70, 2, 1]
n = len(arr)

for i in range(n):
    min_value = i

    for j in range(i, n):
        if arr[j] < arr[min_value]:
            min_value = j
    arr[i], arr[min_value] = arr[min_value], arr[i]

print(f"Sorted array: {arr}.")
`,
    },
    {
      type: "subheading",
      text: "Complexity of selection sort",
    },
    {
      type: "table",
      headers: ["","Value","Reason"],
      rows: [
        ["Comparisons","n(n-1)/2 in every case","(n-1) + (n-2) + ... + 1, whatever the input order."],
        ["Swaps","At most n - 1","One swap per pass."],
        ["Best, average and worst time","O(n^{2})","The inner loop always scans the whole unsorted part."],
        ["Extra space","O(1)","In-place: only a few variables."],
        ["Stable?","No (the usual swap version)","Swapping can jump an element over an equal one."],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "When is selection sort a good choice?",
      text: "It does very few swaps (at most n - 1), so it is useful when writing to memory is expensive. For large inputs it is too slow because it always does about n^{2} / 2 comparisons.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Sorting arranges elements in order; sorted data makes searching fast.",
        "Selection sort: repeatedly find the minimum of the unsorted part and swap it to the front.",
        "n - 1 passes; n(n-1)/2 comparisons; at most n - 1 swaps.",
        "O(n^{2}) in best, average and worst case; O(1) extra space; in-place; not stable.",
      ],
    },
  ],
};

const insertionSort = {
  title: "Insertion Sort",
  summary: "Building a sorted list one element at a time, like sorting playing cards in your hand, with a worked trace and complexity.",
  theory: [
    {
      type: "heading",
      text: "The idea",
    },
    {
      type: "paragraph",
      text: "Insertion sort works the way most people sort playing cards. You hold the cards you have already sorted in one hand, take the next card from the table, and slide it into the correct place among the cards in your hand.",
    },
    {
      type: "paragraph",
      text: "The array is again divided into a sorted part (on the left) and an unsorted part (on the right). We start by assuming that the very first element is already sorted. In each step we take the next element, called the key, and insert it into its correct position in the sorted part by shifting the larger elements one place to the right.",
    },
    {
      type: "heading",
      text: "How it works, step by step",
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Treat the first item as a sorted list of one.",
        "Take the next item. Call it the KEY.",
        "Compare the KEY with the items on its left, starting from the one next to it.",
        "Every item that is bigger than the KEY moves one place to the right.",
        "Put the KEY into the gap that is left.",
        "Repeat with the next item until every item has been inserted.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `INSERTION SORT (list)
  for each item after the first:
    hold this item as the KEY
    while the item on the left of the KEY is bigger:
      move that bigger item one place to the right
    put the KEY in the gap`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "subheading",
      text: "Worked example",
    },
    {
      type: "paragraph",
      text: "Insertion sort works like sorting playing cards in your hand. The cards on the left are already in order (green). You pick up the next card (the yellow KEY), slide it left past every bigger card, and drop it into its place. In the lecture slides the arrows show how far each KEY travels.",
    },
    {
      type: "paragraph",
      text: "Sort [22, 41, 63, 14, 55, 36] (the array used in the lecture's picture). The bar | separates the sorted part from the rest.",
    },
    {
      type: "slides",
      title: "Lecture slides: insertion sort examples",
      pages: [
        {"src":"/notes/semester-3/data-structure/examples/slides/insertion-01.webp","alt":"Insertion sort example, slide 1","width":1334,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/insertion-02.webp","alt":"Insertion sort example, slide 2","width":1334,"height":750},
      ],
    },
    {
      type: "steps",
      title: "Insertion sort: [22, 41, 63, 14, 55, 36]",
      steps: [
        {"text":"Start: the first item, 22, counts as a sorted list of one.","groups":[["22:s","41","63","14","55","36"]]},
        {"text":"Take 41. It is not smaller than the item on its left, so it stays where it is.","groups":[["22:s","41:m","63","14","55","36"]]},
        {"text":"Take 63. It is not smaller than the item on its left, so it stays where it is.","groups":[["22:s","41:s","63:m","14","55","36"]]},
        {"text":"Take 14. The bigger items 22, 41, 63 each move one place right, and 14 drops into the gap.","groups":[["14:m","22:s","41:s","63:s","55","36"]]},
        {"text":"Take 55. The bigger item 63 moves one place right, and 55 drops into the gap.","groups":[["14:s","22:s","41:s","55:m","63:s","36"]]},
        {"text":"Take 36. The bigger items 41, 55, 63 each move one place right, and 36 drops into the gap.","groups":[["14:s","22:s","36:m","41:s","55:s","63:s"]]},
        {"text":"Every item has been inserted. The list is sorted.","groups":[["14:s","22:s","36:s","41:s","55:s","63:s"]]},
      ],
    },
    {
      type: "paragraph",
      text: "Look at the step \"insert 14\": the elements 63, 41 and 22 are all larger than 14, so each of them moves one place to the right and 14 lands at the front. When the key is already larger than its left neighbour, as with 41 and 63 here, no shifting is needed and the step costs just one comparison.",
    },
    {
      type: "subheading",
      text: "Python program for insertion sort",
    },
    {
      type: "code",
      language: "python",
      code: `arr = [12, 3, 15, 70, 2, 1]
n = len(arr)

for i in range(1, n):
    key = arr[i]
    j = i - 1
    while arr[j] > key and j >= 0:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
print(f"Sorted array: {arr}.")
`,
    },
    {
      type: "heading",
      text: "Time complexity",
    },
    {
      type: "paragraph",
      text: "The cost depends on the order of the input:",
    },
    {
      type: "list",
      items: [
        "Worst case (array in reverse order): every key moves all the way to the front. Inserting the 2nd element takes 1 comparison, the 3rd takes 2, ... the n-th takes n-1. The total is 1 + 2 + ... + (n-1) = n(n-1)/2 comparisons, which is O(n^{2}).",
        "Best case (array already sorted): each key is compared once and never moves, so the total is n - 1 comparisons, which is O(n).",
        "Average case: about half of the worst case, still O(n^{2}).",
      ],
    },
    {
      type: "paragraph",
      text: "The lecture counts both the comparisons and the swaps (shifts): in the first pass n-1 comparisons and at most n-1 swaps, in the second n-2 and n-2, and so on. That gives 2 x (1 + 2 + ... + (n-1)) = n(n-1) operations in total. Whether you count n(n-1)/2 or n(n-1), the growth is the same: O(n^{2}).",
    },
    {
      type: "table",
      headers: ["","Value"],
      rows: [
        ["Best case time","O(n): already sorted data"],
        ["Average and worst case time","O(n^{2})"],
        ["Extra space","O(1): sorts in place"],
        ["Stable?","Yes: an element is only moved past strictly larger ones"],
        ["Good for","Small arrays and arrays that are already nearly sorted"],
      ],
    },
    {
      type: "paragraph",
      text: "Because insertion sort is stable, records with equal keys stay in their original order. For example, if you sort students by marks, two students with the same marks keep the order they had before.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Take the next element (the key) and insert it into the sorted part on its left, shifting larger elements right.",
        "Worst case O(n^{2}) (reverse order); best case O(n) (already sorted); extra space O(1).",
        "Stable and in-place; excellent for small or nearly sorted data.",
        "Compared with selection sort: insertion sort does fewer comparisons on sorted data but more moves; selection sort always does n(n-1)/2 comparisons.",
      ],
    },
  ],
};

const bubbleSort = {
  title: "Bubble Sort",
  summary: "Repeatedly swapping neighbouring elements so that the largest values bubble up to the end, including the early-exit improvement.",
  theory: [
    {
      type: "heading",
      text: "The idea",
    },
    {
      type: "paragraph",
      text: "Bubble sort, also called exchange sort, repeatedly visits the array and compares two neighbouring items at a time. It swaps them if they are in the wrong order (the first is greater than the second). It keeps making passes over the array until the array is sorted.",
    },
    {
      type: "subheading",
      text: "\"Bubbling up\" the largest element",
    },
    {
      type: "paragraph",
      text: "Traverse the collection from the front to the end. At each position compare the pair (A[index], A[index + 1]) and swap if A[index] is bigger. Because a big value keeps being swapped forward as long as it meets smaller values, the largest element of the whole array is carried (bubbled) all the way to the last position in one pass. After that pass the largest value is in its correct place, but the other values are still out of order, so we repeat the process.",
    },
    {
      type: "subheading",
      text: "How many passes?",
    },
    {
      type: "list",
      items: [
        "With N elements, each pass puts one more element in its final place at the right end. So we need N - 1 passes to guarantee that all N elements are in place (the last remaining element is automatically correct).",
        "Reducing the comparisons: after the k-th pass, the last k elements are already correct, so the k-th pass only needs N - k comparisons. For example, in the 4th pass of a 6-element array only 2 comparisons are needed.",
      ],
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Start at the left end and compare the first two neighbouring items.",
        "If the left one is bigger, swap them. Then move one place right and compare the next pair.",
        "Keep going to the end of the list. The biggest item has now bubbled to the end.",
        "Repeat the whole pass, stopping one place earlier each time.",
        "If a full pass makes no swap at all, the list is sorted: stop.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `BUBBLE SORT (list)
  repeat:
    go through the list, comparing each pair of neighbours:
      if the left one is bigger than the right one:
        swap them
  until a whole pass makes no swap`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "paragraph",
      text: "Swap is not built in. You need a temporary variable: temp <- a; a <- b; b <- temp. (In Python you can write a, b = b, a.)",
    },
    {
      type: "heading",
      text: "Stopping early with a flag",
    },
    {
      type: "paragraph",
      text: "What if the collection was already sorted, or only a few elements were out of place and a couple of passes were enough? The plain version would still do all N - 1 passes. We want to detect this and stop early.",
    },
    {
      type: "paragraph",
      text: "Use a boolean variable, did_swap, that records whether any swap happened during a pass. It is reset to false at the start of each pass. If a full pass finishes without a single swap, every neighbouring pair is in order, so the collection is sorted and we can stop.",
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "paragraph",
      text: "Bubble sort compares neighbours and swaps them when they are in the wrong order. After one pass the biggest value has been carried to the end, so each pass fixes one more item on the right (green). We use a small list so that every swap is easy to follow. In the lecture slides the list is longer, but the idea is the same.",
    },
    {
      type: "paragraph",
      text: "Sort [5, 1, 4, 2, 8]. Pass 1 is shown comparison by comparison; later passes are shown in one box each.",
    },
    {
      type: "slides",
      title: "Lecture slides: bubble sort examples",
      pages: [
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-01.webp","alt":"Bubble sort example, slide 1","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-02.webp","alt":"Bubble sort example, slide 2","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-03.webp","alt":"Bubble sort example, slide 3","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-04.webp","alt":"Bubble sort example, slide 4","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-05.webp","alt":"Bubble sort example, slide 5","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/bubble-06.webp","alt":"Bubble sort example, slide 6","width":1000,"height":750},
      ],
    },
    {
      type: "steps",
      title: "Bubble sort: [5, 1, 4, 2, 8]",
      steps: [
        {"text":"Start. We will compare neighbours, left to right, and swap when the left one is bigger.","groups":[["5","1","4","2","8"]]},
        {"text":"Pass 1: compare 5 and 1. 5 is bigger, so swap them.","groups":[["5:c","1:c","4","2","8"]]},
        {"text":"Pass 1: compare 5 and 4. 5 is bigger, so swap them.","groups":[["1","5:c","4:c","2","8"]]},
        {"text":"Pass 1: compare 5 and 2. 5 is bigger, so swap them.","groups":[["1","4","5:c","2:c","8"]]},
        {"text":"Pass 1: compare 5 and 8. They are in order, so leave them.","groups":[["1","4","2","5:c","8:c"]]},
        {"text":"End of pass 1: the largest value, 8, has bubbled to the end and is in its final place.","groups":[["1","4","2","5","8:s"]]},
        {"text":"Pass 2: swaps made: 4 and 2. The next largest value is now in its final place.","groups":[["1","2","4","5:s","8:s"]]},
        {"text":"Pass 3: no swaps at all, so the list is already sorted. We stop early.","groups":[["1:s","2:s","4:s","5:s","8:s"]]},
      ],
    },
    {
      type: "paragraph",
      text: "Notice that pass 3 makes no swap, so the algorithm knows the list is sorted and stops after 3 passes instead of the maximum of 4. This is the early-exit flag described above.",
    },
    {
      type: "subheading",
      text: "Python program for bubble sort",
    },
    {
      type: "code",
      language: "python",
      code: `arr = [12, 3, 15, 70, 2, 1]
n = len(arr)

for i in range(n - 1):
    for j in range(n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(f"Sorted array: {arr}.")
`,
    },
    {
      type: "subheading",
      text: "Complexity of bubble sort",
    },
    {
      type: "table",
      headers: ["","Value","Reason"],
      rows: [
        ["Worst and average case","O(n^{2})","About n(n-1)/2 comparisons and, for reversed data, as many swaps."],
        ["Best case","O(n) with the flag","One pass with no swaps. Without the flag it is still O(n^{2})."],
        ["Extra space","O(1)","In-place: only the swap variable."],
        ["Stable?","Yes","Equal neighbours are never swapped (the test is strictly greater)."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "The lecture's honest warning",
      text: "The lecture slides end with \"Truth in CS: nobody ever uses bubble sort, because it is extremely inefficient.\" Bubble sort is taught because it is easy to understand and shows the idea of repeated passes, not because it is used in real programs. For real work use a faster algorithm such as merge sort or quick sort (next chapter), or the sort built into your language.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Compare neighbours and swap if out of order; the largest value bubbles to the end each pass.",
        "At most N - 1 passes; the k-th pass needs only N - k comparisons.",
        "A did_swap flag lets the algorithm stop as soon as a pass makes no swaps.",
        "O(n^{2}) worst and average; O(n) best with the flag; O(1) extra space; stable.",
      ],
    },
  ],
};

const mergeAndQuickSort = {
  title: "Merge Sort and Quick Sort",
  summary: "The divide-and-conquer sorting algorithms that reach O(n log n): how merge sort splits and merges, how quick sort partitions around a pivot, and a comparison of all five sorts.",
  theory: [
    {
      type: "heading",
      text: "Divide and conquer",
    },
    {
      type: "paragraph",
      text: "Bubble, selection and insertion sort all take about n^{2} steps, which is too slow for large data. The faster sorting algorithms use a strategy called divide and conquer. It cuts the problem in half (or into parts) each time and uses the results of both parts:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Divide: cut the problem in half until the problem is trivial (an array of 0 or 1 elements is already sorted).",
        "Conquer: solve the smaller problems (recursively).",
        "Combine: put the solutions of the parts together into the solution of the whole problem.",
      ],
    },
    {
      type: "heading",
      text: "Merge sort",
    },
    {
      type: "paragraph",
      text: "Merge sort is a divide-and-conquer algorithm. It divides the unsorted array into two halves, again and again, until each sub-array contains only one element. Then it merges the sorted sub-arrays back together:",
    },
    {
      type: "list",
      items: [
        "Compare the first (leading) elements of the two sub-arrays.",
        "Remove the smaller element and put it into the result array.",
        "Continue until all the elements have been put into the result array. When one sub-array becomes empty, copy the rest of the other one.",
      ],
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "If the list has 0 or 1 item, it is already sorted: stop.",
        "Split the list into a left half and a right half.",
        "Sort the left half by using the same method again.",
        "Sort the right half by using the same method again.",
        "Merge the two sorted halves: compare their front items, take the smaller one, and repeat until both halves are used up.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `MERGE SORT (list)
  if the list has 0 or 1 item:
    return the list
  split the list into a left half and a right half
  sort the left half with MERGE SORT
  sort the right half with MERGE SORT
  merge the two sorted halves into one sorted list
  return it`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "subheading",
      text: "Worked example (from the lecture)",
    },
    {
      type: "paragraph",
      text: "Merge sort has two phases. First it SPLITS the list in halves again and again until every part has one item (a single item is already sorted). Then it MERGES the parts back together: when two sorted parts are merged, the smaller front item is taken each time, so the result is sorted too. The lecture slides show the splitting and merging of an 8-item list; the boxes below do the same with a smaller list.",
    },
    {
      type: "slides",
      title: "Lecture slides: merge sort example",
      pages: [
        {"src":"/notes/semester-3/data-structure/examples/slides/merge-01.webp","alt":"Merge sort example, slide 1","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/merge-02.webp","alt":"Merge sort example, slide 2","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/merge-03.webp","alt":"Merge sort example, slide 3","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/merge-04.webp","alt":"Merge sort example, slide 4","width":1000,"height":750},
        {"src":"/notes/semester-3/data-structure/examples/slides/merge-05.webp","alt":"Merge sort example, slide 5","width":1000,"height":750},
      ],
    },
    {
      type: "steps",
      title: "Merge sort: [9, 4, 7, 2, 8, 3]",
      steps: [
        {"text":"Start with the whole list.","groups":[["9","4","7","2","8","3"]]},
        {"text":"Split every part with more than one item into two halves.","groups":[["9","4","7"],["2","8","3"]]},
        {"text":"Split every part with more than one item into two halves.","groups":[["9","4"],["7"],["2","8"],["3"]]},
        {"text":"Keep splitting until every part holds a single item. One item is already sorted.","groups":[["9"],["4"],["7"],["2"],["8"],["3"]]},
        {"text":"Merge neighbouring parts: repeatedly take the smaller of the two front items.","groups":[["4","9"],["7"],["2","8"],["3"]]},
        {"text":"Merge neighbouring parts: repeatedly take the smaller of the two front items.","groups":[["4","7","9"],["2","3","8"]]},
        {"text":"Merge the last two sorted halves: always take the smaller of the two front items. The whole list is sorted.","groups":[["2:s","3:s","4:s","7:s","8:s","9:s"]]},
      ],
    },
    {
      type: "subheading",
      text: "Complexity of merge sort",
    },
    {
      type: "paragraph",
      text: "Halving the array repeatedly gives log₂(n) levels (for 8 elements: 3 levels). At every level the merging touches each of the n elements once, so each level costs about n steps. The total is n x log₂(n) steps: O(n log n) in the best, average and worst case. The price is memory: merging needs a temporary array of size n, so the extra space is O(n).",
    },
    {
      type: "heading",
      text: "Quick sort",
    },
    {
      type: "paragraph",
      text: "Quick sort is also divide and conquer, but it does its work BEFORE the recursive calls instead of after them:",
    },
    {
      type: "subheading",
      text: "Algorithm (steps in words)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "If the list has 0 or 1 item, it is already sorted: stop.",
        "Choose one item as the PIVOT (we use the last item).",
        "Put every item smaller than the pivot on its left, and every bigger item on its right. The pivot is now in its final place.",
        "Sort the left part by using the same method again.",
        "Sort the right part by using the same method again.",
      ],
    },
    {
      type: "subheading",
      text: "Pseudocode",
    },
    {
      type: "code",
      language: "pseudocode",
      code: `QUICK SORT (list)
  if the list has 0 or 1 item:
    return the list
  choose the last item as the PIVOT
  make a LEFT part with the items smaller than the pivot
  make a RIGHT part with the items bigger than the pivot
  QUICK SORT the LEFT part
  QUICK SORT the RIGHT part
  the result is: LEFT part, then the pivot, then RIGHT part`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Learn the algorithm OR the pseudocode",
      text: "The algorithm (steps in plain words) and the pseudocode (steps written like a program) say exactly the same thing. Learn whichever one you find easier: you do not need to learn both. Your teacher may ask for either one.",
    },
    {
      type: "paragraph",
      text: "There is no merging step, because after partitioning the parts are already in the right places relative to each other. Quick sort sorts in place (no big temporary array).",
    },
    {
      type: "paragraph",
      text: "Quick sort picks a pivot and uses it to split the list: smaller items go left, bigger items go right. After that split the pivot never has to move again. The same trick is then used on the left part and on the right part. In the boxes below, the blue box is the pivot and green boxes are items that are already in their final place.",
    },
    {
      type: "steps",
      title: "Quick sort: [8, 3, 7, 1, 5, 6]",
      steps: [
        {"text":"Start. The pivot will always be the last item of a part: here it is 6.","groups":[["8","3","7","1","5","6:p"]]},
        {"text":"Round 1: pivot 6: smaller items 3, 1, 5 go left, bigger items 8, 7 go right.","groups":[["3","1","5:p"],["6:s"],["8","7:p"]]},
        {"text":"Round 2: pivot 5: smaller items 3, 1 go left, bigger items (none) go right; pivot 7: smaller items (none) go left, bigger items 8 go right.","groups":[["3","1:p"],["5:s"],["6:s"],["7:s"],["8:s"]]},
        {"text":"Round 3: pivot 1: smaller items (none) go left, bigger items 3 go right. Every item is now in its final place.","groups":[["1:s"],["3:s"],["5:s"],["6:s"],["7:s"],["8:s"]]},
      ],
    },
    {
      type: "paragraph",
      text: "Because the pivot is placed correctly in every round, the rounds keep shrinking the parts until each part has one item. Quick sort then needs no merging step at all.",
    },
    {
      type: "subheading",
      text: "Complexity of quick sort",
    },
    {
      type: "list",
      items: [
        "Best and average case: O(n log n). The pivot splits the array into two parts of similar size, giving about log n levels with about n work per level.",
        "Worst case: O(n^{2}). If the pivot is always the smallest or the largest element (for example an already sorted array with the last element as pivot), one part is empty and the other has n - 1 elements, so there are n levels.",
        "Extra space: O(log n) for the recursion on average (O(n) in the worst case).",
        "Not stable, but in-place and usually very fast in practice. Choosing a random pivot or the median of three values makes the worst case very unlikely.",
      ],
    },
    {
      type: "heading",
      text: "Comparing the five sorting algorithms",
    },
    {
      type: "table",
      headers: ["Algorithm","Best","Average","Worst","Extra space","Stable?"],
      rows: [
        ["Selection sort","O(n^{2})","O(n^{2})","O(n^{2})","O(1)","No"],
        ["Insertion sort","O(n)","O(n^{2})","O(n^{2})","O(1)","Yes"],
        ["Bubble sort (with flag)","O(n)","O(n^{2})","O(n^{2})","O(1)","Yes"],
        ["Merge sort","O(n log n)","O(n log n)","O(n log n)","O(n)","Yes"],
        ["Quick sort","O(n log n)","O(n log n)","O(n^{2})","O(log n)","No"],
      ],
      caption: "Time complexity is for the number of comparisons; n is the number of elements.",
    },
    {
      type: "paragraph",
      text: "In practice, Python's built-in sorted() and list.sort() use Timsort, a hybrid of merge sort and insertion sort. Use them in real programs, and use the algorithms in these chapters to understand how sorting works and to answer exam questions.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Divide and conquer: split, solve the parts, combine.",
        "Merge sort: split in half until size 1, then merge sorted halves. O(n log n) always; O(n) extra space; stable.",
        "Quick sort: partition around a pivot, then sort both sides. O(n log n) average, O(n^{2}) worst; in place; not stable.",
        "Merge sort has a guaranteed running time; quick sort is usually faster in practice.",
      ],
    },
  ],
};

const linkedLists = {
  title: "Linked Lists",
  summary: "Linked memory and the singly linked list, then the doubly and circular linked lists, and array versus linked list.",
  theory: [
    {
      type: "heading",
      text: "Why linked lists?",
    },
    {
      type: "paragraph",
      text: "An array needs one block of consecutive memory with a size that is fixed in advance. Inserting or deleting in the middle forces many elements to shift. A linked list removes both problems: its elements can be stored anywhere in memory, it can grow and shrink while the program runs, and inserting or deleting does not shift anything. It simply changes a few links.",
    },
    {
      type: "heading",
      text: "Linked memory: nodes and pointers",
    },
    {
      type: "paragraph",
      text: "A linked list is a chain of nodes. Every node holds two things: a data value and a pointer (a link) to the next node. A separate pointer called head holds the address of the first node. The last node has no successor, so its next pointer holds NULL (None in Python).",
    },
    {
      type: "paragraph",
      text: "The lecture's \"actual picture in memory\" shows the list 2, 6, 8, 7, 1. The nodes are scattered over memory: each node uses two neighbouring cells, one for the value and one for the address of the next node.",
    },
    {
      type: "table",
      headers: ["Node address","Value","Next (address)"],
      rows: [
        ["1054 (first node, head points here)","2","1051"],
        ["1051","6","1063"],
        ["1063","8","1057"],
        ["1057","7","1060"],
        ["1060 (last node)","1","0 (NULL)"],
      ],
      caption: "Following the next pointers from the head visits the nodes in order: 2, 6, 8, 7, 1, even though the nodes are not next to each other in memory.",
    },
    {
      type: "paragraph",
      text: "The lecture uses two more pointers while working with the list: current marks the node we are working at, and lastCurrent marks the node just before it (needed for deleting).",
    },
    {
      type: "heading",
      text: "The singly linked list",
    },
    {
      type: "paragraph",
      text: "In a singly linked list each node has only a next pointer, so you can walk forward only. The lecture builds it from two classes:",
    },
    {
      type: "list",
      items: [
        "Node: holds one object (the value) and a pointer nextNode, with the methods get(), set(value), getNext() and setNext(node).",
        "List: holds headNode, currentNode, lastCurrentNode and size, with the methods add(), get(), next() and so on.",
      ],
    },
    {
      type: "subheading",
      text: "add(x): inserting after the current node",
    },
    {
      type: "paragraph",
      text: "To add(9) the list first creates a new node holding 9. Then it links the new node in two steps: the new node points to whatever the current node pointed to, and then the current node points to the new node. The new node becomes current and size increases by one. If the list is empty, the head node points to the new node instead.",
    },
    {
      type: "paragraph",
      text: "Because add() inserts after the current node and makes the new node current, calling add(2), add(6), add(8), add(7), add(1) one after another builds the list 2, 6, 8, 7, 1, exactly as in the lecture's \"Building a Linked List\" slides.",
    },
    {
      type: "subheading",
      text: "Complexity of singly linked list operations",
    },
    {
      type: "table",
      headers: ["Operation","Time","Note"],
      rows: [
        ["add() after the current node","O(1)","Only two pointers change."],
        ["Insert at the front","O(1)","Use the head pointer."],
        ["Remove the current node","O(1)","Needs lastCurrent so we can bypass it."],
        ["Remove the last node","O(n)","We must walk to the node before the last one."],
        ["Search for a value","O(n)","Start at the head and follow the links."],
        ["Get the k-th element","O(n)","No direct index: we must walk k steps."],
      ],
    },
    {
      type: "subheading",
      text: "Python program for the singly linked list",
    },
    {
      type: "code",
      language: "python",
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

n1 = Node(10)
n2 = Node(20)
n3 = Node(30)

n1.next = n2
n2.next = n3
temp = n1

while temp is not None:
    print(temp.data)
    temp = temp.next
`,
    },
    {
      type: "heading",
      text: "The doubly linked list",
    },
    {
      type: "paragraph",
      text: "In a doubly linked list every node has two pointers: next (to the following node) and prev (to the previous node). The list keeps a head pointer to the first node and usually a tail pointer to the last node.",
    },
    {
      type: "list",
      items: [
        "You can walk both forward and backward.",
        "A node can be deleted in O(1) when you hold a pointer to it, because it knows its own predecessor (a singly linked list has to search for it).",
        "Inserting or deleting at the tail is O(1) because of the tail pointer.",
        "The price: one extra pointer per node, and more links to update on every change.",
      ],
    },
    {
      type: "subheading",
      text: "Python program for the doubly linked list",
    },
    {
      type: "code",
      language: "python",
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

n1 = Node(10)
n2 = Node(20)
n3 = Node(30)

n1.next = n2
n2.prev = n1
n2.next = n3
n3.prev = n2
temp = n1

while temp is not None:
    print(temp.data)
    temp = temp.next
`,
    },
    {
      type: "heading",
      text: "The circular linked list",
    },
    {
      type: "paragraph",
      text: "In a circular linked list the last node does not point to NULL. It points back to the first node, so the nodes form a ring. You can start at any node and, by following next, return to where you started. There is no \"end\" of the list, so a traversal has to stop when it gets back to the starting node.",
    },
    {
      type: "paragraph",
      text: "Circular lists are used when the problem is naturally a cycle: players taking turns in a game, a round-robin scheduler that gives each process a time slice in turn, or a playlist that repeats.",
    },
    {
      type: "subheading",
      text: "Python program for the circular linked list",
    },
    {
      type: "code",
      language: "python",
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

n1 = Node(10)
n2 = Node(20)
n3 = Node(30)

n1.next = n2
n2.next = n3
n3.next = n1
temp = n1

for i in range(3): # using for loop so that it don't run for infinitely
    print(temp.data)
    temp = temp.next
`,
    },
    {
      type: "heading",
      text: "Array versus linked list",
    },
    {
      type: "table",
      headers: ["","Array","Linked list"],
      rows: [
        ["Memory layout","One contiguous block","Nodes anywhere, joined by pointers"],
        ["Size","Fixed when created","Grows and shrinks as needed"],
        ["Access the k-th element","O(1)","O(n): walk from the head"],
        ["Insert or delete at the front","O(n): shift everything","O(1)"],
        ["Insert or delete in the middle","O(n): shift","O(1) once you are at the node (O(n) to find it)"],
        ["Extra memory per element","None","One pointer (two for a doubly linked list)"],
        ["Cache and speed in practice","Excellent (elements are adjacent)","Slower (nodes are scattered)"],
      ],
    },
    {
      type: "heading",
      text: "The List ADT again",
    },
    {
      type: "paragraph",
      text: "The lecture reviews that we have now seen four different implementations of the List data structure: using arrays, a singly linked list, a doubly linked list and a circularly linked list. The interface to the List stayed the same: add(), get(), next(), start(), remove() and so on. So the list is an abstract data type: we use it without being concerned with how it is implemented. What we care about is the methods that are available. We publish the interface and keep the freedom to change the implementation without affecting the users of the ADT.",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "A linked list is a chain of nodes; each node has data and a next pointer; head points to the first node; the last node's next is NULL.",
        "add() inserts after the current node in O(1); searching is O(n); there is no direct indexing.",
        "Doubly linked list: nodes have prev and next, so traversal works both ways and a node can be deleted in O(1).",
        "Circular linked list: the last node points back to the first; ideal for round-robin problems such as turn-taking.",
        "Array: fast access by index, slow insertion in the middle. Linked list: the opposite.",
      ],
    },
  ],
};

const stacks = {
  title: "Stacks",
  summary: "The last-in-first-out data structure: its operations, implementation with an array and with a linked list, and how to choose between them.",
  theory: [
    {
      type: "heading",
      text: "What is a stack?",
    },
    {
      type: "paragraph",
      text: "Think of a stack of books or a stack of plates. You put a new item on the top and you take an item from the top. You cannot pull one out of the middle without first removing everything above it. A stack data structure works the same way: it is a collection of elements arranged in a linear order, and you can only access the element at the top.",
    },
    {
      type: "paragraph",
      text: "The last element to go into the stack is the first to come out. This rule is called LIFO: Last In, First Out.",
    },
    {
      type: "heading",
      text: "Stack operations",
    },
    {
      type: "table",
      headers: ["Operation","What it does"],
      rows: [
        ["push(X)","Insert X as the top element of the stack."],
        ["pop()","Remove the top element of the stack and return it."],
        ["top()","Return the top element without removing it (also called peek)."],
        ["IsEmpty()","Return true if the stack has no elements, false otherwise."],
        ["IsFull()","Return true if the stack cannot take more elements (array implementation only)."],
      ],
    },
    {
      type: "paragraph",
      text: "What happens if pop() is called on an empty stack? The program must not simply carry on. The lecture's solution is to provide an IsEmpty() function that returns true when the stack is empty and to call it before pop(). (A more advanced alternative is to throw a StackEmpty exception, which the Python version below does.) Likewise the array version has IsFull(), which is checked before push().",
    },
    {
      type: "subheading",
      text: "Following a sequence of operations",
    },
    {
      type: "paragraph",
      text: "The lecture traces this sequence. The top of the stack is the right-hand end of each row.",
    },
    {
      type: "table",
      headers: ["Operation","Stack afterwards (bottom to top)","Returned"],
      rows: [
        ["push(2)","2","-"],
        ["push(5)","2, 5","-"],
        ["push(7)","2, 5, 7","-"],
        ["push(1)","2, 5, 7, 1","-"],
        ["pop()","2, 5, 7","1"],
        ["push(21)","2, 5, 7, 21","-"],
        ["pop()","2, 5, 7","21"],
        ["pop()","2, 5","7"],
        ["pop()","2","5"],
      ],
      caption: "Values leave in the reverse of the order in which they came in.",
    },
    {
      type: "heading",
      text: "Implementation 1: a stack using an array",
    },
    {
      type: "paragraph",
      text: "To decide where to push and pop in an array, remember what an array does badly: inserting or deleting at the beginning means shifting every element (the worst case), while inserting or deleting at the end needs no shifting (the best case). So push() and pop() work at the END of the array.",
    },
    {
      type: "paragraph",
      text: "A variable top holds the index of the top element. For an empty stack top = -1. push() adds one to top and stores the value there; pop() returns the value at top and subtracts one; top() (also called peek) just reads the value at top; IsEmpty() checks whether top is -1; IsFull() checks whether top equals size - 1.",
    },
    {
      type: "paragraph",
      text: "A quick examination shows that all five operations take constant time, O(1). The one weakness is the size limit: the array may fill up if we push enough elements.",
    },
    {
      type: "subheading",
      text: "A simple stack in Python",
    },
    {
      type: "paragraph",
      text: "A stack needs only a few operations: push (add on top), pop (remove from the top), peek (look at the top) and is_empty. A Python list already does the work, so the class stays very short:",
    },
    {
      type: "code",
      language: "python",
      code: `class Stack:
    def __init__(self):
        self.items = []

    def push(self, x):
        self.items.append(x)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0


s = Stack()
s.push(10)
s.push(20)
print(s.peek())
print(s.pop())
print(s.pop())
print(s.is_empty())`,
    },
    {
      type: "code",
      language: "output",
      code: `20
20
10
True`,
    },
    {
      type: "heading",
      text: "Implementation 2: a stack using a linked list",
    },
    {
      type: "paragraph",
      text: "We can avoid the size limit of the array stack by holding the elements in a linked list. Again we must decide where in the list to insert and delete so that push and pop are as fast as possible. For a singly linked list:",
    },
    {
      type: "list",
      items: [
        "Inserting at the start or at the end takes constant time (using the head and the current pointer).",
        "Removing the element at the start is constant time.",
        "Removing the element at the END needs a walk to the node before the last one, which takes O(n).",
      ],
    },
    {
      type: "paragraph",
      text: "So it makes sense to keep the stack elements at the START of the list: both insertion and removal are then constant time. We do not even need the current pointer; the head pointer alone is enough, and head points to the top of the stack. All four operations take constant time.",
    },
    {
      type: "subheading",
      text: "Array or linked list?",
    },
    {
      type: "paragraph",
      text: "Both implementations perform every stack operation in constant time, so is there any reason to prefer one? Yes:",
    },
    {
      type: "table",
      headers: ["","Array stack","Linked-list stack"],
      rows: [
        ["Speed of push and pop","Fast: memory is allocated once, ahead of time","Slower: allocating and freeing a node takes more time"],
        ["Memory use","Must allocate the whole array ahead of time","Uses only as much memory as the nodes need"],
        ["Extra memory","None","Every node stores a pointer (head, next)"],
        ["Size limit","Upper limit fixed by the array size","Limited only by dynamic memory allocation"],
      ],
    },
    {
      type: "paragraph",
      text: "Use an array stack when the maximum size is known and speed matters. Use a linked-list stack when the size is unpredictable.",
    },
    {
      type: "heading",
      text: "Where are stacks used?",
    },
    {
      type: "list",
      items: [
        "Expression handling: converting infix to postfix and evaluating postfix expressions (the next chapter).",
        "The function call stack: every function call is pushed, and returns pop it (this is why deep recursion can overflow).",
        "Undo features in editors and back buttons in browsers.",
        "Checking that brackets match in a program or in a mathematical expression.",
      ],
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "A stack is LIFO: you can only add or remove at the top.",
        "Operations: push, pop, top, IsEmpty (and IsFull for arrays); all are O(1).",
        "Array stack: top starts at -1, push does ++top, pop does top--; it can become full.",
        "Linked-list stack: keep the top at the head of the list so both push and pop are O(1); no size limit.",
        "Always check IsEmpty() before pop() and IsFull() before push().",
      ],
    },
  ],
};

const expressions = {
  title: "Infix, Postfix and Prefix",
  summary: "Three ways of writing an expression, why postfix is easy for computers, and how a stack converts infix to postfix and evaluates postfix.",
  theory: [
    {
      type: "heading",
      text: "Three notations for the same expression",
    },
    {
      type: "paragraph",
      text: "Consider the expression A + B. We think of applying the operator \"+\" to the operands A and B. The plus sign is called a binary operator because it takes two operands. Writing the sum as A + B, with the operator between the operands, is called the infix form of the expression.",
    },
    {
      type: "paragraph",
      text: "There are two other ways to write it. The prefixes \"pre\" and \"post\" refer to the position of the operator with respect to the two operands:",
    },
    {
      type: "table",
      headers: ["Notation","Operator position","A plus B"],
      rows: [
        ["Infix","Between the operands","A + B"],
        ["Prefix (Polish notation)","Before the operands","+ A B"],
        ["Postfix (reverse Polish notation)","After the operands","A B +"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "About the ^ symbol",
      text: "In infix a power is written as a real power, A^{B}. In postfix and prefix strings the operator has to sit on the line like every other operator, so this chapter writes it with the symbol ^ there.",
    },
    {
      type: "heading",
      text: "Precedence and associativity",
    },
    {
      type: "paragraph",
      text: "In the infix expression A + B * C we \"know\" that multiplication is done before addition, so the expression is interpreted as A + (B * C). Multiplication has precedence over addition. The five binary operators and their order of precedence, from highest to lowest, are:",
    },
    {
      type: "table",
      headers: ["Precedence","Operators","Same-precedence rule"],
      rows: [
        ["1 (highest)","Power, written A^{B}","Right to left: A^{B^{C}} means A^{(B^{C})}"],
        ["2","* and /","Left to right: A / B * C means (A / B) * C"],
        ["3 (lowest)","+ and -","Left to right: A + B + C means (A + B) + C"],
      ],
    },
    {
      type: "paragraph",
      text: "Parentheses override precedence: in (A + B) * C the addition is done first.",
    },
    {
      type: "heading",
      text: "Converting by hand",
    },
    {
      type: "paragraph",
      text: "To convert an infix expression by hand, put in the parentheses that precedence implies, then move each operator next to its operands, working from the innermost parentheses outwards. For postfix the operator goes right after its two operands.",
    },
    {
      type: "table",
      headers: ["Step","A + B * C","(A + B) * C"],
      rows: [
        ["Infix form","A + (B * C)","(A + B) * C"],
        ["Convert the first operation","A + (B C *)","(A B +) * C"],
        ["Convert the second operation","A (B C *) +","(A B +) C *"],
        ["Postfix form","A B C * +","A B + C *"],
      ],
      caption: "The two worked conversions from the lecture.",
    },
    {
      type: "paragraph",
      text: "More examples (the first four are the lecture's examples):",
    },
    {
      type: "table",
      headers: ["Infix","Postfix","Prefix"],
      rows: [
        ["A + B","A B +","+ A B"],
        ["12 + 60 - 23","12 60 + 23 -","- + 12 60 23"],
        ["(A + B) * (C - D)","A B + C D - *","* + A B - C D"],
        ["A^{B} * C - D + E / F","A B ^ C * D - E F / +","+ - * ^ A B C D / E F"],
        ["4 + 3 * 5","4 3 5 * +","+ 4 * 3 5"],
        ["(4 + 3) * 5","4 3 + 5 *","* + 4 3 5"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "The last example",
      text: "The expression is A^{B} * C - D + E / F: the power is done first, then the multiplication, and the postfix form is A B ^ C * D - E F / +.",
    },
    {
      type: "heading",
      text: "Why postfix?",
    },
    {
      type: "paragraph",
      text: "The postfix form of an expression does not need parentheses. Compare 4 + 3 * 5 and (4 + 3) * 5. In infix the parentheses are not needed in the first but are necessary in the second. The postfix forms, 4 3 5 * + and 4 3 + 5 *, are different strings, so the order of the operations is already built into the order of the symbols. A computer can therefore evaluate postfix in one left-to-right pass with a stack, without knowing anything about precedence.",
    },
    {
      type: "heading",
      text: "Evaluating a postfix expression",
    },
    {
      type: "paragraph",
      text: "Each operator in a postfix expression refers to the previous two operands. So:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Read the expression from left to right.",
        "Each time you read an operand, push it onto the stack.",
        "When you reach an operator, pop two operands from the top of the stack (the first pop is op2, the second is op1), apply the operator as op1 operator op2, and push the result back.",
        "When the input ends, the single value left on the stack is the answer.",
      ],
    },
    {
      type: "paragraph",
      text: "Note the order: op2 is popped first. For subtraction and division the order matters, so 8 2 / means 8 divided by 2 (op1 = 8, op2 = 2), not 2 divided by 8. The lecture evaluates 6 2 3 + - 3 8 2 / + * 2 ^ 3 + (here ^ is the power operator). The table traces it, one input symbol at a time; the final value is 52.",
    },
    {
      type: "table",
      headers: ["Input","op1","op2","value","stack"],
      rows: [
        ["6","","","","6"],
        ["2","","","","6, 2"],
        ["3","","","","6, 2, 3"],
        ["+","2","3","5","6, 5"],
        ["-","6","5","1","1"],
        ["3","","","","1, 3"],
        ["8","","","","1, 3, 8"],
        ["2","","","","1, 3, 8, 2"],
        ["/","8","2","4","1, 3, 4"],
        ["+","3","4","7","1, 7"],
        ["*","1","7","7","7"],
        ["2","","","","7, 2"],
        ["^","7","2","49","49"],
        ["3","","","","49, 3"],
        ["+","49","3","52","52"],
      ],
      caption: "Evaluating 6 2 3 + - 3 8 2 / + * 2 ^ 3 +. The result is 52.",
    },
    {
      type: "heading",
      text: "Converting infix to postfix with a stack",
    },
    {
      type: "paragraph",
      text: "Consider A + B * C and (A + B) * C. Their postfix versions are A B C * + and A B + C *. Two observations from the lecture drive the algorithm:",
    },
    {
      type: "list",
      items: [
        "The order of the operands in postfix is the same as in infix. Scanning from left to right, an operand can be placed straight into the postfix string as soon as it is read.",
        "An operator cannot be written yet. The + in A + B * C must wait until its second operand has been scanned, and even after B has been written it still cannot be written, because * has higher precedence and must come out first. So operators are stored on a stack until their proper position is found.",
      ],
    },
    {
      type: "paragraph",
      text: "The lecture uses a function prcd(op1, op2) that returns TRUE if op1 has precedence over op2 (so op1 should be written out first), and FALSE otherwise. For example prcd('*', '+') is TRUE, prcd('+', '+') is TRUE (left to right) and prcd('+', '*') is FALSE.",
    },
    {
      type: "subheading",
      text: "Handling parentheses",
    },
    {
      type: "list",
      items: [
        "When an opening parenthesis ( is read it must be pushed on the stack. This is done by making prcd(op, '(') FALSE for every operator.",
        "Also prcd('(', op) is FALSE, which ensures that an operator that comes right after ( is pushed on the stack.",
        "When a closing parenthesis ) is read, all operators up to the first ( must be popped and added to the postfix string. This is done by making prcd(op, ')') TRUE for every operator other than (.",
        "Both the ( and the ) are then discarded: the ( is popped and thrown away, and the ) is never pushed.",
      ],
    },
    {
      type: "subheading",
      text: "Worked example: A + B * C",
    },
    {
      type: "table",
      headers: ["Symbol","Postfix so far","Stack (bottom to top)"],
      rows: [
        ["A","A",""],
        ["+","A","+"],
        ["B","A B","+"],
        ["*","A B","+ *"],
        ["C","A B C","+ *"],
        ["(end)","A B C *","+"],
        ["(end)","A B C * +",""],
      ],
      caption: "The * does not pop the + because prcd('+', '*') is FALSE, so * is pushed on top. At the end the stack is emptied from the top.",
    },
    {
      type: "table",
      headers: ["Symbol","Postfix so far","Stack (bottom to top)"],
      rows: [
        ["(","","("],
        ["A","A","("],
        ["+","A","( +"],
        ["B","A B","( +"],
        [")","A B +",""],
        ["*","A B +","*"],
        ["C","A B + C","*"],
        ["(end)","A B + C *",""],
      ],
      caption: "Converting (A + B) * C: the ) pops everything down to the ( and both brackets are thrown away.",
    },
    {
      type: "heading",
      text: "Infix to prefix, and evaluating prefix",
    },
    {
      type: "paragraph",
      text: "A neat way to get the prefix form uses the same stack algorithm:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Reverse the infix expression and swap every ( with ) and every ) with (.",
        "Convert this reversed expression to postfix with the stack algorithm, with one change: an operator of EQUAL precedence does not pop the one on the stack (except the power operator, which does).",
        "Reverse the result. That is the prefix expression.",
      ],
    },
    {
      type: "paragraph",
      text: "Example: convert A + B * C to prefix. Reversed, it is C * B + A. Converting that to postfix with the 'equal precedence does not pop' change gives:",
    },
    {
      type: "table",
      headers: ["Symbol","Output so far","Stack (bottom to top)"],
      rows: [
        ["C","C",""],
        ["*","C","*"],
        ["B","C B","*"],
        ["+","C B *","+"],
        ["A","C B * A","+"],
        ["(end)","C B * A +",""],
      ],
      caption: "Reversing the result C B * A + gives the prefix form + A * B C.",
    },
    {
      type: "paragraph",
      text: "To evaluate a prefix expression, scan it from RIGHT to LEFT: push operands; when you meet an operator, the first value popped is op1 and the second is op2, and the result is op1 operator op2.",
    },
    {
      type: "heading",
      text: "Practice questions",
    },
    {
      type: "paragraph",
      text: "Work each one out first, then read the answer under it.",
    },
    {
      type: "qa",
      question: "Q1. Convert (A + B) * C - D to postfix.",
      answer: "A B + C * D -",
    },
    {
      type: "qa",
      question: "Q2. Evaluate the postfix expression 5 1 2 + 4 * + 3 -.",
      answer: "14. Steps: 1 + 2 = 3; 3 * 4 = 12; 5 + 12 = 17; 17 - 3 = 14.",
    },
    {
      type: "qa",
      question: "Q3. Convert A * (B + C) / D to prefix.",
      answer: "/ * A + B C D",
    },
    {
      type: "qa",
      question: "Q4. Convert A + B * C - D to postfix and draw the stack after reading each symbol.",
      answer: "A B C * + D -. The stack after each symbol: A (empty), + (+), B (+), * (+ *), C (+ *), - (pops * and +, then pushes -), D (-), end (pops -).",
    },
    {
      type: "heading",
      text: "Quick revision",
    },
    {
      type: "list",
      items: [
        "Infix: A + B. Prefix: + A B. Postfix: A B +. Pre and post refer to the position of the operator.",
        "Precedence: power A^{B} is highest, then * and /, then + and -. Equal precedence is left to right, except power which is right to left.",
        "Postfix needs no parentheses and is evaluated with one stack: push operands; at an operator pop op2 then op1, apply, push the result.",
        "Infix to postfix: operands go straight to the output; operators wait on a stack; pop while the top has precedence (prcd) over the new operator; ( is pushed and ) pops down to the matching (.",
        "Prefix: reverse the infix, swap the brackets, convert as for postfix (equal precedence does not pop, except power), then reverse the result.",
      ],
    },
  ],
};

export const dataStructureChapters = [
  introduction,
  arraysAndLists,
  algorithmAnalysis,
  searching,
  selectionSort,
  insertionSort,
  bubbleSort,
  mergeAndQuickSort,
  linkedLists,
  stacks,
  expressions,
];
