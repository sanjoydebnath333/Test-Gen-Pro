// =============================================================================
// Moral Science — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_MORAL_SCIENCE = {
 "id": "moral_science",
  "title": "Moral Science",
  "icon": "🌟",
  "theme": "#f59e0b",
  "gradient": "linear-gradient(135deg, #f59e0b, #ef4444)",
  "sections": [
    {
      "id": "mcq_standard",
      "title": "Choose the correct answer",
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "fill_blanks",
      "title": "Fill in the blanks",
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "true_false",
      "title": "Write True or False",
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "one_word",
      "title": "Answer in one word",
      "max": 8,
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
      "id": "drawing",
      "title": "Draw and Label Diagram",
      "max": 2,
      "default": 1,
      "marksPerQ": 5
    },
    {
      "id": "rearrange",
      "title": "Rearrange the letters",
      "max": 10,
      "default": 5,
      "marksPerQ": 1
    },
    {
      "id": "missing_letters",
      "title": "Complete the missing letters",
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
        "mcq_standard": [
          {
            "q": "Leila missed her ___",
            "a": "aim",
            "options": [
              "aim",
              "jump",
              "school",
              "target"
            ]
          },
          {
            "q": "The difficult word in the test was ___",
            "a": "believe",
            "options": [
              "believe",
              "school",
              "pencil",
              "friend"
            ]
          },
          {
            "q": "What was wrong with the bird's nest?",
            "a": "It was broken",
            "options": [
              "It was broken",
              "It was big",
              "It was new",
              "It was missing"
            ]
          },
          {
            "q": "The uncle was ___",
            "a": "Kind",
            "options": [
              "Kind",
              "Cruel",
              "Angry",
              "Happy"
            ]
          },
          {
            "q": "Rebecca was very good at ___",
            "a": "Spellings",
            "options": [
              "Spellings",
              "Maths",
              "Drawing",
              "Reading"
            ]
          },
          {
            "q": "What did Natasha name the bird?",
            "a": "Cammie",
            "options": [
              "Cammie",
              "Mimi",
              "Timmie",
              "Jimmy"
            ]
          },
          {
            "q": "The car glass went ___",
            "a": "Crack",
            "options": [
              "Crack",
              "Clean",
              "Shiny",
              "Smash"
            ]
          },
          {
            "q": "The story 'The Perfect Record' teaches us ___",
            "a": "Honesty is important",
            "options": [
              "Honesty is important",
              "Cheating is good",
              "Marks are everything",
              "Winning is important"
            ]
          },
          {
            "q": "Who benefits when a tree is planted?",
            "a": "The whole world",
            "options": [
              "The whole world",
              "One person",
              "Nobody",
              "Only animals"
            ]
          },
          {
            "q": "What do plants need?",
            "a": "Water and sunlight",
            "options": [
              "Water and sunlight",
              "Nothing",
              "Only water",
              "Only sunlight"
            ]
          }
        ],
        "fill_blanks": [
          {
            "q": "Once there was a green and ___ farm.",
            "a": "beautiful",
            "options": [
              "beautiful",
              "lovely",
              "peaceful",
              "shady"
            ]
          },
          {
            "q": "The little kitten took the straws from the ___.",
            "a": "scarecrow",
            "options": [
              "scarecrow",
              "haystack",
              "basket",
              "barn"
            ]
          },
          {
            "q": "The straw helped the kitten keep ___ the entire night.",
            "a": "warm",
            "options": [
              "warm",
              "cozy",
              "safe",
              "dry"
            ]
          },
          {
            "q": "Leila went to the house to say ___.",
            "a": "sorry",
            "options": [
              "sorry",
              "thank you",
              "hello",
              "goodbye"
            ]
          },
          {
            "q": "Natasha found a baby bird under the ___ tree.",
            "a": "lemon",
            "options": [
              "lemon",
              "mango",
              "apple",
              "neem"
            ]
          },
          {
            "q": "A seed needs ___ to grow.",
            "a": "water",
            "options": [
              "water",
              "milk",
              "juice",
              "oil"
            ]
          },
          {
            "q": "She named the bird ___.",
            "a": "Cammie",
            "options": [
              "Cammie",
              "Mimi",
              "Timmie",
              "Chirpy"
            ]
          },
          {
            "q": "Tina planted the seeds in the ___.",
            "a": "garden",
            "options": [
              "garden",
              "pot",
              "field",
              "backyard"
            ]
          },
          {
            "q": "Tina's ___ helped her.",
            "a": "grandmother",
            "options": [
              "grandmother",
              "mother",
              "sister",
              "aunt"
            ]
          },
          {
            "q": "The uncle ___ Leila.",
            "a": "forgave",
            "options": [
              "forgave",
              "scolded",
              "praised",
              "punished"
            ]
          }
        ],
        "true_false": [
          {
            "q": "The scarecrow was selfish.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Leila ran away from the car owner.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Natasha took care of the bird.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The kitten and the scarecrow were good friends.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Seeds do not need sunlight.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Leila was brave.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Sheela was a cheater.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Granny told Natasha to keep the bird forever.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The bird's nest was safe.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Rebecca wanted to be the best but not by cheating.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "How did Rebecca feel after cheating?",
            "a": "Guilty",
            "options": [
              "Guilty",
              "Happy",
              "Proud",
              "Angry"
            ]
          },
          {
            "q": "Who helped Tina?",
            "a": "Grandmother",
            "options": [
              "Grandmother",
              "Mother",
              "Teacher",
              "Friends"
            ]
          },
          {
            "q": "What is the theme of the story 'The Perfect Record'?",
            "a": "Honesty",
            "options": [
              "Honesty",
              "Bravery",
              "Kindness",
              "Freedom"
            ]
          },
          {
            "q": "What did Granny suggest?",
            "a": "Let bird fly",
            "options": [
              "Let bird fly",
              "Keep it",
              "Put in cage",
              "Feed it"
            ]
          },
          {
            "q": "What helps plant grow?",
            "a": "Sunlight",
            "options": [
              "Sunlight",
              "Darkness",
              "Wind",
              "Stones"
            ]
          },
          {
            "q": "What did Tina plant?",
            "a": "Seeds",
            "options": [
              "Seeds",
              "Flowers",
              "Fruits",
              "Trees"
            ]
          },
          {
            "q": "What came out of the soil?",
            "a": "Shoot",
            "options": [
              "Shoot",
              "Flower",
              "Fruit",
              "Branches"
            ]
          },
          {
            "q": "Where did she plant the seed?",
            "a": "Garden",
            "options": [
              "Garden",
              "Pot",
              "House",
              "School"
            ]
          }
        ],
        "match_following": [
          {
            "q": "Uncle",
            "a": "forgave Leila"
          },
          {
            "q": "Holi",
            "a": "festival"
          },
          {
            "q": "Granny",
            "a": "suggested to let bird fly"
          },
          {
            "q": "Natasha",
            "a": "took care of the bird"
          },
          {
            "q": "Sunlight",
            "a": "energy"
          },
          {
            "q": "Air",
            "a": "breathing"
          },
          {
            "q": "Leila",
            "a": "said sorry"
          },
          {
            "q": "Cammie",
            "a": "baby bird"
          },
          {
            "q": "Seed",
            "a": "plant"
          },
          {
            "q": "Window",
            "a": "let the bird fly"
          },
          {
            "q": "Water",
            "a": "growth"
          },
          {
            "q": "Soil",
            "a": "nutrients"
          }
        ],
        "drawing": [
          {
            "q": "Draw a seed growing into a plant. Label: seed, water, sunlight, plant.",
            "a": "[Draw Diagram]"
          },
          {
            "q": "Draw a value wheel showing Natasha's values for animals in the story 'Natasha's Cammie'. Label: Kindness, Compassion, Selflessness, Freedom, Responsibility.",
            "a": "[Draw Value Wheel]"
          }
        ],
        "rearrange": [],
        "missing_letters": []
      }
    },
    {
      "id": "chapter_6",
      "number": 6,
      "title": "The King and the Sage",
      "bank": {
        "mcq_standard": [],
        "fill_blanks": [
          {
            "q": "King Awadhi was known for his ___.",
            "a": "humility",
            "options": [
              "humility",
              "kindness",
              "courage",
              "patience"
            ]
          },
          {
            "q": "The sage had to wait a ___ time to meet the King.",
            "a": "long",
            "options": [
              "long",
              "short",
              "small",
              "happy"
            ]
          },
          {
            "q": "The sage took off his ___ and bowed to the King.",
            "a": "turban",
            "options": [
              "turban",
              "shoes",
              "coat",
              "bag"
            ]
          },
          {
            "q": "The King removed his ___ to return the sage's respect.",
            "a": "crown",
            "options": [
              "crown",
              "shoes",
              "belt",
              "bag"
            ]
          },
          {
            "q": "The sage was humble and ___.",
            "a": "modest",
            "options": [
              "modest",
              "angry",
              "noisy",
              "selfish"
            ]
          },
          {
            "q": "The King believed it was his ___ to return respect.",
            "a": "responsibility",
            "options": [
              "responsibility",
              "duty",
              "honour",
              "habit"
            ]
          },
          {
            "q": "The ___ asked the King why he bowed to the sage.",
            "a": "Chief Minister",
            "options": [
              "Chief Minister",
              "sage",
              "guard",
              "farmer"
            ]
          },
          {
            "q": "Humility was the sage's best ___.",
            "a": "quality",
            "options": [
              "quality",
              "habit",
              "virtue",
              "lesson"
            ]
          }
        ],
        "true_false": [],
        "one_word": [
          {
            "q": "What was the King famous for?",
            "a": "Humility",
            "options": [
              "Humility",
              "Kindness",
              "Patience",
              "Courage"
            ]
          },
          {
            "q": "Who came to meet the King?",
            "a": "Sage",
            "options": [
              "Sage",
              "Minister",
              "Soldier",
              "Farmer"
            ]
          },
          {
            "q": "What did the sage remove before bowing?",
            "a": "Turban",
            "options": [
              "Turban",
              "Shoes",
              "Coat",
              "Bag"
            ]
          },
          {
            "q": "What did the King remove before bowing?",
            "a": "Crown",
            "options": [
              "Crown",
              "Shoes",
              "Belt",
              "Hat"
            ]
          },
          {
            "q": "What should we show to everyone?",
            "a": "Respect",
            "options": [
              "Respect",
              "Anger",
              "Fear",
              "Pride"
            ]
          },
          {
            "q": "What kind of man was the sage?",
            "a": "Humble",
            "options": [
              "Humble",
              "Proud",
              "Angry",
              "Lazy"
            ]
          },
          {
            "q": "What value does this lesson teach us?",
            "a": "Humility",
            "options": [
              "Humility",
              "Sharing",
              "Courage",
              "Honesty"
            ]
          }
        ],
        "match_following": [],
        "drawing": [],
        "rearrange": [],
        "missing_letters": []
      }
    },
    {
      "id": "chapter_7",
      "number": 7,
      "title": "The Melodious Cuckoo",
      "bank": {
        "mcq_standard": [],
        "fill_blanks": [
          {
            "q": "Sally was always ___ for school.",
            "a": "late",
            "options": [
              "late",
              "early",
              "happy",
              "ready"
            ]
          },
          {
            "q": "Sally often missed the school ___.",
            "a": "bus",
            "options": [
              "bus",
              "train",
              "lunch",
              "class"
            ]
          },
          {
            "q": "A melodious ___ woke Sally up every morning.",
            "a": "bird",
            "options": [
              "bird",
              "cat",
              "dog",
              "cow"
            ]
          },
          {
            "q": "Sally thanked the bird for ___ her up.",
            "a": "waking",
            "options": [
              "waking",
              "calling",
              "finding",
              "helping"
            ]
          },
          {
            "q": "Sally was never ___ again.",
            "a": "late",
            "options": [
              "late",
              "early",
              "tired",
              "noisy"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Sally always woke up immediately when her mother called her.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Sally often forgot to carry important things to school.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The bird sang outside Sally's window.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Sally enjoyed reaching school on time.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Sally continued to make excuses every day.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "Who was always late?",
            "a": "Sally",
            "options": [
              "Sally",
              "Amu",
              "Tina",
              "Leila"
            ]
          },
          {
            "q": "What did Sally often miss?",
            "a": "Bus",
            "options": [
              "Bus",
              "Train",
              "Van",
              "Class"
            ]
          },
          {
            "q": "Who woke Sally up with a melodious song?",
            "a": "Bird",
            "options": [
              "Bird",
              "Mother",
              "Teacher",
              "Sister"
            ]
          },
          {
            "q": "What did Sally forget to carry?",
            "a": "Pencil case",
            "options": [
              "Pencil case",
              "Lunch box",
              "Water bottle",
              "School bag"
            ]
          },
          {
            "q": "What did Sally learn to be?",
            "a": "Punctual",
            "options": [
              "Punctual",
              "Careless",
              "Late",
              "Noisy"
            ]
          }
        ],
        "match_following": [
          {
            "q": "Sally",
            "a": "Always late"
          },
          {
            "q": "Bird",
            "a": "Woke Sally up"
          },
          {
            "q": "School bus",
            "a": "Missed by Sally"
          },
          {
            "q": "Melodious",
            "a": "Sweet song"
          },
          {
            "q": "School",
            "a": "Reached on time"
          }
        ],
        "drawing": [],
        "rearrange": [],
        "missing_letters": []
      }
    },
    {
      "id": "chapter_8",
      "number": 8,
      "title": "Amu Helps Ram",
      "bank": {
        "mcq_standard": [],
        "fill_blanks": [
          {
            "q": "Ram was studying ___ in his class.",
            "a": "English",
            "options": [
              "English",
              "Maths",
              "Music",
              "Drawing"
            ]
          },
          {
            "q": "Ram was afraid that his classmates would ___ fun of him.",
            "a": "make",
            "options": [
              "make",
              "take",
              "give",
              "keep"
            ]
          },
          {
            "q": "Amu was carrying her ___ bottle.",
            "a": "water",
            "options": [
              "water",
              "milk",
              "juice",
              "lunch"
            ]
          },
          {
            "q": "The teacher helped Ram ___ his clothes.",
            "a": "change",
            "options": [
              "change",
              "wash",
              "fold",
              "buy"
            ]
          },
          {
            "q": "Ram thanked ___ at the end of the day.",
            "a": "Amu",
            "options": [
              "Amu",
              "Sally",
              "Tina",
              "Liam"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Ram was happy after he wet his pants.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Amu spilled water on Ram.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "The teacher scolded Ram in front of the class.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Ram thanked Amu at the end of the day.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "We should help people when they are in trouble.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [],
        "match_following": [
          {
            "q": "Ram",
            "a": "Wet his pants"
          },
          {
            "q": "Amu",
            "a": "Helped Ram"
          },
          {
            "q": "Teacher",
            "a": "Changed Ram's clothes"
          },
          {
            "q": "Friends",
            "a": "Cleaned Ram's desk"
          },
          {
            "q": "God",
            "a": "Ram prayed to Him"
          }
        ],
        "drawing": [],
        "rearrange": [
          {
            "q": "LGESIHN",
            "a": "ENGLISH",
            "options": [
              "ENGLISH",
              "ENGLSIH",
              "ENGILSH",
              "ENGLESH"
            ]
          },
          {
            "q": "TLEBOT",
            "a": "BOTTLE",
            "options": [
              "BOTTLE",
              "BOTTEL",
              "BOTLE",
              "BOLTTE"
            ]
          },
          {
            "q": "RETAW",
            "a": "WATER",
            "options": [
              "WATER",
              "WATRE",
              "WATOR",
              "WAETR"
            ]
          },
          {
            "q": "RYERAP",
            "a": "PRAYER",
            "options": [
              "PRAYER",
              "PRAYRE",
              "PRAYAR",
              "PRAEYR"
            ]
          },
          {
            "q": "NEIFRD",
            "a": "FRIEND",
            "options": [
              "FRIEND",
              "FREIND",
              "FRINED",
              "FIREND"
            ]
          }
        ],
        "missing_letters": [
          {
            "q": "E_GL_SH",
            "a": "ENGLISH",
            "options": [
              "ENGLISH",
              "ENGLSIH",
              "ENGILSH",
              "ENGLESH"
            ]
          },
          {
            "q": "W_T_R",
            "a": "WATER",
            "options": [
              "WATER",
              "WATRE",
              "WATOR",
              "WTER"
            ]
          },
          {
            "q": "FRI_ND",
            "a": "FRIEND",
            "options": [
              "FRIEND",
              "FREIND",
              "FRINED",
              "FIREND"
            ]
          },
          {
            "q": "CL_THE_",
            "a": "CLOTHES",
            "options": [
              "CLOTHES",
              "CLOTHS",
              "CLOTHIS",
              "CLOTHSE"
            ]
          },
          {
            "q": "H_L_",
            "a": "HELP",
            "options": [
              "HELP",
              "HOLD",
              "HOLE",
              "HELD"
            ]
          }
        ]
      }
    },
    {
      "id": "chapter_9",
      "number": 9,
      "title": "Sam and Liam",
      "bank": {
        "mcq_standard": [],
        "fill_blanks": [
          {
            "q": "Sam and Liam were always ___ with each other.",
            "a": "fighting",
            "options": [
              "fighting",
              "playing",
              "singing",
              "reading"
            ]
          },
          {
            "q": "Their fighting made everyone in the family feel ___.",
            "a": "upset",
            "options": [
              "upset",
              "happy",
              "proud",
              "sleepy"
            ]
          },
          {
            "q": "Their father asked them to have some ___ with each other.",
            "a": "patience",
            "options": [
              "patience",
              "anger",
              "fear",
              "noise"
            ]
          },
          {
            "q": "Sam and Liam said ___ to each other.",
            "a": "sorry",
            "options": [
              "sorry",
              "hello",
              "goodbye",
              "please"
            ]
          },
          {
            "q": "They decided to ___ the bat and ball and take turns.",
            "a": "share",
            "options": [
              "share",
              "hide",
              "break",
              "lose"
            ]
          }
        ],
        "true_false": [
          {
            "q": "Sam and Liam always agreed with each other.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Fighting is not a good way to solve problems.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Sam and Liam decided to share the bat and ball.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "What did Sam want to borrow from Liam?",
            "a": "Bat",
            "options": [
              "Bat",
              "Ball",
              "Book",
              "Bag"
            ]
          },
          {
            "q": "What did Sam and Liam lose when they started fighting?",
            "a": "Temper",
            "options": [
              "Temper",
              "Patience",
              "Sleep",
              "Smile"
            ]
          },
          {
            "q": "What should we have with others when solving problems?",
            "a": "Patience",
            "options": [
              "Patience",
              "Anger",
              "Fear",
              "Noise"
            ]
          }
        ],
        "match_following": [],
        "drawing": [],
        "rearrange": [],
        "missing_letters": []
      }
    },
    {
      "id": "chapter_10",
      "number": 10,
      "title": "Teamwork",
      "bank": {
        "mcq_standard": [
          {
            "q": "Why did Lord Rama need the help of others?",
            "a": "To defeat Ravana and rescue Sita",
            "options": [
              "To defeat Ravana and rescue Sita",
              "To play with them",
              "To build a palace",
              "To help build a school"
            ]
          },
          {
            "q": "Who helped Lord Rama build the bridge to Lanka?",
            "a": "The vanara sena",
            "options": [
              "The vanara sena",
              "The Sea God",
              "Only Lakshmana",
              "The villagers"
            ]
          },
          {
            "q": "What did Lord Rama ask his army to do?",
            "a": "Work as a team",
            "options": [
              "Work as a team",
              "Work alone",
              "Stop working",
              "Take a rest"
            ]
          },
          {
            "q": "How long did it take the vanara sena to build the bridge?",
            "a": "Five days",
            "options": [
              "Five days",
              "Five weeks",
              "Ten days",
              "One day"
            ]
          },
          {
            "q": "What helped Lord Rama defeat Ravana?",
            "a": "His entire team",
            "options": [
              "His entire team",
              "Working alone",
              "The bridge only",
              "His own strength"
            ]
          }
        ],
        "fill_blanks": [],
        "true_false": [],
        "one_word": [],
        "match_following": [
          {
            "q": "Lord Rama",
            "a": "Defeated Ravana"
          },
          {
            "q": "Hanuman",
            "a": "Helped Lord Rama as his devotee"
          },
          {
            "q": "Vanara sena",
            "a": "Worked together to build the bridge"
          },
          {
            "q": "Sita",
            "a": "Was taken away to Lanka"
          }
        ],
        "drawing": [],
        "rearrange": [],
        "missing_letters": []
      }
    },
    {
      "id": "chapter_11",
      "number": 11,
      "title": "Neil and Vaibhavi at the Beach",
      "bank": {
        "mcq_standard": [
          {
            "q": "Chinmay was a ________.",
            "a": "biologist",
            "options": [
              "biologist",
              "principal",
              "doctor",
              "teacher"
            ]
          },
          {
            "q": "Why was Neil worried about the rubbish on the beach?",
            "a": "It could enter the sea and harm animals",
            "options": [
              "It could enter the sea and harm animals",
              "It would make the beach crowded",
              "It would stop people from swimming",
              "It could block the road"
            ]
          },
          {
            "q": "What did Chinmay and his children use to clean the beach?",
            "a": "Big shopping bags and hand gloves",
            "options": [
              "Big shopping bags and hand gloves",
              "Brooms and buckets",
              "Boxes and bottles",
              "Rakes and shovels"
            ]
          },
          {
            "q": "What did Neil notice when the family went for a picnic?",
            "a": "The beach was dirty.",
            "options": [
              "The beach was dirty.",
              "The beach was clean.",
              "The beach was closed.",
              "The beach was crowded."
            ]
          },
          {
            "q": "Who gave the idea to clean the beach together?",
            "a": "Vaibhavi",
            "options": [
              "Neil",
              "Chinmay",
              "Vaibhavi",
              "The teacher"
            ]
          },
          {
            "q": "What did Chinmay use during the seminar at the school?",
            "a": "Pictures and videos",
            "options": [
              "Pictures and videos",
              "Toys and games",
              "Books and maps",
              "Charts and posters"
            ]
          },
          {
            "q": "What did the municipal department place at the beach?",
            "a": "Dustbins",
            "options": [
              "Dustbins",
              "Benches",
              "Umbrellas",
              "Trees"
            ]
          },
          {
            "q": "Why is it important to keep beaches clean?",
            "a": "To protect marine animals",
            "options": [
              "To protect marine animals",
              "To make more rubbish",
              "To stop people from visiting",
              "To keep cars on the beach"
            ]
          }
        ],
        "fill_blanks": [],
        "true_false": [
          {
            "q": "Neil felt sad when he saw rubbish on the beach.",
            "a": "True",
            "options": [
              "True",
              "False"
            ]
          },
          {
            "q": "Vaibhavi wanted to leave the beach as it was.",
            "a": "False",
            "options": [
              "True",
              "False"
            ]
          }
        ],
        "one_word": [
          {
            "q": "Who was Chinmay's son?",
            "a": "Neil",
            "options": [
              "Neil",
              "Sam",
              "Liam",
              "Ram"
            ]
          },
          {
            "q": "What did the municipal department place at regular intervals at the beach?",
            "a": "Dustbins",
            "options": [
              "Dustbins",
              "Benches",
              "Buses",
              "Trees"
            ]
          }
        ],
        "match_following": [],
        "drawing": [
          {
            "q": "Draw and colour a picture showing children working together as a team.",
            "a": "[Draw Diagram]"
          },
          {
            "q": "Draw and colour a picture showing how we can keep our surroundings clean.",
            "a": "[Draw Diagram]"
          }
        ],
        "rearrange": [],
        "missing_letters": []
      }
    }
  ]
};
