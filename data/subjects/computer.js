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
      "max": 12,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "true_false",
      "title": "Write True or False",
      "max": 12,
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
              "Lines tool",
              "Paint tool"
            ]
          },
          {
            "q": "When you want to quit Tux Paint, you click on the",
            "a": "Quit tool",
            "options": [
              "Quit tool",
              "Open tool",
              "Print tool",
              "Save tool"
            ]
          },
          {
            "q": "Tux Paint is used to",
            "a": "draw pictures",
            "options": [
              "draw pictures",
              "do calculations",
              "play video games",
              "type letters"
            ]
          },
          {
            "q": "Blank area in the window of the Tux Paint is called",
            "a": "Drawing Area",
            "options": [
              "Drawing Area",
              "script area",
              "magic area",
              "color area"
            ]
          },
          {
            "q": "What contains the various basic tools?",
            "a": "Toolbox",
            "options": [
              "Toolbox",
              "Canvas Area",
              "Selector",
              "Title bar"
            ]
          },
          {
            "q": "Which tool is used to draw?",
            "a": "Paint tool",
            "options": [
              "Paint tool",
              "Stamp tool",
              "Save tool",
              "Lines tool"
            ]
          },
          {
            "q": "Which tool is used to add stamps?",
            "a": "Stamp tool",
            "options": [
              "Stamp tool",
              "Paint tool",
              "Eraser tool",
              "Magic tool"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "You can open a new drawing using the ___ tool.",
            "a": "New",
            "options": [
              "New",
              "Open",
              "Save",
              "Quit"
            ]
          },
          {
            "q": "The ___ tool is used to delete any part of the drawing.",
            "a": "Eraser",
            "options": [
              "Eraser",
              "Paint",
              "Stamp",
              "Magic"
            ]
          },
          {
            "q": "We can save our drawing by using the ___ tool.",
            "a": "Save",
            "options": [
              "Save",
              "Open",
              "New",
              "Print"
            ]
          },
          {
            "q": "The ___ tool is used to open the already created drawing.",
            "a": "Open",
            "options": [
              "Open",
              "New",
              "Save",
              "Quit"
            ]
          },
          {
            "q": "___ tool is used to close the Tux Paint program.",
            "a": "Quit",
            "options": [
              "Quit",
              "Save",
              "Open",
              "New"
            ]
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
            "a": "New tool",
            "options": [
              "New tool",
              "Stamp tool",
              "Open tool",
              "Magic tool"
            ]
          },
          {
            "q": "A tool used to erase a drawing or a part of a drawing",
            "a": "Eraser tool",
            "options": [
              "Eraser tool",
              "Paint tool",
              "Stamp tool",
              "Lines tool"
            ]
          },
          {
            "q": "A tool used for closing the Tux Paint program",
            "a": "Quit tool",
            "options": [
              "Quit tool",
              "Save tool",
              "Open tool",
              "Print tool"
            ]
          },
          {
            "q": "A tool used to save a drawing",
            "a": "Save tool",
            "options": [
              "Save tool",
              "Open tool",
              "New tool",
              "Print tool"
            ]
          },
          {
            "q": "A tool used to colour a picture",
            "a": "Magic tool",
            "options": [
              "Magic tool",
              "Paint tool",
              "Stamp tool",
              "Lines tool"
            ]
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
            "a": "MAGIC",
            "options": [
              "MAGIC",
              "MAGCI",
              "MAJIC",
              "MAGIK"
            ]
          },
          {
            "q": "P A M S T",
            "a": "STAMP",
            "options": [
              "STAMP",
              "STMAP",
              "STAPM",
              "STEMP"
            ]
          },
          {
            "q": "S E R A R E",
            "a": "ERASER",
            "options": [
              "ERASER",
              "ERASRE",
              "ERESAR",
              "ERASOR"
            ]
          },
          {
            "q": "N I L E S",
            "a": "LINES",
            "options": [
              "LINES",
              "LINSE",
              "LIENS",
              "LNEIS"
            ]
          },
          {
            "q": "T I P A N",
            "a": "PAINT",
            "options": [
              "PAINT",
              "PIANT",
              "PANIT",
              "PATIN"
            ]
          },
          {
            "q": "I T U Q",
            "a": "QUIT",
            "options": [
              "QUIT",
              "QIUT",
              "QTIU",
              "QUET"
            ]
          },
          {
            "q": "V A S E",
            "a": "SAVE",
            "options": [
              "SAVE",
              "SAEV",
              "SVAE",
              "SEVA"
            ]
          },
          {
            "q": "E P O N",
            "a": "OPEN",
            "options": [
              "OPEN",
              "OPNE",
              "OEPN",
              "OPAN"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "M _ G I C",
            "a": "MAGIC",
            "options": [
              "MAGIC",
              "MAGIK",
              "MOGIC",
              "MAGAC"
            ]
          },
          {
            "q": "S T _ M P",
            "a": "STAMP",
            "options": [
              "STAMP",
              "STEMP",
              "STOMP",
              "STUMP"
            ]
          },
          {
            "q": "E R _ S E R",
            "a": "ERASER",
            "options": [
              "ERASER",
              "ERUSER",
              "ERISER",
              "ERASOR"
            ]
          },
          {
            "q": "S H _ P E S",
            "a": "SHAPES",
            "options": [
              "SHAPES",
              "SHIPES",
              "SHOPES",
              "SHUPES"
            ]
          },
          {
            "q": "C _ N V _ S",
            "a": "CANVAS",
            "options": [
              "CANVAS",
              "CENVAS",
              "CONVAS",
              "CUNVAS"
            ]
          },
          {
            "q": "M _ S C _ T",
            "a": "MASCOT",
            "options": [
              "MASCOT",
              "MISCOT",
              "MOSCOT",
              "MESCOT"
            ]
          },
          {
            "q": "B R _ S H E S",
            "a": "BRUSHES",
            "options": [
              "BRUSHES",
              "BLUSHES",
              "BROSHES",
              "BRASHES"
            ]
          },
          {
            "q": "C _ L O R S",
            "a": "COLORS",
            "options": [
              "COLORS",
              "CALORS",
              "COLURS",
              "CULORS"
            ]
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
              "Eraser tool",
              "Line tool"
            ]
          },
          {
            "q": "These buttons are part of control buttons.",
            "a": "Both of these",
            "options": [
              "Minimise",
              "Restore",
              "Both of these",
              "None of these"
            ]
          },
          {
            "q": "This tool is used to make the drawing look bigger.",
            "a": "Magnifier tool",
            "options": [
              "Magnifier tool",
              "Pencil tool",
              "Eraser tool",
              "Color Picker tool"
            ]
          },
          {
            "q": "This tool is used to select a colour from an existing object and fill it into any other object.",
            "a": "Color Picker tool",
            "options": [
              "Color Picker tool",
              "Fill with Color",
              "Colors group",
              "Brushes tool"
            ]
          },
          {
            "q": "This option is used to select the picture or a part of the picture in an irregular shape.",
            "a": "Free-form selection",
            "options": [
              "Free-form selection",
              "Rectangular selection",
              "Square selection",
              "Circular selection"
            ]
          },
          {
            "q": "AI can help you by:",
            "a": "Suggesting colors and fixing mistakes",
            "options": [
              "Suggesting colors and fixing mistakes",
              "Drawing everything for you",
              "Deleting your drawing",
              "Shutting down the computer"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "The ___ command will help you to select everything present on the Paint screen.",
            "a": "Select all",
            "options": [
              "Select all",
              "Free-form selection",
              "Rectangular selection",
              "Invert selection"
            ]
          },
          {
            "q": "The ___ tool is used to write on the picture.",
            "a": "Text",
            "options": [
              "Text",
              "Pencil",
              "Brush",
              "Eraser"
            ]
          },
          {
            "q": "The ___ tool is used to make the drawing look larger.",
            "a": "Magnifier",
            "options": [
              "Magnifier",
              "Pencil",
              "Brushes",
              "Color Picker"
            ]
          },
          {
            "q": "The ___ group contains many tools that perform different functions.",
            "a": "Tools",
            "options": [
              "Tools",
              "Shapes",
              "Colors",
              "Clipboard"
            ]
          },
          {
            "q": "The ___ tool helps you draw shapes with many sides.",
            "a": "Polygon",
            "options": [
              "Polygon",
              "Rectangle",
              "Oval",
              "Line"
            ]
          },
          {
            "q": "The ___ group is used to draw shapes like rectangles and triangles.",
            "a": "Shape",
            "options": [
              "Shape",
              "Tools",
              "Colors",
              "Image"
            ]
          },
          {
            "q": "The ___ tool is used to make a wavy line.",
            "a": "Curve",
            "options": [
              "Curve",
              "Line",
              "Polygon",
              "Pencil"
            ]
          },
          {
            "q": "The Paint program gives children access to ___ and paint.",
            "a": "draw",
            "options": [
              "draw",
              "type",
              "calculate",
              "listen"
            ]
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
            "a": "Drawing Area",
            "options": [
              "Drawing Area",
              "Ribbon",
              "Title bar",
              "Status bar"
            ]
          },
          {
            "q": "The button that allows us to open, close, and save a file.",
            "a": "Paint button",
            "options": [
              "Paint button",
              "Control button",
              "Help button",
              "Tool button"
            ]
          },
          {
            "q": "The buttons placed at the top right side of the title bar.",
            "a": "Control buttons",
            "options": [
              "Control buttons",
              "Scroll buttons",
              "Tool buttons",
              "Tab buttons"
            ]
          },
          {
            "q": "The group used to draw different shapes like circles, rectangles, and triangles.",
            "a": "Shape group",
            "options": [
              "Shape group",
              "Colors group",
              "Tools group",
              "Clipboard group"
            ]
          },
          {
            "q": "The tool used to write text with the picture.",
            "a": "Text tool",
            "options": [
              "Text tool",
              "Pencil tool",
              "Eraser tool",
              "Color Picker tool"
            ]
          },
          {
            "q": "The tool used to erase the unwanted part of a picture.",
            "a": "Eraser tool",
            "options": [
              "Eraser tool",
              "Pencil tool",
              "Magnifier tool",
              "Brush tool"
            ]
          },
          {
            "q": "The tool used to make the drawing look bigger.",
            "a": "Magnifier tool",
            "options": [
              "Magnifier tool",
              "Pencil tool",
              "Color Picker tool",
              "Brush tool"
            ]
          },
          {
            "q": "The tool used to select any part of the picture that we want to change.",
            "a": "Select tool",
            "options": [
              "Select tool",
              "Pencil tool",
              "Text tool",
              "Eraser tool"
            ]
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
            "q": "P _ N C _ L",
            "a": "PENCIL",
            "options": [
              "PENCIL",
              "PANCIL",
              "PENCEL",
              "PANCLE"
            ]
          },
          {
            "q": "C _ N V _ S",
            "a": "CANVAS",
            "options": [
              "CANVAS",
              "CENVAS",
              "CONVAS",
              "CUNVAS"
            ]
          },
          {
            "q": "E R _ S E R",
            "a": "ERASER",
            "options": [
              "ERASER",
              "ERUSER",
              "ERISER",
              "ERASOR"
            ]
          },
          {
            "q": "W _ N D _ W",
            "a": "WINDOW",
            "options": [
              "WINDOW",
              "WANDOW",
              "WENDOW",
              "WINDOR"
            ]
          },
          {
            "q": "C _ R V E",
            "a": "CURVE",
            "options": [
              "CURVE",
              "CORVE",
              "CARVE",
              "CIRVE"
            ]
          },
          {
            "q": "S H _ P E S",
            "a": "SHAPES",
            "options": [
              "SHAPES",
              "SHIPES",
              "SHOPES",
              "SHUPES"
            ]
          },
          {
            "q": "P _ L Y G _ N",
            "a": "POLYGON",
            "options": [
              "POLYGON",
              "PELYGON",
              "PALYGON",
              "POLYGEN"
            ]
          },
          {
            "q": "M _ G N _ F I E R",
            "a": "MAGNIFIER",
            "options": [
              "MAGNIFIER",
              "MEGNIFIER",
              "MOGNIFIER",
              "MAGNEFIER"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "I N P A T",
            "a": "PAINT",
            "options": [
              "PAINT",
              "PIANT",
              "PANIT",
              "PATIN"
            ]
          },
          {
            "q": "B I R O N B",
            "a": "RIBBON",
            "options": [
              "RIBBON",
              "RIBNOB",
              "RIBNON",
              "ROBBIN"
            ]
          },
          {
            "q": "L C O O S R",
            "a": "COLORS",
            "options": [
              "COLORS",
              "COLROS",
              "COSLOR",
              "COLURS"
            ]
          },
          {
            "q": "T X T E",
            "a": "TEXT",
            "options": [
              "TEXT",
              "TXET",
              "TETX",
              "TXTE"
            ]
          },
          {
            "q": "L T E I T",
            "a": "TITLE",
            "options": [
              "TITLE",
              "TITEL",
              "TILTE",
              "TLEIT"
            ]
          },
          {
            "q": "C E S L T E",
            "a": "SELECT",
            "options": [
              "SELECT",
              "SELCET",
              "SETECL",
              "SELTEC"
            ]
          },
          {
            "q": "I S T R T A",
            "a": "ARTIST",
            "options": [
              "ARTIST",
              "ARTTIS",
              "ATRITS",
              "ATRIST"
            ]
          },
          {
            "q": "O T S O L",
            "a": "TOOLS",
            "options": [
              "TOOLS",
              "TOOLZ",
              "TOOSL",
              "TLSOO"
            ]
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
            "a": "ten",
            "options": [
              "ten",
              "nine",
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
              "top left",
              "bottom left"
            ]
          },
          {
            "q": "Which one of the following is an option of the MS Word title bar?",
            "a": "Close",
            "options": [
              "Close",
              "Open",
              "Edit",
              "Print"
            ]
          },
          {
            "q": "Zoom slider is an option available in which part of MS Word?",
            "a": "Status bar",
            "options": [
              "Status bar",
              "Title bar",
              "Toolbar",
              "Ribbon"
            ]
          },
          {
            "q": "Which one of the following is an option of the MS Word Quick Access Toolbar?",
            "a": "Undo",
            "options": [
              "Undo",
              "Cut",
              "Paste",
              "Copy"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "___ is a ribbon tab available in MS Word.",
            "a": "Design",
            "options": [
              "Design",
              "Eraser",
              "Brush",
              "Pencil"
            ]
          },
          {
            "q": "The ___ is located at the top of the MS Word window. It displays the document name followed by the program name.",
            "a": "Title bar",
            "options": [
              "Title bar",
              "Status bar",
              "Menu bar",
              "Scroll bar"
            ]
          },
          {
            "q": "The ___ is located at the upper left corner of the Word window.",
            "a": "Quick Access toolbar",
            "options": [
              "Quick Access toolbar",
              "Status bar",
              "Horizontal ruler",
              "Vertical scroll bar"
            ]
          },
          {
            "q": "The ___ is located below the title bar. This contains all the commands which are needed to perform basic tasks in Word.",
            "a": "Menu bar",
            "options": [
              "Menu bar",
              "Status bar",
              "Taskbar",
              "Scroll bar"
            ]
          },
          {
            "q": "The ___ is at the top of the document window.",
            "a": "Horizontal ruler",
            "options": [
              "Horizontal ruler",
              "Vertical ruler",
              "Status bar",
              "Scroll bar"
            ]
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
            "a": "Title bar",
            "options": [
              "Title bar",
              "Status bar",
              "Menu bar",
              "Scroll bar"
            ]
          },
          {
            "q": "It is the first tab on the ribbon.",
            "a": "File tab",
            "options": [
              "File tab",
              "Home tab",
              "Insert tab",
              "View tab"
            ]
          },
          {
            "q": "It is the area where the text is typed or edited.",
            "a": "Document area",
            "options": [
              "Document area",
              "Drawing area",
              "Status bar",
              "Quick Access toolbar"
            ]
          },
          {
            "q": "It is used to set the margins of the page.",
            "a": "Ruler",
            "options": [
              "Ruler",
              "Ribbon",
              "Cursor",
              "Scroll bar"
            ]
          },
          {
            "q": "It is used to scroll the document area left or right.",
            "a": "Horizontal scroll bar",
            "options": [
              "Horizontal scroll bar",
              "Vertical scroll bar",
              "Status bar",
              "Title bar"
            ]
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
