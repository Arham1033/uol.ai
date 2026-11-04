// COAL (Computer Organization and Assembly Language, CS-603), semester 3.
// The LECTURES section of the subject. Each lecture is one lesson below, in order.
// The lab notes will be added later as a second section (see index.js).
//
// Source: lecture slides 1 to 4 (Engr. Dr. Muhammad Faheem Khalil Paracha).
// Questions found in the slides (Assignment #01, flag practice, addressing-mode quiz)
// are solved inside the notes. Anything NOT in the slides is marked "Added".

const lecture1 = {
  title: "Lecture 1: Introduction to Computer Organization",
  summary:
    "What a computer and computer organisation are, the CPU parts, bits and bytes, RAM and ROM, buses, 8086 EU and BIU, the fetch-execute cycle, clock, and the language levels.",
  theory: [
    { type: "heading", text: "What is a computer?" },
    {
      type: "paragraph",
      text: "A computer is a **programmable electronic device** that takes **input**, **processes** it according to instructions and produces **output**. It can **store and retrieve** data. It stores and processes data, typically in **binary form**, according to a program.",
    },

    { type: "heading", text: "What is computer organization?" },
    {
      type: "list",
      items: [
        "The study of **how a computer's physical components work together** to perform tasks and execute programs.",
        "It covers the design and arrangement of hardware: the **CPU**, **memory**, **input/output devices** and **control units**.",
        "It is key to designing better processors and improving software.",
      ],
    },
    { type: "subheading", text: "What does it study?" },
    {
      type: "list",
      items: [
        "**Interconnection**: how the components are connected.",
        "**Operational attributes**: how they are linked to meet the requirements of the computer architecture.",
        "**Data movement instructions**: load and store instructions and input/output (I/O) instructions.",
      ],
    },

    { type: "heading", text: "Components of a computer" },
    {
      type: "list",
      items: [
        "**Input devices**",
        "**Central Processing Unit (CPU)**, made of the **Control Unit** and the **Arithmetic Logic Unit**",
        "**Memory**",
        "**Output devices**",
      ],
    },
    {
      type: "table",
      headers: ["Part", "What it does", "Examples"],
      rows: [
        ["Input devices", "Send **data and control signals** to the computer.", "Keyboard, mouse, microphone, scanner, webcam, touchscreen"],
        ["Output devices", "Present the **results** of processing in a human-readable or machine-usable form.", "Monitor, printer, speaker, projector, headphones"],
      ],
    },
    {
      type: "paragraph",
      text: "Input and output devices together are called **I/O devices** or **peripherals**; they allow communication between the user and the computer.",
    },

    { type: "subheading", text: "Central Processing Unit (CPU)" },
    {
      type: "paragraph",
      text: "The CPU is the **brain of the computer**. It performs data input/output, processing and storage functions. It consists of the **ALU** and the **CU**. Its responsibilities: **running the operating system and applications**, **processing data** (input into output information) and **storing and executing instructions**.",
    },
    { type: "subheading", text: "Arithmetic Logic Unit (ALU)" },
    {
      type: "list",
      items: [
        "Performs **arithmetic**: addition, subtraction, multiplication, division (+, -, *, /).",
        "Makes **logical decisions**: compares two items to see which is larger, smaller or equal (<, >, <=, >=, !=).",
      ],
    },
    { type: "subheading", text: "Control Unit (CU)" },
    {
      type: "list",
      items: [
        "**Coordinates and controls the data flow** in and out of the CPU.",
        "Controls all operations of the ALU, memory registers and I/O units.",
        "Carries out the instructions of the program: it **decodes** the fetched instruction, interprets it and sends **control signals** until the ALU and memory finish the operation.",
      ],
    },
    { type: "subheading", text: "Memory registers" },
    {
      type: "list",
      items: [
        "A **register** is a temporary unit of memory **inside the CPU** that stores data used directly by the processor (data, instructions, addresses of memory locations).",
        "Memory attached to the CPU is called **internal memory**. When a program runs, its data is copied into internal memory and stays there until execution ends.",
      ],
    },

    { type: "heading", text: "System board" },
    {
      type: "paragraph",
      text: "Inside the system unit is a circuit board called the **system board**. It contains the **microprocessor**, **memory**, **I/O ports**, **buses** and electronic components (resistors, capacitors, inductors and so on).",
    },

    { type: "heading", text: "Bits, bytes and words" },
    {
      type: "paragraph",
      text: "A digital circuit uses voltage or current levels. **Low voltage = 0** and **high voltage = 1**. These symbols are **binary digits (bits)**. Data written as strings of 0s and 1s is a **bit string**. This language of 1s and 0s is called **machine language**.",
    },
    {
      type: "table",
      headers: ["Name", "Size"],
      rows: [
        ["Bit", "A single 0 or 1"],
        ["Nibble", "4 bits"],
        ["Byte", "8 bits"],
        ["Word", "16 bits (2 bytes)"],
      ],
    },
    {
      type: "list",
      items: [
        "The data stored in a memory location is its **contents**.",
        "The **address** of a memory location is fixed; the **content** is not.",
        "Bits are numbered **right to left**: bits 0 to 7 are the **low** bits, bits 8 to 15 are the **high** bits.",
      ],
    },
    { type: "subheading", text: "Binary prefixes" },
    {
      type: "table",
      headers: ["Prefix", "Abbreviation", "Value"],
      rows: [
        ["Kilobyte", "KB", "2^{10} = 1,024 bytes"],
        ["Megabyte", "MB", "2^{20} = 1,048,576 bytes"],
        ["Gigabyte", "GB", "2^{30} = 1,073,741,824 bytes"],
        ["Terabyte", "TB", "2^{40} = 1,099,511,627,776 bytes"],
        ["Petabyte", "PB", "2^{50} = 1,125,899,906,842,624 bytes"],
        ["Exabyte", "EB", "2^{60} bytes"],
        ["Zettabyte", "ZB", "2^{70} bytes"],
        ["Yottabyte", "YB", "2^{80} bytes"],
      ],
    },

    { type: "heading", text: "RAM and ROM" },
    {
      type: "paragraph",
      text: "**RAM** is **volatile** memory that temporarily stores the data the CPU needs while executing tasks; its data is **erased when power is off**. It gives the CPU quick access to running programs and lets you switch between applications (multitasking).",
    },
    {
      type: "list",
      items: [
        "**DRAM** (Dynamic RAM): needs periodic **refreshing**; slower but more common.",
        "**SRAM** (Static RAM): **faster**, no refreshing, but **more expensive**; used in **cache** memory.",
      ],
    },
    {
      type: "paragraph",
      text: "**ROM** is **non-volatile** memory that stores permanent data and keeps it when the computer is off. It holds the **firmware and boot instructions** and essential data for hardware initialisation.",
    },
    {
      type: "list",
      items: [
        "**PROM**: programmable once by the user.",
        "**EPROM**: erasable with **UV light** and reprogrammable.",
        "**EEPROM**: erased and reprogrammed **electrically**.",
        "**Flash memory**: a type of EEPROM used in modern devices.",
      ],
    },
    {
      type: "table",
      headers: ["Feature", "RAM", "ROM"],
      rows: [
        ["Volatility", "Volatile", "Non-volatile"],
        ["Function", "Temporary storage for running programs", "Permanent storage for system instructions"],
        ["Data access", "Read and write", "Mostly read only"],
        ["Speed", "Faster", "Slower"],
        ["Usage", "Running applications, multitasking", "Firmware and boot instructions"],
        ["Capacity", "Larger (8 GB, 16 GB, 32 GB)", "Smaller (1 MB, 2 MB, 8 MB)"],
      ],
    },

    { type: "heading", text: "Buses" },
    {
      type: "paragraph",
      text: "A **bus** is a collection of wires (communication lines) that carries **data, addresses and control signals** between the components of a computer. It is a **shared communication medium**.",
    },
    {
      type: "table",
      headers: ["Bus", "Purpose", "Direction", "Width means"],
      rows: [
        ["Data bus", "Transfers the **actual data** between CPU, memory and peripherals.", "**Bidirectional**", "How much data moves at once (8, 16, 32 or 64 bits)."],
        ["Address bus", "Carries **memory addresses** from the CPU, saying where to read or write.", "**Unidirectional** (CPU to memory/I/O)", "Maximum memory addressable: a 32-bit address bus can address 2^{32} locations."],
        ["Control bus", "Carries **control signals** that coordinate the system: read/write, clock, interrupt.", "**Bidirectional**", "Not a data width."],
      ],
    },

    { type: "heading", text: "Instruction set" },
    {
      type: "paragraph",
      text: "The **instruction set** is the list of commands a CPU can execute: arithmetic, data transfer and control instructions. They are encoded as **binary numbers**. Instructions are kept simple to keep the cost of computation small. Adding two numbers in assembly:",
    },
    {
      type: "code",
      language: "asm",
      code: `mov ax, 5
mov bx, 10
add ax, bx      ; AX = 15`,
    },

    { type: "heading", text: "8086 internals: EU and BIU" },
    {
      type: "table",
      headers: ["Unit", "Role", "Contains"],
      rows: [
        ["**Execution Unit (EU)**", "**Executes instructions.**", "The **ALU** (arithmetic: add, subtract, multiply, divide; logic: AND, OR, NOT), 8 registers **AX, BX, CX, DX, SI, DI, BP, SP**, temporary registers and the **FLAGS**."],
        ["**Bus Interface Unit (BIU)**", "Communicates between the EU, memory and I/O. **Sends address, data and control signals** on the buses.", "Registers **CS, DS, ES, SS and IP**."],
      ],
    },
    {
      type: "list",
      items: [
        "A register is memory that we refer to **by name** instead of by memory location.",
        "**IP** (Instruction Pointer) points to the **address of the next instruction**.",
        "The EU and BIU are connected by an **internal bus**.",
        "While the EU is executing, the BIU **fetches 6 bytes of the next instruction**. This is **instruction pre-fetch**.",
      ],
    },

    { type: "heading", text: "I/O ports" },
    {
      type: "paragraph",
      text: "I/O ports are interfaces through which the processor communicates with external devices. Like memory locations, ports have addresses, called **I/O addresses**.",
    },
    {
      type: "table",
      headers: ["Port type", "How bits move", "Example"],
      rows: [
        ["Serial", "**One bit at a time**, one after the other", "VGA port"],
        ["Parallel", "**8 or 16 bits at the same time**", "Printer port"],
      ],
    },

    { type: "heading", text: "Instruction execution" },
    {
      type: "list",
      items: [
        "**Opcode** (operation code): specifies the **type of operation**.",
        "**Operands**: specify the memory addresses of the **data to be operated on**.",
        "The CPU executes machine instructions through the **fetch-execute cycle**.",
      ],
    },
    {
      type: "table",
      headers: ["Phase", "Steps"],
      rows: [
        ["**Fetch**", "1) Fetch an instruction from memory. 2) **Decode** it to find the operation. 3) Fetch data from memory if necessary."],
        ["**Execute**", "4) Perform the operation on the data. 5) Store the result in memory if needed."],
      ],
    },

    { type: "heading", text: "Time: clock pulse, period and rate" },
    {
      type: "list",
      items: [
        "**Clock pulse**: one cycle of a clock signal alternating between high (1) and low (0); it **synchronises** operations.",
        "**Clock period** (time period): the duration of one complete cycle. **T = 1 / f**, measured in s, ms, µs.",
        "**Clock rate / speed** (frequency): the number of cycles per second. **f = 1 / T**, measured in Hz, MHz, GHz.",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Example",
      text: "A 2 GHz processor has period T = 1 / (2 x 10^{9}) = 0.5 ns. A clock of period 20 ns has f = 1 / 20 ns = 50 MHz.",
    },

    { type: "heading", text: "Levels of programming languages" },
    {
      type: "table",
      headers: ["Level", "Machine language", "Assembly language", "High-level language"],
      rows: [
        ["What it is", "Binary code (0s and 1s) the CPU executes directly; made of opcodes and operands.", "**Mnemonic** codes and symbols representing machine instructions; **one-to-one** with machine instructions.", "User-friendly, close to human language, hides hardware details."],
        ["Translator", "None needed", "Needs an **assembler**", "Needs a **compiler or interpreter**"],
        ["Advantages", "Extremely fast; direct execution", "Easier than machine language; control over hardware; good for performance-critical code", "Easy to learn, write and debug; built-in libraries; mostly portable"],
        ["Disadvantages", "Hard to read, write and debug; **not portable** (CPU-specific)", "Still hard; **platform-dependent**", "Less efficient; limited hardware control"],
      ],
    },
    { type: "paragraph", text: "Hierarchy: **machine** (direct hardware control), **assembly** (low-level hardware programming), **high-level** (application and general-purpose programming)." },

    { type: "heading", text: "Quick revision" },
    {
      type: "list",
      items: [
        "CPU = ALU + CU. Registers live **inside** the CPU.",
        "Bit < nibble (4) < byte (8) < word (16).",
        "Data bus is bidirectional, address bus unidirectional, control bus bidirectional.",
        "EU executes; BIU fetches and talks to memory and I/O (it pre-fetches).",
        "Fetch, decode, fetch data, execute, store.",
        "T = 1/f and f = 1/T.",
      ],
    },
  ],
};

const lecture2 = {
  title: "Lecture 2: Number Systems and Conversions",
  summary:
    "Decimal, binary, octal and hexadecimal, all 12 conversion methods with worked examples, the master table, why it matters in 8086, and Assignment #01 fully solved.",
  theory: [
    { type: "heading", text: "The four number systems" },
    {
      type: "paragraph",
      text: "The **base** tells how many symbols are available. A subscript shows the base: for example 7D_{16} means base 16.",
    },
    {
      type: "table",
      headers: ["System", "Base", "Digits", "Example"],
      rows: [
        ["Decimal", "10", "0 1 2 3 4 5 6 7 8 9", "125_{10}"],
        ["Binary", "2", "0 1", "1111101_{2}"],
        ["Octal", "8", "0 1 2 3 4 5 6 7", "175_{8}"],
        ["Hexadecimal", "16", "0 to 9 and A to F", "7D_{16}"],
      ],
    },
    {
      type: "paragraph",
      text: "Base 16 needs 16 symbols, so the letters **A to F** stand for the values **10 to 15**.",
    },
    {
      type: "table",
      headers: ["Decimal", "10", "11", "12", "13", "14", "15"],
      rows: [["Hex", "A", "B", "C", "D", "E", "F"]],
    },

    { type: "heading", text: "1. Decimal to binary, octal and hexadecimal" },
    {
      type: "paragraph",
      text: "Method: **repeated division** by the new base (2, 8 or 16). Divide, record the **remainder**, repeat with the quotient until it reaches 0, then read the remainders **bottom to top**. For hex, remainders 10 to 15 become A to F.",
    },
    { type: "subheading", text: "Example: 25_{10} to binary" },
    {
      type: "table",
      headers: ["Division", "Quotient", "Remainder"],
      rows: [
        ["25 / 2", "12", "1"],
        ["12 / 2", "6", "0"],
        ["6 / 2", "3", "0"],
        ["3 / 2", "1", "1"],
        ["1 / 2", "0", "1"],
      ],
    },
    { type: "paragraph", text: "Read bottom to top: **25_{10} = 11001_{2}**." },
    { type: "subheading", text: "Example: 125_{10} to octal (divide by 8)" },
    {
      type: "table",
      headers: ["Division", "Quotient", "Remainder"],
      rows: [
        ["125 / 8", "15", "5"],
        ["15 / 8", "1", "7"],
        ["1 / 8", "0", "1"],
      ],
    },
    { type: "paragraph", text: "**125_{10} = 175_{8}**." },
    { type: "subheading", text: "Example: 254_{10} to hexadecimal (divide by 16)" },
    {
      type: "table",
      headers: ["Division", "Quotient", "Remainder"],
      rows: [
        ["254 / 16", "15 (F)", "14 (E)"],
        ["15 / 16", "0", "15 (F)"],
      ],
    },
    { type: "paragraph", text: "Read bottom to top: F then E, so **254_{10} = FE_{16}**." },

    { type: "heading", text: "2. Binary, octal and hexadecimal to decimal" },
    {
      type: "paragraph",
      text: "Multiply each digit by its **power of the base** and add (positional expansion).",
    },
    {
      type: "table",
      headers: ["Conversion", "Working", "Result"],
      rows: [
        ["11001_{2}", "1x2^{4} + 1x2^{3} + 0x2^{2} + 0x2^{1} + 1x2^{0} = 16 + 8 + 0 + 0 + 1", "25_{10}"],
        ["175_{8}", "1x8^{2} + 7x8^{1} + 5x8^{0} = 64 + 56 + 5", "125_{10}"],
        ["7D_{16}", "7x16^{1} + 13x16^{0} = 112 + 13", "125_{10}"],
      ],
    },

    { type: "heading", text: "3. Binary and octal (groups of 3)" },
    {
      type: "paragraph",
      text: "Since 8 = 2^{3}, **each octal digit = exactly 3 bits**. Binary to octal: start from the **right**, group in **3s** (pad zeros on the left), convert each group. Octal to binary: replace each digit by 3 bits.",
    },
    {
      type: "table",
      headers: ["Octal digit", "0", "1", "2", "3", "4", "5", "6", "7"],
      rows: [["Binary", "000", "001", "010", "011", "100", "101", "110", "111"]],
    },
    {
      type: "paragraph",
      text: "Examples: 110101_{2} = 110 | 101 = **65_{8}**. And 65_{8} = 110 | 101 = **110101_{2}**.",
    },

    { type: "heading", text: "4. Binary and hexadecimal (groups of 4)" },
    {
      type: "paragraph",
      text: "Since 16 = 2^{4}, **each hex digit = exactly 4 bits**. Group from the right in 4s.",
    },
    {
      type: "table",
      headers: ["Hex", "0", "1", "2", "3", "4", "5", "6", "7"],
      rows: [
        ["Binary", "0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111"],
      ],
    },
    {
      type: "table",
      headers: ["Hex", "8", "9", "A", "B", "C", "D", "E", "F"],
      rows: [
        ["Binary", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"],
      ],
    },
    {
      type: "paragraph",
      text: "Examples: 11010110_{2} = 1101 | 0110 = **D6_{16}**. And 7D_{16} = 0111 | 1101 = **01111101_{2}**.",
    },

    { type: "heading", text: "5. Octal and hexadecimal (through binary)" },
    {
      type: "paragraph",
      text: "Binary is the **bridge**. Octal to hex: octal to binary, regroup in 4s, then hex. Hex to octal: hex to binary, regroup in 3s, then octal.",
    },
    {
      type: "table",
      headers: ["Direction", "Working", "Result"],
      rows: [
        ["175_{8} to hex", "1=001, 7=111, 5=101, so 001111101; in 4s: 0000 | 0111 | 1101, so 0, 7, D", "7D_{16}"],
        ["7D_{16} to octal", "7=0111, D=1101, so 01111101; in 3s: 001 | 111 | 101, so 1, 7, 5", "175_{8}"],
      ],
    },

    { type: "heading", text: "Master conversion table" },
    {
      type: "table",
      headers: ["From", "To", "Method"],
      rows: [
        ["Decimal", "Binary", "Divide repeatedly by 2"],
        ["Decimal", "Octal", "Divide repeatedly by 8"],
        ["Decimal", "Hex", "Divide repeatedly by 16"],
        ["Binary", "Decimal", "Powers of 2"],
        ["Octal", "Decimal", "Powers of 8"],
        ["Hex", "Decimal", "Powers of 16"],
        ["Binary", "Octal", "Group 3 bits"],
        ["Octal", "Binary", "3 bits per octal digit"],
        ["Binary", "Hex", "Group 4 bits"],
        ["Hex", "Binary", "4 bits per hex digit"],
        ["Octal", "Hex", "Octal to binary to hex"],
        ["Hex", "Octal", "Hex to binary to octal"],
      ],
    },

    { type: "heading", text: "Why this matters in 8086 assembly" },
    {
      type: "list",
      items: [
        "**Registers** AX, BX, CX, DX are 16-bit and shown in hex (for example AX = 1234H).",
        "**Memory addresses** are written in hex (for example 0FFFFH).",
        "**Machine code**: opcodes assemble into hex bytes (for example B8 34 12).",
        "**Debugging**: register and memory dumps use hex for compactness.",
      ],
    },
    {
      type: "code",
      language: "asm",
      code: `; AX = hexadecimal 1234
; BL = hexadecimal 0A = 10 decimal
; AL = binary 1010 = 10 decimal
; H = hexadecimal suffix
; B = binary suffix`,
    },

    { type: "heading", text: "Assignment #01 (solved)" },
    {
      type: "scrollbox",
      title: "Solutions with working",
      blocks: [
        { type: "subheading", text: "A. Decimal to binary, octal, hexadecimal" },
        {
          type: "qa",
          question: "1. 18_{10} to binary (r = remainder)",
          answer:
            "18/2 = 9 r **0**; 9/2 = 4 r **1**; 4/2 = 2 r **0**; 2/2 = 1 r **0**; 1/2 = 0 r **1**. Read bottom to top: **10010_{2}**. (Check: 16 + 2 = 18.)",
        },
        {
          type: "qa",
          question: "2. 37_{10} to binary",
          answer:
            "37/2 = 18 r **1**; 18/2 = 9 r **0**; 9/2 = 4 r **1**; 4/2 = 2 r **0**; 2/2 = 1 r **0**; 1/2 = 0 r **1**. Bottom to top: **100101_{2}**. (Check: 32 + 4 + 1 = 37.)",
        },
        {
          type: "qa",
          question: "3. 64_{10} to octal",
          answer:
            "64/8 = 8 r **0**; 8/8 = 1 r **0**; 1/8 = 0 r **1**. Bottom to top: **100_{8}**.",
        },
        {
          type: "qa",
          question: "4. 100_{10} to octal",
          answer:
            "100/8 = 12 r **4**; 12/8 = 1 r **4**; 1/8 = 0 r **1**. Bottom to top: **144_{8}**.",
        },
        {
          type: "qa",
          question: "5. 100_{10} to hexadecimal",
          answer:
            "100/16 = 6 r **4**; 6/16 = 0 r **6**. Bottom to top: **64_{16}**.",
        },
        {
          type: "qa",
          question: "6. 200_{10} to hexadecimal",
          answer:
            "200/16 = 12 r **8**; 12/16 = 0 r **12 (C)**. Bottom to top: **C8_{16}**.",
        },
        { type: "subheading", text: "B. Binary, octal, hexadecimal to decimal" },
        {
          type: "qa",
          question: "7. 10010_{2} to decimal",
          answer: "1x16 + 0x8 + 0x4 + 1x2 + 0x1 = 16 + 2 = **18_{10}**.",
        },
        {
          type: "qa",
          question: "8. 111001_{2} to decimal",
          answer: "32 + 16 + 8 + 0 + 0 + 1 = **57_{10}**.",
        },
        {
          type: "qa",
          question: "9. 100_{8} to decimal",
          answer: "1x8^{2} + 0x8 + 0 = **64_{10}**.",
        },
        {
          type: "qa",
          question: "10. 144_{8} to decimal",
          answer: "1x64 + 4x8 + 4x1 = 64 + 32 + 4 = **100_{10}**.",
        },
        {
          type: "qa",
          question: "11. 64_{16} to decimal",
          answer: "6x16 + 4x1 = 96 + 4 = **100_{10}**.",
        },
        {
          type: "qa",
          question: "12. C8_{16} to decimal",
          answer: "12x16 + 8x1 = 192 + 8 = **200_{10}**.",
        },
        { type: "subheading", text: "C. Binary to octal and octal to binary" },
        {
          type: "qa",
          question: "13. 111000_{2} to octal",
          answer: "Groups of 3: 111 | 000 = 7 | 0. Answer: **70_{8}**.",
        },
        {
          type: "qa",
          question: "14. 1001111_{2} to octal",
          answer:
            "Group from the right and pad: 001 | 001 | 111 = 1 | 1 | 7. Answer: **117_{8}**.",
        },
        {
          type: "qa",
          question: "15. 70_{8} to binary",
          answer: "7 = 111, 0 = 000. Answer: **111000_{2}**.",
        },
        {
          type: "qa",
          question: "16. 117_{8} to binary",
          answer:
            "1 = 001, 1 = 001, 7 = 111, giving 001001111. Dropping leading zeros: **1001111_{2}**.",
        },
        { type: "subheading", text: "D. Binary to hexadecimal and hexadecimal to binary" },
        {
          type: "qa",
          question: "17. 11110000_{2} to hexadecimal",
          answer: "Groups of 4: 1111 | 0000 = F | 0. Answer: **F0_{16}**.",
        },
        {
          type: "qa",
          question: "18. 1001111_{2} to hexadecimal",
          answer:
            "Pad on the left: 0100 | 1111 = 4 | F. Answer: **4F_{16}**.",
        },
        {
          type: "qa",
          question: "19. F0_{16} to binary",
          answer: "F = 1111, 0 = 0000. Answer: **11110000_{2}**.",
        },
        {
          type: "qa",
          question: "20. 4F_{16} to binary",
          answer:
            "4 = 0100, F = 1111, giving 01001111, which is **1001111_{2}** without the leading zero (8-bit form 01001111).",
        },
        { type: "subheading", text: "E. Octal and hexadecimal" },
        {
          type: "qa",
          question: "21. 65_{8} to hexadecimal",
          answer:
            "Octal to binary: 6 = 110, 5 = 101, giving 110101. Regroup in 4s from the right: 0011 | 0101 = 3 | 5. Answer: **35_{16}**.",
        },
        {
          type: "qa",
          question: "22. 144_{8} to hexadecimal",
          answer:
            "1 = 001, 4 = 100, 4 = 100, giving 001100100. Regroup in 4s from the right: 0 | 0110 | 0100 gives 0110 | 0100 = 6 | 4. Answer: **64_{16}**.",
        },
        {
          type: "qa",
          question: "23. 35_{16} to octal",
          answer:
            "3 = 0011, 5 = 0101, giving 00110101 = 110101. Regroup in 3s from the right: 110 | 101 = 6 | 5. Answer: **65_{8}**.",
        },
        {
          type: "qa",
          question: "24. 64_{16} to octal",
          answer:
            "6 = 0110, 4 = 0100, giving 01100100. Regroup in 3s from the right and pad: 001 | 100 | 100 = 1 | 4 | 4. Answer: **144_{8}**.",
        },
      ],
    },
  ],
};

const lecture3 = {
  title: "Lecture 3: 8086 Registers",
  summary:
    "What registers are, AX/BX/CX/DX and their high and low bytes, memory addresses, base, offset and segment:offset, SP/BP/SI/DI, segment registers, IP, the FLAGS register, and MUL and DIV register usage.",
  theory: [
    { type: "heading", text: "What is a register?" },
    {
      type: "paragraph",
      text: "A **register** is a small, extremely **fast storage location built into the CPU**. Unlike RAM, which is outside the processor and slower, a register can be read or written in **one clock cycle**. The CPU uses registers to hold **data, addresses, instructions, counters, intermediate results and status information**.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Remember",
      text: "Register = very small + very fast + inside the CPU.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 10
MOV BX, 20
ADD AX, BX      ; AX = 10 + 20 = 30`,
    },
    { type: "heading", text: "Why do we need registers?" },
    {
      type: "list",
      items: [
        "Picture the CPU as a **worker at a desk**. RAM is a large **storage room** down the hall (bigger, slower). Registers are the items **already on the desk** (smaller, instant).",
        "The CPU needs very fast access to important data, and reusing a register **avoids repeated trips to memory**.",
      ],
    },

    { type: "heading", text: "8086 register organisation" },
    {
      type: "paragraph",
      text: "Most 8086 registers are **16 bits** wide. That is why the 8086 is called a **16-bit processor**: its architecture, registers and operations are built around 16-bit units.",
    },
    {
      type: "table",
      headers: ["Category", "Registers", "Width"],
      rows: [
        ["General-purpose", "AX, BX, CX, DX", "16-bit"],
        ["Pointer and index", "SP, BP, SI, DI", "16-bit"],
        ["Segment", "CS, DS, SS, ES", "16-bit"],
        ["Instruction pointer", "IP", "16-bit"],
        ["Flags", "FLAGS", "16-bit"],
      ],
    },

    { type: "heading", text: "1. General-purpose registers" },
    {
      type: "paragraph",
      text: "AX, BX, CX and DX are fully 16-bit and can be used for general data handling. The names only describe their **most typical role**. Each splits into a **high byte** (bits 8 to 15) and a **low byte** (bits 0 to 7).",
    },
    {
      type: "table",
      headers: ["Register", "Name", "Halves", "Typical use", "Memory trick"],
      rows: [
        ["AX", "Accumulator", "AH, AL", "Arithmetic, I/O, multiplication, division, temporary data", "A = Accumulator"],
        ["BX", "Base", "BH, BL", "Base / memory address calculation, holding data", "B = Base"],
        ["CX", "Count", "CH, CL", "**Loop counter** (with the LOOP instruction)", "C = Count"],
        ["DX", "Data", "DH, DL", "Data, **MUL and DIV** (holds the high half of a large product or part of the dividend/remainder), I/O", "D = Data"],
      ],
    },
    { type: "subheading", text: "High and low bytes (AX example)" },
    {
      type: "paragraph",
      text: "If AX = 1234H, then **AH = 12H** (top two hex digits) and **AL = 34H** (bottom two). The same pattern applies to BX, CX and DX.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Changing AL does **not** change AH, and changing AH does **not** change AL.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 1234H     ; AX=1234H  AH=12H  AL=34H
MOV AL, 56H       ; AX=1256H  (AH still 12H)

MOV AX, 1234H
MOV AH, 56H       ; AX=5634H  (AL still 34H)`,
    },
    { type: "subheading", text: "BX example" },
    {
      type: "code",
      language: "asm",
      code: `MOV BX, 4567H     ; BX=4567H  BH=45H  BL=67H
MOV BL, 22H       ; BX=4522H  (BH stays 45H)
MOV BH, 99H       ; BX=9922H  (BL stays 22H)`,
    },
    { type: "subheading", text: "CX as a loop counter" },
    {
      type: "paragraph",
      text: "Each time **LOOP** runs, the CPU **decreases CX by 1** and jumps back to the label unless CX has just reached **0**, in which case the loop ends.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV CX, 5
MOV AX, 5
L1:
INC AX
LOOP L1          ; CX: 5 -> 4 -> 3 -> 2 -> 1 -> 0, then execution continues`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "What is AX at the end?",
      text: "The body INC AX runs 5 times, so AX goes 5 to 10 (AX = 000AH).",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV CX, 1234H     ; CX=1234H  CH=12H  CL=34H
MOV CL, 56H       ; CX=1256H  (CH unaffected)

MOV DX, 789AH     ; DX=789AH  DH=78H  DL=9AH
MOV DL, 11H       ; DX=7811H
MOV DH, 22H       ; DX=2211H`,
    },

    { type: "heading", text: "2. Memory, address, base, offset" },
    {
      type: "paragraph",
      text: "RAM is like **numbered boxes**. Each location has an **address** (WHERE the data is) and stores a **value** (WHAT is stored). **Address = house location; value = what is inside.**",
    },
    {
      type: "table",
      headers: ["Address", "Value", "Offset (from 1000H)"],
      rows: [
        ["1000H", "10H", "0"],
        ["1001H", "20H", "1"],
        ["1002H", "30H", "2"],
        ["1003H", "40H", "3"],
      ],
    },
    {
      type: "list",
      items: [
        "**Base address**: the starting address of a data structure; for an array, the address of the first element (if NUMBERS starts at 1000H, the base is 1000H).",
        "**Offset**: the distance from the base. For a byte array the first element has offset 0, the next 1, and so on.",
        "**Address = Base + Offset.** Example: 1000H + 0002H = **1002H**.",
        "**Effective address**: the address calculated for the data you want. For simple array addressing, Effective address = Base + Offset (base 1000H, offset 3 gives **1003H**).",
      ],
    },
    {
      type: "code",
      language: "asm",
      code: `NUMBERS DB 10H, 20H, 30H, 40H   ; base address = 1000H (teaching example)`,
    },

    { type: "heading", text: "3. Segment:offset addressing" },
    {
      type: "paragraph",
      text: "A **segment** identifies the starting address of a memory segment; an **offset** identifies a location inside it. Written **segment : offset**, for example 1000H : 0200H.",
    },
    {
      type: "callout",
      variant: "note",
      title: "8086 address formula",
      text: "Effective (physical) address = Segment x 10H + Offset (10H = 16 in decimal, so Segment x 16 + Offset).",
    },
    {
      type: "table",
      headers: ["Segment : Offset", "Working", "Address"],
      rows: [
        ["1000 : 0200", "1000H x 10H = 10000H; 10000H + 0200H", "10200H"],
        ["DS = 1000H, offset 0020H", "10000H + 0020H", "10020H"],
        ["2000 : 0100", "20000H + 0100H", "20100H"],
        ["3000 : 0020", "30000H + 0020H", "30020H"],
      ],
    },
    {
      type: "paragraph",
      text: "The **same offset with a different segment** gives a **different address**: 2000:0100 is 20100H but 3000:0100 is 30100H.",
    },

    { type: "heading", text: "4. Pointer and index registers" },
    {
      type: "table",
      headers: ["Register", "Name", "Main use"],
      rows: [
        ["SP", "Stack Pointer", "Tracks the **top of the stack**"],
        ["BP", "Base Pointer", "Accesses **stack data** (parameters, locals, stack frames)"],
        ["SI", "Source Index", "Offset of **source** data (arrays, strings, memory blocks, copying)"],
        ["DI", "Destination Index", "Offset of **destination** data"],
      ],
    },
    { type: "subheading", text: "SP and the stack" },
    {
      type: "list",
      items: [
        "The **stack** is a special memory region for temporary data, function calls, return addresses and saved registers.",
        "**PUSH** places a value on top and **decrements SP by 2**.",
        "**POP** removes the top value into a register and **increments SP by 2**.",
      ],
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 1234H
PUSH AX          ; AX's value goes onto the stack
POP BX           ; BX = 1234H`,
    },
    { type: "subheading", text: "BP: reading stack data" },
    {
      type: "paragraph",
      text: "BP lets you reach data **anywhere in the stack**, not just the top. **BP + 2** moves **upward** (towards older data) and **BP - 2** moves **downward**.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 1234H
MOV CX, 5678H
MOV DX, 9876
PUSH AX
PUSH CX
PUSH DX
POP BX            ; BX gets the last pushed value (DX's); SP moves up by 2
MOV BP, SP        ; BP now points at the top of the stack
MOV BX, [BP+2]
MOV BX, [BP-2]
MOV BX, [BP-4]`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Walk-through",
      text: "The stack grows downward. After the three pushes, from the top: DX, CX, AX. POP BX takes DX's value, so SP now points at CX's value. Then [BP] = CX = 5678H, [BP+2] = AX = 1234H (older data, upward), and [BP-2] is the leftover word of the value just popped (9876 decimal). [BP-4] is below that, memory that was not set by this code, so its contents are unknown.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV SI, 1000H     ; SI may hold the offset / address of source data
MOV DI, 1000H     ; DI may hold the offset / address of destination data`,
    },
    {
      type: "paragraph",
      text: "Think: **SI = Source**, **DI = Destination**.",
    },

    { type: "heading", text: "5. Segment registers" },
    {
      type: "paragraph",
      text: "The 8086 divides memory conceptually into four kinds of segments, each tracked by a dedicated 16-bit register.",
    },
    {
      type: "table",
      headers: ["Register", "Meaning", "Purpose", "Works with"],
      rows: [
        ["CS", "Code Segment", "Program instructions", "**CS:IP** gives the next instruction"],
        ["DS", "Data Segment", "Variables and program data", "**DS:SI**, **DS:DI**"],
        ["SS", "Stack Segment", "The stack", "**SS:SP**, **SS:BP**"],
        ["ES", "Extra Segment", "Additional data; string operations", "**ES:DI** (destination)"],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Memory trick",
      text: "CS = Code, DS = Data, SS = Stack, ES = Extra. SS tells WHERE the stack is; SP tells WHERE the top of the stack is. For string instructions: DS:SI is the source and ES:DI is the destination.",
    },
    {
      type: "table",
      headers: ["Pair", "Values", "Working", "Address"],
      rows: [
        ["CS:IP", "CS = 2000H, IP = 0100H", "2000H x 10H + 0100H", "20100H"],
        ["DS:SI", "DS = 3000H, SI = 0100H", "30000H + 0100H", "30100H"],
        ["SS:SP", "SS = 4000H, SP = 0100H", "40000H + 0100H", "40100H"],
      ],
    },
    {
      type: "code",
      language: "asm",
      code: `; Data segment
NUM1 DB 25H
NUM2 DB 10H

; Code segment
MOV AL, NUM1
MOV BL, NUM2`,
    },

    { type: "heading", text: "6. Instruction Pointer (IP)" },
    {
      type: "paragraph",
      text: "**IP** holds the **offset within the code segment of the next instruction** to execute. **CS:IP** always points at the next instruction the CPU will fetch. IP normally changes automatically as instructions execute. Example: CS = 2000H, IP = 0100H gives 2000H x 10H + 0100H = **20100H**.",
    },

    { type: "heading", text: "7. The FLAGS register" },
    {
      type: "paragraph",
      text: "FLAGS is a **16-bit register**. Each flag is an **independent 1-bit indicator** that reports the result of the last operation (**status flags**) or controls CPU behaviour (**control flags**).",
    },
    {
      type: "table",
      headers: ["Family", "Flags"],
      rows: [
        ["**Status flags** (report the result)", "CF Carry, ZF Zero, SF Sign, OF Overflow, PF Parity, AF Auxiliary carry"],
        ["**Control flags** (control behaviour)", "IF Interrupt, DF Direction, TF Trap"],
      ],
    },
    {
      type: "table",
      headers: ["Flag", "Set to 1 when", "Example"],
      rows: [
        ["**CF** Carry", "An **unsigned** operation produces a carry out of the most significant bit (the true result does not fit).", "FFH + 01H = 100H; AL = 00H, **CF = 1**"],
        ["**ZF** Zero", "The result is **exactly zero**.", "05H - 05H: AL = 00H, **ZF = 1**"],
        ["**SF** Sign", "It copies the **most significant bit** of the result (bit 7 for 8 bits).", "10000000B: MSB = 1, **SF = 1**"],
        ["**OF** Overflow", "A **signed** result is too large or too small to fit (8-bit signed range -128 to +127).", "127 + 1 = 128, cannot fit, **OF = 1**"],
        ["**PF** Parity", "The **low byte** of the result has an **even** number of 1s.", "00000011 has two 1s, **PF = 1**"],
        ["**AF** Auxiliary carry", "There is a carry from **bit 4 to bit 5** (low nibble to high nibble).", "07H + 0DH: carry out of the low nibble, **AF = 1**"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "CF vs OF",
      text: "CF = unsigned overflow. OF = signed overflow. Positive 8-bit signed range: 00000000 (0) to 01111111 (+127).",
    },
    {
      type: "table",
      headers: ["Control flag", "Meaning", "Instructions"],
      rows: [
        ["**DF** Direction", "DF = 0: SI/DI **increase** (forward). DF = 1: SI/DI **decrease** (backward). Used by string instructions.", "**CLD** clears DF, **STD** sets DF"],
        ["**IF** Interrupt", "IF = 1 **enables** maskable hardware interrupts; IF = 0 disables them (system-level control).", "**STI** sets IF, **CLI** clears IF"],
        ["**TF** Trap", "**Single-step** mode: an interrupt after every instruction so a debugger can inspect the CPU state.", "Used for debugging and tracing"],
      ],
    },
    { type: "subheading", text: "Traced examples" },
    {
      type: "table",
      headers: ["Program", "Result", "Flags"],
      rows: [
        ["AL = 11111111B, BL = 00000001B, ADD AL, BL", "AL = 00H", "CF = 1"],
        ["AL = 00000101B, BL = 00000010B, SUB AL, BL", "AL = 03H", "ZF = 0, SF = 0, PF = 1 (00000011 has two 1s)"],
        ["AL = 01111111B, ADD AL, 00000001B", "AL = 80H", "OF = 1, SF = 1, CF = 0"],
        ["AL = 00000101B, BL = 0, ADD AL, BL", "AL = 05H", "PF = 1 (00000101 has two 1s)"],
        ["AL = 00000111B, ADD AL, 00001101B", "AL = 14H", "AF = 1 (7 + D = 14H, carry out of the low nibble)"],
      ],
    },
    { type: "subheading", text: "Class practice (solved)" },
    {
      type: "code",
      language: "asm",
      code: `ORG 100H
MOV AL, 11111111B
ADD AL, 00000001B
RET`,
    },
    {
      type: "qa",
      question: "Find CF, ZF, SF, OF, PF and AF.",
      answer:
        "11111111B + 00000001B = 1 00000000B. So AL = 00H and a carry leaves bit 7: **CF = 1**. The result is zero: **ZF = 1**. Bit 7 of the result is 0: **SF = 0**. As signed numbers this is (-1) + 1 = 0, which fits, so **OF = 0**. The low byte 00000000 has zero 1s (an even count): **PF = 1**. In the low nibble, 1111 + 0001 = 10000, so a carry goes from bit 3 into bit 4 (the nibble boundary): **AF = 1**. Final: CF = 1, ZF = 1, SF = 0, OF = 0, PF = 1, AF = 1.",
    },

    { type: "heading", text: "8. MUL and DIV register usage" },
    {
      type: "paragraph",
      text: "MUL and DIV use **implicit registers**: you give only one operand, and the other is always the accumulator.",
    },
    {
      type: "table",
      headers: ["Operand size", "Multiplication", "Result"],
      rows: [
        ["8-bit (MUL BL)", "AL x operand", "**AX**"],
        ["16-bit (MUL BX)", "AX x operand", "**DX:AX** (DX = high half, AX = low half)"],
      ],
    },
    {
      type: "table",
      headers: ["Operand size", "Dividend", "Divisor", "Quotient", "Remainder"],
      rows: [
        ["8-bit (DIV BL)", "AX", "8-bit operand", "**AL**", "**AH**"],
        ["16-bit (DIV BX)", "DX:AX", "16-bit operand", "**AX**", "**DX**"],
      ],
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AL, 5
MOV BL, 10
MUL BL           ; AL x BL = 50 -> AX = 0032H

MOV BL, 10
MOV AL, 5
MUL AL           ; AL x AL = 25 -> AX = 0019H  (BL plays no part)

MOV AX, 0010H
MOV BX, 0005H
MUL BX           ; AX x BX = 50H -> DX = 0000H, AX = 0050H`,
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 0019H
MOV BL, 05H
DIV BL           ; 25 / 5 -> AL = 05H, AH = 00H

MOV AX, 0019H
MOV BL, 04H
DIV BL           ; 25 / 4 -> AL = 06H (quotient), AH = 01H (remainder)

MOV DX, 0000H
MOV AX, 0064H
MOV BX, 000AH
DIV BX           ; DX:AX / BX = 100 / 10 -> AX = 000AH, DX = 0000H`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Memory trick",
      text: "MUL: 8-bit uses AL and gives AX; 16-bit uses AX and gives DX:AX. DIV: 8-bit gives AL = quotient, AH = remainder; 16-bit gives AX = quotient, DX = remainder.",
    },

    { type: "heading", text: "Complete 8086 register cheat sheet" },
    {
      type: "table",
      headers: ["Register", "Full name", "Main purpose"],
      rows: [
        ["AX", "Accumulator", "Arithmetic / accumulator"],
        ["BX", "Base", "Base / address operations"],
        ["CX", "Count", "Loops / counting"],
        ["DX", "Data", "Data / MUL / DIV"],
        ["SP", "Stack Pointer", "Top of stack"],
        ["BP", "Base Pointer", "Stack data access"],
        ["SI", "Source Index", "Source data"],
        ["DI", "Destination Index", "Destination data"],
        ["CS", "Code Segment", "Instructions"],
        ["DS", "Data Segment", "Data"],
        ["SS", "Stack Segment", "Stack"],
        ["ES", "Extra Segment", "Extra data"],
        ["IP", "Instruction Pointer", "Next instruction"],
        ["FLAGS", "Flags register", "Status / control"],
      ],
    },
  ],
};

const lecture4 = {
  title: "Lecture 4: 8086 Addressing Modes",
  summary:
    "How an instruction specifies its operand: register, immediate, direct, register-indirect, based, indexed and based-indexed modes, the physical address calculation, and the 10-instruction quiz solved.",
  theory: [
    { type: "heading", text: "What is an addressing mode?" },
    {
      type: "paragraph",
      text: "An **addressing mode** is the way the **operand of an instruction is specified**. It tells the CPU **where to get the data** the instruction needs.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Brackets matter",
      text: "Without brackets a register name means **the register itself**. With brackets the expression refers to **memory**. So SI is the value in SI, but [SI] is the value at the address held in SI.",
    },
    {
      type: "table",
      headers: ["Instruction", "Easy meaning"],
      rows: [
        ["MOV AL, BL", "Copy the value in BL into AL."],
        ["MOV AL, 25H", "Put the value 25H into AL."],
        ["MOV AL, [2500H]", "Read the byte at memory offset 2500H into AL."],
      ],
    },

    { type: "heading", text: "1. Register addressing" },
    {
      type: "paragraph",
      text: "The data is **already in a CPU register**. The instruction copies one register into another, so **no memory access** is needed.",
    },
    { type: "code", language: "asm", code: `MOV AX, BX\nMOV DL, AL` },

    { type: "heading", text: "2. Immediate addressing" },
    {
      type: "paragraph",
      text: "The actual **value is written inside the instruction**. There is no register lookup and no memory read; the operand is the literal number. \"Immediate\" means the value itself is immediately here.",
    },
    { type: "code", language: "asm", code: `MOV AL, 25H\nMOV BX, 1234H` },
    {
      type: "callout",
      variant: "warning",
      title: "Invalid",
      text: "MOV 25H, AL is invalid: a constant cannot be a destination.",
    },

    { type: "heading", text: "3. Direct memory addressing" },
    {
      type: "paragraph",
      text: "The **memory offset is written directly inside the brackets**. The CPU reads from or writes to that exact offset in the **data segment (DS)**. Brackets mean we are accessing memory.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AL, [2000H]    ; reading from memory
MOV [2000H], AL    ; writing to memory`,
    },

    { type: "heading", text: "4. Register-indirect addressing" },
    {
      type: "paragraph",
      text: "A **register contains the memory offset**. The common indirect registers on the 8086 are **BX, BP, SI and DI**. The CPU reads from (or writes to) the offset stored in that register.",
    },
    {
      type: "code",
      language: "asm",
      code: `; If SI = 3000H, this reads the byte at DS:3000H into AL
MOV AL, [BX]
MOV AL, [SI]
MOV AL, [DI]
MOV AL, [BP]`,
    },

    { type: "heading", text: "5. Based and indexed addressing" },
    {
      type: "paragraph",
      text: "Both add a **constant displacement** to a register to compute the effective address (EA).",
    },
    {
      type: "table",
      headers: ["Mode", "Formula", "Example", "Use"],
      rows: [
        ["Based", "Base register (**BX or BP**) + displacement", "MOV AL, [BP+05H]\nMOV AH, [BX+05H]", "Base of a structure"],
        ["Indexed", "Index register (**SI or DI**) + displacement", "MOV AL, [SI+02H]", "Ideal for stepping through **arrays**"],
      ],
    },

    { type: "heading", text: "6. Based-indexed addressing (with displacement)" },
    {
      type: "paragraph",
      text: "A **base register and an index register** are added together, optionally with a displacement, to form the effective address.",
    },
    {
      type: "code",
      language: "asm",
      code: `MOV AL, [BX+SI+04H]
; if BX = 1000H and SI = 0020H:
; EA = 1000H + 0020H + 0004H = 1024H`,
    },

    { type: "heading", text: "Effective address and physical address" },
    {
      type: "paragraph",
      text: "The **effective address (EA)** is only an **offset within a segment**. To get the actual byte on the bus, the CPU computes the **physical address**: shift the segment register left by one hex digit (x 10H) and add the EA.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Formula",
      text: "Physical address = Segment x 10H + Offset (EA).",
    },
    {
      type: "table",
      headers: ["Step", "Working"],
      rows: [
        ["Given", "DS = 1000H, EA = 0200H"],
        ["Segment base", "1000H x 10H = 10000H"],
        ["Physical address", "10000H + 0200H = **10200H**"],
      ],
    },

    { type: "heading", text: "Summary of addressing modes" },
    {
      type: "table",
      headers: ["Mode", "Example", "Meaning"],
      rows: [
        ["Register", "MOV AX, BX", "Data is in a register."],
        ["Immediate", "MOV AL, 25H", "Value is in the instruction."],
        ["Direct memory", "MOV AL, [2000H]", "Offset is written in the instruction."],
        ["Register-indirect", "MOV AL, [SI]", "Register holds the offset."],
        ["Based", "MOV AL, [BX+05H]", "Base register + constant."],
        ["Indexed", "MOV AL, [SI+02H]", "Index register + constant."],
        ["Based-indexed", "MOV AL, [BX+SI]", "Base register + index register."],
        ["Based-indexed + displacement", "MOV AL, [BX+SI+04H]", "Base + index + constant."],
      ],
    },

    { type: "heading", text: "Class quiz (solved)" },
    {
      type: "paragraph",
      text: "Name the addressing mode of each instruction.",
    },
    {
      type: "table",
      headers: ["No.", "Instruction", "Addressing mode", "Why"],
      rows: [
        ["1", "MOV AX, CX", "**Register**", "Both operands are registers."],
        ["2", "MOV BL, 35H", "**Immediate**", "35H is written in the instruction."],
        ["3", "MOV DX, [2500H]", "**Direct memory**", "The offset 2500H is written in brackets."],
        ["4", "MOV AL, [BX]", "**Register-indirect**", "BX holds the offset."],
        ["5", "MOV CL, [SI]", "**Register-indirect**", "SI holds the offset."],
        ["6", "MOV AL, [BX+05H]", "**Based with displacement**", "Base register BX + 05H."],
        ["7", "MOV DL, [SI+04H]", "**Indexed with displacement**", "Index register SI + 04H."],
        ["8", "MOV AL, [BX+SI]", "**Based-indexed**", "Base BX + index SI."],
        ["9", "MOV AX, [BP+DI]", "**Based-indexed**", "Base BP + index DI."],
        ["10", "MOV CL, [BX+SI+08H]", "**Based-indexed with displacement**", "BX + SI + 08H."],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "How to spot the mode quickly",
      text: "No brackets: register or immediate (a number means immediate). Brackets with only a number: direct. One register in brackets: register-indirect. Register + number: based (BX/BP) or indexed (SI/DI). Two registers: based-indexed, plus a number for the displacement version.",
    },
  ],
};

// Lessons in lecture order.
export const lectureLessons = [lecture1, lecture2, lecture3, lecture4];
