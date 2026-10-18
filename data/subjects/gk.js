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
            "a": "London",
            "options": [
              "London",
              "Paris",
              "Rome",
              "Tokyo"
            ]
          },
          {
            "q": "Which is the largest delta in the world?",
            "a": "Sunderban",
            "options": [
              "Sunderban",
              "Nile Delta",
              "Indus Delta",
              "Amazon Delta"
            ]
          },
          {
            "q": "In which state of India is the Thar Desert situated?",
            "a": "Rajasthan",
            "options": [
              "Rajasthan",
              "Gujarat",
              "Punjab",
              "Haryana"
            ]
          },
          {
            "q": "Along which river bank is Varanasi situated?",
            "a": "Ganga",
            "options": [
              "Ganga",
              "Yamuna",
              "Saraswati",
              "Godavari"
            ]
          },
          {
            "q": "In which year India became independent?",
            "a": "1947",
            "options": [
              "1947",
              "1950",
              "1946",
              "1948"
            ]
          },
          {
            "q": "In which city of India is the Qutb Minar located?",
            "a": "Delhi",
            "options": [
              "Delhi",
              "Agra",
              "Hyderabad",
              "Jaipur"
            ]
          },
          {
            "q": "What did Wright Brothers invent?",
            "a": "Aeroplane",
            "options": [
              "Aeroplane",
              "Helicopter",
              "Rocket",
              "Bicycle"
            ]
          },
          {
            "q": "What did J.L Baird invent?",
            "a": "Television",
            "options": [
              "Television",
              "Telephone",
              "Radio",
              "Computer"
            ]
          },
          {
            "q": "Which invention helps us make calls?",
            "a": "Telephone",
            "options": [
              "Telephone",
              "Television",
              "Radio",
              "Computer"
            ]
          },
          {
            "q": "Which planet is known as a dwarf planet?",
            "a": "Pluto",
            "options": [
              "Pluto",
              "Mercury",
              "Mars",
              "Neptune"
            ]
          },
          {
            "q": "Which is the hottest planet in the solar system?",
            "a": "Venus",
            "options": [
              "Venus",
              "Mercury",
              "Mars",
              "Jupiter"
            ]
          },
          {
            "q": "Which gadget is used on wrist to get notifications of emails, incoming calls etc?",
            "a": "Smartwatch",
            "options": [
              "Smartwatch",
              "Smartband",
              "Smartphone",
              "Digital Watch"
            ]
          },
          {
            "q": "What is the name of the story in which a princess with long hair was locked in a tower?",
            "a": "Rapunzel",
            "options": [
              "Rapunzel",
              "Cinderella",
              "Snow White",
              "Sleeping Beauty"
            ]
          },
          {
            "q": "Who was the cleverest man in Emperor Akbar’s court?",
            "a": "Birbal",
            "options": [
              "Birbal",
              "Tenali Raman",
              "Tansen",
              "Chanakya"
            ]
          },
          {
            "q": "Which famous story character had a magic lamp?",
            "a": "Aladdin",
            "options": [
              "Aladdin",
              "Ali Baba",
              "Sinbad",
              "Mowgli"
            ]
          }
        ],
        "name_following": [
          {
            "q": "Name the national flower of India.",
            "a": "Lotus",
            "options": [
              "Lotus",
              "Rose",
              "Marigold",
              "Jasmine"
            ]
          },
          {
            "q": "Name the capital city of Russia.",
            "a": "Moscow",
            "options": [
              "Moscow",
              "Paris",
              "London",
              "Tokyo"
            ]
          },
          {
            "q": "Name the longest beach in India.",
            "a": "Marina Beach",
            "options": [
              "Marina Beach",
              "Juhu Beach",
              "Puri Beach",
              "Kovalam Beach"
            ]
          },
          {
            "q": "Name the lake in Srinagar known for its houseboats.",
            "a": "Dal Lake",
            "options": [
              "Dal Lake",
              "Wular Lake",
              "Chilika Lake",
              "Nainital Lake"
            ]
          },
          {
            "q": "Name the only active volcano in India.",
            "a": "Barren Island",
            "options": [
              "Barren Island",
              "Andaman Island",
              "Nicobar Island",
              "Lakshadweep Island"
            ]
          },
          {
            "q": "Name the Indian state where Bihu is celebrated.",
            "a": "Assam",
            "options": [
              "Assam",
              "Punjab",
              "West Bengal",
              "Tripura"
            ]
          },
          {
            "q": "Name the longest bone of our body.",
            "a": "Femur",
            "options": [
              "Femur",
              "Backbone",
              "Rib bone",
              "Arm bone"
            ]
          },
          {
            "q": "Name the person who invented computer.",
            "a": "Charles Babbage",
            "options": [
              "Charles Babbage",
              "Thomas Edison",
              "Alexander Graham Bell",
              "Wright Brothers"
            ]
          },
          {
            "q": "Name the gadget that helps us to find correct route by using GPS.",
            "a": "Smartphone",
            "options": [
              "Smartphone",
              "Smartwatch",
              "Compass",
              "Camera"
            ]
          },
          {
            "q": "Name the organ that controls all our muscles and makes them work.",
            "a": "Brain",
            "options": [
              "Brain",
              "Heart",
              "Lungs",
              "Stomach"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "World Environment Day is celebrated on ___.",
            "a": "5 June",
            "options": [
              "5 June",
              "14 November",
              "5 September",
              "2 October"
            ]
          },
          {
            "q": "___ tree is the national tree of India.",
            "a": "Banyan",
            "options": [
              "Banyan",
              "Peepal",
              "Neem",
              "Mango"
            ]
          },
          {
            "q": "The capital of Egypt is ___.",
            "a": "Cairo",
            "options": [
              "Cairo",
              "London",
              "Paris",
              "Rome"
            ]
          },
          {
            "q": "The two sides of a river are called its ___.",
            "a": "banks",
            "options": [
              "banks",
              "shores",
              "coasts",
              "borders"
            ]
          },
          {
            "q": "___ is the famous waterfall of Karnataka.",
            "a": "Jog Falls",
            "options": [
              "Jog Falls",
              "Angel Falls",
              "Niagara Falls",
              "Dudhsagar Falls"
            ]
          },
          {
            "q": "___ helps us move every part of our body.",
            "a": "Muscles",
            "options": [
              "Muscles",
              "Bones",
              "Joints",
              "Skin"
            ]
          },
          {
            "q": "Heart muscles are known as ___ muscles.",
            "a": "cardiac",
            "options": [
              "cardiac",
              "skeletal",
              "smooth",
              "voluntary"
            ]
          },
          {
            "q": "A ___ is an eco-friendly mode of transport.",
            "a": "bicycle",
            "options": [
              "bicycle",
              "motorcycle",
              "scooter",
              "car"
            ]
          },
          {
            "q": "It is not safe to chat with ___.",
            "a": "strangers",
            "options": [
              "strangers",
              "friends",
              "teachers",
              "classmates"
            ]
          },
          {
            "q": "Our ___ has eight different kinds of muscles.",
            "a": "tongue",
            "options": [
              "tongue",
              "heart",
              "eye",
              "hand"
            ]
          },
          {
            "q": "___ is used to see far away objects in the sky.",
            "a": "Telescope",
            "options": [
              "Telescope",
              "Microscope",
              "Binoculars",
              "Camera"
            ]
          },
          {
            "q": "Rudyard Kipling is the author of the ___.",
            "a": "Jungle Book",
            "options": [
              "Jungle Book",
              "Panchatantra",
              "Jataka Tales",
              "Peter Pan"
            ]
          },
          {
            "q": "___ is known as the red planet.",
            "a": "Mars",
            "options": [
              "Mars",
              "Venus",
              "Mercury",
              "Jupiter"
            ]
          },
          {
            "q": "___ stands for Coronavirus disease 2019.",
            "a": "COVID-19",
            "options": [
              "COVID-19",
              "COVID-20",
              "SARS-19",
              "COV-2019"
            ]
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
            "a": "JOINT",
            "options": [
              "JOINT",
              "JONTI",
              "JOTIN",
              "JIONT"
            ]
          },
          {
            "q": "Rearrange the letters: RBICGAE",
            "a": "RIBCAGE",
            "options": [
              "RIBCAGE",
              "RICBAGE",
              "RIBGACE",
              "RIBCAEG"
            ]
          },
          {
            "q": "Rearrange the letters: SEKELTON",
            "a": "SKELETON",
            "options": [
              "SKELETON",
              "SKELATON",
              "SKELETEN",
              "SKELEOTN"
            ]
          },
          {
            "q": "Rearrange the letters: FRATCRUE",
            "a": "FRACTURE",
            "options": [
              "FRACTURE",
              "FRACTUER",
              "FRACUTRE",
              "FRACTRUE"
            ]
          },
          {
            "q": "Rearrange the letters: BKEARY",
            "a": "BAKERY",
            "options": [
              "BAKERY",
              "BARKEY",
              "BAKREY",
              "BAKARY"
            ]
          },
          {
            "q": "Rearrange the letters: SHEOMKAER",
            "a": "SHOEMAKER",
            "options": [
              "SHOEMAKER",
              "SHOWMAKER",
              "SHOEMAKRE",
              "SHOAMAKER"
            ]
          },
          {
            "q": "Rearrange the letters: DCUKLNIG",
            "a": "DUCKLING",
            "options": [
              "DUCKLING",
              "DUCKILNG",
              "DUCKLIGN",
              "DUCKLNIG"
            ]
          },
          {
            "q": "Rearrange the letters: PRNICSSE",
            "a": "PRINCESS",
            "options": [
              "PRINCESS",
              "PRICNESS",
              "PRINSCES",
              "PRINCSEE"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: G _ _ Z E",
            "a": "GAUZE",
            "options": [
              "GAUZE",
              "GUAZE",
              "GAZEE",
              "GAWZE"
            ]
          },
          {
            "q": "Complete the word: B _ N D - A _ D",
            "a": "BAND-AID",
            "options": [
              "BAND-AID",
              "BEND-AID",
              "BAND-ADE",
              "BAND-IED"
            ]
          },
          {
            "q": "Complete the word: B I _ E _ S",
            "a": "BICEPS",
            "options": [
              "BICEPS",
              "BICPES",
              "BISEPS",
              "BICEPZ"
            ]
          },
          {
            "q": "Complete the word: S P _ _ I N",
            "a": "SPRAIN",
            "options": [
              "SPRAIN",
              "SPRIAN",
              "SPREIN",
              "SPRANE"
            ]
          },
          {
            "q": "Complete the word: P L _ N _ T",
            "a": "PLANET",
            "options": [
              "PLANET",
              "PLANIT",
              "PLANAT",
              "PLANTE"
            ]
          },
          {
            "q": "Complete the word: G R _ P _ S",
            "a": "GRAPES",
            "options": [
              "GRAPES",
              "GRAPIS",
              "GRAEPS",
              "GRAPAS"
            ]
          },
          {
            "q": "Complete the word: E _ V _ S",
            "a": "ELVES",
            "options": [
              "ELVES",
              "ELVIS",
              "ELEVS",
              "ELVAS"
            ]
          },
          {
            "q": "Complete the word: A K _ _ R",
            "a": "AKBAR",
            "options": [
              "AKBAR",
              "AKBER",
              "AKBOR",
              "AKBAAR"
            ]
          },
          {
            "q": "Complete the word: B _ R G _ R",
            "a": "BURGER",
            "options": [
              "BURGER",
              "BURGAR",
              "BIRGER",
              "BURGRE"
            ]
          },
          {
            "q": "Complete the word: S _ N D _ A D",
            "a": "SINDBAD",
            "options": [
              "SINDBAD",
              "SINDBED",
              "SYNDBAD",
              "SINDAB"
            ]
          }
        ]
      }
    }
  ]
};
