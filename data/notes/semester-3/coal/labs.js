// Computer Organization and Assembly Language (CS-603), semester 3: the LABS section.
// One lesson per lab, in order. The screenshots are in public/notes/semester-3/coal/labs/labN/.
//
// Every lab uses the same layout: concept tables, code in code blocks, and each
// program's screenshots in a scrolling "Screenshots" box next to its question.

// Width and height of every screenshot (needed by the image component).
const SIZE = {"lab1/1":[500,285],"lab1/2":[851,313],"lab1/3":[854,278],"lab1/4":[500,177],"lab1/5":[852,319],"lab1/6":[500,191],"lab1/7":[848,373],"lab1/8":[500,223],"lab1/9":[849,340],"lab1/10":[500,244],"lab1/11":[857,350],"lab1/12":[500,259],"lab1/13":[500,185],"lab1/14":[850,288],"lab2/1":[850,439],"lab2/2":[500,286],"lab2/3":[844,437],"lab2/4":[500,249],"lab2/5":[845,437],"lab2/6":[500,293],"lab2/7":[841,433],"lab2/8":[500,228],"lab2/9":[846,432],"lab2/10":[500,272],"lab2/11":[850,323],"lab2/12":[500,258],"lab2/13":[848,328],"lab2/14":[500,212],"lab2/15":[850,312],"lab2/16":[500,286],"lab2/17":[850,430],"lab2/18":[500,281],"lab2/19":[854,302],"lab2/20":[500,247],"lab2/21":[845,337],"lab2/22":[500,301],"lab2/23":[847,426],"lab2/24":[500,266],"lab3/1":[1279,780],"lab3/2":[1261,784],"lab3/3":[1212,789],"lab3/4":[1468,841],"lab3/5":[1270,801],"lab3/6":[1459,795],"lab3/7":[1312,784],"lab4/1":[500,462],"lab4/2":[863,441],"lab4/3":[847,427],"lab4/4":[500,448],"lab4/5":[852,430],"lab4/6":[500,464],"lab4/7":[500,518],"lab4/8":[849,431]};

// A scrolling box of screenshots. `nums` are the picture numbers of that lab, in the order shown.
function shots(lab, title, nums, alts = []) {
  return {
    type: "slides",
    title,
    label: "Screenshot",
    pages: nums.map((n, i) => ({
      src: `/notes/semester-3/coal/labs/${lab}/${String(n).padStart(2, "0")}.webp`,
      alt: alts[i] ?? `${title}, screenshot ${i + 1}`,
      width: SIZE[`${lab}/${n}`][0],
      height: SIZE[`${lab}/${n}`][1],
    })),
  };
}

