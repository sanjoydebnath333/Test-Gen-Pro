// =============================================================================
// Environmental Studies — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_ENVIRONMENTAL_STUDIES = {
  id: "environmental_studies",
  title: "Environmental Studies",
  icon: "🌿",
  theme: "#16a34a",
  gradient: "linear-gradient(135deg, #16a34a, #0ea5e9)",
  sections: [
  {
    "id": "mcq_standard",
    "title": "Choose the correct answer",
    "max": 25,
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
    "max": 12,
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
    "max": 10,
    "default": 5,
    "marksPerQ": 1
  },
  {
    "id": "drawing",
    "title": "Diagram",
    "max": 2,
    "default": 1,
    "marksPerQ": 5
  }
],
  chapters: [
  {
    "id": "ch4",
    "number": 4,
    "title": "Food We Eat",
    "bank": {
      "mcq_standard": [
        {
          "q": "We get pulses from ___",
          "a": "plants",
          "options": [
            "plants",
            "animals",
            "water",
            "air"
          ]
        },
        {
          "q": "Which food keeps our bones and teeth strong?",
          "a": "milk",
          "options": [
            "milk",
            "wheat",
            "rice",
            "sugar"
          ]
        },
        {
          "q": "Protective foods are ___",
          "a": "Fruits and vegetables",
          "options": [
            "Fruits and vegetables",
            "Pizza and burger",
            "Chips and fries",
            "Soft drinks"
          ]
        },
        {
          "q": "What are the two main sources of food?",
          "a": "Plants and animals",
          "options": [
            "Plants and animals",
            "Sun and moon",
            "Soil and water",
            "Air and wind"
          ]
        },
        {
          "q": "What are energy-giving foods?",
          "a": "Foods that give energy to work and play",
          "options": [
            "Foods that give energy to work and play",
            "Foods that make us sleep",
            "Foods that make us sick",
            "Foods that we don't eat"
          ]
        },
        {
          "q": "Why is eating too much junk food not good?",
          "a": "It can make us sick",
          "options": [
            "It can make us sick",
            "It makes us strong",
            "It makes us tall",
            "It cleans our body"
          ]
        },
        {
          "q": "Why do babies and old people eat soft food?",
          "a": "It is easy to chew and digest",
          "options": [
            "It is easy to chew and digest",
            "It is very hard",
            "It looks beautiful",
            "It is very cold"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "Babies and old people eat ___ food.",
          "a": "soft",
          "options": [
            "soft",
            "hard",
            "spicy",
            "crunchy"
          ]
        },
        {
          "q": "People who do not eat meat or fish are called ___.",
          "a": "vegetarians",
          "options": [
            "vegetarians",
            "non-vegetarians",
            "farmers",
            "doctors"
          ]
        },
        {
          "q": "___ in food helps us in digestion.",
          "a": "Fibre",
          "options": [
            "Fibre",
            "Sugar",
            "Salt",
            "Water"
          ]
        }
      ],
      "true_false": [
        {
          "q": "Sugar is the body building food.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Sugar is the energy giving food.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Burger is a healthy food.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Meat and fish are body-building food.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "Name two junk foods.",
          "a": "Pizza and Chips",
          "options": [
            "Pizza and Chips",
            "Dal and Rice",
            "Fruits and Vegetables",
            "Milk and Egg"
          ]
        },
        {
          "q": "People who eat meat and fish are called ___",
          "a": "Non-vegetarians",
          "options": [
            "Non-vegetarians",
            "Vegetarians",
            "Herbivores",
            "Farmers"
          ]
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: M _ L _",
          "a": "MILK",
          "options": [
            "MILK",
            "MALK",
            "MOLK",
            "MELK"
          ]
        },
        {
          "q": "Complete the word: M _ A _",
          "a": "MEAT",
          "options": [
            "MEAT",
            "MOAT",
            "MIAT",
            "MUAT"
          ]
        },
        {
          "q": "Complete the word: W _ E A T",
          "a": "WHEAT",
          "options": [
            "WHEAT",
            "WHOAT",
            "WHIAT",
            "WHUAT"
          ]
        },
        {
          "q": "Complete the word: D _ G E S T",
          "a": "DIGEST",
          "options": [
            "DIGEST",
            "DAGEST",
            "DOGEST",
            "DUGEST"
          ]
        },
        {
          "q": "Complete the word: F R _ I T S",
          "a": "FRUITS",
          "options": [
            "FRUITS",
            "FROITS",
            "FREITS",
            "FRAITS"
          ]
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'RONGST':",
          "a": "STRONG",
          "options": [
            "STRONG",
            "STONG",
            "STRANG",
            "STRUNG"
          ]
        },
        {
          "q": "Unscramble 'BREFI':",
          "a": "FIBRE",
          "options": [
            "FIBRE",
            "FABRE",
            "FEBRI",
            "FOBRE"
          ]
        }
      ],
      "drawing": [
        {
          "q": "Draw and name any two foods we get from animals.",
          "a": "[Draw Food from Animals]",
          "options": [
            "[Draw Food from Animals]"
          ]
        },
        {
          "q": "Draw any two junk foods and name them.",
          "a": "[Draw Junk Food]",
          "options": [
            "[Draw Junk Food]"
          ]
        }
      ]
    }
  },
  {
    "id": "ch5",
    "number": 5,
    "title": "Water around Us",
    "bank": {
      "mcq_standard": [
        {
          "q": "Which is a man-made source of water?",
          "a": "Well",
          "options": [
            "Well",
            "River",
            "Rain",
            "Ocean"
          ]
        },
        {
          "q": "Drinking dirty water makes us ___",
          "a": "ill",
          "options": [
            "ill",
            "healthy",
            "strong",
            "happy"
          ]
        },
        {
          "q": "Where do we get water from?",
          "a": "Rivers, lakes, and rainwater",
          "options": [
            "Rivers, lakes, and rainwater",
            "Sun and moon",
            "Trees and plants",
            "Fire and soil"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "___ kills the germs present in water.",
          "a": "Boiling",
          "options": [
            "Boiling",
            "Freezing",
            "Cooling",
            "Washing"
          ]
        },
        {
          "q": "Drinking or using polluted water is ___ for our health.",
          "a": "bad",
          "options": [
            "bad",
            "good",
            "safe",
            "healthy"
          ]
        },
        {
          "q": "We use boat and ship to travell on ___.",
          "a": "Water",
          "options": [
            "Water",
            "Land",
            "Air",
            "Roads"
          ]
        },
        {
          "q": "We should drink ___ glasses of water every day.",
          "a": "8 to 10",
          "options": [
            "8 to 10",
            "1 to 2",
            "20 to 30",
            "50 to 100"
          ]
        }
      ],
      "true_false": [
        {
          "q": "Plants and animals need water to live.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should drink dirty water.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should use water wisely.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should store water in dirty containers.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should not throw garbage in water bodies.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should use clean water for cooking food.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should use  clean water for drinking.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "Very tiny living beings that make the water impure.",
          "a": "Germs",
          "options": [
            "Germs",
            "Fish",
            "Plants",
            "Stones"
          ]
        },
        {
          "q": "The water present below the ground.",
          "a": "Groundwater",
          "options": [
            "Groundwater",
            "Rainwater",
            "River water",
            "Sea water"
          ]
        }
      ],
      "match_following": [
        {
          "q": "Drink",
          "a": "8 to 10 glasses of water"
        },
        {
          "q": "Clean water",
          "a": "Filtering"
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: R _ I N W _ TER",
          "a": "RAINWATER",
          "options": [
            "RAINWATER",
            "REINWATER",
            "ROINWATER",
            "RUNWATER"
          ]
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'TERWA':",
          "a": "WATER",
          "options": [
            "WATER",
            "WETER",
            "WOTER",
            "WITER"
          ]
        },
        {
          "q": "Unscramble 'LLSWE':",
          "a": "WELLS",
          "options": [
            "WELLS",
            "WALLS",
            "WILLS",
            "WOLLS"
          ]
        }
      ]
    }
  },
  {
    "id": "ch6",
    "number": 6,
    "title": "Clothes & Houses",
    "bank": {
      "mcq_standard": [
        {
          "q": "We get cotton from ___",
          "a": "cotton plants",
          "options": [
            "cotton plants",
            "sheep",
            "cows",
            "silk worms"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "The house we live in is called ___.",
          "a": "Home",
          "options": [
            "Home",
            "School",
            "Office",
            "Market"
          ]
        },
        {
          "q": "Some pepole live in a floating house called ___.",
          "a": "Houseboat",
          "options": [
            "Houseboat",
            "Igloo",
            "Tent",
            "Caravan"
          ]
        },
        {
          "q": "A house with two floors is called a ___.",
          "a": "duplex",
          "options": [
            "duplex",
            "flat",
            "hut",
            "tent"
          ]
        },
        {
          "q": "___ houses are strong houses made of bricks and cement.",
          "a": "Pucca",
          "options": [
            "Pucca",
            "Kutcha",
            "Wooden",
            "Mud"
          ]
        }
      ],
      "true_false": [
        {
          "q": "We should keep our surroundings clean.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Woollens keep us warm during winter.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Nylon and rayon are natural fibres.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Silk is a shiny fibre produced by silkworms.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "The soft, thick hair on animals.",
          "a": "Fur",
          "options": [
            "Fur",
            "Skin",
            "Feathers",
            "Scales"
          ]
        },
        {
          "q": "Materials made of thread.",
          "a": "Fibres",
          "options": [
            "Fibres",
            "Bricks",
            "Wood",
            "Glass"
          ]
        },
        {
          "q": "Cleaning clothes without using water.",
          "a": "Dry clean",
          "options": [
            "Dry clean",
            "Washing",
            "Ironing",
            "Drying"
          ]
        }
      ],
      "match_following": [
        {
          "q": "Raincoat",
          "a": "Rainy season"
        },
        {
          "q": "Pullovers",
          "a": "Winter season"
        },
        {
          "q": "Ropes",
          "a": "Jute"
        },
        {
          "q": "Nylon",
          "a": "Manmade fibres"
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: G U M B _ O T S",
          "a": "GUMBOOTS",
          "options": [
            "GUMBOOTS",
            "GAMBOOTS",
            "GEMBOOTS",
            "GIMBOOTS"
          ]
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'PSHI':",
          "a": "SHIP",
          "options": [
            "SHIP",
            "SHEP",
            "SHAP",
            "SHOP"
          ]
        },
        {
          "q": "Unscramble 'KLSI':",
          "a": "SILK",
          "options": [
            "SILK",
            "SALK",
            "SOLK",
            "SELK"
          ]
        }
      ]
    }
  },
  {
    "id": "ch7",
    "number": 7,
    "title": "Air & Health",
    "bank": {
      "mcq_standard": [
        {
          "q": "Which of these kills germs in the air?",
          "a": "Sunlight",
          "options": [
            "Sunlight",
            "Water",
            "Moonlight",
            "Wind"
          ]
        },
        {
          "q": "What do you understand by ventilation?",
          "a": "The way air moves around inside a house",
          "options": [
            "The way air moves around inside a house",
            "The way water flows",
            "The way we cook food",
            "The way we sleep"
          ]
        },
        {
          "q": "What is one thing we should do to stay healthy?",
          "a": "Do exercise regularly",
          "options": [
            "Do exercise regularly",
            "Eat only junk food",
            "Sleep all day",
            "Drink dirty water"
          ]
        },
        {
          "q": "Why should we grow more plants?",
          "a": "They keep the air clean",
          "options": [
            "They keep the air clean",
            "They make the air dirty",
            "They give us plastic",
            "They drink all our water"
          ]
        }
      ],
      "fill_blanks": [
        {
          "q": "We ___ clothes to make them look neat.",
          "a": "iron",
          "options": [
            "iron",
            "wash",
            "fold",
            "tear"
          ]
        },
        {
          "q": "Jute is a ___ fibre.",
          "a": "plant",
          "options": [
            "plant",
            "animal",
            "plastic",
            "toy"
          ]
        },
        {
          "q": "We wear ___ in winter.",
          "a": "sweaters",
          "options": [
            "sweaters",
            "raincoats",
            "t-shirts",
            "shorts"
          ]
        }
      ],
      "true_false": [
        {
          "q": "We should sleep for 8 to 9 hours everyday.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "Sunlight kills the germs.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "The process in which air and water get dirty.",
          "a": "Pollution",
          "options": [
            "Pollution",
            "Purification",
            "Cleaning",
            "Boiling"
          ]
        }
      ],
      "match_following": [
        {
          "q": "Breathing dirty air",
          "a": "Makes us ill"
        },
        {
          "q": "Exercise",
          "a": "Yoga, jogging"
        }
      ]
    }
  },
  {
    "id": "ch8",
    "number": 8,
    "title": "Our Surroundings",
    "bank": {
      "mcq_standard": [
        {
          "q": "We should keep our surroundings ___",
          "a": "clean and green",
          "options": [
            "clean and green",
            "dirty and messy",
            "noisy and crowded",
            "polluted and dry"
          ]
        },
        {
          "q": "We should use bags made of ___",
          "a": "cloth and paper",
          "options": [
            "cloth and paper",
            "plastic",
            "glass",
            "iron"
          ]
        },
        {
          "q": "Dustbins should be ___",
          "a": "covered",
          "options": [
            "covered",
            "open",
            "broken",
            "dirty"
          ]
        },
        {
          "q": "Houses made of thick cloth used in deserts are called ___",
          "a": "Tent",
          "options": [
            "Tent",
            "Houseboat",
            "Igloo",
            "Duplex"
          ]
        },
        {
          "q": "Why should windows have wire nettings?",
          "a": "To stop flies and mosquitoes",
          "options": [
            "To stop flies and mosquitoes",
            "To stop sunlight",
            "To stop rain",
            "To stop air"
          ]
        },
        {
          "q": "Why are houses in small cities usually big?",
          "a": "Land and building materials are cheaper",
          "options": [
            "Land and building materials are cheaper",
            "Land is very expensive",
            "There are no builders",
            "People like small houses"
          ]
        }
      ],
      "true_false": [
        {
          "q": "We should use paper or cloth bags.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should write on walls.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should throw garbage in the open.",
          "a": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should keep our surroundings clean.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should use dustbins to throw garbage.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "q": "We should sleep  for 8 to 9 hours everyday.",
          "a": "True",
          "options": [
            "True",
            "False"
          ]
        }
      ],
      "one_word": [
        {
          "q": "A small round house made with blocks of snow.",
          "a": "Igloo",
          "options": [
            "Igloo",
            "Tent",
            "Caravan",
            "Duplex"
          ]
        },
        {
          "q": "Houses made of straw, mud and wood.",
          "a": "Kuchcha house",
          "options": [
            "Kuchcha house",
            "Pucca house",
            "Igloo",
            "Apartment"
          ]
        }
      ],
      "match_following": [
        {
          "q": "Waste",
          "a": "Dustbin"
        },
        {
          "q": "Plants",
          "a": "Keep the air clean"
        }
      ],
      "missing_letters": [
        {
          "q": "Complete the word: G _ R B A _ E",
          "a": "GARBAGE",
          "options": [
            "GARBAGE",
            "GERBAGE",
            "GIRBAGE",
            "GORBAGE"
          ]
        },
        {
          "q": "Complete the word: R _ B _ ISH",
          "a": "RUBBISH",
          "options": [
            "RUBBISH",
            "RABBISH",
            "REBBISH",
            "ROBBISH"
          ]
        },
        {
          "q": "Complete the word: B R _ C K S",
          "a": "BRICKS",
          "options": [
            "BRICKS",
            "BROCKS",
            "BRACKS",
            "BRECKS"
          ]
        },
        {
          "q": "Complete the word: D U P _ E X",
          "a": "DUPLEX",
          "options": [
            "DUPLEX",
            "DAPLEX",
            "DIPLEX",
            "DOPLEX"
          ]
        }
      ],
      "rearrange": [
        {
          "q": "Unscramble 'BAGGARE':",
          "a": "GARBAGE",
          "options": [
            "GARBAGE",
            "GERBAGE",
            "GORBAGE",
            "GIRBAGE"
          ]
        },
        {
          "q": "Unscramble 'ARPTAMNET':",
          "a": "APARTMENT",
          "options": [
            "APARTMENT",
            "APERTMENT",
            "APORTMENT",
            "OPARTMENT"
          ]
        }
      ]
    }
  },
  {
    "id": "ch9",
    "number": 9,
    "title": "Cleanliness and Health",
    "bank": {
      "fill_blanks": [
        {
          "q": "Flies and mosquitoes breed on ___ dumps.",
          "a": "garbage",
          "options": [
            "garbage",
            "sand",
            "flower",
            "toy"
          ]
        },
        {
          "q": "Clean ___helps to keep us healthy.",
          "a": "surroundings",
          "options": [
            "surroundings",
            "classrooms",
            "dustbins",
            "clothes"
          ]
        },
        {
          "q": "We should throw garbage in a ___.",
          "a": "dustbin",
          "options": [
            "dustbin",
            "road",
            "floor",
            "park"
          ]
        }
      ]
    }
  }
]
};
