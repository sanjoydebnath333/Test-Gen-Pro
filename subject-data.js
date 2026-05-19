// Define how specific categories map to icons for the Kid's setup UI
const CATEGORY_ICONS = {
    'one_word': { icon: '💬', title: 'One Word', desc: 'Quick Ans' },
    'name_following': { icon: '🏷️', title: 'Name It', desc: 'Identify' },
    'fill_blanks': { icon: '✍️', title: 'Fill Blanks', desc: 'Complete it' },
    'true_false': { icon: '✔️', title: 'True/False', desc: 'Fact Check' },
    'match_following': { icon: '🔗', title: 'Match Pairs', desc: 'Connect' },
    'rearrange': { icon: '🧩', title: 'Rearrange', desc: 'Unscramble' },
    'missing_letters': { icon: '🔤', title: 'Missing Ltrs', desc: 'Spell it' },
    'mcq_standard': { icon: '🔘', title: 'MCQ', desc: 'Choose 1' }
};

const SUBJECT_DATA = {
    "gk": {
        id: "gk",
        title: "General Knowledge",
        icon: "🌍",
        theme: "#10b981",
        gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
        sections: [
            { id: 'one_word', title: 'Answer in one word', max: 14, default: 5, marksPerQ: 1 },
            { id: 'name_following', title: 'Name the following', max: 8, default: 5, marksPerQ: 1 },
            { id: 'fill_blanks', title: 'Fill in the blanks', max: 14, default: 5, marksPerQ: 1 },
            { id: 'true_false', title: 'Write True or False', max: 13, default: 5, marksPerQ: 1 },
            { id: 'match_following', title: 'Match the following', max: 8, default: 5, marksPerQ: 1 },
            { id: 'rearrange', title: 'Rearrange the jumbled words', max: 8, default: 5, marksPerQ: 1 },
            { id: 'missing_letters', title: 'Missing letters', max: 8, default: 5, marksPerQ: 1 }
        ],
        bank: { one_word: [
                { q: "What is the milky fluid of the rubber tree called?", a: "Latex", options: ["Latex", "Resin", "Sap", "Syrup"] },
                { q: "Which bird lays the largest eggs?", a: "Ostrich", options: ["Ostrich", "Emu", "Penguin", "Eagle"] },
                { q: "What do plants give out during the day?", a: "Oxygen", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Water"] },
                { q: "What is the national animal of India?", a: "Tiger", options: ["Tiger", "Lion", "Elephant", "Leopard"] },
                { q: "Which insects are also called 'white ants'?", a: "Termites", options: ["Termites", "Ants", "Beetles", "Cockroaches"] },
                { q: "Which is the national bird of New Zealand?", a: "Kiwi", options: ["Kiwi", "Parrot", "Peacock", "Swan"] },
                { q: "In which season we sit around a 'bonfire'?", a: "Winter", options: ["Winter", "Summer", "Monsoon", "Spring"] },
                { q: "Who makes breads and cakes?", a: "Baker", options: ["Baker", "Chef", "Butcher", "Farmer"] },
                { q: "What is a the another name for a 'bucket'?", a: "Pail", options: ["Pail", "Mug", "Bowl", "Jug"] },
                { q: "What is the name for a 'baby cow'?", a: "Calf", options: ["Calf", "Puppy", "Kitten", "Foal"] },
                { q: "Mohiniattam is the dance form of which state?", a: "Kerala", options: ["Kerala", "Tamil Nadu", "Odisha", "Karnataka"] },
                { q: "What is a song sung by two singers called?", a: "Duet", options: ["Duet", "Solo", "Chorus", "Band"] },
                { q: "Which system helps blind people read?", a: "Braille", options: ["Braille", "Sign Language", "Morse Code", "Script"] },
                { q: "What is the classical dance form of Uttar Pradesh called?", a: "Kathak", options: ["Kathak", "Odissi", "Kuchipudi", "Bihu"] }
            ],
            name_following: [
                { q: "The bird that can fly backward.", a: "Humming Bird", options: ["Humming Bird", "Sparrow", "Woodpecker", "Pigeon"] },
                { q: "The world's largest spider.", a: "Tarantula", options: ["Tarantula", "Black Widow", "Ant", "Beetle"] },
                { q: "The tallest animal in the world.", a: "Giraffe", options: ["Giraffe", "Elephant", "Camel", "Zebra"] },
                { q: "The fish that has both its eyes on one side of its head.", a: "Flat fish", options: ["Flat fish", "Shark", "Whale", "Goldfish"] },
                { q: "This is a place where a farmer lives.", a: "Farm house", options: ["Farm house", "Apartment", "Igloo", "Tent"] },
                { q: "Name the person who invented the refrigerator.", a: "James Harrison", options: ["James Harrison", "Thomas Edison", "Albert Einstein", "Isaac Newton"] },
                { q: "Name the season when a number of flowers bloom.", a: "Spring", options: ["Spring", "Winter", "Summer", "Monsoon"] },
                { q: "Name the person who sell flowers.", a: "Florist", options: ["Florist", "Grocer", "Chemist", "Barber"] }
            ],
            fill_blanks: [
                { q: "Some animals live with us in our homes as our ___.", a: "pets" },
                { q: "Water falls on land as rain and ___.", a: "snow" },
                { q: "Sloth is the world's slowest ___.", a: "mammal" },
                { q: "Asian elephants are found in thirteen countries of ___.", a: "Asia" },
                { q: "Leaves prepare ___ for the plants.", a: "food" },
                { q: "Trees, herbs and shrubs are ___.", a: "plants" },
                { q: "Salad is a healthy dish made of many raw ___.", a: "vegetables" },
                { q: "Spices have been traditionally used to cure various ___.", a: "illnesses" },
                { q: "A passage built across a river is called ___.", a: "bridge" },
                { q: "A group of dogs are called a ___.", a: "pack" },
                { q: "Helen Keller was an American author who was not able to see, hear or ___.", a: "speak" },
                { q: "Dr. Stephen Hawking was a famous ___.", a: "scientist" },
                { q: "Elsa is the character of the animated film Frozen ___.", a: "II" },
                { q: "The words of a song are called ___.", a: "lyrics" }
            ],
            true_false: [
                { q: "Dove is considered the symbol of peace.", a: "True", options: ["True", "False"] },
                { q: "Coconut fibre is called coir.", a: "True", options: ["True", "False"] },
                { q: "Bengal Tigers are found in Antarctica.", a: "False", options: ["True", "False"] },
                { q: "Electric rays are long in shape.", a: "False", options: ["True", "False"] },
                { q: "In summer we eat fruits like mangoes and watermelons.", a: "True", options: ["True", "False"] },
                { q: "Flyover is a road that goes over another road.", a: "True", options: ["True", "False"] },
                { q: "A pilot looks after sick people.", a: "False", options: ["True", "False"] },
                { q: "Badminton is a part of the Olympic games.", a: "True", options: ["True", "False"] },
                { q: "Virat Kohli is a tennis player.", a: "False", options: ["True", "False"] },
                { q: "Mary Kom is a boxer.", a: "True", options: ["True", "False"] },
                { q: "A butterfly has three wings.", a: "False", options: ["True", "False"] },
                { q: "Football World Cup take place every two years.", a: "False", options: ["True", "False"] },
                { q: "In cricket 50 runs make a half-century.", a: "True", options: ["True", "False"] }
            ],
            match_following: [
                { q: "Tamil Nadu", a: "Bharatnatyam" },
                { q: "Odisha", a: "Odissi" },
                { q: "Andhra Pradesh", a: "Kuchipudi" },
                { q: "String instrument", a: "Guitar" },
                { q: "Nemo", a: "Finding Dory" },
                { q: "Buzz Lightyear", a: "Toy Story" },
                { q: "Ranbir Kapoor", a: "Indian actor" },
                { q: "Sudha Chandran", a: "Dancer with artificial leg" }
            ],
            rearrange: [
                { q: "Unscramble 'HCOEKY':", a: "HOCKEY", options: ["HOCKEY", "HOKCEY", "HOCKEE", "HOOKEY"] },
                { q: "Unscramble 'TNNEIS':", a: "TENNIS", options: ["TENNIS", "TENNSI", "TINNIS", "TENINS"] },
                { q: "Unscramble 'RCAKET':", a: "RACKET", options: ["RACKET", "ROCKET", "RACKIT", "RACCET"] },
                { q: "Unscramble 'OYLMIPCS':", a: "OLYMPICS", options: ["OLYMPICS", "OLYMIPCS", "OLYMPIAS", "OLYMPCES"] },
                { q: "Unscramble 'WESRTLING':", a: "WRESTLING", options: ["WRESTLING", "WESTRLING", "WRISTLING", "WRESTLENG"] },
                { q: "Unscramble 'BSAEBALL':", a: "BASEBALL", options: ["BASEBALL", "BESEBALL", "BASSBALL", "BASEBELL"] },
                { q: "Unscramble 'SQASHU':", a: "SQUASH", options: ["SQUASH", "SQUOSH", "SQUISH", "SQAUSH"] },
                { q: "Unscramble 'AHTIECLTS':", a: "ATHLETICS", options: ["ATHLETICS", "ATHELTICS", "ATHLITICS", "ATHLETES"] }
            ],
            missing_letters: [
                { q: "Complete the word: D _ N T _ S T", a: "DENTIST", options: ["DENTIST", "DONTIST", "DINTIST", "DENTEST"] },
                { q: "Complete the word: S H _ V _ L", a: "SHOVEL", options: ["SHOVEL", "SHAVEL", "SHIVEL", "SHUVEL"] },
                { q: "Complete the word: T R _ C T _ R", a: "TRACTOR", options: ["TRACTOR", "TRECTOR", "TRICTAR", "TROCTOR"] },
                { q: "Complete the word: T _ A S T _ R", a: "TOASTER", options: ["TOASTER", "TEASTER", "TAOSTER", "TOOSTER"] },
                { q: "Complete the word: C U T L _ R _", a: "CUTLERY", options: ["CUTLERY", "CATLERY", "COTLERY", "CUTLARY"] },
                { q: "Complete the word: S T _ A R T", a: "STUART", options: ["STUART", "STAART", "STIART", "STOART"] },
                { q: "Complete the word: M _ A N A", a: "MOANA", options: ["MOANA", "MIANA", "MEANA", "MUANA"] },
                { q: "Complete the word: P _ A N _", a: "PIANO", options: ["PIANO", "PEANO", "PAINO", "POANO"] }
            ]}
    },
    "computer": {
        id: "computer",
        title: "Computer Science",
        icon: "💻",
        theme: "#8b5cf6", // Purple theme
        gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        sections: [
            { id: 'mcq_standard', title: 'Multiple Choice Questions', max: 10, default: 5, marksPerQ: 1 },
            { id: 'true_false', title: 'True or False', max: 10, default: 5, marksPerQ: 1 },
            { id: 'fill_blanks', title: 'Fill in the blanks', max: 5, default: 5, marksPerQ: 1 },
            { id: 'match_following', title: 'Match the shortcuts', max: 8, default: 4, marksPerQ: 1 }
        ],
        bank: {
            mcq_standard: [
                { q: "What is the brain of the computer?", a: "CPU", options: ["CPU", "Monitor", "Mouse", "Keyboard"] },
                { q: "Which of these is an input device?", a: "Keyboard", options: ["Keyboard", "Printer", "Speaker", "Monitor"] },
                { q: "What does PC stand for?", a: "Personal Computer", options: ["Personal Computer", "Private Computer", "Primary Computer", "Printed Circuit"] },
                { q: "Which part of the computer looks like a TV?", a: "Monitor", options: ["Monitor", "CPU", "Mouse", "Speaker"] }
            ],
            true_false: [
                { q: "A mouse is used to type letters.", a: "False", options: ["True", "False"] },
                { q: "You can listen to music using speakers.", a: "True", options: ["True", "False"] },
                { q: "A printer is an output device.", a: "True", options: ["True", "False"] },
                { q: "We can touch the software.", a: "False", options: ["True", "False"] }
            ],
            fill_blanks: [
                { q: "We use a ___ to click items on the screen.", a: "mouse" },
                { q: "The physical parts of a computer are called ___.", a: "hardware" },
                { q: "A ___ helps us type numbers and letters.", a: "keyboard" }
            ],
            match_following: [
                { q: "Ctrl + C", a: "Copy" }, { q: "Ctrl + V", a: "Paste" },
                { q: "Ctrl + S", a: "Save" }, { q: "Ctrl + Z", a: "Undo" },
                { q: "Ctrl + P", a: "Print" }, { q: "Ctrl + X", a: "Cut" }
            ]
        }
    },
    "moral_science": {
    id: "moral_science",
    title: "Moral Science",
    icon: "🌟",
    theme: "#f59e0b", 
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    sections: [
        { id: 'mcq_standard', title: 'Choose the correct answer', max: 10, default: 5, marksPerQ: 1 },
        { id: 'fill_blanks', title: 'Fill in the blanks', max: 10, default: 5, marksPerQ: 1 },
        { id: 'true_false', title: 'Write True or False', max: 10, default: 5, marksPerQ: 1 },
        { id: 'one_word', title: 'Answer in one word', max: 8, default: 5, marksPerQ: 1 },
        { id: 'match_following', title: 'Match the following', max: 12, default: 5, marksPerQ: 1 },
        { id: 'drawing', title: 'Draw and Label Diagram', max: 2, default: 1, marksPerQ: 5 }
    ],
    bank: {
        mcq_standard: [
            { q: "Leila missed her ___", a: "aim", options: ["aim", "jump", "school", "target"] },
            { q: "The difficult word in the test was ___", a: "believe", options: ["believe", "school", "pencil", "receive"] },
            { q: "What was wrong with the bird's nest?", a: "It was broken", options: ["It was broken", "It was big", "It was new", "It was missing"] },
            { q: "The uncle was ___", a: "Kind", options: ["Kind", "Cruel", "Angry", "Happy"] },
            { q: "Rebecca was very good at ___", a: "Spellings", options: ["Spellings", "Maths", "Drawing", "Reading"] },
            { q: "What did Natasha name the bird?", a: "Cammie", options: ["Cammie", "Mimi", "Timmie", "Jimmy"] },
            { q: "The car glass went ___", a: "Crack", options: ["Crack", "Clean", "Shiny", "Smash"] },
            { q: "The story 'The Perfect Record' teaches us ___", a: "Honesty is important", options: ["Honesty is important", "Cheating is good", "Marks are everything", "Winning is important"] },
            { q: "Who benefits when a tree is planted?", a: "The whole world", options: ["The whole world", "One person", "Nobody", "Only animals"] },
            { q: "What do plants need?", a: "Water and sunlight", options: ["Water and sunlight", "Nothing", "Only water", "Only sunlight"] }
        ],
        fill_blanks: [
            { q: "Once there was a green and ___ farm.", a: "beautiful" },
            { q: "The little kitten took the straws from the ___.", a: "scarecrow" },
            { q: "The straw helped the kitten keep ___ the entire night.", a: "warm" },
            { q: "Leila went to the house to say ___.", a: "sorry" },
            { q: "Natasha found a baby bird under the ___ tree.", a: "lemon" },
            { q: "A seed needs ___ to grow.", a: "water" },
            { q: "She named the bird ___.", a: "Cammie" },
            { q: "Tina planted the seeds in the ___.", a: "garden" },
            { q: "Tina's ___ helped her.", a: "grandmother" },
            { q: "The uncle ___ Leila.", a: "forgave" }
        ],
        true_false: [
            { q: "The scarecrow was selfish.", a: "False", options: ["True", "False"] },
            { q: "Leila ran away from the car owner.", a: "False", options: ["True", "False"] },
            { q: "Natasha took care of the bird.", a: "True", options: ["True", "False"] },
            { q: "The kitten and the scarecrow were good friends.", a: "True", options: ["True", "False"] },
            { q: "Seeds do not need sunlight.", a: "False", options: ["True", "False"] },
            { q: "Leila was brave.", a: "True", options: ["True", "False"] },
            { q: "Sheela was a cheater.", a: "False", options: ["True", "False"] },
            { q: "Granny told Natasha to keep the bird forever.", a: "False", options: ["True", "False"] },
            { q: "The bird's nest was safe.", a: "False", options: ["True", "False"] },
            { q: "Rebecca wanted to be the best but not by cheating.", a: "True", options: ["True", "False"] }
        ],
        one_word: [
            { q: "How did Rebecca feel after cheating?", a: "Guilty", options: ["Guilty", "Happy", "Proud", "Angry"] },
            { q: "Who helped Tina?", a: "Grandmother", options: ["Grandmother", "Mother", "Teacher", "Friends"] },
            { q: "What is the theme of the story 'The Perfect Record'?", a: "Honesty", options: ["Honesty", "Bravery", "Kindness", "Freedom"] },
            { q: "What did Granny suggest?", a: "Let bird fly", options: ["Let bird fly", "Keep it", "Put in cage", "Feed it"] },
            { q: "What helps plant grow?", a: "Sunlight", options: ["Sunlight", "Darkness", "Wind", "Stones"] },
            { q: "What did Tina plant?", a: "Seeds", options: ["Seeds", "Flowers", "Fruits", "Trees"] },
            { q: "What came out of the soil?", a: "Shoot", options: ["Shoot", "Flower", "Fruit", "Branches"] },
            { q: "Where did she plant the seed?", a: "Garden", options: ["Garden", "Pot", "House", "School"] }
        ],
        match_following: [
            { q: "Uncle", a: "forgave Leila" },
            { q: "Holi", a: "festival" },
            { q: "Granny", a: "suggested to let bird fly" },
            { q: "Natasha", a: "took care of the bird" },
            { q: "Sunlight", a: "energy" },
            { q: "Air", a: "breathing" },
            { q: "Leila", a: "said sorry" },
            { q: "Cammie", a: "baby bird" },
            { q: "Seed", a: "plant" },
            { q: "Window", a: "let the bird fly" },
            { q: "Water", a: "growth" },
            { q: "Soil", a: "nutrients" }
        ],
        drawing: [
            { q: "Draw a seed growing into a plant. Label: seed, water, sunlight, plant.", a: "[Draw Diagram]", options: ["[Draw Diagram]"] },
            { q: "Draw a value wheel showing Natasha's values for animals in the story 'Natasha's Cammie'. Label: Kindness, Compassion, Selflessness, Freedom, Responsibility.", a: "[Draw Value Wheel]", options: ["[Draw Value Wheel]"] }
        ]
    }
},
"environmental_studies": {
    id: "environmental_studies",
    title: "Environmental Studies",
    icon: "🌿",
    theme: "#16a34a", // Nature green theme
    gradient: "linear-gradient(135deg, #16a34a, #0ea5e9)",
    sections: [
        { id: 'mcq_standard', title: 'Choose the correct answer', max: 20, default: 10, marksPerQ: 1 },
        { id: 'fill_blanks', title: 'Fill in the blanks', max: 12, default: 5, marksPerQ: 1 },
        { id: 'true_false', title: 'Write True or False', max: 10, default: 5, marksPerQ: 1 },
        { id: 'one_word', title: 'Name the following', max: 10, default: 5, marksPerQ: 1 },
        { id: 'match_following', title: 'Match the following', max: 10, default: 5, marksPerQ: 1 },
        { id: 'missing_letters', title: 'Missing Letters', max: 11, default: 5, marksPerQ: 1 },
        { id: 'rearrange', title: 'Re-arrange the words', max: 8, default: 5, marksPerQ: 1 },
        { id: 'drawing', title: 'Diagram', max: 2, default: 1, marksPerQ: 5 }
    ],
    bank: {
        mcq_standard: [
            { q: "We should keep our surroundings ___", a: "clean and green", options: ["clean and green", "dirty and messy", "noisy and crowded", "polluted and dry"] },
            { q: "We should use bags made of ___", a: "cloth and paper", options: ["cloth and paper", "plastic", "glass", "iron"] },
            { q: "Dustbins should be ___", a: "covered", options: ["covered", "open", "broken", "dirty"] },
            { q: "We get cotton from ___", a: "cotton plants", options: ["cotton plants", "sheep", "cows", "silk worms"] },
            { q: "We get pulses from ___", a: "plants", options: ["plants", "animals", "water", "air"] },
            { q: "Which food keeps our bones and teeth strong?", a: "milk", options: ["milk", "wheat", "rice", "sugar"] },
            { q: "Which is a man-made source of water?", a: "Well", options: ["Well", "River", "Rain", "Ocean"] },
            { q: "Drinking dirty water makes us ___", a: "ill", options: ["ill", "healthy", "strong", "happy"] },
            { q: "Which of these kills germs in the air?", a: "Sunlight", options: ["Sunlight", "Water", "Moonlight", "Wind"] },
            { q: "Houses made of thick cloth used in deserts are called ___", a: "Tent", options: ["Tent", "Houseboat", "Igloo", "Duplex"] },
            { q: "What are the two main sources of food?", a: "Plants and animals", options: ["Plants and animals", "Sun and moon", "Soil and water", "Air and wind"] },
            { q: "What are energy-giving foods?", a: "Foods that give energy to work and play", options: ["Foods that give energy to work and play", "Foods that make us sleep", "Foods that make us sick", "Foods that we don't eat"] },
            { q: "Where do we get water from?", a: "Rivers, lakes, and rainwater", options: ["Rivers, lakes, and rainwater", "Sun and moon", "Trees and plants", "Fire and soil"] },
            { q: "What do you understand by ventilation?", a: "The way air moves around inside a house", options: ["The way air moves around inside a house", "The way water flows", "The way we cook food", "The way we sleep"] },
            { q: "Why should windows have wire nettings?", a: "To stop flies and mosquitoes", options: ["To stop flies and mosquitoes", "To stop sunlight", "To stop rain", "To stop air"] },
            { q: "What is one thing we should do to stay healthy?", a: "Do exercise regularly", options: ["Do exercise regularly", "Eat only junk food", "Sleep all day", "Drink dirty water"] },
            { q: "Why is eating too much junk food not good?", a: "It can make us sick", options: ["It can make us sick", "It makes us strong", "It makes us tall", "It cleans our body"] },
            { q: "Why do babies and old people eat soft food?", a: "It is easy to chew and digest", options: ["It is easy to chew and digest", "It is very hard", "It looks beautiful", "It is very cold"] },
            { q: "Why should we grow more plants?", a: "They keep the air clean", options: ["They keep the air clean", "They make the air dirty", "They give us plastic", "They drink all our water"] },
            { q: "Why are houses in small cities usually big?", a: "Land and building materials are cheaper", options: ["Land and building materials are cheaper", "Land is very expensive", "There are no builders", "People like small houses"] }
        ],
        fill_blanks: [
            { q: "We ___ clothes to make them look neat.", a: "iron" },
            { q: "___ houses are strong houses made of bricks and cement.", a: "Pucca" },
            { q: "Flies and mosquitoes breed on ___ dumps.", a: "garbage" },
            { q: "A house with two floors is called a ___.", a: "duplex" },
            { q: "Jute is a ___ fibre.", a: "plant" },
            { q: "We wear ___ in winter.", a: "sweaters" },
            { q: "The house we live in is called our ___.", a: "home" },
            { q: "___ kills the germs present in water.", a: "Boiling" },
            { q: "Babies and old people eat ___ food.", a: "soft" },
            { q: "Drinking or using polluted water is ___ for our health.", a: "bad" },
            { q: "People who do not eat meat or fish are called ___.", a: "vegetarians" },
            { q: "Fibre in food helps us in ___.", a: "digestion" }
        ],
        true_false: [
            { q: "Sugar is the body building food.", a: "False", options: ["True", "False"] },
            { q: "Meat and fish are body-building food.", a: "True", options: ["True", "False"] },
            { q: "Plants and animals need water to live.", a: "True", options: ["True", "False"] },
            { q: "Woollens keep us warm during winter.", a: "True", options: ["True", "False"] },
            { q: "Nylon and rayon are natural fibres.", a: "False", options: ["True", "False"] },
            { q: "Silk is a shiny fibre produced by silkworms.", a: "True", options: ["True", "False"] },
            { q: "We should sleep for 8 to 9 hours everyday.", a: "True", options: ["True", "False"] },
            { q: "We should use paper or cloth bags.", a: "True", options: ["True", "False"] },
            { q: "We should write on walls.", a: "False", options: ["True", "False"] },
            { q: "Sunlight kills the germs.", a: "True", options: ["True", "False"] }
        ],
        one_word: [
            { q: "Name two junk foods.", a: "Pizza and Chips", options: ["Pizza and Chips", "Dal and Rice", "Fruits and Vegetables", "Milk and Egg"] },
            { q: "Very tiny living beings that make the water impure.", a: "Germs", options: ["Germs", "Fish", "Plants", "Stones"] },
            { q: "The water present below the ground.", a: "Groundwater", options: ["Groundwater", "Rainwater", "River water", "Sea water"] },
            { q: "A small round house made with blocks of snow.", a: "Igloo", options: ["Igloo", "Tent", "Caravan", "Duplex"] },
            { q: "The soft, thick hair on animals.", a: "Fur", options: ["Fur", "Skin", "Feathers", "Scales"] },
            { q: "Materials made of thread.", a: "Fibres", options: ["Fibres", "Bricks", "Wood", "Glass"] },
            { q: "Cleaning clothes without using water.", a: "Dry clean", options: ["Dry clean", "Washing", "Ironing", "Drying"] },
            { q: "People who eat meat and fish are called ___", a: "Non-vegetarians", options: ["Non-vegetarians", "Vegetarians", "Herbivores", "Farmers"] },
            { q: "Houses made of straw, mud and wood.", a: "Kuchcha house", options: ["Kuchcha house", "Pucca house", "Igloo", "Apartment"] },
            { q: "The process in which air and water get dirty.", a: "Pollution", options: ["Pollution", "Purification", "Cleaning", "Boiling"] }
        ],
        match_following: [
            { q: "Breathing dirty air", a: "Makes us ill" },
            { q: "Drink", a: "8 to 10 glasses of water" },
            { q: "Waste", a: "Dustbin" },
            { q: "Plants", a: "Keep the air clean" },
            { q: "Exercise", a: "Yoga, jogging" },
            { q: "Raincoat", a: "Rainy season" },
            { q: "Pullovers", a: "Winter season" },
            { q: "Ropes", a: "Jute" },
            { q: "Nylon", a: "Manmade fibres" },
            { q: "Clean water", a: "Filtering" }
        ],
        missing_letters: [
            { q: "Complete the word: G _ R B A _ E", a: "GARBAGE", options: ["GARBAGE", "GERBAGE", "GIRBAGE", "GORBAGE"] },
            { q: "Complete the word: R _ B _ ISH", a: "RUBBISH", options: ["RUBBISH", "RABBISH", "REBBISH", "ROBBISH"] },
            { q: "Complete the word: R _ I N W _ TER", a: "RAINWATER", options: ["RAINWATER", "REINWATER", "ROINWATER", "RUNWATER"] },
            { q: "Complete the word: M _ L _", a: "MILK", options: ["MILK", "MALK", "MOLK", "MELK"] },
            { q: "Complete the word: M _ A _", a: "MEAT", options: ["MEAT", "MOAT", "MIAT", "MUAT"] },
            { q: "Complete the word: W _ E A T", a: "WHEAT", options: ["WHEAT", "WHOAT", "WHIAT", "WHUAT"] },
            { q: "Complete the word: D _ G E S T", a: "DIGEST", options: ["DIGEST", "DAGEST", "DOGEST", "DUGEST"] },
            { q: "Complete the word: F R _ I T S", a: "FRUITS", options: ["FRUITS", "FROITS", "FREITS", "FRAITS"] },
            { q: "Complete the word: G U M B _ O T S", a: "GUMBOOTS", options: ["GUMBOOTS", "GAMBOOTS", "GEMBOOTS", "GIMBOOTS"] },
            { q: "Complete the word: B R _ C K S", a: "BRICKS", options: ["BRICKS", "BROCKS", "BRACKS", "BRECKS"] },
            { q: "Complete the word: D U P _ E X", a: "DUPLEX", options: ["DUPLEX", "DAPLEX", "DIPLEX", "DOPLEX"] }
        ],
        rearrange: [
            { q: "Unscramble 'RONGST':", a: "STRONG", options: ["STRONG", "STONG", "STRANG", "STRUNG"] },
            { q: "Unscramble 'BREFI':", a: "FIBRE", options: ["FIBRE", "FABRE", "FEBRI", "FOBRE"] },
            { q: "Unscramble 'TERWA':", a: "WATER", options: ["WATER", "WETER", "WOTER", "WITER"] },
            { q: "Unscramble 'LLSWE':", a: "WELLS", options: ["WELLS", "WALLS", "WILLS", "WOLLS"] },
            { q: "Unscramble 'PSHI':", a: "SHIP", options: ["SHIP", "SHEP", "SHAP", "SHOP"] },
            { q: "Unscramble 'BAGGARE':", a: "GARBAGE", options: ["GARBAGE", "GERBAGE", "GORBAGE", "GIRBAGE"] },
            { q: "Unscramble 'ARPTAMNET':", a: "APARTMENT", options: ["APARTMENT", "APERTMENT", "APORTMENT", "OPARTMENT"] },
            { q: "Unscramble 'KLSI':", a: "SILK", options: ["SILK", "SALK", "SOLK", "SELK"] }
        ],
        drawing: [
            { q: "Draw and name any two foods we get from animals.", a: "[Draw Food from Animals]", options: ["[Draw Food from Animals]"] },
            { q: "Draw any two junk foods and name them.", a: "[Draw Junk Food]", options: ["[Draw Junk Food]"] }
        ]
    }
}
};

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];