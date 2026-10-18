// =============================================================================
// Computer Science — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================


const SUBJECT_COMPUTER = {
  "id": "computer",
  "title": "Computer Science",
  "icon": "💻",
  "theme": "#8b5cf6",
  "gradient": "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "sections": [
    {
      "id": "mcq_standard",
      "title": "Choose the correct answer",
      "max": 20,
      "default": 10,
      "marksPerQ": 1
    },
    {
      "id": "fill_blanks",
      "title": "Fill in the blanks",
      "max": 15,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "true_false",
      "title": "Write True or False",
      "max": 15,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "one_word",
      "title": "Name the following",
      "max": 12,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "match_following",
      "title": "Match the following",
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "short_answer",
      "title": "Answer the following questions",
      "max": 20,
      "default": 5,
      "marksPerQ": 2
    },
    {
      "id": "rearrange",
      "title": "Rearrange",
      "max": 20,
      "default": 8,
      "marksPerQ": 1
    },
    {
      "id": "missing_letters",
      "title": "Missing Letters",
      "max": 20,
      "default": 8,
      "marksPerQ": 1
    },
    {
      "id": "drawings",
      "title": "Drawings",
      "max": 10,
      "default": 2,
      "marksPerQ": 2
    }
  ],
  "chapters": [
    {
      "id": "uses_of_keyboard",
      "number": 4,
      "title": "Uses of Keyboard",
      "bank": {
        "mcq_standard": [
          {
            "q": "Which among the following is a type of punctuation key?",
            "a": "(?)",
            "options": [
              "(?)",
              "Caps Lock",
              "Enter",
              "Shift"
            ]
          },
          {
            "q": "This is the longest key on a keyboard.",
            "a": "Spacebar key",
            "options": [
              "Enter key",
              "Shift key",
              "Spacebar key",
              "Tab key"
            ]
          },
          {
            "q": "There are ___ sets of number keys on a keyboard.",
            "a": "2",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ]
          },
          {
            "q": "Which key combination is used to move the cursor to the top of a document?",
            "a": "Ctrl+Home",
            "options": [
              "Ctrl+Home",
              "Ctrl+End",
              "Ctrl+Alt+Home",
              "Shift+Home"
            ]
          },
          {
            "q": "Which key is used to close a menu or a dialog box?",
            "a": "Esc",
            "options": [
              "Shift key",
              "F1",
              "Esc",
              "Ctrl"
            ]
          },
          {
            "q": "AI helps with typing by:",
            "a": "Suggesting words and making typing faster",
            "options": [
              "Correcting your mistakes",
              "Suggesting words and making typing faster",
              "Typing everything for you",
              "Shutting down the computer"
            ]
          },
          {
            "q": "How many alphabet keys are there on a keyboard?",
            "a": "26",
            "options": [
              "24",
              "26",
              "28",
              "30"
            ]
          },
          {
            "q": "The keys which have numbers (0-9) written on them are called ___ keys.",
            "a": "number",
            "options": [
              "alphabet",
              "number",
              "special",
              "function"
            ]
          },
          {
            "q": "Which key is used to start the text from a new line?",
            "a": "Enter key",
            "options": [
              "Shift key",
              "Spacebar",
              "Enter key",
              "Tab key"
            ]
          },
          {
            "q": "The ___ key is used to enter text in capital letters.",
            "a": "Caps Lock",
            "options": [
              "Caps Lock",
              "Enter",
              "Backspace",
              "Esc"
            ]
          },
          {
            "q": "How many enter keys are there on a standard keyboard?",
            "a": "2",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ]
          },
          {
            "q": "How many arrow keys are there on a keyboard?",
            "a": "4",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ]
          },
          {
            "q": "Which key is used to copy a file or folder?",
            "a": "Ctrl+C",
            "options": [
              "Ctrl+C",
              "Ctrl+V",
              "Alt+F4",
              "Ctrl+End"
            ]
          },
          {
            "q": "Which combination is used to shut down the computer?",
            "a": "Ctrl+Alt+Del",
            "options": [
              "Ctrl+Alt+Del",
              "Alt+F4",
              "Shift+Del",
              "Ctrl+Home"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "___ is a small blinking line on the monitor.",
            "a": "Cursor",
            "options": [
              "Cursor",
              "Line",
              "Pointer",
              "Mark"
            ]
          },
          {
            "q": "___ key is used to erase anything which is typed on the left side of the cursor.",
            "a": "Backspace",
            "options": [
              "Delete",
              "Backspace",
              "Esc",
              "Tab"
            ]
          },
          {
            "q": "___ keys are needed while writing a paragraph or a sentence.",
            "a": "Punctuation",
            "options": [
              "Punctuation",
              "Number",
              "Arrow",
              "Function"
            ]
          },
          {
            "q": "Shift, Ctrl and Alt are the ___ keys.",
            "a": "combination",
            "options": [
              "combination",
              "special",
              "alphabet",
              "number"
            ]
          },
          {
            "q": "___ key is used to move the cursor to the right by fixed amount of spaces.",
            "a": "Tab",
            "options": [
              "Tab",
              "Shift",
              "Spacebar",
              "Enter"
            ]
          },
          {
            "q": "There are ___ function keys on a keyboard.",
            "a": "12",
            "options": [
              "10",
              "11",
              "12",
              "14"
            ]
          },
          {
            "q": "The keys which have an English letter on them are ___ keys.",
            "a": "alphabet",
            "options": [
              "number",
              "alphabet",
              "special",
              "arrow"
            ]
          },
          {
            "q": "The ___ key is used to type the upper part of a key, like the @ symbol.",
            "a": "Shift",
            "options": [
              "Shift",
              "Ctrl",
              "Alt",
              "Enter"
            ]
          }
        ],
        "true_false": [
          {
            "q": "There are twelve function keys in a keyboard.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "If you want to type all the letters in capital, you will use the 'ESC' key.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "There is only one shift key on a keyboard.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Delete key and Backspace key are used to erase a text.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Spacebar is used to insert blank spaces.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Enter key is used to move the cursor to the next line.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Alphabet keys are used for typing numbers.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Num lock key is pressed to enter the alphabets easily.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Num lock key must be ON to type numbers from the numeric keypad.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Shift + Del is used to permanently delete a file.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Ctrl + V is used to copy a file.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Alt + F4 is used to close a program.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "How many alphabet keys are there on a keyboard?",
            "a": "26",
            "options": [
              "26",
              "12",
              "2",
              "10"
            ]
          },
          {
            "q": "What keys are used for calculations and data entries?",
            "a": "Number keys",
            "options": [
              "Number keys",
              "Alphabet keys",
              "Special keys",
              "Function keys"
            ]
          },
          {
            "q": "Which is the longest key on the keyboard?",
            "a": "Spacebar",
            "options": [
              "Spacebar",
              "Enter",
              "Shift",
              "Backspace"
            ]
          },
          {
            "q": "Which key is used to erase the letter to the left of the cursor?",
            "a": "Backspace key",
            "options": [
              "Backspace key",
              "Delete key",
              "Esc key",
              "Tab key"
            ]
          },
          {
            "q": "Which key is used to remove the letter to the right of the cursor?",
            "a": "Delete key",
            "options": [
              "Delete key",
              "Backspace key",
              "Enter key",
              "Spacebar"
            ]
          },
          {
            "q": "What is the small blinking line on the monitor called?",
            "a": "Cursor",
            "options": [
              "Cursor",
              "Pointer",
              "Arrow",
              "Line"
            ]
          },
          {
            "q": "What keys are from F1 to F12 on the uppermost part of the keyboard?",
            "a": "Function keys",
            "options": [
              "Function keys",
              "Number keys",
              "Combination keys",
              "Alphabet keys"
            ]
          }
        ],
        "match_following": [
          {
            "q": "This is used to move the cursor to the right by a fixed amount of spaces.",
            "a": "Tab key"
          },
          {
            "q": "This key is used to close a menu or a dialogue box.",
            "a": "Esc key"
          },
          {
            "q": "These keys are used to move the cursor on the monitor.",
            "a": "Arrow keys"
          },
          {
            "q": "This key is used to enter the numbers easily.",
            "a": "Num Lock key"
          },
          {
            "q": "This key is used to erase anything which is typed on the left side of the cursor.",
            "a": "Backspace key"
          },
          {
            "q": "This key is used to erase anything which is typed on the right side of the cursor.",
            "a": "Delete key"
          }
        ]
      }
    },
    {
      "id": "tux_paint",
      "number": 5,
      "title": "Tux paint",
      "bank": {
        "mcq_standard": [
          {
            "q": "Which tool is used to erase a mistake in your drawing?",
            "a": "Eraser tool",
            "options": [
              "Eraser tool",
              "Stamp tool",
              "Lines tool"
            ]
          },
          {
            "q": "When you want to quit Tux Paint, you click on the",
            "a": "Quit tool",
            "options": [
              "Quit tool",
              "Open tool",
              "Print tool"
            ]
          },
          {
            "q": "Tux Paint is used to",
            "a": "draw pictures",
            "options": [
              "play video games",
              "do calculations",
              "draw pictures"
            ]
          },
          {
            "q": "Blank area in the window of the Tux Paint is called",
            "a": "Drawing Area",
            "options": [
              "script area",
              "Drawing Area",
              "magic area"
            ]
          },
          {
            "q": "What contains the various basic tools?",
            "a": "Toolbox",
            "options": [
              "Toolbox",
              "Canvas Area",
              "Selector"
            ]
          },
          {
            "q": "Which tool is used to draw?",
            "a": "Paint tool",
            "options": [
              "Paint tool",
              "Stamp tool",
              "Save tool"
            ]
          },
          {
            "q": "Which tool is used to add stamps?",
            "a": "Stamp tool",
            "options": [
              "Paint tool",
              "Stamp tool",
              "Eraser tool"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "You can open a new drawing using the ___ tool.",
            "a": "New"
          },
          {
            "q": "The ___ tool is used to delete any part of the drawing.",
            "a": "Eraser"
          },
          {
            "q": "We can save our drawing by using the ___ tool.",
            "a": "Save"
          },
          {
            "q": "The ___ tool is used to open the already created drawing.",
            "a": "Open"
          },
          {
            "q": "___ tool is used to close the Tux Paint program.",
            "a": "Quit"
          }
        ],
        "true_false": [
          {
            "q": "The Eraser tool is used to quit the program after drawing.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Paint tool is used to draw.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The new command is to save a new file.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Tux Paint is a freehand drawing program for children.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Magic Fill is like the Brush tool in MS Paint.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "A tool that has lots of pictures already saved in it",
            "a": "New tool"
          },
          {
            "q": "A tool used to erase a drawing or a part of a drawing",
            "a": "Eraser tool"
          },
          {
            "q": "A tool used for closing the Tux Paint program",
            "a": "Quit tool"
          },
          {
            "q": "A tool used to save a drawing",
            "a": "Save tool"
          },
          {
            "q": "A tool used to colour a picture",
            "a": "Magic tool"
          }
        ],
        "match_following": [
          {
            "q": "Draw freehand",
            "a": "Paint tool"
          },
          {
            "q": "Draw straight lines",
            "a": "Lines tool"
          },
          {
            "q": "Add stickers",
            "a": "Stamp tool"
          },
          {
            "q": "Erase mistakes",
            "a": "Eraser tool"
          },
          {
            "q": "Start new page",
            "a": "New tool"
          },
          {
            "q": "Save your work",
            "a": "Save tool"
          },
          {
            "q": "Open old work",
            "a": "Open tool"
          },
          {
            "q": "Close the program",
            "a": "Quit tool"
          }
        ],
        "short_answer": [
          {
            "q": "What is Tux Paint?",
            "a": "Tux Paint is a freehand drawing program for children. It has many ready-made tools, fun sound effects, and a cartoon mascot that helps you make beautiful drawings"
          },
          {
            "q": "How will you open a drawing?",
            "a": "To open a drawing:\nStep 1: Click on the Open Tool.\nStep 2: Select the drawing you want to open."
          },
          {
            "q": "Which tool is used to close Tux Paint? How will you do it?",
            "a": "The Quit tool is used to close Tux Paint. The steps to close Tux Paint are as follows:\n1. Click on the Quit tool.\n2. A box will pop up then Click on the \"Yes\" button to close the program."
          }
        ],
        "rearrange": [
          {
            "q": "G I M C A",
            "a": "MAGIC"
          },
          {
            "q": "P A M S T",
            "a": "STAMP"
          },
          {
            "q": "S E R A R E",
            "a": "ERASER"
          },
          {
            "q": "N I L E S",
            "a": "LINES"
          },
          {
            "q": "T I P A N",
            "a": "PAINT"
          },
          {
            "q": "I T U Q",
            "a": "QUIT"
          },
          {
            "q": "V A S E",
            "a": "SAVE"
          },
          {
            "q": "E P O N",
            "a": "OPEN"
          }
        ],
        "missing_letters": [
          {
            "q": "MAGIC",
            "a": "MAGIC"
          },
          {
            "q": "STAMP",
            "a": "STAMP"
          },
          {
            "q": "ERASER",
            "a": "ERASER"
          },
          {
            "q": "SHAPES",
            "a": "SHAPES"
          },
          {
            "q": "CANVAS",
            "a": "CANVAS"
          },
          {
            "q": "M A S C O T",
            "a": "MASCOT"
          },
          {
            "q": "BRUSHES",
            "a": "BRUSHES"
          },
          {
            "q": "COLORS",
            "a": "COLORS"
          }
        ]
      }
    },
    {
      "id": "ms_paint",
      "number": 6,
      "title": "MS PAINT",
      "bank": {
        "mcq_standard": [
          {
            "q": "This tool is used to draw free-form lines or curves.",
            "a": "Pencil tool",
            "options": [
              "Pencil tool",
              "Text tool",
              "Eraser tool"
            ]
          },
          {
            "q": "These buttons are part of control buttons.",
            "a": "Both of these",
            "options": [
              "Minimise",
              "Restore",
              "Both of these"
            ]
          },
          {
            "q": "This tool is used to make the drawing look bigger.",
            "a": "Magnifier tool",
            "options": [
              "Pencil tool",
              "Eraser tool",
              "Magnifier tool"
            ]
          },
          {
            "q": "This tool is used to select a colour from an existing object and fill it into any other object.",
            "a": "Color Picker tool",
            "options": [
              "Color Picker tool",
              "Fill with Color",
              "Colors group"
            ]
          },
          {
            "q": "This option is used to select the picture or a part of the picture in an irregular shape.",
            "a": "Free-form selection",
            "options": [
              "Rectangular selection",
              "Free-form selection",
              "Square selection"
            ]
          },
          {
            "q": "AI can help you by:",
            "a": "Suggesting colors and fixing mistakes",
            "options": [
              "Drawing everything for you",
              "Suggesting colors and fixing mistakes",
              "Deleting your drawing"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "The ___ command will help you to select everything present on the Paint screen.",
            "a": "Select all"
          },
          {
            "q": "The ___ tool is used to write on the picture.",
            "a": "Text"
          },
          {
            "q": "The ___ tool is used to make the drawing look larger.",
            "a": "Magnifier"
          },
          {
            "q": "The ___ group contains many tools that perform different functions.",
            "a": "Tools"
          },
          {
            "q": "The ___ tool helps you draw shapes with many sides.",
            "a": "Polygon"
          },
          {
            "q": "The ___ group is used to draw shapes like rectangles and triangles.",
            "a": "Shape"
          },
          {
            "q": "The ___ tool is used to make a wavy line.",
            "a": "Curve"
          },
          {
            "q": "The Paint program gives children access to ___ and paint.",
            "a": "draw"
          }
        ],
        "match_following": [
          {
            "q": "Select and fill color from an object",
            "a": "Color Picker icon"
          },
          {
            "q": "Draw a smooth wavy line",
            "a": "Curve line icon 〰️"
          },
          {
            "q": "Make shapes with any number of sides",
            "a": "Polygon shape icon ⬠"
          },
          {
            "q": "Maximise the Paint window",
            "a": "Square box icon"
          },
          {
            "q": "Minimise the Paint window",
            "a": "Minus dash icon"
          }
        ],
        "true_false": [
          {
            "q": "Control buttons are placed at the top left side of the title bar.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Pencil tool is used to draw free-form lines or curves.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Curve tool is used to draw a smooth straight line.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "To draw a circle, we use Rectangle tool from the shape group.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Control buttons are placed at the bottom left side of the screen.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Canvas area is another name for the Drawing Area.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Polygon tool is used to make wavy lines.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "AI programs can draw pictures based on text descriptions you give them.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "The area in Paint also called the Canvas area.",
            "a": "Drawing Area"
          },
          {
            "q": "The button that allows us to open, close, and save a file.",
            "a": "Paint button"
          },
          {
            "q": "The buttons placed at the top right side of the title bar.",
            "a": "Control buttons"
          },
          {
            "q": "The group used to draw different shapes like circles, rectangles, and triangles.",
            "a": "Shape group"
          },
          {
            "q": "The tool used to write text with the picture.",
            "a": "Text tool"
          },
          {
            "q": "The tool used to erase the unwanted part of a picture.",
            "a": "Eraser tool"
          },
          {
            "q": "The tool used to make the drawing look bigger.",
            "a": "Magnifier tool"
          },
          {
            "q": "The tool used to select any part of the picture that we want to change.",
            "a": "Select tool"
          }
        ],
        "short_answer": [
          {
            "q": "Why do we use a magnifier tool?",
            "a": "We use a magnifier tool to zoom in and see a specific part of a drawing larger."
          },
          {
            "q": "Write the steps to close a drawing in Paint.",
            "a": "Step 1: Click on the Close button present in the Control buttons.\nStep 2: Your drawing will be closed."
          },
          {
            "q": "Why do we use curve tool?",
            "a": "We use curve tool to draw smooth wavy lines."
          },
          {
            "q": "Name any two drawing tools and state their uses.",
            "a": "Pencil tool: Used to draw free-form lines or curves.\nText tool: Used to write text along with your picture."
          },
          {
            "q": "How can Artificial Intelligence (AI) assist an artist in Paint?",
            "a": "AI can help artists by suggesting colors, fixing mistakes, finishing drawings, or creating pictures based on descriptions."
          }
        ],
        "missing_letters": [
          {
            "q": "P E N C I L",
            "a": "PENCIL"
          },
          {
            "q": "C A N V A S",
            "a": "CANVAS"
          },
          {
            "q": "E R A S E R",
            "a": "ERASER"
          },
          {
            "q": "W I N D O W",
            "a": "WINDOW"
          },
          {
            "q": "C U R V E",
            "a": "CURVE"
          },
          {
            "q": "S H A P E S",
            "a": "SHAPES"
          },
          {
            "q": "P O L Y G O N",
            "a": "POLYGON"
          },
          {
            "q": "M A G N I F I E R",
            "a": "MAGNIFIER"
          }
        ],
        "rearrange": [
          {
            "q": "I N P A T",
            "a": "PAINT"
          },
          {
            "q": "B I R O N B",
            "a": "RIBBON"
          },
          {
            "q": "L C O O S R",
            "a": "COLORS"
          },
          {
            "q": "T X T E",
            "a": "TEXT"
          },
          {
            "q": "L T E I T",
            "a": "TITLE"
          },
          {
            "q": "C E S L T E",
            "a": "SELECT"
          },
          {
            "q": "I S T R T A",
            "a": "ARTIST"
          },
          {
            "q": "O T S O L",
            "a": "TOOLS"
          }
        ]
      }
    },
    {
      "id": "ms_word",
      "number": 7,
      "title": "MS Word",
      "bank": {
        "mcq_standard": [
          {
            "q": "There are __________ tabs in MS Word.",
            "a": "",
            "options": [
              "ten",
              "eleven",
              "twelve"
            ]
          },
          {
            "q": "Close icon is present on the __________ of the Word window.",
            "a": "top right",
            "options": [
              "top right",
              "bottom right",
              "top left"
            ]
          },
          {
            "q": "Which one of the following is an option of the MS Word title bar?",
            "a": "Close",
            "options": [
              "Open",
              "Edit",
              "Close"
            ]
          },
          {
            "q": "Zoom slider is an option available in which part of MS Word?",
            "a": "Status bar",
            "options": [
              "Title bar",
              "Status bar",
              "Toolbar"
            ]
          },
          {
            "q": "Which one of the following is an option of the MS Word Quick Access Toolbar?",
            "a": "Undo",
            "options": [
              "Cut",
              "Paste",
              "Undo"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "___ is a ribbon tab available in MS Word.",
            "a": "Design"
          },
          {
            "q": "The ___ is located at the top of the MS Word window. It displays the document name followed by the program name.",
            "a": "Title bar"
          },
          {
            "q": "The ___ is located at the upper left corner of the Word window.",
            "a": "Quick Access toolbar"
          },
          {
            "q": "The ___ is located below the title bar. This contains all the commands which are needed to perform basic tasks in Word.",
            "a": "Menu bar"
          },
          {
            "q": "The ___ is at the top of the document window.",
            "a": "Horizontal ruler"
          }
        ],
        "true_false": [
          {
            "q": "An area where a document is created is called a document area. Here, we can type, insert pictures, etc.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The 'MAXIMIZE' button is used to reduce a window.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "You cannot create any new document in MS Word.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The first step to save a document is to click on the 'HOME' tab.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "MS Word is used to draw pictures only.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "match_following": [
          {
            "q": "File",
            "a": "The first tab on the ribbon"
          },
          {
            "q": "New",
            "a": "Creates a new document"
          },
          {
            "q": "Close",
            "a": "Closes the document"
          },
          {
            "q": "Save",
            "a": "Saves existing document"
          },
          {
            "q": "Save As",
            "a": "Saves different document"
          },
          {
            "q": "Status Bar",
            "a": "Bottom window bar"
          },
          {
            "q": "Rulers",
            "a": "set the margins of the page."
          }
        ],
        "one_word": [
          {
            "q": "It is the top horizontal bar of the Microsoft Word window.",
            "a": "Title bar"
          },
          {
            "q": "It is the first tab on the ribbon.",
            "a": "File tab"
          },
          {
            "q": "It is the area where the text is typed or edited.",
            "a": "Document area"
          },
          {
            "q": "It is used to set the margins of the page.",
            "a": "Ruler"
          },
          {
            "q": "It is used to scroll the document area left or right.",
            "a": "Horizontal scroll bar"
          }
        ],
        "short_answer": [
          {
            "q": "What do you mean by MS Word?",
            "a": "MS Word is a word processing software used to create, edit, format, and save text documents."
          },
          {
            "q": "What is a word processor?",
            "a": "A word processor is computer software that helps you type text on a computer."
          },
          {
            "q": "Write two uses of MS Word.",
            "a": "a. Write letters, reports, and stories.\nb. Add pictures and styles to documents."
          }
        ],
        "drawings": [
          {
            "q": "Draw any two tools which we use in MS Paint",
            "a": "Pencil, Eraser"
          },
          {
            "q": "Draw any two shapes that we use in MS Paint and label them.",
            "a": "Rectangle tool, Ellipse tool"
          }
        ]
      }
    }
  ]
}
