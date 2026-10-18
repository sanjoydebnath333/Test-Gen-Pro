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
      "id": "ch10",
      "number": 10,
      "title": "Safety Rules",
      "bank": {
        "mcq_standard": [
          {
            "q": "We should always throw waste into a ___",
            "a": "dustbin",
            "options": [
              "dustbin",
              "playground",
              "road",
              "river"
            ]
          },
          {
            "q": "Keep a ___ ready in school as well as at home.",
            "a": "First-aid box",
            "options": [
              "First-aid box",
              "Lunch box",
              "Pencil box",
              "Toy box"
            ]
          },
          {
            "q": "We should always cross the road at a ___ crossing.",
            "a": "Zebra crossing",
            "options": [
              "Zebra crossing",
              "Tiger crossing",
              "Lion crossing",
              "Elephant crossing"
            ]
          },
          {
            "q": "how does good touch make us feel?",
            "a": "Happy and safe",
            "options": [
              "Happy and safe",
              "Unhappy and safe",
              "Sad and scared",
              "Angry and unsafe",
              "Confused and worried"
            ]
          },
          {
            "q": "We should use ___ over the cut on the wound.",
            "a": "Antiseptic cream",
            "options": [
              "Antiseptic cream",
              "Cotton",
              "Paper",
              "Baby lotion"
            ]
          },
          {
            "q": "Write any two safety rules that we should follow at home.",
            "a": "Avoid playing with unsafe things like knife, iron etc. and do not touch electrical sockets with wet hands.",
            "options": [
              "Avoid playing with unsafe things like knife, iron etc. and do not touch electrical sockets with wet hands.",
              "Play with sharp knives and touch wet switches.",
              "Run on wet floors and jump on furniture.",
              "Leave toys on stairs and play with fire."
            ]
          },
          {
            "q": "What is first aid?",
            "a": "The help given to an injured person before a doctor arrives",
            "options": [
              "The help given to an injured person before a doctor arrives",
              "Medicine given by a doctor in a hospital",
              "Playing games after getting injured",
              "Calling police during an emergency"
            ]
          },
          {
            "q": "What is good touch?",
            "a": "A touch that makes us feel happy and safe",
            "options": [
              "A touch that makes us feel happy and safe",
              "A touch that makes us feel sad and scared",
              "A touch that makes us feel angry and unsafe",
              "A touch that makes us feel confused and worried"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "Staying away from danger is called ___.",
            "a": "safety",
            "options": [
              "safety",
              "danger",
              "careless",
              "playing"
            ]
          },
          {
            "q": "A good touch makes us feel ___ and safe.",
            "a": "happy",
            "options": [
              "happy",
              "sad",
              "angry",
              "scared"
            ]
          },
          {
            "q": "We should not open the door for a ___.",
            "a": "stranger",
            "options": [
              "stranger",
              "friend",
              "parent",
              "teacher"
            ]
          },
          {
            "q": "We should always walk in a ___.",
            "a": "queue",
            "options": [
              "queue",
              "line",
              "group",
              "circle"
            ]
          },
          {
            "q": "We should use ___ crossing to cross the road.",
            "a": "zebra",
            "options": [
              "zebra",
              "tiger",
              "simple",
              "long"
            ]
          }
        ],
        "true_false": [
          {
            "q": "We should always walk in a queue.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should touch hot pans.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should stand in front of a moving swing.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should cross the road with a grown-up.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should not push others on the stairs.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should not touch electrical sockets with wet hands.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "Complete the word: S _ I N G S",
            "a": "SWINGS",
            "options": [
              "SWINGS",
              "SENGS",
              "SANGS",
              "SONGS"
            ]
          },
          {
            "q": "Complete the word: W _ U N D",
            "a": "WOUND",
            "options": [
              "WOUND",
              "WAND",
              "WIND",
              "WEND"
            ]
          },
          {
            "q": "Complete the word: S _ F E T Y",
            "a": "SAFETY",
            "options": [
              "SAFETY",
              "SOFETY",
              "SIFETY",
              "SUFETY"
            ]
          },
          {
            "q": "Complete the word: S T _ I R S",
            "a": "STAIRS",
            "options": [
              "STAIRS",
              "STEIRS",
              "STORS",
              "STURS"
            ]
          },
          {
            "q": "Complete the word: S T _ A N _ E R",
            "a": "STRANGER",
            "options": [
              "STRANGER",
              "STAINER",
              "STRENTH",
              "STRENGTH"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'LBIRRAY':",
            "a": "LIBRARY",
            "options": [
              "LIBRARY",
              "LABRARY",
              "LIBRERY",
              "LIBRARE"
            ]
          }
        ],
        "one_word": [
          {
            "q": "The state of being safe.",
            "a": "Safety",
            "options": [
              "Safety",
              "Danger",
              "Careless",
              "Accident"
            ]
          },
          {
            "q": "Something that stops germs from causing an infection.",
            "a": "Antiseptic",
            "options": [
              "Antiseptic",
              "Water",
              "Soap",
              "Oil"
            ]
          },
          {
            "q": "A person who helps an injured person before a doctor arrives.",
            "a": "First-aider",
            "options": [
              "First-aider",
              "Doctor",
              "Nurse",
              "Paramedic"
            ]
          },
          {
            "q": "FFree from danger or harm.",
            "a": "Safe",
            "options": [
              "Safe",
              "Unsafe",
              "Dangerous",
              "Harmful"
            ]
          },
          {
            "q": "A  smooth cream that can be rubbed on the skin to heal wounds.",
            "a": "Ointment",
            "options": [
              "Ointment",
              "Water",
              "Soap",
              "Oil"
            ]
          }
        ]
      }
    },
    {
      "id": "ch11",
      "number": 11,
      "title": "Places in Our Neighbourhood",
      "bank": {
        "mcq_standard": [
          {
            "q": "A part of a town where you live is called ___",
            "a": "Neighbourhood",
            "options": [
              "Neighbourhood",
              "Forest",
              "Park",
              "Hospital"
            ]
          },
          {
            "q": "Where do we buy medicines?",
            "a": "Chemist's shop",
            "options": [
              "Chemist's shop",
              "Stationery shop",
              "Bakery",
              "Post office"
            ]
          },
          {
            "q": "Where do we go to play and spend free time?",
            "a": "Park",
            "options": [
              "Park",
              "Market",
              "Hospital",
              "Fire station"
            ]
          },
          {
            "q": "What do we buy at a post office?",
            "a": "Stamps, postcards and stamped envelopes",
            "options": [
              "Stamps, postcards and stamped envelopes",
              "Fruits and vegetables",
              "Medicines and bandages",
              "Books and pencils"
            ]
          },
          {
            "q": "What is an ambulance?",
            "a": "A special vehicle that takes us to a hospital in case of an emergency",
            "options": [
              "A special vehicle that takes us to a hospital in case of an emergency",
              "A vehicle used to catch thieves",
              "A bus used to carry schoolchildren",
              "A vehicle used to put out fires"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "The area near our house is called our ___.",
            "a": "neighbourhood",
            "options": [
              "neighbourhood",
              "city",
              "country",
              "village"
            ]
          },
          {
            "q": "We buy fruits and vegetables from a ___.",
            "a": "green grocer",
            "options": [
              "green grocer",
              "chemist",
              "barber",
              "tailor"
            ]
          },
          {
            "q": "We dial ___ to call up the fire station.",
            "a": "101",
            "options": [
              "101",
              "100",
              "102",
              "108"
            ]
          }
        ],
        "true_false": [
          {
            "q": "A policeman protects us from all kinds of danger.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Every neighbourhood needs a marketplace.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We can only send letters through a post office.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "A smaller place than a hospital with a few doctors.",
            "a": "Dispensary",
            "options": [
              "Dispensary",
              "Post office",
              "Police station",
              "Bank"
            ]
          },
          {
            "q": "Activity done in our free time for fun.",
            "a": "Recreation",
            "options": [
              "Recreation",
              "Work",
              "Study",
              "Cleaning"
            ]
          }
        ],
        "rearrange": [
          {
            "q": "Unscramble 'LBIRRAY':",
            "a": "LIBRARY",
            "options": [
              "LIBRARY",
              "LABRARY",
              "LIBRERY",
              "LIBRARE"
            ]
          },
          {
            "q": "Unscramble 'PCRAEL':",
            "a": "PARCEL",
            "options": [
              "PARCEL",
              "PACREL",
              "PERCEL",
              "PARCLE"
            ]
          },
          {
            "q": "Unscramble 'GORECRY':",
            "a": "GROCERY",
            "options": [
              "GROCERY",
              "GRECORY",
              "GROCERI",
              "GOCERY"
            ]
          },
          {
            "q": "Unscramble 'SHOOLC':",
            "a": "SCHOOL",
            "options": [
              "SCHOOL",
              "SHCOOL",
              "SCHOL",
              "SKOOL"
            ]
          }
        ]
      }
    },
    {
      "id": "ch13",
      "number": 13,
      "title": "More about Plants (Final)",
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
              "Herbs",
              "Nutrients",
              "Spices"
            ]
          },
          {
            "q": "Small plants with soft stems.",
            "a": "Herbs",
            "options": [
              "Herbs",
              "Pulp",
              "Nutrients",
              "Climbers"
            ]
          },
          {
            "q": "Substances that are needed for healthy growth.",
            "a": "Nutrients",
            "options": [
              "Nutrients",
              "Pulp",
              "Herbs",
              "Pulses"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which one among these two is a beverage?",
            "a": "Coffee",
            "options": [
              "Water",
              "Coffee"
            ]
          },
          {
            "q": "Which one among these two is a spice?",
            "a": "Cardamon",
            "options": [
              "Moong",
              "Cardamon"
            ]
          },
          {
            "q": "Which of these holds the plant to the soil?",
            "a": "Roots",
            "options": [
              "Roots",
              "Leaves"
            ]
          },
          {
            "q": "Which of these is a climber?",
            "a": "Grapevine",
            "options": [
              "Grapevine",
              "Rose"
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
            "q": "Match: Herbs",
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
              "caterpillars"
            ]
          },
          {
            "q": "A ___ is a doctor who looks after animals.",
            "a": "vet",
            "options": [
              "vet",
              "cowherd",
              "shepherd",
              "caterpillar"
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
              "puppy",
              "forelegs"
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
              "Flesh",
              "Forelegs",
              "Cubs"
            ]
          },
          {
            "q": "The meat of an animal that can be eaten.",
            "a": "Flesh",
            "options": [
              "Flesh",
              "Caterpillar",
              "Forelegs",
              "Shelter"
            ]
          },
          {
            "q": "The two front legs of a four legged animal.",
            "a": "Forelegs",
            "options": [
              "Forelegs",
              "Flesh",
              "Caterpillar",
              "Fins"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Cows eat only",
            "a": "Plants",
            "options": [
              "Plants",
              "Flesh"
            ]
          },
          {
            "q": "A dog's baby is called",
            "a": "Puppy",
            "options": [
              "Cub",
              "Puppy"
            ]
          },
          {
            "q": "Shepherd looks after",
            "a": "Sheep",
            "options": [
              "Cow",
              "Sheep"
            ]
          },
          {
            "q": "The home of the lion is called",
            "a": "Den",
            "options": [
              "Den",
              "Nest"
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
              "Invention",
              "Deafness",
              "Travelling"
            ]
          },
          {
            "q": "A thing that somebody has made for the first time.",
            "a": "Invention",
            "options": [
              "Invention",
              "Metro",
              "Deafness",
              "Travelling"
            ]
          },
          {
            "q": "No able to hear.",
            "a": "Deafness",
            "options": [
              "Deafness",
              "Metro",
              "Invention",
              "Travelling"
            ]
          },
          {
            "q": "Going from one place to another.",
            "a": "Travelling",
            "options": [
              "Travelling",
              "Metro",
              "Invention",
              "Deafness"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which of these vehicles moves on tracks?",
            "a": "train",
            "options": [
              "plane",
              "train"
            ]
          },
          {
            "q": "Which of these is the slow means of transport?",
            "a": "Bullock Cart",
            "options": [
              "Bus",
              "Bullock Cart"
            ]
          },
          {
            "q": "Which of these is fuel?",
            "a": "Petrol",
            "options": [
              "Petrol",
              "Wood"
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
              "Information",
              "Newspaper",
              "Telephone"
            ]
          },
          {
            "q": "Facts about something.",
            "a": "Information",
            "options": [
              "Information",
              "Post",
              "Newspaper",
              "Computer"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "We send ___ to other people through post.",
            "a": "letters",
            "options": [
              "Radio",
              "letters"
            ]
          },
          {
            "q": "A ___ help us to connect and communicate through the internet.",
            "a": "Computer",
            "options": [
              "Computer",
              "Television"
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
              "sun",
              "globe",
              "Jupiter"
            ]
          },
          {
            "q": "There would be no life on earth without the ___.",
            "a": "sun",
            "options": [
              "sun",
              "moon",
              "earth",
              "Jupiter"
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
              "Puddle",
              "Planets",
              "Jupiter"
            ]
          },
          {
            "q": "A small pool of water on the ground.",
            "a": "Puddle",
            "options": [
              "Puddle",
              "Season",
              "Planets",
              "Globe"
            ]
          },
          {
            "q": "Large around objects in space that move around the Sun.",
            "a": "Planets",
            "options": [
              "Planets",
              "Season",
              "Puddle",
              "Sun"
            ]
          }
        ],
        "mcq_standard": [
          {
            "q": "Which is the largest planet of our solar system?",
            "a": "Jupiter",
            "options": [
              "Mercury",
              "Jupiter"
            ]
          },
          {
            "q": "What does the moon revolve around?",
            "a": "The earth",
            "options": [
              "The earth",
              "The Sun"
            ]
          },
          {
            "q": "___ is the group of stars that forms a shape in the sky.",
            "a": "Constellation",
            "options": [
              "Constellation",
              "Atmosphere"
            ]
          },
          {
            "q": "___ is the most colourful season.",
            "a": "Spring",
            "options": [
              "Spring",
              "Winter"
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
            "a": "NEWS PAPER",
            "options": [
              "NEWS PAPER",
              "NEWSPAPER",
              "NEWSPER",
              "NEWSPAPRE"
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
