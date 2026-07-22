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
    "max": 14,
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
    "id": "missing_letters",
    "title": "Missing Letters",
    "max": 15,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "rearrange",
    "title": "Re-arrange the words",
    "max": 15,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "drawing",
    "title": "Diagram & Drawing",
    "max": 2,
    "default": 1,
    "marksPerQ": 5
  }
],
  chapters: [
  {
    "id": "general",
    "number": 0,
    "title": "General Topics",
    "bank": {
      "mcq_standard": [
        {
          "q": "CD stands for ___",
          "a": "Compact Disk",
          "options": [
            "Compact Disk",
            "Combo Disk",
            "Combined Disk",
            "Computer Disk"
          ]
        },
        {
          "q": "A monitor and a printer are examples of ___ devices.",
          "a": "Output",
          "options": [
            "Output",
            "Input",
            "Storage",
            "Processing"
          ]
        },
        {
          "q": "Which of the following is used to record sound into the computer?",
          "a": "Microphone",
          "options": [
            "Microphone",
            "Speaker",
            "Printer",
            "Scanner"
          ]
        },
        {
          "q": "___ is used to move the page up and down on the monitor.",
          "a": "Scroll wheel",
          "options": [
            "Scroll wheel",
            "Single-click",
            "Double-click",
            "Right-click"
          ]
        },
        {
          "q": "___ is used to open the items on a monitor.",
          "a": "Double-click",
          "options": [
            "Double-click",
            "Single-click",
            "Scroll wheel",
            "Drag and drop"
          ]
        },
        {
          "q": "In schools, computers are used ___",
          "a": "to keep the records of books",
          "options": [
            "to keep the records of books",
            "to scan items purchased",
            "to track criminals",
            "to cook food"
          ]
        },
        {
          "q": "Computers are used to maintain a list of stock items and their prices in ___",
          "a": "Malls",
          "options": [
            "Malls",
            "Banks",
            "Police stations",
            "Railway stations"
          ]
        },
        {
          "q": "Computers are used for booking tickets at ___",
          "a": "both of these",
          "options": [
            "railway stations",
            "airports",
            "both of these",
            "hospitals"
          ]
        },
        {
          "q": "In shopping malls, computers are used ___",
          "a": "to generate bills",
          "options": [
            "to generate bills",
            "to type letters",
            "to send and receive mails",
            "to test eyesight"
          ]
        },
        {
          "q": "In the banks, computers are used to ___",
          "a": "keep account details of the customers",
          "options": [
            "keep account details of the customers",
            "maintain patients' records",
            "make animated movies",
            "scan luggage"
          ]
        },
        {
          "q": "AI assistants like Alexa are used to ___",
          "a": "Answer questions and play music",
          "options": [
            "Answer questions and play music",
            "Paint pictures",
            "Drive cars",
            "Perform operations"
          ]
        },
        {
          "q": "In hospitals, AI helps doctors by ___",
          "a": "Diagnosing illnesses",
          "options": [
            "Diagnosing illnesses",
            "Cleaning rooms",
            "Selling medicines",
            "Printing tickets"
          ]
        },
        {
          "q": "Which of the following are the basic parts of a computer?",
          "a": "Monitor, keyboard, mouse, and CPU",
          "options": [
            "Monitor, keyboard, mouse, and CPU",
            "Speaker, printer, and scanner",
            "Only monitor and CPU",
            "UPS and pen drive"
          ]
        },
        {
          "q": "Which of the following is a type of mouse?",
          "a": "Optical mouse",
          "options": [
            "Optical mouse",
            "Typing mouse",
            "Screen mouse",
            "Audio mouse"
          ]
        },
        {
          "q": "What is a wireless mouse?",
          "a": "A mouse that works without a wire or cord",
          "options": [
            "A mouse that works without a wire or cord",
            "A mouse with a very long wire",
            "A mouse that only works with laptops",
            "A mouse used only for gaming"
          ]
        },
        {
          "q": "Which of these is an action performed by a mouse?",
          "a": "Drag and drop",
          "options": [
            "Drag and drop",
            "Typing numbers",
            "Scanning documents",
            "Printing bills"
          ]
        },
        {
          "q": "How does a computer help an eye doctor?",
          "a": "To test eyesight and keep patient records",
          "options": [
            "To test eyesight and keep patient records",
            "To book train tickets",
            "To track criminals",
            "To withdraw money"
          ]
        },
        {
          "q": "How do computers help in police stations?",
          "a": "To track criminal records and cases",
          "options": [
            "To track criminal records and cases",
            "To generate shopping bills",
            "To print exam papers",
            "To play music"
          ]
        },
        {
          "q": "How does a computer help in airports?",
          "a": "By booking tickets and tracking flight timings",
          "options": [
            "By booking tickets and tracking flight timings",
            "By diagnosing patients",
            "By maintaining bank accounts",
            "By scanning groceries"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "A ___ looks like a typewriter.",
          "a": "keyboard",
          "options": [
            "keyboard",
            "monitor",
            "mouse",
            "printer"
          ]
        },
        {
          "q": "The devices which are used to give commands are known as ___ devices.",
          "a": "input",
          "options": [
            "input",
            "output",
            "storage",
            "processing"
          ]
        },
        {
          "q": "The ____ is also called as Visual Display unit.",
          "a": "Monitor",
          "options": [
            "Monitor",
            "Keyboard",
            "CPU",
            "Printer"
          ]
        },
        {
          "q": "The ___ is used to play games and make a drawing as well.",
          "a": "mouse",
          "options": [
            "mouse",
            "keyboard",
            "printer",
            "speakers"
          ]
        },
        {
          "q": "The devices which are used to give results are called ___ devices.",
          "a": "output",
          "options": [
            "output",
            "input",
            "storage",
            "processing"
          ]
        },
        {
          "q": "A ___ uses computers to make test papers and exam reports.",
          "a": "teacher",
          "options": [
            "teacher",
            "doctor",
            "engineer",
            "pilot"
          ]
        },
        {
          "q": "A ___ looks like a television screen.",
          "a": "monitor",
          "options": [
            "monitor",
            "keyboard",
            "printer",
            "mouse"
          ]
        },
        {
          "q": "Computers help doctors to perform ___.",
          "a": "operations",
          "options": [
            "operations",
            "cooking",
            "driving",
            "teaching"
          ]
        },
        {
          "q": "Computers are used to withdraw money from ___.",
          "a": "ATMs",
          "options": [
            "ATMs",
            "schools",
            "hospitals",
            "parks"
          ]
        },
        {
          "q": "In banks, computers are used to maintain ___ of customers.",
          "a": "accounts",
          "options": [
            "accounts",
            "reports",
            "timetables",
            "bills"
          ]
        },
        {
          "q": "In shopping malls, computers are used to generate ___.",
          "a": "bills",
          "options": [
            "bills",
            "tickets",
            "accounts",
            "reports"
          ]
        },
        {
          "q": "Computers help in booking ___ at railway stations and airports.",
          "a": "tickets",
          "options": [
            "tickets",
            "bills",
            "books",
            "timetables"
          ]
        },
        {
          "q": "Computers are used to prepare ___ for schools.",
          "a": "timetables",
          "options": [
            "timetables",
            "bills",
            "tickets",
            "accounts"
          ]
        },
        {
          "q": "Students can draw and ___ with the help of a computer.",
          "a": "colour",
          "options": [
            "colour",
            "sleep",
            "run",
            "swim"
          ]
        },
        {
          "q": "You can solve ___ on a computer.",
          "a": "sums",
          "options": [
            "sums",
            "games",
            "songs",
            "movies"
          ]
        },
        {
          "q": "AI helps doctors in _____.",
          "a": "hospitals",
          "options": [
            "hospitals",
            "schools",
            "banks",
            "malls"
          ]
        },
        {
          "q": "AI robots can ____ your house ",
          "a": "clean",
          "options": [
            "clean",
            "drive",
            "cook",
            "fly"
          ]
        },
        {
          "q": "AI helps at ____ to make lesson fun.",
          "a": "schools",
          "options": [
            "schools",
            "hospitals",
            "banks",
            "airports"
          ]
        }
      ],
      "true_false": [
        {
          "q": "CPU is used to take the printout of the work done on a paper.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Speakers are multimedia devices used with a computer.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "The monitor is the brain of the computer.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "The devices which are used to give output, are called input devices.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "The mouse is used to point, select, draw and play games.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Single-click is used to open a document or a window.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers are used to store information and data.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "In a police station, computers are used to generate bills.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers cannot help doctors to test patients.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers at banks are used for calculations and to maintain records.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Doctors help computers to perform operations.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers are used to prepare timetables.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers in the library are used to make exam reports.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers at home are used to print medical reports.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Student can draw and colour with the help of a computer.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers at home are used to print medical reports.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "AI robots can clean your house.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "AI helps at schools to make lessons fun.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Computers are used for booking tickets at railway stations and airports.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "The device used to record your voice and other sounds into the computer.",
          "a": "Microphone",
          "options": [
            "Microphone",
            "Speaker",
            "Printer",
            "Scanner"
          ]
        },
        {
          "q": "A device used to play games and move the pointer on the screen.",
          "a": "Mouse",
          "options": [
            "Mouse",
            "Keyboard",
            "CPU",
            "Monitor"
          ]
        },
        {
          "q": "A device used to put pictures and documents from paper into the computer.",
          "a": "Scanner",
          "options": [
            "Scanner",
            "Printer",
            "Microphone",
            "Speaker"
          ]
        },
        {
          "q": "The printed copy of your work on a sheet of paper.",
          "a": "Printout",
          "options": [
            "Printout",
            "Soft copy",
            "Monitor",
            "Keyboard"
          ]
        },
        {
          "q": "The part that keeps a computer ON for a few minutes even when the electricity goes off.",
          "a": "UPS",
          "options": [
            "UPS",
            "CPU",
            "Pen Drive",
            "CD"
          ]
        },
        {
          "q": "A small, rectangular board on a laptop that works like a mouse.",
          "a": "Touchpad",
          "options": [
            "Touchpad",
            "Keyboard",
            "Screen",
            "Speaker"
          ]
        },
        {
          "q": "A small device used to store and transfer data from one computer to another.",
          "a": "Pen drive",
          "options": [
            "Pen drive",
            "Monitor",
            "Printer",
            "Scanner"
          ]
        },
        {
          "q": "A place where computers are used to make your school projects.",
          "a": "Home",
          "options": [
            "Home",
            "Police station",
            "Bank",
            "Hospital"
          ]
        },
        {
          "q": "A place where computers are used to track criminal records.",
          "a": "Police station",
          "options": [
            "Police station",
            "School",
            "Airport",
            "Shopping mall"
          ]
        },
        {
          "q": "A place where computers are used to make test papers.",
          "a": "School",
          "options": [
            "School",
            "Police station",
            "Airport",
            "Shopping mall"
          ]
        },
        {
          "q": "A place where computers are used to maintain a list of items and their prices.",
          "a": "Shopping mall",
          "options": [
            "Hospitals",
            "Schools",
            "Banks",
            "Shopping mall"
          ]
        },
        {
          "q": "A place where computers are used to scan the items purchased.",
          "a": "Shopping mall",
          "options": [
            "Shopping mall",
            "Hospital",
            "Bank",
            "Railway station"
          ]
        },
        {
          "q": "A place where computers are used to withdraw money from an ATM.",
          "a": "Bank",
          "options": [
            "Bank",
            "School",
            "Hospital",
            "Police station"
          ]
        },
        {
          "q": "The person who uses computers to prepare exam reports.",
          "a": "Teacher",
          "options": [
            "Teacher",
            "Doctor",
            "Police",
            "Pilot"
          ]
        },
        {
          "q": "A place where computers are used to make flight bookings.",
          "a": "Airports",
          "options": [
            "Airports",
            "Banks",
            "Hospitals",
            "Schools"
          ]
        },
        {
          "q": "A place where computers are used to keep patient records.",
          "a": "Hospital",
          "options": [
            "Hospital",
            "Bank",
            "School",
            "Police station"
          ]
        }
      ],
      "match_following": [
        {
          "q": "A pointing device used to draw pictures and select items on the screen.",
          "a": "Mouse"
        },
        {
          "q": "Used to listen to loud music and sounds from the computer.",
          "a": "Speakers"
        },
        {
          "q": "Used to record your voice and other sounds into the computer.",
          "a": "Microphone"
        },
        {
          "q": "Keeps the computer ON for some time when the electricity goes off.",
          "a": "UPS"
        },
        {
          "q": "To track criminal records and keep information about cases.",
          "a": "Police Station"
        },
        {
          "q": "To scan purchased items and generate bills for customers.",
          "a": "Shopping Mall"
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'ROTINOM':",
          "a": "MONITOR",
          "options": [
            "MONITOR",
            "MINOTOR",
            "MONOTIR",
            "MONITER"
          ]
        },
        {
          "q": "Unscramble 'RDOABYEK':",
          "a": "KEYBOARD",
          "options": [
            "KEYBOARD",
            "KYEBOARD",
            "KEYBAORD",
            "KYEBOADR"
          ]
        },
        {
          "q": "Unscramble 'RETNIRP':",
          "a": "PRINTER",
          "options": [
            "PRINTER",
            "PRENTIR",
            "PRANTIR",
            "PRONTIR"
          ]
        },
        {
          "q": "Unscramble 'HPORCIMONE':",
          "a": "MICROPHONE",
          "options": [
            "MICROPHONE",
            "MACROPHONE",
            "MECROPHONE",
            "MOCROPHONE"
          ]
        },
        {
          "q": "Unscramble 'ESUOM':",
          "a": "MOUSE",
          "options": [
            "MOUSE",
            "MUOSE",
            "MESOU",
            "MOESU"
          ]
        },
        {
          "q": "Unscramble 'REKAPSES':",
          "a": "SPEAKERS",
          "options": [
            "SPEAKERS",
            "SPEEKARS",
            "SPAKERS",
            "SPOEKARS"
          ]
        },
        {
          "q": "Unscramble 'GNILLORCS':",
          "a": "SCROLLING",
          "options": [
            "SCROLLING",
            "SCRALLING",
            "SCROLLENG",
            "SCRULLING"
          ]
        },
        {
          "q": "Unscramble 'SSELERIW':",
          "a": "WIRELESS",
          "options": [
            "WIRELESS",
            "WIRELOSS",
            "WARILESS",
            "WERILESS"
          ]
        },
        {
          "q": "Unscramble 'EOMH':",
          "a": "HOME",
          "options": [
            "HOME",
            "HEMO",
            "HMOE",
            "HOEM"
          ]
        },
        {
          "q": "Unscramble 'CHOOSL':",
          "a": "SCHOOL",
          "options": [
            "SCHOOL",
            "SHCOOL",
            "SCOHOL",
            "SCHLOO"
          ]
        },
        {
          "q": "Unscramble 'NKBA':",
          "a": "BANK",
          "options": [
            "BANK",
            "BKNK",
            "BKAN",
            "BNAK"
          ]
        },
        {
          "q": "Unscramble 'OECIFF':",
          "a": "OFFICE",
          "options": [
            "OFFICE",
            "OFIFCE",
            "OFICFE",
            "OFCIFE"
          ]
        },
        {
          "q": "Unscramble 'HSPO':",
          "a": "SHOP",
          "options": [
            "SHOP",
            "SOHP",
            "SPHO",
            "SHPO"
          ]
        },
        {
          "q": "Unscramble 'IGNAMB':",
          "a": "GAMING",
          "options": [
            "GAMING",
            "GIMANG",
            "GAMNIG",
            "GANMIG"
          ]
        },
        {
          "q": "Unscramble 'ILLIGNB':",
          "a": "BILLING",
          "options": [
            "BILLING",
            "BILINGL",
            "BLLINIG",
            "BILNIGL"
          ]
        },
        {
          "q": "Unscramble 'TGNIEACH':",
          "a": "TEACHING",
          "options": [
            "TEACHING",
            "TAECHING",
            "TIECHING",
            "TOACHING"
          ]
        },
        {
          "q": "Unscramble 'ITALHOSP':",
          "a": "HOSPITAL",
          "options": [
            "HOSPITAL",
            "HOSPITEL",
            "HASPITAL",
            "HOSPITOL"
          ]
        }
      ],
      "drawing": [
        {
          "q": "Draw and label any two parts of a computer.",
          "a": "[Draw Diagram]",
          "options": [
            "[Draw Diagram]"
          ]
        },
        {
          "q": "Draw two devices that are used to store data (e.g., Pen drive, CD).",
          "a": "[Draw Storage Devices]",
          "options": [
            "[Draw Storage Devices]"
          ]
        }
      ]
    }
  },
  {
    "id": "ch2",
    "number": 2,
    "title": "Parts of a Computer",
    "bank": {
      "match_following": [
        {
          "q": "It looks like a television screen. It has a power button to turn it ON and OFF.",
          "a": "Monitor"
        },
        {
          "q": "It controls the functioning of all parts of the computer.",
          "a": "CPU"
        },
        {
          "q": "I am used to take printouts of the work done on the computer.",
          "a": "Printer"
        },
        {
          "q": "It has several keys.",
          "a": "Keyboard"
        },
        {
          "q": "It is used to hear sounds and music without disturbing others.",
          "a": "Headphones"
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: M _ U _ E",
          "a": "MOUSE",
          "options": [
            "MOUSE",
            "MAUSE",
            "MIUSE",
            "MEUSE"
          ]
        },
        {
          "q": "Complete the word: W I _ E _ E S S",
          "a": "WIRELESS",
          "options": [
            "WIRELESS",
            "WORELESS",
            "WARELESS",
            "WURELESS"
          ]
        },
        {
          "q": "Complete the word: O _ T I _ A L",
          "a": "OPTICAL",
          "options": [
            "OPTICAL",
            "OVTICAL",
            "OSTICAL",
            "ONTICAL"
          ]
        },
        {
          "q": "Complete the word: S C _ O _ L I N G",
          "a": "SCROLLING",
          "options": [
            "SCROLLING",
            "SCRALLING",
            "SCRELLING",
            "SCRULLING"
          ]
        },
        {
          "q": "Complete the word: K E _ B O _ R D",
          "a": "KEYBOARD",
          "options": [
            "KEYBOARD",
            "KAYBOARD",
            "KOYBOARD",
            "KIYBOARD"
          ]
        },
        {
          "q": "Complete the word: M O _ I _ O R",
          "a": "MONITOR",
          "options": [
            "MONITOR",
            "MANITOR",
            "MENITOR",
            "MUNITOR"
          ]
        },
        {
          "q": "Complete the word:S _ A N N_ R",
          "a": "SCANNER",
          "options": [
            "SCANNER",
            "SCANNAR",
            "SCANER",
            "SCANNIR"
          ]
        }
      ]
    }
  },
  {
    "id": "ch3",
    "number": 3,
    "title": "Uses of Computer",
    "bank": {
      "match_following": [
        {
          "q": "To make test papers and interactive lessons.",
          "a": "School"
        },
        {
          "q": "To help doctors diagnose patients.",
          "a": "Hospital"
        },
        {
          "q": "To manage accounts and keep money safe.",
          "a": "Bank"
        },
        {
          "q": "To book tickets for flights and trains.",
          "a": "Airports"
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: T _ M _ T A B _ E",
          "a": "TIMETABLE",
          "options": [
            "TIMETABLE",
            "TAMETABLE",
            "TOMETABLE",
            "TEMETABLE"
          ]
        },
        {
          "q": "Complete the word: H O _ P I T _ L",
          "a": "HOSPITAL",
          "options": [
            "HOSPITAL",
            "HASPITAL",
            "HESPITAL",
            "HUSPITAL"
          ]
        },
        {
          "q": "Complete the word: L I _ R A _ Y",
          "a": "LIBRARY",
          "options": [
            "LIBRARY",
            "LOBRARY",
            "LEBRARY",
            "LABRARY"
          ]
        },
        {
          "q": "Complete the word: M _ S S A _ E",
          "a": "MESSAGE",
          "options": [
            "MESSAGE",
            "MASSAGE",
            "MOSSAGE",
            "MISSAGE"
          ]
        },
        {
          "q": "Complete the word: D R A W _ N _",
          "a": "DRAWING",
          "options": [
            "DRAWING",
            "DROWING",
            "DREWING",
            "DREAWING"
          ]
        },
        {
          "q": "Complete the word: H O _ E W O _ K",
          "a": "HOMEWORK",
          "options": [
            "HOMEWORK",
            "HAMEWORK",
            "HEMEWORK",
            "HIMEWORK"
          ]
        },
        {
          "q": "Complete the word: T _ A C H I _ G",
          "a": "TEACHING",
          "options": [
            "TEACHING",
            "TOACHING",
            "TAACHING",
            "TUUCHING"
          ]
        },
        {
          "q": "Complete the word: B _ N K _ N G",
          "a": "BANKING",
          "options": [
            "BANKING",
            "BONKING",
            "BENKING",
            "BUNKING"
          ]
        },
        {
          "q": "Complete the word: R E _ O R _ S",
          "a": "REPORTS",
          "options": [
            "REPORTS",
            "RAPORTS",
            "RIPORTS",
            "ROPURTS"
          ]
        },
        {
          "q": "Complete the word: P R I N _ E R",
          "a": "PRINTER",
          "options": [
            "PRINTER",
            "PRINER",
            "PRINTR",
            "PRINTE"
          ]
        },
        {
          "q": "Complete the word: S P E A K _ R S",
          "a": "SPEAKERS",
          "options": [
            "SPEAKERS",
            "SPEEKARS",
            "SPAKERS",
            "SPOEKARS"
          ]
        }
      ]
    }
  }
]
};
