// =============================================================================
// Moral Science — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const SUBJECT_MORAL_SCIENCE = {
  id: "moral_science",
  title: "Moral Science",
  icon: "🌟",
  theme: "#f59e0b",
  gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  sections: [
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
  }
],
  chapters: [
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
            "receive"
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
            "sorry",
            "lemon",
            "sad"
          ]
        },
        {
          "q": "The little kitten took the straws from the ___.",
          "a": "scarecrow",
          "options": [
            "scarecrow",
            "garden",
            "grandmother",
            "nest"
          ]
        },
        {
          "q": "The straw helped the kitten keep ___ the entire night.",
          "a": "warm",
          "options": [
            "warm",
            "cold",
            "water",
            "beautiful"
          ]
        },
        {
          "q": "Leila went to the house to say ___.",
          "a": "sorry",
          "options": [
            "sorry",
            "hello",
            "forgave",
            "thank you"
          ]
        },
        {
          "q": "Natasha found a baby bird under the ___ tree.",
          "a": "lemon",
          "options": [
            "lemon",
            "mango",
            "scarecrow",
            "garden"
          ]
        },
        {
          "q": "A seed needs ___ to grow.",
          "a": "water",
          "options": [
            "water",
            "milk",
            "warm",
            "sorry"
          ]
        },
        {
          "q": "She named the bird ___.",
          "a": "Cammie",
          "options": [
            "Cammie",
            "Kitty",
            "lemon",
            "scarecrow"
          ]
        },
        {
          "q": "Tina planted the seeds in the ___.",
          "a": "garden",
          "options": [
            "garden",
            "room",
            "water",
            "beautiful"
          ]
        },
        {
          "q": "Tina's ___ helped her.",
          "a": "grandmother",
          "options": [
            "grandmother",
            "friend",
            "Cammie",
            "teacher"
          ]
        },
        {
          "q": "The uncle ___ Leila.",
          "a": "forgave",
          "options": [
            "forgave",
            "scolded",
            "sorry",
            "called"
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
          "a": "[Draw Diagram]",
          "options": [
            "[Draw Diagram]"
          ]
        },
        {
          "q": "Draw a value wheel showing Natasha's values for animals in the story 'Natasha's Cammie'. Label: Kindness, Compassion, Selflessness, Freedom, Responsibility.",
          "a": "[Draw Value Wheel]",
          "options": [
            "[Draw Value Wheel]"
          ]
        }
      ]
    }
  }
]
};
