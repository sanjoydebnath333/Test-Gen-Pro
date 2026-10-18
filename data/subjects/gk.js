// =============================================================================
// General Knowledge — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_GK = {
  "id": "gk",
  "title": "General Knowledge",
  "icon": "🌍",
  "theme": "#10b981",
  "gradient": "linear-gradient(135deg, #10b981, #3b82f6)",
  "sections": [
    {
      "id": "one_word",
      "title": "Answer in one word",
      "max": 15,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "name_following",
      "title": "Name the following",
      "max": 10,
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
      "max": 14,
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
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    }
  ],
  "chapters": [
    {
      "id": "general",
      "number": 0,
      "title": "All Topics",
      "bank": {
        "one_word": [
          {
            "q": "What is the capital city of England?",
            "a": "London"
          },
          {
            "q": "Which is the largest delta in the world?",
            "a": "Sunderban"
          },
          {
            "q": "In which state of India is the Thar Desert situated?",
            "a": "Rajasthan"
          },
          {
            "q": "Along which river bank is Varanasi situated?",
            "a": "Ganga"
          },
          {
            "q": "In which year India became independent?",
            "a": "1947"
          },
          {
            "q": "In which city of India is the Qutb Minar located?",
            "a": "Delhi"
          },
          {
            "q": "What did Wright Brothers invent?",
            "a": "Aeroplane"
          },
          {
            "q": "What did J.L Baird invent?",
            "a": "Television"
          },
          {
            "q": "Which invention helps us make calls?",
            "a": "Telephone"
          },
          {
            "q": "Which planet is known as a dwarf planet?",
            "a": "Pluto"
          },
          {
            "q": "Which is the hottest planet in the solar system?",
            "a": "Venus"
          },
          {
            "q": "Which gadget is used on wrist to get notifications of emails, incoming calls etc?",
            "a": "Smartwatch"
          },
          {
            "q": "What is the name of the story in which a princess with long hair was locked in a tower?",
            "a": "Rapunzel"
          },
          {
            "q": "Who was the cleverest man in Emperor Akbar’s court?",
            "a": "Birbal"
          },
          {
            "q": "Which famous story character had a magic lamp?",
            "a": "Aladdin",
            "options": [
              "Mowgli",
              "Aladdin"
            ]
          }
        ],
        "name_following": [
          {
            "q": "Name the national flower of India.",
            "a": "Lotus"
          },
          {
            "q": "Name the capital city of Russia.",
            "a": "Moscow"
          },
          {
            "q": "Name the longest beach in India.",
            "a": "Marina Beach"
          },
          {
            "q": "Name the lake in Srinagar known for its houseboats.",
            "a": "Dal Lake"
          },
          {
            "q": "Name the only active volcano in India.",
            "a": "Barren Island"
          },
          {
            "q": "Name the Indian state where Bihu is celebrated.",
            "a": "Assam"
          },
          {
            "q": "Name the longest bone of our body.",
            "a": "Femur"
          },
          {
            "q": "Name the person who invented computer.",
            "a": "Charles Babbage"
          },
          {
            "q": "Name the gadget that helps us to find correct route by using GPS.",
            "a": "Smartphone"
          },
          {
            "q": "Name the organ that controls all our muscles and makes them work.",
            "a": "Brain"
          }
        ],
        "fill_blanks": [
          {
            "q": "World Environment Day is celebrated on ___.",
            "a": "5 June"
          },
          {
            "q": "___ tree is the national tree of India.",
            "a": "Banyan"
          },
          {
            "q": "The capital of Egypt is ___.",
            "a": "Cairo"
          },
          {
            "q": "The two sides of a river are called its ___.",
            "a": "banks"
          },
          {
            "q": "___ is the famous waterfall of Karnataka.",
            "a": "Jog Falls"
          },
          {
            "q": "___ helps us move every part of our body.",
            "a": "Muscles"
          },
          {
            "q": "Heart muscles are known as ___ muscles.",
            "a": "cardiac"
          },
          {
            "q": "A ___ is an eco-friendly mode of transport.",
            "a": "bicycle"
          },
          {
            "q": "It is not safe to chat with ___.",
            "a": "strangers"
          },
          {
            "q": "Our ___ has eight different kinds of muscles.",
            "a": "tongue"
          },
          {
            "q": "___ is used to see far away objects in the sky.",
            "a": "Telescope"
          },
          {
            "q": "Rudyard Kipling is the author of the ___.",
            "a": "Jungle Book"
          },
          {
            "q": "___ is known as the red planet.",
            "a": "Mars"
          },
          {
            "q": "___ stands for Coronavirus disease 2019.",
            "a": "COVID-19"
          }
        ],
        "true_false": [
          {
            "q": "The people of Punjab celebrates Lohri.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Victoria Memorial is located in Kolkata.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The capital of France is London.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Orange is the national fruit of India.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The strongest muscle in our body are present in the jaw.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "An adult human body has 206 bones.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "There are more than 600 muscles in our body.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should share our password with others.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should touch the sockets on the computer.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Thomas A. Edison invented aeroplane.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Nile is the world’s longest river.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Angel Falls is the world’s highest waterfall.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Our Earth has two moons.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The Pied Piper got rid of rats in the town of Hamelin.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "match_following": [
          {
            "q": "Teacher’s Day",
            "a": "5 September"
          },
          {
            "q": "Children’s Day",
            "a": "14 November"
          },
          {
            "q": "Earth Day",
            "a": "22 April"
          },
          {
            "q": "Mahatma Gandhi",
            "a": "National Leader of India"
          },
          {
            "q": "Ganesh Chaturthi",
            "a": "Maharashtra"
          },
          {
            "q": "River Yamuna",
            "a": "Agra"
          },
          {
            "q": "Dandiya",
            "a": "Gujarat"
          },
          {
            "q": "Pongal",
            "a": "Tamil Nadu"
          }
        ],
        "rearrange": [
          {
            "q": "Rearrange the letters: JONIT",
            "a": "JOINT"
          },
          {
            "q": "Rearrange the letters: RBICGAE",
            "a": "RIBCAGE"
          },
          {
            "q": "Rearrange the letters: SEKELTON",
            "a": "SKELETON"
          },
          {
            "q": "Rearrange the letters: FRATCRUE",
            "a": "FRACTURE"
          },
          {
            "q": "Rearrange the letters: BKEARY",
            "a": "BAKERY"
          },
          {
            "q": "Rearrange the letters: SHEOMKAER",
            "a": "SHOEMAKER"
          },
          {
            "q": "Rearrange the letters: DCUKLNIG",
            "a": "DUCKLING"
          },
          {
            "q": "Rearrange the letters: PRNICSSE",
            "a": "PRINCESS"
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: G _ _ Z E",
            "a": "GAUZE"
          },
          {
            "q": "Complete the word: B _ N D - A _ D",
            "a": "BAND-AID"
          },
          {
            "q": "Complete the word: B I _ E _ S",
            "a": "BICEPS"
          },
          {
            "q": "Complete the word: S P _ _ I N",
            "a": "SPRAIN"
          },
          {
            "q": "Complete the word: P L _ N _ T",
            "a": "PLANET"
          },
          {
            "q": "Complete the word: G R _ P _ S",
            "a": "GRAPES"
          },
          {
            "q": "Complete the word: E _ V _ S",
            "a": "ELVES"
          },
          {
            "q": "Complete the word: A K _ _ R",
            "a": "AKBAR"
          },
          {
            "q": "Complete the word: B _ R G _ R",
            "a": "BURGER"
          },
          {
            "q": "Complete the word: S _ N D _ A D",
            "a": "SINDBAD"
          }
        ]
      }
    }
  ]
}

