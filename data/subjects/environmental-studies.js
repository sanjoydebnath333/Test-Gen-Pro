// =============================================================================
// Environmental Studies — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_ENVIRONMENTAL_STUDIES = {
  "id": "environmental_studies",
  "title": "Environmental Studies",
  "icon": "🌿",
  "theme": "#16a34a",
  "gradient": "linear-gradient(135deg, #16a34a, #0ea5e9)",
  "sections": [
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
  "chapters": [
    {
      "id": "ch13",
      "number": 13,
      "title": "More about Plants",
      "bank": {
        "fill_blanks": [
          {
            "q": "___ are the dried roots, fruits or seeds of some plants.",
            "a": "Spices",
            "options": [
              "Spices",
              "Pulses",
              "Cereals",
              "Nutrients"
            ]
          },
          {
            "q": "Climbers and creepers have ___ stems.",
            "a": "weak",
            "options": [
              "weak",
              "woody",
              "soft",
              "thick"
            ]
          },
          {
            "q": "We get sugar from the ___ of the Sugar cane stem.",
            "a": "juice",
            "options": [
              "juice",
              "roots",
              "seeds",
              "leaves"
            ]
          },
          {
            "q": "Food grains are the ___ seeds of some plants.",
            "a": "edible",
            "options": [
              "edible",
              "dried",
              "woody",
              "weak"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Oils from the seeds of some plants are used to make soap, shampoo and tooth paste.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We get tea from coffee beans.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Trees such as teak and oak gives us wood.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Plants store their extra food in parts like stems and roots.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: G _ A I _ S",
            "a": "GRAINS",
            "options": [
              "GRAINS",
              "GRANIS",
              "GRIANS",
              "GRANES"
            ]
          },
          {
            "q": "Complete the word: M _ D I C I _ E S",
            "a": "MEDICINES",
            "options": [
              "MEDICINES",
              "MEDICENS",
              "MEDICINAS",
              "MEDCINES"
            ]
          },
          {
            "q": "Complete the word: P _ L _ E S",
            "a": "PULSES",
            "options": [
              "PULSES",
              "PULSAS",
              "PUSLES",
              "PULCES"
            ]
          },
          {
            "q": "Complete the word: J _ _ C E",
            "a": "JUICE",
            "options": [
              "JUICE",
              "JUISE",
              "JUCIE",
              "JUISEY"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'REALSCE':",
            "a": "CEREALS",
            "options": [
              "CEREALS",
              "CERALAS",
              "CERELAS",
              "CERELES"
            ]
          },
          {
            "q": "Unscramble 'CESSPI':",
            "a": "SPICES",
            "options": [
              "SPICES",
              "SPICSE",
              "SPICIS",
              "SPICAS"
            ]
          },
          {
            "q": "Unscramble 'BERSELIM':",
            "a": "CLIMBERS",
            "options": [
              "CLIMBERS",
              "CLIMBRES",
              "CLIMBARS",
              "CLIMBIRS"
            ]
          }
        ],
        "one_word": [
          {
            "q": "Soft and wet wood used to make paper.",
            "a": "Pulp",
            "options": [
              "Pulp",
              "Bark",
              "Resin",
              "Fibre"
            ]
          },
          {
            "q": "Small plants with soft stems.",
            "a": "Herbs",
            "options": [
              "Herbs",
              "Shrubs",
              "Trees",
              "Climbers"
            ]
          },
          {
            "q": "Substances that are needed for healthy growth.",
            "a": "Nutrients",
            "options": [
              "Nutrients",
              "Minerals",
              "Vitamins",
              "Fertilizers"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which of these is a beverage?",
            "a": "Coffee",
            "options": [
              "Coffee",
              "Water",
              "Mustard",
              "Wheat"
            ]
          },
          {
            "q": "Which of these is a spice?",
            "a": "Cardamon",
            "options": [
              "Cardamon",
              "Moong",
              "Rice",
              "Wheat"
            ]
          },
          {
            "q": "Which of these holds the plant to the soil?",
            "a": "Roots",
            "options": [
              "Roots",
              "Leaves",
              "Flowers",
              "Stem"
            ]
          },
          {
            "q": "Which of these is a climber?",
            "a": "Grapevine",
            "options": [
              "Grapevine",
              "Rose",
              "Banyan",
              "Tulsi"
            ]
          },
          {
            "q": "Write two uses of plants.",
            "a": "Two uses of plants are:\n(i) Plants keep the air clean and fresh.\n(ii) Plants gives us fruits and vegetables.",
            "options": [
              "Two uses of plants are:\n(i) Plants keep the air clean and fresh.\n(ii) Plants gives us fruits and vegetables.",
              "Plants make the air dirty and do not provide food.",
              "Plants only give us wood and do not help keep air clean.",
              "Plants give us medicines only."
            ]
          },
          {
            "q": "Name the different types of plants.",
            "a": "The different types of plants are trees, shrubs, herbs, climbers and creepers.",
            "options": [
              "The different types of plants are trees, shrubs, herbs, climbers and creepers.",
              "The different types of plants are trees and animals.",
              "The different types of plants are roots, leaves and flowers.",
              "The different types of plants are only trees and shrubs."
            ]
          },
          {
            "q": "What are shrubs? Give example.",
            "a": "Shrubs are smaller than trees. They have many thin, woody stems and they appear like a bush. Examples: Rose, Hibicus.",
            "options": [
              "Shrubs are smaller than trees. They have many thin, woody stems and they appear like a bush. Examples: Rose, Hibicus.",
              "Shrubs are taller than trees and have one thick trunk.",
              "Shrubs are small plants with soft stems, such as herbs.",
              "Shrubs are plants with weak stems that creep on the ground."
            ]
          }
        ],
        "match_following": [
          {
            "q": "Match: Creepers",
            "a": "Strawberry",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Pulses",
            "a": "Moong",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Bees",
            "a": "Beehives",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Cowherd looks after",
            "a": "Cows",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Cats",
            "a": "Kitten",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Climbers",
            "a": "Grapevine",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Butterflies",
            "a": "Catterpillars",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          },
          {
            "q": "Match: Rabbit",
            "a": "hutch",
            "options": [
              "Cows",
              "Kitten",
              "Grapevine",
              "Moong",
              "Strawberry",
              "hutch",
              "Beehives",
              "Catterpillars"
            ]
          }
        ]
      }
    },
    {
      "id": "ch14",
      "number": 14,
      "title": "More about Animals",
      "bank": {
        "fill_blanks": [
          {
            "q": "A ___ looks after cows.",
            "a": "cowherd",
            "options": [
              "cowherd",
              "shepherd",
              "vet",
              "farmer"
            ]
          },
          {
            "q": "A ___ is a doctor who looks after animals.",
            "a": "vet",
            "options": [
              "vet",
              "cowherd",
              "shepherd",
              "nurse"
            ]
          },
          {
            "q": "Bees lives in ___.",
            "a": "beehives",
            "options": [
              "beehives",
              "kennel",
              "den",
              "hutch"
            ]
          },
          {
            "q": "Butterflies are born as small ___.",
            "a": "caterpillars",
            "options": [
              "caterpillars",
              "cubs",
              "puppies",
              "kittens"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Dogs and cats have three legs.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Fish swims in water with the help of fins.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The baby of the lions are called cubs.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "A pet dog lives in a kennel.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: K _ N _ E L",
            "a": "KENNEL",
            "options": [
              "KENNEL",
              "KENELL",
              "KANNEL",
              "KENNAL"
            ]
          },
          {
            "q": "Complete the word: B _ T T E R _ L I E S",
            "a": "BUTTERFLIES",
            "options": [
              "BUTTERFLIES",
              "BUTTERFLYS",
              "BUTTERFLEIS",
              "BUTERFLIES"
            ]
          },
          {
            "q": "Complete the word: S _ A R _ S",
            "a": "SHARKS",
            "options": [
              "SHARKS",
              "SHARKES",
              "SHERKS",
              "SHARQS"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'L E W H A':",
            "a": "WHALES",
            "options": [
              "WHALES",
              "WHEALS",
              "WHAELS",
              "WHILES"
            ]
          },
          {
            "q": "Unscramble 'HERDCOW':",
            "a": "COWHERD",
            "options": [
              "COWHERD",
              "COWHRED",
              "COWHARD",
              "COWHEARD"
            ]
          },
          {
            "q": "Unscramble 'TERSHLE':",
            "a": "SHELTER",
            "options": [
              "SHELTER",
              "SHELTAR",
              "SHELTR",
              "SHALTER"
            ]
          }
        ],
        "one_word": [
          {
            "q": "A small worm that grows up to become a butterfly.",
            "a": "Caterpillar",
            "options": [
              "Caterpillar",
              "Earthworm",
              "Maggot",
              "Tadpole"
            ]
          },
          {
            "q": "The meat of an animal that can be eaten.",
            "a": "Flesh",
            "options": [
              "Flesh",
              "Bone",
              "Skin",
              "Fat"
            ]
          },
          {
            "q": "The two front legs of a four legged animal.",
            "a": "Forelegs",
            "options": [
              "Forelegs",
              "Hindlegs",
              "Paws",
              "Hooves"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Cows eat only",
            "a": "Plants",
            "options": [
              "Plants",
              "Flesh",
              "Insects",
              "Fish"
            ]
          },
          {
            "q": "A dog's baby is called",
            "a": "Puppy",
            "options": [
              "Puppy",
              "Cub",
              "Calf",
              "Kitten"
            ]
          },
          {
            "q": "Shepherd looks after",
            "a": "Sheep",
            "options": [
              "Sheep",
              "Cow",
              "Horse",
              "Lion"
            ]
          },
          {
            "q": "The home of the lion is called",
            "a": "Den",
            "options": [
              "Den",
              "Nest",
              "Kennel",
              "Burrow"
            ]
          },
          {
            "q": "Who are called flesh-eating animals? Give example.",
            "a": "Animals that eat the flesh of other animals, are called flesh-eating animals. Examples: Lions, tigers.",
            "options": [
              "Animals that eat the flesh of other animals, are called flesh-eating animals. Examples: Lions, tigers.",
              "Animals that eat only plants are called flesh-eating animals.",
              "Animals that live only in water are called flesh-eating animals.",
              "Animals that eat grass and grains are called flesh-eating animals."
            ]
          },
          {
            "q": "Name two animals that live in both on land and in water.",
            "a": "Frogs and Crocodiles live both on land and in water.",
            "options": [
              "Frogs and Crocodiles live both on land and in water.",
              "Lions and tigers live both on land and in water.",
              "Bees and butterflies live both on land and in water.",
              "Cows and sheep live both on land and in water."
            ]
          }
        ]
      }
    },
    {
      "id": "ch15",
      "number": 15,
      "title": "Means of Transport",
      "bank": {
        "fill_blanks": [
          {
            "q": "Different ___ are used to travel from one place to another.",
            "a": "vehicles",
            "options": [
              "vehicles",
              "wheel",
              "fuel",
              "petrol"
            ]
          },
          {
            "q": "The invention of the ___ made travelling easier.",
            "a": "wheel",
            "options": [
              "wheel",
              "vehicles",
              "petrol",
              "traffic"
            ]
          },
          {
            "q": "We should try to save ___.",
            "a": "fuel",
            "options": [
              "fuel",
              "petrol",
              "wheel",
              "distance"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: D _ S T A _ C E",
            "a": "DISTANCE",
            "options": [
              "DISTANCE",
              "DISTENCE",
              "DISTANSE",
              "DISTNACE"
            ]
          },
          {
            "q": "Complete the word: V _ H I _ L E S",
            "a": "VEHICLES",
            "options": [
              "VEHICLES",
              "VEHICELS",
              "VEHICALS",
              "VEHCLES"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'FFIC TRA':",
            "a": "TRAFFIC",
            "options": [
              "TRAFFIC",
              "TRAFFCI",
              "TRAFIC",
              "TRAFFEC"
            ]
          },
          {
            "q": "Unscramble 'TROLPE':",
            "a": "PETROL",
            "options": [
              "PETROL",
              "PETRAL",
              "PERTOL",
              "PETRIL"
            ]
          }
        ],
        "one_word": [
          {
            "q": "An underground railway system in a large city.",
            "a": "Metro",
            "options": [
              "Metro",
              "Tram",
              "Train",
              "Subway"
            ]
          },
          {
            "q": "A thing that somebody has made for the first time.",
            "a": "Invention",
            "options": [
              "Invention",
              "Discovery",
              "Machine",
              "Creation"
            ]
          },
          {
            "q": "Not able to hear.",
            "a": "Deafness",
            "options": [
              "Deafness",
              "Blindness",
              "Illness",
              "Weakness"
            ]
          },
          {
            "q": "Going from one place to another.",
            "a": "Travelling",
            "options": [
              "Travelling",
              "Driving",
              "Walking",
              "Riding"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which of these vehicles moves on tracks?",
            "a": "train",
            "options": [
              "train",
              "plane",
              "bus",
              "boat"
            ]
          },
          {
            "q": "Which of these is the slow means of transport?",
            "a": "Bullock Cart",
            "options": [
              "Bullock Cart",
              "Bus",
              "Aeroplane",
              "Metro Train"
            ]
          },
          {
            "q": "Which of these is fuel?",
            "a": "Petrol",
            "options": [
              "Petrol",
              "Water",
              "Milk",
              "Sand"
            ]
          },
          {
            "q": "What do we understand by means of transport?",
            "a": "The vehicles used for transport are known as means of transport.",
            "options": [
              "The vehicles used for transport are known as means of transport.",
              "The messages used to talk or write to someone are known as means of transport.",
              "The places where animals live are known as means of transport.",
              "The parts of a plant are known as means of transport."
            ]
          },
          {
            "q": "Name two very fast vehicles.",
            "a": "Train and Aeroplane.",
            "options": [
              "Train and Aeroplane.",
              "Bus and Bullock Cart.",
              "Bicycle and Bullock Cart.",
              "Cart and bicycle."
            ]
          }
        ]
      }
    },
    {
      "id": "ch16",
      "number": 16,
      "title": "Means of Communication",
      "bank": {
        "fill_blanks": [
          {
            "q": "The ___ is one of the fastest means of communication.",
            "a": "telephone",
            "options": [
              "telephone",
              "Newspaper",
              "Computer",
              "Television"
            ]
          },
          {
            "q": "___ is one of the cheapest means of communication.",
            "a": "Newspaper",
            "options": [
              "Newspaper",
              "telephone",
              "Computer",
              "Mobile phone"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Children should not carry mobile phones to school.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Letters are the fastest means of communication.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We enjoy watching television in our free time.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: T _ L E V I _ I O N",
            "a": "TELEVISION",
            "options": [
              "TELEVISION",
              "TELEVISON",
              "TELEVEISION",
              "TELEVESION"
            ]
          },
          {
            "q": "Complete the word: I _ T E _ N E T",
            "a": "INTERNET",
            "options": [
              "INTERNET",
              "INTERENT",
              "INTRANET",
              "INTRENET"
            ]
          },
          {
            "q": "Complete the word: C O _ _ U N I C _ T I O N",
            "a": "COMMUNICATION",
            "options": [
              "COMMUNICATION",
              "COMMUNICATON",
              "COMUNICATION",
              "COMMUNUCATION"
            ]
          }
        ],
        "one_word": [
          {
            "q": "The system of sending or receiving letters.",
            "a": "Post",
            "options": [
              "Post",
              "Courier",
              "Telegram",
              "Email"
            ]
          },
          {
            "q": "Facts about something.",
            "a": "Information",
            "options": [
              "Information",
              "Knowledge",
              "News",
              "Message"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "We send ___ to other people through post.",
            "a": "letters",
            "options": [
              "letters",
              "Radio",
              "Television",
              "Telephone"
            ]
          },
          {
            "q": "A ___ help us to connect and communicate through the internet.",
            "a": "Computer",
            "options": [
              "Computer",
              "Television",
              "Radio",
              "Newspaper"
            ]
          },
          {
            "q": "What is communication?",
            "a": "When we talk or write to someone it is known as communication.",
            "options": [
              "When we talk or write to someone it is known as communication.",
              "The vehicles used for transport are known as communication.",
              "The system of sending or receiving letters is known as communication.",
              "The weather over a long period of time is known as communication."
            ]
          },
          {
            "q": "Name any four means of communication used today.",
            "a": "Newspaper, Computer, Television, Mobile phone.",
            "options": [
              "Newspaper, Computer, Television, Mobile phone.",
              "Train, Aeroplane, Bus, Bullock Cart.",
              "Rose, Hibicus, Grapevine, Strawberry.",
              "Roots, stems, leaves, flowers."
            ]
          }
        ]
      }
    },
    {
      "id": "ch17",
      "number": 17,
      "title": "The World Around Me",
      "bank": {
        "fill_blanks": [
          {
            "q": "___ is the largest planet in our solar system.",
            "a": "Jupiter",
            "options": [
              "Jupiter",
              "Mercury",
              "Earth",
              "Sun"
            ]
          },
          {
            "q": "A ___ is the small model of the earth.",
            "a": "globe",
            "options": [
              "globe",
              "planet",
              "puddle",
              "season"
            ]
          },
          {
            "q": "We wear ___ when we go out on a rainy day.",
            "a": "raincoats",
            "options": [
              "raincoats",
              "sweaters",
              "jackets",
              "mufflers"
            ]
          },
          {
            "q": "There would be no life on earth without the ___.",
            "a": "sun",
            "options": [
              "sun",
              "moon",
              "stars",
              "clouds"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Sun moves around the moon.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Rotation causes day and night.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "There are five seasons in India.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "The weather over a long period of time.",
            "a": "Season",
            "options": [
              "Season",
              "Climate",
              "Weather",
              "Monsoon"
            ]
          },
          {
            "q": "A small pool of water on the ground.",
            "a": "Puddle",
            "options": [
              "Puddle",
              "Pond",
              "Lake",
              "Stream"
            ]
          },
          {
            "q": "Large round objects in space that move around the Sun.",
            "a": "Planets",
            "options": [
              "Planets",
              "Stars",
              "Moons",
              "Comets"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which is the largest planet of our solar system?",
            "a": "Jupiter",
            "options": [
              "Jupiter",
              "Mercury",
              "Mars",
              "Earth"
            ]
          },
          {
            "q": "What does the moon revolve around?",
            "a": "The earth",
            "options": [
              "The earth",
              "The Sun",
              "Mars",
              "Jupiter"
            ]
          },
          {
            "q": "___ is the group of stars that forms a shape in the sky.",
            "a": "Constellation",
            "options": [
              "Constellation",
              "Atmosphere",
              "Solar System",
              "Galaxy"
            ]
          },
          {
            "q": "___ is the most colourful season.",
            "a": "Spring",
            "options": [
              "Spring",
              "Winter",
              "Summer",
              "Monsoon"
            ]
          },
          {
            "q": "How many planets are there in our Solar system?",
            "a": "There are eight planets in our solar system.",
            "options": [
              "There are eight planets in our solar system.",
              "There are five planets in our solar system.",
              "There are seven planets in our solar system.",
              "There are ten planets in our solar system."
            ]
          },
          {
            "q": "The earth is known as the \"Blue Planet\". Give reasons.",
            "a": "The earth is known as the \"Blue Planet\" because most of its surface is covered with water.",
            "options": [
              "The earth is known as the \"Blue Planet\" because most of its surface is covered with water.",
              "The earth is known as the \"Blue Planet\" because it is the largest planet.",
              "The earth is known as the \"Blue Planet\" because it is farthest from the Sun.",
              "The earth is known as the \"Blue Planet\" because it is the coldest planet."
            ]
          },
          {
            "q": "Summer is the hottest season. Give reason.",
            "a": "Summer is the hottest season because the sun is the brightest and hottest during the summer.",
            "options": [
              "Summer is the hottest season because the sun is the brightest and hottest during the summer.",
              "Summer is the hottest season because there is snow everywhere.",
              "Summer is the hottest season because the Sun is farthest from Earth.",
              "Summer is the hottest season because it is the coldest season."
            ]
          },
          {
            "q": "We can see traffic jams in cities. Give reason.",
            "a": "We can see traffic jams in cities because there are too many vehicles on the road at the same time.",
            "options": [
              "We can see traffic jams in cities because there are too many vehicles on the road at the same time.",
              "We can see traffic jams in cities because there are no vehicles on the road.",
              "We can see traffic jams in cities because all vehicles travel on tracks.",
              "We can see traffic jams in cities because there are no roads."
            ]
          },
          {
            "q": "The telephone is one of the fastest means of communication. Give reason.",
            "a": "The telephone is one of the fastest means of communication because we can talk to someone instantly by dialing that person's phone number.",
            "options": [
              "The telephone is one of the fastest means of communication because we can talk to someone instantly by dialing that person's phone number.",
              "The telephone is one of the fastest means of communication because it is a kind of plant.",
              "The telephone is one of the fastest means of communication because it moves on tracks.",
              "The telephone is one of the fastest means of communication because it is used only for drawing."
            ]
          }
        ],
        "match_following": [
          {
            "q": "Match: Atmosphere",
            "a": "Blanket of Air",
            "options": [
              "The Sun",
              "Winter",
              "Blanket of Air",
              "Monsoon",
              "The Earth"
            ]
          },
          {
            "q": "Match: Rainy Season",
            "a": "Monsoon",
            "options": [
              "The Sun",
              "Winter",
              "Blanket of Air",
              "Monsoon",
              "The Earth"
            ]
          },
          {
            "q": "Match: Blue Planet",
            "a": "The Earth",
            "options": [
              "The Sun",
              "Winter",
              "Blanket of Air",
              "Monsoon",
              "The Earth"
            ]
          },
          {
            "q": "Match: Large ball of fire",
            "a": "The Sun",
            "options": [
              "The Sun",
              "Winter",
              "Blanket of Air",
              "Monsoon",
              "The Earth"
            ]
          },
          {
            "q": "Match: Coldest Season",
            "a": "Winter",
            "options": [
              "The Sun",
              "Winter",
              "Blanket of Air",
              "Monsoon",
              "The Earth"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'VUENS':",
            "a": "VENUS",
            "options": [
              "VENUS",
              "VANUS",
              "VEUNS",
              "VENES"
            ]
          },
          {
            "q": "Unscramble 'PDDUELS':",
            "a": "PUDDLES",
            "options": [
              "PUDDLES",
              "PUDLES",
              "PUDDLS",
              "PUDDELS"
            ]
          },
          {
            "q": "Unscramble 'SAESNO':",
            "a": "SEASON",
            "options": [
              "SEASON",
              "SEASNO",
              "SEASEN",
              "SAESON"
            ]
          },
          {
            "q": "Unscramble 'CHINMAE':",
            "a": "MACHINE",
            "options": [
              "MACHINE",
              "MACHIEN",
              "MACHANE",
              "MASHINE"
            ]
          },
          {
            "q": "Unscramble 'PAPR NEWSE':",
            "a": "NEWSPAPER",
            "options": [
              "NEWSPAPER",
              "NEWSPAPRE",
              "NEWSPEPAR",
              "NEWSPAPAR"
            ]
          }
        ],
        "drawing": [
          {
            "q": "Draw and name any two means of communication.",
            "a": "Television, Mobile Phone"
          },
          {
            "q": "Draw and name any two parts of a plant.",
            "a": "Flower, Leaf"
          }
        ]
      }
    }
  ]
};
