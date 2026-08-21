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
        {"q": "We should not push others on the stairs.",
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
        },

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
        {"q": "FFree from danger or harm.",
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
  }
]
};
