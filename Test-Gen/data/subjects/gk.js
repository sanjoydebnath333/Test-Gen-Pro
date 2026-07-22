// =============================================================================
// General Knowledge — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_GK = {
  id: "gk",
  title: "General Knowledge",
  icon: "🌍",
  theme: "#10b981",
  gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
  sections: [
  {
    "id": "one_word",
    "title": "Answer in one word",
    "max": 14,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "name_following",
    "title": "Name the following",
    "max": 8,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "fill_blanks",
    "title": "Fill in the blanks",
    "max": 14,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "true_false",
    "title": "Write True or False",
    "max": 13,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "match_following",
    "title": "Match the following",
    "max": 8,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "rearrange",
    "title": "Rearrange the jumbled words",
    "max": 8,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "missing_letters",
    "title": "Missing letters",
    "max": 8,
    "default": 5,
    "marksPerQ": 1
  }
],
  chapters: [
  {
    "id": "general",
    "number": 0,
    "title": "All Topics",
    "bank": {
      "one_word": [
        {
          "q": "What is the milky fluid of the rubber tree called?",
          "a": "Latex",
          "options": [
            "Latex",
            "Resin",
            "Sap",
            "Syrup"
          ]
        },
        {
          "q": "Which bird lays the largest eggs?",
          "a": "Ostrich",
          "options": [
            "Ostrich",
            "Emu",
            "Penguin",
            "Eagle"
          ]
        },
        {
          "q": "What do plants give out during the day?",
          "a": "Oxygen",
          "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Water"
          ]
        },
        {
          "q": "What is the national animal of India?",
          "a": "Tiger",
          "options": [
            "Tiger",
            "Lion",
            "Elephant",
            "Leopard"
          ]
        },
        {
          "q": "Which insects are also called 'white ants'?",
          "a": "Termites",
          "options": [
            "Termites",
            "Ants",
            "Beetles",
            "Cockroaches"
          ]
        },
        {
          "q": "Which is the national bird of New Zealand?",
          "a": "Kiwi",
          "options": [
            "Kiwi",
            "Parrot",
            "Peacock",
            "Swan"
          ]
        },
        {
          "q": "In which season we sit around a 'bonfire'?",
          "a": "Winter",
          "options": [
            "Winter",
            "Summer",
            "Monsoon",
            "Spring"
          ]
        },
        {
          "q": "Who makes breads and cakes?",
          "a": "Baker",
          "options": [
            "Baker",
            "Chef",
            "Butcher",
            "Farmer"
          ]
        },
        {
          "q": "What is a the another name for a 'bucket'?",
          "a": "Pail",
          "options": [
            "Pail",
            "Mug",
            "Bowl",
            "Jug"
          ]
        },
        {
          "q": "What is the name for a 'baby cow'?",
          "a": "Calf",
          "options": [
            "Calf",
            "Puppy",
            "Kitten",
            "Foal"
          ]
        },
        {
          "q": "Mohiniattam is the dance form of which state?",
          "a": "Kerala",
          "options": [
            "Kerala",
            "Tamil Nadu",
            "Odisha",
            "Karnataka"
          ]
        },
        {
          "q": "What is a song sung by two singers called?",
          "a": "Duet",
          "options": [
            "Duet",
            "Solo",
            "Chorus",
            "Band"
          ]
        },
        {
          "q": "Which system helps blind people read?",
          "a": "Braille",
          "options": [
            "Braille",
            "Sign Language",
            "Morse Code",
            "Script"
          ]
        },
        {
          "q": "What is the classical dance form of Uttar Pradesh called?",
          "a": "Kathak",
          "options": [
            "Kathak",
            "Odissi",
            "Kuchipudi",
            "Bihu"
          ]
        }
      ],
      "name_following": [
        {
          "q": "The bird that can fly backward.",
          "a": "Humming Bird",
          "options": [
            "Humming Bird",
            "Sparrow",
            "Woodpecker",
            "Pigeon"
          ]
        },
        {
          "q": "The world's largest spider.",
          "a": "Tarantula",
          "options": [
            "Tarantula",
            "Black Widow",
            "Ant",
            "Beetle"
          ]
        },
        {
          "q": "The tallest animal in the world.",
          "a": "Giraffe",
          "options": [
            "Giraffe",
            "Elephant",
            "Camel",
            "Zebra"
          ]
        },
        {
          "q": "The fish that has both its eyes on one side of its head.",
          "a": "Flat fish",
          "options": [
            "Flat fish",
            "Shark",
            "Whale",
            "Goldfish"
          ]
        },
        {
          "q": "This is a place where a farmer lives.",
          "a": "Farm house",
          "options": [
            "Farm house",
            "Apartment",
            "Igloo",
            "Tent"
          ]
        },
        {
          "q": "Name the person who invented the refrigerator.",
          "a": "James Harrison",
          "options": [
            "James Harrison",
            "Thomas Edison",
            "Albert Einstein",
            "Isaac Newton"
          ]
        },
        {
          "q": "Name the season when a number of flowers bloom.",
          "a": "Spring",
          "options": [
            "Spring",
            "Winter",
            "Summer",
            "Monsoon"
          ]
        },
        {
          "q": "Name the person who sell flowers.",
          "a": "Florist",
          "options": [
            "Florist",
            "Grocer",
            "Chemist",
            "Barber"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "Some animals live with us in our homes as our ___.",
          "a": "pets",
          "options": [
            "pets",
            "wild",
            "birds",
            "toys"
          ]
        },
        {
          "q": "Water falls on land as rain and ___.",
          "a": "snow",
          "options": [
            "snow",
            "juice",
            "milk",
            "mud"
          ]
        },
        {
          "q": "Sloth is the world's slowest ___.",
          "a": "mammal",
          "options": [
            "mammal",
            "bird",
            "fish",
            "insect"
          ]
        },
        {
          "q": "Asian elephants are found in thirteen countries of ___.",
          "a": "Asia",
          "options": [
            "Asia",
            "Africa",
            "America",
            "Europe"
          ]
        },
        {
          "q": "Leaves prepare ___ for the plants.",
          "a": "food",
          "options": [
            "food",
            "water",
            "toys",
            "stones"
          ]
        },
        {
          "q": "Trees, herbs and shrubs are ___.",
          "a": "plants",
          "options": [
            "plants",
            "animals",
            "birds",
            "fishes"
          ]
        },
        {
          "q": "Salad is a healthy dish made of many raw ___.",
          "a": "vegetables",
          "options": [
            "vegetables",
            "candies",
            "cakes",
            "biscuits"
          ]
        },
        {
          "q": "Spices have been traditionally used to cure various ___.",
          "a": "illnesses",
          "options": [
            "illnesses",
            "games",
            "toys",
            "stories"
          ]
        },
        {
          "q": "A passage built across a river is called ___.",
          "a": "bridge",
          "options": [
            "bridge",
            "road",
            "park",
            "school"
          ]
        },
        {
          "q": "A group of dogs are called a ___.",
          "a": "pack",
          "options": [
            "pack",
            "flock",
            "herd",
            "bunch"
          ]
        },
        {
          "q": "Helen Keller was an American author who was not able to see, hear or ___.",
          "a": "speak",
          "options": [
            "speak",
            "walk",
            "eat",
            "sleep"
          ]
        },
        {
          "q": "Dr. Stephen Hawking was a famous ___.",
          "a": "scientist",
          "options": [
            "scientist",
            "dancer",
            "singer",
            "player"
          ]
        },
        {
          "q": "Elsa is the character of the animated film Frozen ___.",
          "a": "II",
          "options": [
            "II",
            "I",
            "III",
            "IV"
          ]
        },
        {
          "q": "The words of a song are called ___.",
          "a": "lyrics",
          "options": [
            "lyrics",
            "music",
            "dance",
            "story"
          ]
        }
      ],
      "true_false": [
        {
          "q": "Dove is considered the symbol of peace.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Coconut fibre is called coir.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Bengal Tigers are found in Antarctica.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Electric rays are long in shape.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "In summer we eat fruits like mangoes and watermelons.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Flyover is a road that goes over another road.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "A pilot looks after sick people.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Badminton is a part of the Olympic games.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Virat Kohli is a tennis player.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Mary Kom is a boxer.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "A butterfly has three wings.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Football World Cup take place every two years.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "In cricket 50 runs make a half-century.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "match_following": [
        {
          "q": "Tamil Nadu",
          "a": "Bharatnatyam"
        },
        {
          "q": "Odisha",
          "a": "Odissi"
        },
        {
          "q": "Andhra Pradesh",
          "a": "Kuchipudi"
        },
        {
          "q": "String instrument",
          "a": "Guitar"
        },
        {
          "q": "Nemo",
          "a": "Finding Dory"
        },
        {
          "q": "Buzz Lightyear",
          "a": "Toy Story"
        },
        {
          "q": "Ranbir Kapoor",
          "a": "Indian actor"
        },
        {
          "q": "Sudha Chandran",
          "a": "Dancer with artificial leg"
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'HCOEKY':",
          "a": "HOCKEY",
          "options": [
            "HOCKEY",
            "HOKCEY",
            "HOCKEE",
            "HOOKEY"
          ]
        },
        {
          "q": "Unscramble 'TNNEIS':",
          "a": "TENNIS",
          "options": [
            "TENNIS",
            "TENNSI",
            "TINNIS",
            "TENINS"
          ]
        },
        {
          "q": "Unscramble 'RCAKET':",
          "a": "RACKET",
          "options": [
            "RACKET",
            "ROCKET",
            "RACKIT",
            "RACCET"
          ]
        },
        {
          "q": "Unscramble 'OYLMIPCS':",
          "a": "OLYMPICS",
          "options": [
            "OLYMPICS",
            "OLYMIPCS",
            "OLYMPIAS",
            "OLYMPCES"
          ]
        },
        {
          "q": "Unscramble 'WESRTLING':",
          "a": "WRESTLING",
          "options": [
            "WRESTLING",
            "WESTRLING",
            "WRISTLING",
            "WRESTLENG"
          ]
        },
        {
          "q": "Unscramble 'BSAEBALL':",
          "a": "BASEBALL",
          "options": [
            "BASEBALL",
            "BESEBALL",
            "BASSBALL",
            "BASEBELL"
          ]
        },
        {
          "q": "Unscramble 'SQASHU':",
          "a": "SQUASH",
          "options": [
            "SQUASH",
            "SQUOSH",
            "SQUISH",
            "SQAUSH"
          ]
        },
        {
          "q": "Unscramble 'AHTIECLTS':",
          "a": "ATHLETICS",
          "options": [
            "ATHLETICS",
            "ATHELTICS",
            "ATHLITICS",
            "ATHLETES"
          ]
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: D _ N T _ S T",
          "a": "DENTIST",
          "options": [
            "DENTIST",
            "DONTIST",
            "DINTIST",
            "DENTEST"
          ]
        },
        {
          "q": "Complete the word: S H _ V _ L",
          "a": "SHOVEL",
          "options": [
            "SHOVEL",
            "SHAVEL",
            "SHIVEL",
            "SHUVEL"
          ]
        },
        {
          "q": "Complete the word: T R _ C T _ R",
          "a": "TRACTOR",
          "options": [
            "TRACTOR",
            "TRECTOR",
            "TRICTAR",
            "TROCTOR"
          ]
        },
        {
          "q": "Complete the word: T _ A S T _ R",
          "a": "TOASTER",
          "options": [
            "TOASTER",
            "TEASTER",
            "TAOSTER",
            "TOOSTER"
          ]
        },
        {
          "q": "Complete the word: C U T L _ R _",
          "a": "CUTLERY",
          "options": [
            "CUTLERY",
            "CATLERY",
            "COTLERY",
            "CUTLARY"
          ]
        },
        {
          "q": "Complete the word: S T _ A R T",
          "a": "STUART",
          "options": [
            "STUART",
            "STAART",
            "STIART",
            "STOART"
          ]
        },
        {
          "q": "Complete the word: M _ A N A",
          "a": "MOANA",
          "options": [
            "MOANA",
            "MIANA",
            "MEANA",
            "MUANA"
          ]
        },
        {
          "q": "Complete the word: P _ A N _",
          "a": "PIANO",
          "options": [
            "PIANO",
            "PEANO",
            "PAINO",
            "POANO"
          ]
        }
      ]
    }
  }
]
};
