// =============================================================================
// Computer Science — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================


const SUBJECT_COMPUTER = {
  id: "computer",
  title: "Computer Science",
  icon: "💻",
  theme: "#8b5cf6",
  gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  sections: [
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
    }
  ],
  chapters: [
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
    }
  ]
};