// ---------------------------------------------------------------------------
const lab1 = {
  title: "Lab 1: Registers and the MOV, ADD, SUB Instructions",
  summary:
    "AX, AH, AL, BX, BH and BL; MOV, ADD and SUB; a first assembly program; changing only AL; decimal and hexadecimal values; exercises with screenshots.",
  theory: [
    { type: "heading", text: "1. Pre-Lab Concepts" },
    {
      type: "table",
      headers: ["Register", "Size", "Purpose"],
      rows: [
        ["AX", "16 bits", "Accumulator / general arithmetic"],
        ["AH", "8 bits", "High byte of AX"],
        ["AL", "8 bits", "Low byte of AX"],
        ["BX", "16 bits", "Base / general-purpose register"],
        ["BH", "8 bits", "High byte of BX"],
        ["BL", "8 bits", "Low byte of BX"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Key relationship",
      text: "AX = AH (high 8 bits) + AL (low 8 bits). Example: AX = 1234H gives AH = 12H and AL = 34H.",
    },

    { type: "heading", text: "2. Important Instructions" },
    {
      type: "table",
      headers: ["Instruction", "Meaning", "Example"],
      rows: [
        ["MOV", "Copies a value from source to destination", "MOV AX, 0005H"],
        ["ADD", "Adds source to destination", "ADD AX, BX"],
        ["SUB", "Subtracts source from destination", "SUB AX, BX"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "MOV copies data; it does not mathematically add or combine values. Both operands must have compatible sizes.",
    },

    { type: "heading", text: "3. First Assembly Program" },
    {
      type: "code",
      language: "asm",
      code: `MOV AX, 0005H
MOV BX, 0003H
ADD AX, BX`,
    },
    {
      type: "list",
      items: [
        "Step 1: AX = 0005H",
        "Step 2: BX = 0003H",
        "Step 3: AX = 0005H + 0003H = 0008H",
        "**Final: AX = 0008H, BX = 0003H**",
      ],
    },
    shots("lab1", "First program: source code and result", [1, 2], ["First program, source code in the editor", "First program, emulator showing AX = 0008H and BX = 0003H"]),

    { type: "heading", text: "4. Observe AH and AL" },
    { type: "paragraph", text: "Now investigate the relationship between AX, AH and AL." },
    { type: "code", language: "asm", code: `MOV AX, 1234H` },
    {
      type: "table",
      headers: ["Register", "Solved value"],
      rows: [
        ["AX", "1234H"],
        ["AH", "12H"],
        ["AL", "34H"],
      ],
    },
    shots("lab1", "AX = 1234H: AH and AL", [4, 3], ["Source code MOV AX, 1234H", "Emulator after MOV AX, 1234H (AH = 12H, AL = 34H)"]),

    { type: "heading", text: "5. Change Only AL" },
    { type: "paragraph", text: "Add the following instruction after MOV AX, 1234H:" },
    { type: "code", language: "asm", code: `MOV AX, 1234H\nMOV AL, 56H` },
    {
      type: "table",
      headers: ["Register", "Prediction", "Observed"],
      rows: [
        ["AX", "1256H", "1256H"],
        ["AH", "12H", "12H"],
        ["AL", "56H", "56H"],
      ],
    },
    shots("lab1", "Changing only AL", [6, 5], ["Source code MOV AX, 1234H and MOV AL, 56H", "Emulator after MOV AL, 56H (AX = 1256H)"]),

    { type: "heading", text: "6. Decimal and Hexadecimal Values" },
    {
      type: "table",
      headers: ["Task", "Instruction", "Observed AX"],
      rows: [
        ["1", "MOV AX, 10", "000AH"],
        ["2", "MOV AX, 0010H", "0010H"],
        ["3", "MOV AX, 25", "0019H"],
        ["4", "MOV AX, 0019H", "0019H"],
      ],
    },
    shots("lab1", "Decimal and hexadecimal values", [8, 7], ["Source code of the decimal and hexadecimal tasks", "Emulator showing the observed AX value"]),

    { type: "heading", text: "7. Exercises" },
    { type: "subheading", text: "A. Place 15 in AX and 5 in BX, then add BX to AX." },
    { type: "code", language: "asm", code: `MOV AX, 15\nMOV BX, 5\nADD AX, BX` },
    {
      type: "paragraph",
      text: "**Final: AX = 20 decimal = 0014H. BX = 5.**",
    },
    shots("lab1", "Exercise A", [10, 9], ["Exercise A source code", "Exercise A emulator result"]),

    { type: "subheading", text: "2. AX = 20H, BX = 10H, then SUB AX, BX." },
    { type: "code", language: "asm", code: `MOV AX, 20H\nMOV BX, 10H\nSUB AX, BX` },
    { type: "paragraph", text: "**Final: AX = 20H − 10H = 0010H.**" },
    shots("lab1", "Exercise 2", [12, 11], ["Exercise 2 source code", "Exercise 2 emulator result"]),

    { type: "subheading", text: "3. Set AX = 3A5FH." },
    { type: "paragraph", text: "Therefore: **AH = 3AH** and **AL = 5FH**." },

    { type: "subheading", text: "4. Set AX = 7B20H, then MOV AL, 45H." },
    { type: "code", language: "asm", code: `MOV AX, 7B20H\nMOV AL, 45H` },
    { type: "paragraph", text: "**Final: AX = 7B45H.**" },
    shots("lab1", "Exercise 4", [13, 14], ["Exercise 4 source code", "Exercise 4 emulator result"]),

    { type: "subheading", text: "5. Why is MOV AL, 1234H invalid?" },
    {
      type: "paragraph",
      text: "MOV AL, 1234H is **invalid** because AL is an **8-bit** register while 1234H is a **16-bit** value.",
    },

    { type: "heading", text: "8. Observation / Results Table" },
    {
      type: "table",
      headers: ["Instruction", "AX", "BX", "AH", "AL"],
      rows: [
        ["MOV AX, 1234H", "1234H", "—", "12H", "34H"],
        ["MOV BX, 0020H", "1234H", "0020H", "12H", "34H"],
        ["MOV AL, 56H", "1256H", "0020H", "12H", "56H"],
        ["ADD AX, BX", "1276H", "0020H", "12H", "76H"],
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
const lab2 = {
  title: "Lab 2: Number Systems, Registers and Basic Arithmetic",
  summary:
    "Bit, nibble, byte and word; number-system review; MOV practice; 16-bit ADD and SUB; predict, run and observe; the 8-bit carry; exercises with screenshots.",
  theory: [
    { type: "heading", text: "1. Pre-Lab Concepts" },
    {
      type: "table",
      headers: ["Concept", "Meaning"],
      rows: [
        ["Bit", "One binary digit: 0 or 1."],
        ["Nibble", "4 bits."],
        ["Byte", "8 bits."],
        ["Word (8086)", "16 bits."],
        ["AX", "16-bit accumulator register."],
        ["AH", "High 8 bits of AX."],
        ["AL", "Low 8 bits of AX."],
        ["BX", "16-bit base register."],
        ["BH", "High 8 bits of BX."],
        ["BL", "Low 8 bits of BX."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Remember",
      text: "1 hexadecimal digit = 4 binary bits. Example: AX = 1234H gives AH = 12H and AL = 34H.",
    },

    { type: "heading", text: "2. Important Instructions" },
    {
      type: "table",
      headers: ["Instruction", "Purpose", "Example", "Result"],
      rows: [
        ["MOV", "Copies a value to the destination.", "MOV AX,0010H", "AX becomes 0010H."],
        ["ADD", "Adds source to destination.", "ADD AX,BX", "AX = AX + BX."],
        ["SUB", "Subtracts source from destination.", "SUB AX,BX", "AX = AX − BX."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "The destination register is changed. ADD AX,BX changes AX, not BX.",
    },

    { type: "heading", text: "3. Number-System Review" },
    {
      type: "table",
      headers: ["No.", "Question", "Answer"],
      rows: [
        ["1", "1010_{2} to decimal", "10"],
        ["2", "1111_{2} to decimal", "15"],
        ["3", "25_{10} to binary", "11001_{2}"],
        ["4", "11010110_{2} to hexadecimal", "D6H"],
        ["5", "3FH to binary", "00111111_{2}"],
        ["6", "2AH to decimal", "42"],
        ["7", "40_{10} to hexadecimal", "28H"],
        ["8", "7BH to binary", "01111011_{2}"],
      ],
    },

    { type: "heading", text: "4. MOV Practice" },
    { type: "code", language: "asm", code: `MOV AX,0025H\nMOV BX,0015H` },
    {
      type: "table",
      headers: ["Register", "Predicted Value", "Observed Value"],
      rows: [
        ["AX", "0025H", "0025H"],
        ["BX", "0015H", "0015H"],
        ["AH", "00H", "00H"],
        ["AL", "25H", "25H"],
        ["BH", "00H", "00H"],
        ["BL", "15H", "15H"],
      ],
    },
    shots("lab2", "MOV practice", [2, 1], ["MOV practice, source code", "MOV practice, emulator"]),

    { type: "heading", text: "5. ADD/SUB: 16-bit Arithmetic" },
    { type: "subheading", text: "Program 1" },
    { type: "code", language: "asm", code: `MOV AX,0010H\nMOV BX,0005H\nADD AX,BX` },
    { type: "paragraph", text: "Predict: **AX = 0015H**, **BX = 0005H**." },
    shots("lab2", "Program 1", [4, 3], ["Program 1, source code", "Program 1, emulator"]),

    { type: "subheading", text: "Program 2" },
    { type: "code", language: "asm", code: `MOV AX,1234H\nMOV BX,0010H\nADD AX,BX` },
    { type: "paragraph", text: "Predict: **AX = 1244H**, **BX = 0010H**." },
    shots("lab2", "Program 2", [6, 5], ["Program 2, source code", "Program 2, emulator"]),

    { type: "subheading", text: "Program 3" },
    { type: "code", language: "asm", code: `MOV AX,0030H\nMOV BX,0010H\nSUB AX,BX` },
    { type: "paragraph", text: "Predict: **AX = 0020H**, **BX = 0010H**." },
    shots("lab2", "Program 3", [8, 7], ["Program 3, source code", "Program 3, emulator"]),

    { type: "heading", text: "6. Predict, Run, Observe" },
    { type: "subheading", text: "1. MOV AX,0020H; MOV BX,0010H; ADD AX,BX" },
    { type: "paragraph", text: "Predicted AX = **0030H**. Explanation: 0020H + 0010H = 0030H." },
    shots("lab2", "Predict, run, observe: 1", [10, 9]),
    { type: "subheading", text: "2. MOV AX,0050H; MOV BX,0020H; SUB AX,BX" },
    { type: "paragraph", text: "Predicted AX = **0030H**. Explanation: 0050H − 0020H = 0030H." },
    shots("lab2", "Predict, run, observe: 2", [12, 11]),
    { type: "subheading", text: "3. MOV AX,1234H; MOV BX,0002H; ADD AX,BX" },
    { type: "paragraph", text: "Predicted AX = **1236H**. Explanation: 1234H + 0002H = 1236H." },
    shots("lab2", "Predict, run, observe: 3", [14, 13]),
    { type: "subheading", text: "4. MOV AX,0040H; MOV BX,0015H; SUB AX,BX" },
    { type: "paragraph", text: "Predicted AX = **002BH**. Explanation: 0040H − 0015H = 002BH." },
    shots("lab2", "Predict, run, observe: 4", [16, 15]),

    { type: "heading", text: "7. Simple 8-bit Carry Observation" },
    {
      type: "paragraph",
      text: "An 8-bit register can hold only 00H to FFH for unsigned values. Therefore FFH + 01H = 100H mathematically, but AL keeps only the 8-bit result **00H** and the **Carry Flag (CF) becomes 1**.",
    },
    { type: "code", language: "asm", code: `MOV AL,0FFH\nADD AL,01H` },
    {
      type: "table",
      headers: ["Item", "Result"],
      rows: [
        ["AL", "00H"],
        ["CF", "1"],
        ["ZF", "1"],
      ],
    },
    shots("lab2", "8-bit carry", [18, 17], ["8-bit carry, source code", "8-bit carry, emulator"]),

    { type: "heading", text: "8. Exercise" },
    { type: "subheading", text: "1. Set AX = 15H and BX = 05H. Add them. Record final AX." },
    { type: "code", language: "asm", code: `MOV AX,0015H\nMOV BX,0005H\nADD AX,BX` },
    { type: "paragraph", text: "Output: **AX = 001AH**." },
    shots("lab2", "Exercise 1", [20, 19]),

    { type: "subheading", text: "2. Set AX = 20H and BX = 10H. Subtract BX from AX. Record final AX." },
    { type: "code", language: "asm", code: `MOV AX,0020H\nMOV BX,0010H\nSUB AX,BX` },
    { type: "paragraph", text: "Output: **AX = 0010H**." },
    shots("lab2", "Exercise 2", [22, 21]),

    { type: "subheading", text: "3. If AX = 3A5FH, write the values of AH and AL." },
    { type: "paragraph", text: "Output: **AH = 3AH**, **AL = 5FH**." },

    { type: "subheading", text: "4. Create an addition that produces a carry in an 8-bit register and record AL and CF." },
    { type: "code", language: "asm", code: `MOV AL,0FFH\nADD AL,01H` },
    { type: "paragraph", text: "Output: **AL = 00H**, **CF = 1**." },
    shots("lab2", "Exercise 4", [24, 23]),
  ],
};

// ---------------------------------------------------------------------------
const lab3 = {
  title: "Lab 3: MUL, DIV Instructions and the CX and DX Registers",
  summary:
    "CX and DX registers, 8-bit and 16-bit MUL and DIV, the quick table, in-lab programs and the solved practice exercises with screenshots.",
  theory: [
    { type: "heading", text: "1. CX Register" },
    {
      type: "paragraph",
      text: "**CX** is a 16-bit general-purpose register. It is also commonly used as a **counter**. It has two 8-bit parts: **CH** (high) and **CL** (low).",
    },
    {
      type: "code",
      language: "asm",
      code: `; CX = [ CH ][ CL ]
MOV CX, 1234H      ; CX = 1234H, CH = 12H, CL = 34H`,
    },
    { type: "paragraph", text: "CX is not only a loop register; it can also store ordinary data." },
    { type: "code", language: "asm", code: `MOV CX, 0005H\nADD CX, 0003H` },
    { type: "paragraph", text: "After execution, **CX = 0008H**." },

    { type: "heading", text: "2. DX Register" },
    {
      type: "paragraph",
      text: "**DX** is a 16-bit general-purpose register. It has two 8-bit parts (**DH** and **DL**) and has a special role in **16-bit multiplication and division**.",
    },
    {
      type: "code",
      language: "asm",
      code: `; DX = [ DH ][ DL ]
MOV DX, 5678H      ; DX = 5678H, DH = 56H, DL = 78H`,
    },
    {
      type: "paragraph",
      text: "A useful beginner mental model: AX is the main working register; DX often works together with AX when a result or dividend is larger than one 16-bit register.",
    },

    { type: "heading", text: "3. MUL Instruction" },
    { type: "subheading", text: "8-bit MUL" },
    { type: "code", language: "asm", code: `MOV AL, 05H\nMOV BL, 04H\nMUL BL` },
    {
      type: "list",
      items: [
        "AL = 05H before MUL, BL = 04H.",
        "**AX = 0014H** after MUL.",
        "AH = 00H and AL = 14H after MUL.",
      ],
    },
    { type: "subheading", text: "16-bit MUL" },
    { type: "code", language: "asm", code: `; AX x 16-bit operand -> DX:AX` },
    {
      type: "paragraph",
      text: "**32-bit result:** DX:AX represents a 32-bit result. **DX contains the high 16 bits** and **AX contains the low 16 bits**.",
    },
    { type: "code", language: "asm", code: `MOV AX, 0010H\nMOV BX, 0005H\nMUL BX` },
    { type: "paragraph", text: "16 x 5 = 80 decimal = 00000050H, so **DX = 0000H** and **AX = 0050H**." },

    { type: "heading", text: "4. DIV Instruction" },
    { type: "subheading", text: "8-bit DIV" },
    { type: "code", language: "asm", code: `; AX / 8-bit operand\n; AL = quotient\n; AH = remainder` },
    { type: "paragraph", text: "Example: 25 / 4 = 6 remainder 1." },
    { type: "code", language: "asm", code: `MOV AX, 0019H\nMOV BL, 04H\nDIV BL` },
    { type: "paragraph", text: "After DIV: **AL = 06H** (quotient) and **AH = 01H** (remainder)." },
    { type: "subheading", text: "16-bit DIV" },
    { type: "code", language: "asm", code: `; DX:AX / 16-bit operand\n; AX = quotient\n; DX = remainder` },
    {
      type: "callout",
      variant: "warning",
      title: "Clear DX first",
      text: "If your dividend is a simple value that fits in AX, clear DX first so DX:AX contains the intended dividend.",
    },
    { type: "code", language: "asm", code: `MOV DX, 0000H\nMOV AX, 0064H\nMOV BX, 000AH\nDIV BX` },
    { type: "paragraph", text: "100 / 10 = 10 remainder 0, so **AX = 000AH** and **DX = 0000H**." },

    { type: "heading", text: "5. MUL/DIV Quick Table" },
    {
      type: "table",
      headers: ["Operation", "Operand", "Input", "Result"],
      rows: [
        ["8-bit MUL", "8-bit", "AL x operand", "AX"],
        ["16-bit MUL", "16-bit", "AX x operand", "DX:AX"],
        ["8-bit DIV", "8-bit", "AX / operand", "AL = quotient, AH = remainder"],
        ["16-bit DIV", "16-bit", "DX:AX / operand", "AX = quotient, DX = remainder"],
      ],
    },

    { type: "heading", text: "6. In Lab Tasks" },
    { type: "subheading", text: "Program 1: CX" },
    { type: "code", language: "asm", code: `MOV CX, 1234H` },
    { type: "paragraph", text: "Result: **CX = 1234H** (CH = 12H, CL = 34H)." },
    { type: "subheading", text: "Program 2: DX" },
    { type: "code", language: "asm", code: `MOV DX, 5678H` },
    { type: "paragraph", text: "Result: **DX = 5678H** (DH = 56H, DL = 78H)." },
    shots("lab3", "Program 2: DX = 5678H", [4], ["Emulator after MOV DX, 5678H: DX = 5678H"]),
    { type: "subheading", text: "Program 3: 8-bit MUL" },
    { type: "code", language: "asm", code: `MOV AL, 05H\nMOV BL, 04H\nMUL BL` },
    { type: "paragraph", text: "Result: 5 x 4 = 20, so **AX = 0014H**." },
    { type: "subheading", text: "Program 5: 8-bit DIV" },
    { type: "code", language: "asm", code: `MOV AX, 0019H\nMOV BL, 04H\nDIV BL` },
    { type: "paragraph", text: "Result: 25 / 4 = 6 remainder 1, so **AL = 06H**, **AH = 01H**." },
    { type: "subheading", text: "Program 7: 16-bit MUL" },
    { type: "code", language: "asm", code: `MOV AX, 0010H\nMOV BX, 0005H\nMUL BX` },
    { type: "paragraph", text: "Result: 16 x 5 = 80, so **DX = 0000H**, **AX = 0050H**." },
    { type: "subheading", text: "Program 8: 16-bit DIV" },
    { type: "code", language: "asm", code: `MOV AX, 0064H\nMOV BX, 000AH\nDIV BX` },
    { type: "paragraph", text: "Result: 100 / 10 = 10 remainder 0, so **AX = 000AH**, **DX = 0000H**." },
    { type: "subheading", text: "Program 9: 16-bit DIV with remainder" },
    { type: "code", language: "asm", code: `MOV AX, 0065H\nMOV BX, 000AH\nDIV BX` },
    { type: "paragraph", text: "Result: 0065H = 101 decimal, 101 / 10 = 10 remainder 1, so **AX = 000AH**, **DX = 0001H**." },
    { type: "subheading", text: "Program 10: CX + DX" },
    { type: "code", language: "asm", code: `MOV CX, 0005H\nMOV DX, 000AH\nADD CX, DX` },
    { type: "paragraph", text: "Result: 5 + 10 = 15, so **CX = 000FH**." },

    { type: "heading", text: "7. Practice Exercises" },
    {
      type: "callout",
      variant: "note",
      title: "About the screenshots",
      text: "The screenshots for the 16-bit MUL (exercise 7), the 8-bit MUL (exercise 2) and the 20 / 3 DIV (exercise 3) were taken just before the instruction runs, so they show the inputs. The other screenshots show the state after the program has run.",
    },
    { type: "subheading", text: "1. Multiply 07H by 03H using 8-bit MUL. Record AX." },
    { type: "code", language: "asm", code: `MOV AL, 07H\nMOV BL, 03H\nMUL BL` },
    { type: "paragraph", text: "7 x 3 = 21, so **AX = 0015H**." },

    { type: "subheading", text: "2. Multiply 09H by 04H using 8-bit MUL. Record AX." },
    { type: "code", language: "asm", code: `MOV AL, 09H\nMOV BL, 04H\nMUL BL` },
    { type: "paragraph", text: "9 x 4 = 36, so **AX = 0024H**." },
    shots("lab3", "Exercise 2: MUL BL", [6], ["Emulator with AL = 09H and BL = 04H, ready for MUL BL"]),

    { type: "subheading", text: "3. Divide 20 decimal by 3 using 8-bit DIV. Record quotient and remainder." },
    { type: "code", language: "asm", code: `MOV AX, 00014H\nMOV BL, 03H\nDIV BL` },
    { type: "paragraph", text: "20 / 3 = 6 remainder 2, so **quotient AL = 06H** and **remainder AH = 02H**." },
    shots("lab3", "Exercise 3: DIV BL", [7], ["Emulator with AX = 0014H and BL = 03H, ready for DIV BL"]),

    { type: "subheading", text: "4. Divide 50 decimal by 7 using 8-bit DIV. Record quotient and remainder." },
    { type: "code", language: "asm", code: `MOV AX, 00032H\nMOV BL, 07H\nDIV BL` },
    { type: "paragraph", text: "50 / 7 = 7 remainder 1, so **quotient AL = 07H** and **remainder AH = 01H** (AX = 0107H)." },
    shots("lab3", "Exercise 4: 50 / 7", [2], ["Emulator after DIV BL: AX = 0107H"]),

    { type: "subheading", text: "5. Put 4321H in CX. Find CH and CL." },
    { type: "code", language: "asm", code: `MOV CX, 4321H` },
    { type: "paragraph", text: "**CH = 43H** and **CL = 21H**." },
    shots("lab3", "Exercise 5: CX = 4321H", [3], ["Emulator after MOV CX, 4321H: CH = 43H, CL = 21H"]),

    { type: "subheading", text: "6. Put ABCDH in DX. Find DH and DL." },
    { type: "code", language: "asm", code: `MOV DX, 0ABCDH` },
    { type: "paragraph", text: "**DH = ABH** and **DL = CDH**." },

    { type: "subheading", text: "7. Multiply 0012H by 0004H using 16-bit MUL. Record DX:AX." },
    { type: "code", language: "asm", code: `MOV AX, 00012H\nMOV BX, 00004H\nMUL BX` },
    { type: "paragraph", text: "0012H = 18, 18 x 4 = 72 = 0048H, so **DX = 0000H** and **AX = 0048H**." },
    shots("lab3", "Exercise 7: MUL BX", [5], ["Emulator with AX = 0012H and BX = 0004H, ready for MUL BX"]),

    { type: "subheading", text: "8. Divide 0064H by 0008H using 16-bit DIV. Record AX and DX." },
    { type: "code", language: "asm", code: `MOV AX, 00064H\nMOV BX, 00008H\nDIV BX` },
    { type: "paragraph", text: "0064H = 100, 100 / 8 = 12 remainder 4, so **AX = 000CH** (quotient) and **DX = 0004H** (remainder)." },
    shots("lab3", "Exercise 8: 16-bit DIV", [1], ["Emulator after DIV BX: AX = 000CH, DX = 0004H"]),
  ],
};

// ---------------------------------------------------------------------------
const lab4 = {
  title: "Lab 4: Variables in the Data Segment (DB and DW)",
  summary:
    "Four tasks with a full .MODEL SMALL program: byte variables, adding and storing a result, a word variable, and adding two words, each with source code and emulator screenshots.",
  theory: [
    {
      type: "paragraph",
      text: "Each task is a complete program: the variables are declared in the **.DATA** segment (**DB** = define byte, **DW** = define word) and the code first loads the data segment into **DS** with MOV AX, @DATA and MOV DS, AX.",
    },

    { type: "heading", text: "Task 1" },
    { type: "paragraph", text: "Create NUM1 = 05H and NUM2 = 07H. Load NUM1 into AL and NUM2 into BL." },
    {
      type: "code",
      language: "asm",
      code: `.MODEL SMALL
.STACK 100H

.DATA
    NUM1 DB 05H
    NUM2 DB 07H

.CODE
MAIN PROC
    MOV AX, @DATA
    MOV DS, AX

    MOV AL, NUM1
    MOV BL, NUM2

    MOV AH, 4CH
    INT 21H
MAIN ENDP
END MAIN`,
    },
    { type: "paragraph", text: "Result: **AL = 05H** and **BL = 07H**." },
    shots("lab4", "Task 1: source code and emulator", [1, 2], ["Task 1, source code", "Task 1, emulator"]),

    { type: "heading", text: "Task 2" },
    { type: "paragraph", text: "Create NUM1 = 08H, NUM2 = 04H and RESULT = 00H. Add them and store the result in RESULT." },
    {
      type: "code",
      language: "asm",
      code: `.MODEL SMALL
.STACK 100H

.DATA
    NUM1   DB 08H
    NUM2   DB 04H
    RESULT DB 00H

.CODE
MAIN PROC
    MOV AX, @DATA
    MOV DS, AX

    MOV AL, NUM1
    ADD AL, NUM2
    MOV RESULT, AL

    MOV AH, 4CH
    INT 21H
MAIN ENDP
END MAIN`,
    },
    { type: "paragraph", text: "Result: 08H + 04H = **0CH**, so AL = 0CH and RESULT = 0CH." },
    shots("lab4", "Task 2: source code and emulator", [4, 3], ["Task 2, source code", "Task 2, emulator"]),

    { type: "heading", text: "Task 3" },
    { type: "paragraph", text: "Create VALUE DW 1234H and load it into AX." },
    {
      type: "code",
      language: "asm",
      code: `.MODEL SMALL
.STACK 100H

.DATA
    VALUE DW 1234H

.CODE
MAIN PROC
    MOV AX, @DATA
    MOV DS, AX

    MOV AX, VALUE

    MOV AH, 4CH
    INT 21H
MAIN ENDP
END MAIN`,
    },
    { type: "paragraph", text: "Result: after MOV AX, VALUE, **AX = 1234H**." },
    shots("lab4", "Task 3: source code and emulator", [6, 5], ["Task 3, source code", "Task 3, emulator"]),

    { type: "heading", text: "Task 4" },
    { type: "paragraph", text: "Create NUM1 DW 0010H and NUM2 DW 0005H. Add them using AX." },
    {
      type: "code",
      language: "asm",
      code: `.MODEL SMALL
.STACK 100H

.DATA
    NUM1 DW 0010H
    NUM2 DW 0005H

.CODE
MAIN PROC
    MOV AX, @DATA
    MOV DS, AX

    MOV AX, NUM1
    ADD AX, NUM2

    MOV AH, 4CH
    INT 21H
MAIN ENDP
END MAIN`,
    },
    { type: "paragraph", text: "Result: 0010H + 0005H = **0015H**, so AX = 0015H." },
    shots("lab4", "Task 4: source code and emulator", [7, 8], ["Task 4, source code", "Task 4, emulator"]),
  ],
};

// Lessons in lab order.
export const labLessons = [lab1, lab2, lab3, lab4];
