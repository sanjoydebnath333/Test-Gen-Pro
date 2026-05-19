// Define how specific categories map to icons for the Kid's setup UI
const CATEGORY_ICONS = {
  'one_word': { icon: '💬', title: 'One Word', desc: 'Quick Ans' },
            'name_following': { icon: '🏷️', title: 'Name It', desc: 'Identify' },
            'fill_blanks': { icon: '✍️', title: 'Fill Blanks', desc: 'Complete it' },
            'true_false': { icon: '✔️', title: 'True/False', desc: 'Fact Check' },
            'match_following': { icon: '🔗', title: 'Match Pairs', desc: 'Connect' },
            'rearrange': { icon: '🧩', title: 'Rearrange', desc: 'Unscramble' },
            'missing_letters': { icon: '🔤', title: 'Missing Ltrs', desc: 'Spell it' },
            'mcq_standard': { icon: '🔘', title: 'MCQ', desc: 'Choose 1' },
            'word_meaning': { icon: '📖', title: 'Meanings', desc: 'Define it' },
            'rhyming_words': { icon: '🎵', title: 'Rhymes', desc: 'Match Sound' },
            'opposite_word': { icon: '🔄', title: 'Opposites', desc: 'Antonyms' },
            'textual_grammar': { icon: '📝', title: 'Grammar', desc: 'Rules' },
            'drawing': { icon: '✏️', title: 'Drawing', desc: 'Diagrams' }
};

const SUBJECT_DATA = {
   "english_language": {
    id: "english_language",
    title: "English Language",
    icon: "📚",
    theme: "#ec4899", // Pink theme for English
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    sections: [
        { id: 'mcq_standard', title: 'Choose the correct answer', max: 25, default: 10, marksPerQ: 1 },
        { id: 'fill_blanks', title: 'Fill in the blanks', max: 15, default: 5, marksPerQ: 1 },
        { id: 'true_false', title: 'Write True or False', max: 15, default: 5, marksPerQ: 1 },
        { id: 'one_word', title: 'Answer in one word', max: 15, default: 5, marksPerQ: 1 },
        { id: 'word_meaning', title: 'Word Meaning', max: 10, default: 5, marksPerQ: 1 },
        { id: 'rhyming_words', title: 'Rhyming Words', max: 10, default: 5, marksPerQ: 1 },
        { id: 'opposite_word', title: 'Opposite Words', max: 12, default: 5, marksPerQ: 1 },
        { id: 'textual_grammar', title: 'Textual Grammar', max: 15, default: 5, marksPerQ: 1 }
    ],
    bank: {
        mcq_standard: [
            // Chapter 3: A new friend (Q&A and Spellings)
            { q: "Where did Hasmina and Saif live?", a: "Ajanta Apartments", options: ["Ajanta Apartments", "Skyline Apartments", "Rose Apartments", "Sunshine Apartments"] },
            { q: "Choose the correct spelling:", a: "Apartment", options: ["Apartment", "Appartment", "Apartmant", "Appertment"] },
            { q: "Choose the correct spelling:", a: "Frightened", options: ["Frightened", "Fritened", "Frightend", "Frightned"] },
            { q: "Choose the correct spelling:", a: "Suddenly", options: ["Suddenly", "Sudenly", "Suddnly", "Sudenley"] },
            
            // Chapter 4: Like a Bird (Q&A and Spellings)
            { q: "Who stood near their flying machine?", a: "Wilbur and Orville Wright", options: ["Wilbur and Orville Wright", "James and Thomas", "Albert and Isaac", "Only Wilbur Wright"] },
            { q: "How long did the first aeroplane fly for?", a: "For a count of twelve", options: ["For a count of twelve", "For one hour", "For five minutes", "For a whole day"] },
            { q: "What did the Wright brothers do after their first flight?", a: "Returned home to make their design better", options: ["Returned home to make their design better", "Went to sleep", "Started a factory", "Sold the aeroplane"] },
            { q: "How has the Wright brother's model helped people?", a: "To travel to far-off places", options: ["To travel to far-off places", "To cook food faster", "To talk to friends", "To wash clothes"] },
            { q: "Choose the correct spelling:", a: "Propellers", options: ["Propellers", "Propellars", "Proppelers", "Propellors"] },
            { q: "Choose the correct spelling:", a: "Machine", options: ["Machine", "Masheen", "Macheen", "Mashine"] },

            // Chapter 5: The King of All Stories (Q&A and Spellings)
            { q: "Who were Anansi and Nyame?", a: "A clever spider and the Sky God", options: ["A clever spider and the Sky God", "A lion and a tiger", "Two young boys", "A bird and a tree"] },
            { q: "What did Nyame ask Anansi to bring him as a price?", a: "Hornets, Python, and Leopard", options: ["Hornets, Python, and Leopard", "Gold, Silver, and Diamonds", "Water, Fire, and Air", "Apples, Mangoes, and Grapes"] },
            { q: "Why did the Hornets fly into the gourd?", a: "To stay dry from the fake rain", options: ["To stay dry from the fake rain", "To eat honey", "To hide from a bird", "To build a nest"] },
            { q: "Choose the correct spelling:", a: "Quarrel", options: ["Quarrel", "Quarel", "Quarrell", "Qurrel"] },
            
            // Chapter 6: Pinocchio (Q&A and Spellings)
            { q: "Who was Pinocchio?", a: "A wooden toy that became a real boy", options: ["A wooden toy that became a real boy", "A clever spider", "A young fairy", "A rich king"] },
            { q: "What happened each time Pinocchio lied?", a: "His nose grew longer", options: ["His nose grew longer", "His ears grew big", "He lost a gold coin", "He fell asleep"] },
            { q: "What happened when Pinocchio sat near the fire?", a: "His feet caught fire and burned off", options: ["His feet caught fire and burned off", "He cooked his food", "He got very cold", "His nose grew longer"] },
            { q: "Choose the correct spelling:", a: "Carpenter", options: ["Carpenter", "Carpentar", "Carpంటర్", "Carpinter"] },
            { q: "Choose the correct spelling:", a: "Thieves", options: ["Thieves", "Theives", "Theeves", "Thievs"] }
        ],
        fill_blanks: [
            // Chapter 3: A new friend
            { q: "Hasmina and Saif went to a shop with their ___.", a: "father", options: ["father", "mother", "uncle", "friend"] },
            { q: "Sharmaji was an old man with a ___ nose.", a: "bent", options: ["bent", "straight", "long", "sharp"] },
            { q: "The children became good at flying ___.", a: "kites", options: ["kites", "aeroplanes", "birds", "balloons"] },
            
            // Chapter 4: Like a Bird
            { q: "___ flew the first aeroplane.", a: "Orville", options: ["Orville", "Wilbur", "James", "Thomas"] },
            { q: "The Wright brothers called their first aeroplane a ___.", a: "flyer", options: ["flyer", "glider", "bird", "eagle"] },
            { q: "There were two ___ in the front.", a: "propellers", options: ["propellers", "wheels", "engines", "wings"] },
            { q: "They tossed the coin and ___ won.", a: "Orville", options: ["Orville", "Wilbur", "Father", "Mother"] },
            { q: "People have used the Wright brothers' ___ to make better aeroplanes.", a: "model", options: ["model", "toy", "book", "drawing"] },

            // Chapter 5: The King of All Stories
            { q: "Anansi makes a small hole in an empty ___ and fills it with water.", a: "gourd", options: ["gourd", "pot", "cup", "bowl"] },
            { q: "The Hornets came out buzzing ___.", a: "angrily", options: ["angrily", "happily", "loudly", "softly"] },
            { q: "Anansi lay the ___ on the ground.", a: "pole", options: ["pole", "stick", "rope", "net"] },
            { q: "Anansi leads Osebo all the way to ___.", a: "Nyame", options: ["Nyame", "the forest", "the river", "the village"] },

            // Chapter 6: Pinocchio
            { q: "Gepetto was a poor carpenter who lived in ___.", a: "Italy", options: ["Italy", "India", "France", "Japan"] },
            { q: "Gepetto kissed the toy on the ___.", a: "cheek", options: ["cheek", "head", "hand", "nose"] },
            { q: "The puppet master gave him ___ gold coins.", a: "five", options: ["five", "two", "ten", "three"] },
            { q: "Two thieves saw the money in Pinocchio's ___.", a: "hand", options: ["hand", "pocket", "bag", "box"] },
            { q: "Pinocchio became a real ___.", a: "boy", options: ["boy", "puppet", "animal", "king"] }
        ],
        true_false: [
            // Chapter 3: A new friend
            { q: "Hasmina and Saif went with their father to buy toys.", a: "False", options: ["True", "False"] },
            { q: "The tall boy from Skyline Apartments had a black kite.", a: "True", options: ["True", "False"] },
            { q: "The tall boy's kite cut Hasmina's kite.", a: "False", options: ["True", "False"] },
            { q: "Sharmaji became a good friend.", a: "True", options: ["True", "False"] },

            // Chapter 4: Like a Bird
            { q: "Wilbur ran alongside the aeroplane.", a: "True", options: ["True", "False"] },
            { q: "Wilbur flew the first aeroplane.", a: "False", options: ["True", "False"] },
            { q: "The aeroplane was back on the sandy ground.", a: "True", options: ["True", "False"] },

            // Chapter 5: The King of All Stories
            { q: "Anansi carries the Python to Nyame.", a: "True", options: ["True", "False"] },
            { q: "Anansi did not finish all the three tasks.", a: "False", options: ["True", "False"] },

            // Chapter 6: Pinocchio
            { q: "Gepetto made new feet for Pinocchio.", a: "True", options: ["True", "False"] },
            { q: "Pinocchio was happy when his nose grew longer.", a: "False", options: ["True", "False"] },
            { q: "Gepetto was a rich carpenter.", a: "False", options: ["True", "False"] }
        ],
        one_word: [
            // Chapter 3: A new friend
            { q: "\"I'd like the red kite with the green tail, please...\" Who said these words?", a: "Hasmina", options: ["Hasmina", "Saif", "Sharmaji", "Father"] },
            { q: "\"Go away!... Please don't cut down my kite.\" Who said these words?", a: "Saif", options: ["Saif", "Hasmina", "Tall boy", "Sharmaji"] },
            { q: "\"Can I help...? I am good at flying kites.\" Who said these words?", a: "Sharmaji", options: ["Sharmaji", "Father", "Tall boy", "Saif"] },
            { q: "\"I'll cut down your kite.\" Who said these words?", a: "Tall boy", options: ["Tall boy", "Sharmaji", "Saif", "Hasmina"] },
            { q: "\"Pull!\" Who said this word?", a: "Sharmaji", options: ["Sharmaji", "Saif", "Hasmina", "Tall boy"] },

            // Chapter 4: Like a Bird
            { q: "\"Let's toss for it.\" Who said these words?", a: "Orville", options: ["Orville", "Wilbur", "Father", "Friend"] },
            { q: "\"Who's going in the machine first?\" Who said these words?", a: "Wilbur", options: ["Wilbur", "Orville", "People", "Carpenter"] },

            // Chapter 5: The King of All Stories
            { q: "\"I can do it. What is the price?\" Who said these words?", a: "Anansi", options: ["Anansi", "Nyame", "Osebo", "Onini"] },
            { q: "\"Oh! Thank you, Anansi.\" Who said these words?", a: "Mmoboro", options: ["Mmoboro", "Nyame", "Osebo", "Onini"] },
            { q: "\"Well done! Now bring me Osebo the Leopard.\" Who said these words?", a: "Nyame", options: ["Nyame", "Anansi", "Mmoboro", "Onini"] },
            { q: "\"I can stretch no more.\" Who said these words?", a: "Onini", options: ["Onini", "Osebo", "Mmoboro", "Anansi"] },

            // Chapter 6: Pinocchio
            { q: "\"Pinocchio, come back!\" Who said these words?", a: "Gepetto", options: ["Gepetto", "Fairy", "Thieves", "Puppet master"] },
            { q: "\"Come and join us.\" Who said these words?", a: "The puppets", options: ["The puppets", "Gepetto", "Thieves", "The Fairy"] },
            { q: "\"Give these to your father.\" Who said these words?", a: "Puppet master", options: ["Puppet master", "The Fairy", "Gepetto", "The thieves"] },
            { q: "\"You went to the puppet show, didn't you?\" Who said these words?", a: "The Fairy", options: ["The Fairy", "Gepetto", "Puppet master", "The thieves"] }
        ],
        word_meaning: [
            // Chapter 3
            { q: "What is the meaning of 'Lovely'?", a: "Pretty, beautiful", options: ["Pretty, beautiful", "Ugly and scary", "Angry and mad", "Tall and heavy"] },
            { q: "What is the meaning of 'Apartment'?", a: "A set of rooms on one floor", options: ["A set of rooms on one floor", "A playground", "A large vehicle", "A marketplace"] },
            { q: "What is the meaning of 'Frightened'?", a: "Scared", options: ["Scared", "Happy", "Excited", "Sleepy"] },
            // Chapter 4
            { q: "What is a 'Glider'?", a: "A light aircraft without an engine", options: ["A light aircraft without an engine", "A fast moving car", "A large ship", "A hot air balloon"] },
            { q: "What are 'Propellers'?", a: "Things with blades that help move a plane", options: ["Things with blades that help move a plane", "Wheels of a car", "The windows of an aeroplane", "The seats for passengers"] },
            { q: "What does 'Took-off' mean?", a: "Left the ground and began to fly", options: ["Left the ground and began to fly", "Stopped moving", "Broke into pieces", "Fell down quickly"] },
            { q: "What is a 'Model'?", a: "A thing used as an example to copy", options: ["A thing used as an example to copy", "A machine to wash clothes", "A book to read", "A toy for pets"] },
            // Chapter 5
            { q: "What are 'Hornets'?", a: "Flying insects with bad stings", options: ["Flying insects with bad stings", "Beautiful small birds", "Large furry animals", "Sweet juicy fruits"] },
            { q: "What is a 'Python'?", a: "A very large snake", options: ["A very large snake", "A dangerous tiger", "A tiny spider", "A flying insect"] },
            { q: "What is the meaning of 'Shelter'?", a: "A safe place to stay", options: ["A safe place to stay", "A dangerous forest", "A deep river", "A high mountain"] },
            { q: "What does 'Quarrel' mean?", a: "A fight", options: ["A fight", "A hug", "A friendly game", "A loud song"] },
            // Chapter 6
            { q: "What does a 'Carpenter' do?", a: "Makes things out of wood", options: ["Makes things out of wood", "Paints beautiful pictures", "Fixes broken cars", "Sews clothes"] },
            { q: "Who is a 'Puppet master'?", a: "Someone who makes puppets speak and move", options: ["Someone who makes puppets speak and move", "Someone who buys toys", "A person who catches thieves", "A rich king"] }
        ],
        rhyming_words: [
            // Poem: The Lily Pool
            { q: "Which word rhymes with 'Pool'?", a: "Cool", options: ["Cool", "Tall", "Pill", "Fall"] },
            { q: "Which word rhymes with 'White'?", a: "Night", options: ["Night", "Wait", "Cat", "Hat"] },
            { q: "Which word rhymes with 'Bloom'?", a: "Gloom", options: ["Gloom", "Slow", "Run", "Green"] },
            { q: "Which word rhymes with 'Curls'?", a: "Pearls", options: ["Pearls", "Girls", "Calls", "Pulls"] },
            { q: "Which word rhymes with 'Pink'?", a: "Sink", options: ["Sink", "Drink", "Sand", "Hand"] },
            // Poem: Fireflies
            { q: "Which word rhymes with 'Night'?", a: "Light", options: ["Light", "Late", "Kite", "Rat"] },
            { q: "Which word rhymes with 'Air'?", a: "There", options: ["There", "Here", "Near", "Far"] },
            { q: "Which word rhymes with 'Tree'?", a: "Me", options: ["Me", "You", "Us", "They"] },
            { q: "Which word rhymes with 'One'?", a: "Fun", options: ["Fun", "Run", "Sun", "Man"] }
        ],
        opposite_word: [
            // Opposite Words list
            { q: "What is the opposite of 'Pull'?", a: "Push", options: ["Push", "Drag", "Lift", "Drop"] },
            { q: "What is the opposite of 'Wet'?", a: "Dry", options: ["Dry", "Cold", "Hot", "Soft"] },
            { q: "What is the opposite of 'Noisy'?", a: "Quiet", options: ["Quiet", "Loud", "Silent", "Fast"] },
            { q: "What is the opposite of 'Far'?", a: "Near", options: ["Near", "Distant", "High", "Low"] },
            { q: "What is the opposite of 'Tall'?", a: "Short", options: ["Short", "Big", "Huge", "Wide"] },
            { q: "What is the opposite of 'Right'?", a: "Wrong", options: ["Wrong", "Correct", "True", "Straight"] },
            { q: "What is the opposite of 'Cold'?", a: "Hot", options: ["Hot", "Warm", "Freezing", "Cool"] },
            { q: "What is the opposite of 'High'?", a: "Low", options: ["Low", "Tall", "Deep", "Far"] },
            { q: "What is the opposite of 'Light'?", a: "Heavy", options: ["Heavy", "Dark", "Bright", "Soft"] },
            { q: "What is the opposite of 'Sweet'?", a: "Sour", options: ["Sour", "Salty", "Bitter", "Spicy"] },
            { q: "What is the opposite of 'New'?", a: "Old", options: ["Old", "Fresh", "Recent", "Young"] },
            { q: "What is the opposite of 'Thick'?", a: "Thin", options: ["Thin", "Fat", "Heavy", "Wide"] }
        ],
        textual_grammar: [
            // Plurals
            { q: "What is the plural of 'Box'?", a: "Boxes", options: ["Boxes", "Boxs", "Boxies", "Boxen"] },
            { q: "What is the plural of 'Party'?", a: "Parties", options: ["Parties", "Partys", "Partees", "Party"] },
            { q: "What is the plural of 'Wolf'?", a: "Wolves", options: ["Wolves", "Wolfs", "Wolvies", "Wolven"] },
            { q: "What is the plural of 'City'?", a: "Cities", options: ["Cities", "Citys", "Cites", "Citie"] },
            { q: "What is the plural of 'Knife'?", a: "Knives", options: ["Knives", "Knifes", "Knif", "Knivees"] },
            // Gender
            { q: "What is the feminine gender of 'King'?", a: "Queen", options: ["Queen", "Princess", "Lady", "Duchess"] },
            { q: "What is the masculine gender of 'Aunt'?", a: "Uncle", options: ["Uncle", "Nephew", "Brother", "Father"] },
            { q: "What gender is the word 'Book'?", a: "Neuter", options: ["Neuter", "Common", "Masculine", "Feminine"] },
            { q: "What gender is the word 'Teacher'?", a: "Common", options: ["Common", "Neuter", "Feminine", "Masculine"] },
            // Pronouns
            { q: "Choose the correct pronoun: Amit is my friend. ___ is very clever.", a: "He", options: ["He", "She", "It", "They"] },
            { q: "Choose the correct pronoun: Mishel is sleeping. Don't disturb ___.", a: "her", options: ["her", "she", "it", "him"] },
            { q: "Choose the correct pronoun: Kirti loves flowers. She buys ___ every morning.", a: "them", options: ["them", "her", "him", "she"] },
            // Adjectives
            { q: "Identify the adjective in the sentence: 'We cut two cakes on my birthday.'", a: "two", options: ["two", "cut", "cakes", "birthday"] },
            { q: "Identify the adjective in the sentence: 'Tanu saw a pretty butterfly.'", a: "pretty", options: ["pretty", "saw", "butterfly", "Tanu"] },
            { q: "Identify the adjective in the sentence: 'The pillow is very soft.'", a: "soft", options: ["soft", "pillow", "very", "is"] },
            // ie or ei Spellings
            { q: "Complete the word correctly: Fr _ _ nd", a: "ie", options: ["ie", "ei", "ea", "ee"] },
            { q: "Complete the word correctly: R _ c _ _ ve", a: "ei", options: ["ei", "ie", "ea", "ee"] },
            // Read the clues
            { q: "Read the clue: 'Tells us the time'", a: "Clock", options: ["Clock", "Book", "Radio", "Bell"] },
            { q: "Read the clue: 'A place where we can keep our money'", a: "Bank", options: ["Bank", "School", "Hospital", "Market"] }
        ]
    }
},
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
                { q: "Some animals live with us in our homes as our ___.", a: "pets", options: ["pets", "wild", "birds", "toys"] },
                { q: "Water falls on land as rain and ___.", a: "snow", options: ["snow", "juice", "milk", "mud"] },
                { q: "Sloth is the world's slowest ___.", a: "mammal", options: ["mammal", "bird", "fish", "insect"] },
                { q: "Asian elephants are found in thirteen countries of ___.", a: "Asia", options: ["Asia", "Africa", "America", "Europe"] },
                { q: "Leaves prepare ___ for the plants.", a: "food", options: ["food", "water", "toys", "stones"] },
                { q: "Trees, herbs and shrubs are ___.", a: "plants", options: ["plants", "animals", "birds", "fishes"] },
                { q: "Salad is a healthy dish made of many raw ___.", a: "vegetables", options: ["vegetables", "candies", "cakes", "biscuits"] },
                { q: "Spices have been traditionally used to cure various ___.", a: "illnesses", options: ["illnesses", "games", "toys", "stories"] },
                { q: "A passage built across a river is called ___.", a: "bridge", options: ["bridge", "road", "park", "school"] },
                { q: "A group of dogs are called a ___.", a: "pack", options: ["pack", "flock", "herd", "bunch"] },
                { q: "Helen Keller was an American author who was not able to see, hear or ___.", a: "speak", options: ["speak", "walk", "eat", "sleep"] },
                { q: "Dr. Stephen Hawking was a famous ___.", a: "scientist", options: ["scientist", "dancer", "singer", "player"] },
                { q: "Elsa is the character of the animated film Frozen ___.", a: "II", options: ["II", "I", "III", "IV"] },
                { q: "The words of a song are called ___.", a: "lyrics", options: ["lyrics", "music", "dance", "story"] }
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
            { id: 'mcq_standard', title: 'Choose the correct answer', max: 20, default: 10, marksPerQ: 1 },
            { id: 'fill_blanks', title: 'Fill in the blanks', max: 15, default: 5, marksPerQ: 1 },
            { id: 'true_false', title: 'Write True or False', max: 14, default: 5, marksPerQ: 1 },
            { id: 'one_word', title: 'Name the following', max: 12, default: 5, marksPerQ: 1 },
            { id: 'match_following', title: 'Match the following', max: 10, default: 5, marksPerQ: 1 },
            { id: 'missing_letters', title: 'Missing Letters', max: 15, default: 5, marksPerQ: 1 },
            { id: 'rearrange', title: 'Re-arrange the words', max: 15, default: 5, marksPerQ: 1 },
            { id: 'drawing', title: 'Diagram & Drawing', max: 2, default: 1, marksPerQ: 5 }
        ],
        bank: {
            mcq_standard: [
                { q: "CD stands for ___", a: "Compact Disk", options: ["Compact Disk", "Combo Disk", "Combined Disk", "Computer Disk"] },
                { q: "A monitor and a printer are examples of ___ devices.", a: "Output", options: ["Output", "Input", "Storage", "Processing"] },
                { q: "Which of the following is used to record sound into the computer?", a: "Microphone", options: ["Microphone", "Speaker", "Printer", "Scanner"] },
                { q: "___ is used to move the page up and down on the monitor.", a: "Scroll wheel", options: ["Scroll wheel", "Single-click", "Double-click", "Right-click"] },
                { q: "___ is used to open the items on a monitor.", a: "Double-click", options: ["Double-click", "Single-click", "Scroll wheel", "Drag and drop"] },
                { q: "In schools, computers are used ___", a: "to keep the records of books", options: ["to keep the records of books", "to scan items purchased", "to track criminals", "to cook food"] },
                { q: "Computers are used to maintain a list of stock items and their prices in ___", a: "Malls", options: ["Malls", "Banks", "Police stations", "Railway stations"] },
                { q: "Computers are used for booking tickets at ___", a: "both of these", options: ["railway stations", "airports", "both of these", "hospitals"] },
                { q: "In shopping malls, computers are used ___", a: "to generate bills", options: ["to generate bills", "to type letters", "to send and receive mails", "to test eyesight"] },
                { q: "In the banks, computers are used to ___", a: "keep account details of the customers", options: ["keep account details of the customers", "maintain patients' records", "make animated movies", "scan luggage"] },
                { q: "AI assistants like Alexa are used to ___", a: "Answer questions and play music", options: ["Answer questions and play music", "Paint pictures", "Drive cars", "Perform operations"] },
                { q: "In hospitals, AI helps doctors by ___", a: "Diagnosing illnesses", options: ["Diagnosing illnesses", "Cleaning rooms", "Selling medicines", "Printing tickets"] },
                { q: "Which of the following are the basic parts of a computer?", a: "Monitor, keyboard, mouse, and CPU", options: ["Monitor, keyboard, mouse, and CPU", "Speaker, printer, and scanner", "Only monitor and CPU", "UPS and pen drive"] },
                { q: "Which of the following is a type of mouse?", a: "Optical mouse", options: ["Optical mouse", "Typing mouse", "Screen mouse", "Audio mouse"] },
                { q: "What is a wireless mouse?", a: "A mouse that works without a wire or cord", options: ["A mouse that works without a wire or cord", "A mouse with a very long wire", "A mouse that only works with laptops", "A mouse used only for gaming"] },
                { q: "Which of these is an action performed by a mouse?", a: "Drag and drop", options: ["Drag and drop", "Typing numbers", "Scanning documents", "Printing bills"] },
                { q: "How does a computer help an eye doctor?", a: "To test eyesight and keep patient records", options: ["To test eyesight and keep patient records", "To book train tickets", "To track criminals", "To withdraw money"] },
                { q: "How do computers help in police stations?", a: "To track criminal records and cases", options: ["To track criminal records and cases", "To generate shopping bills", "To print exam papers", "To play music"] },
                { q: "How does a computer help in airports?", a: "By booking tickets and tracking flight timings", options: ["By booking tickets and tracking flight timings", "By diagnosing patients", "By maintaining bank accounts", "By scanning groceries"] }
            ],
         fill_blanks: [
            { q: "A ___ looks like a typewriter.", a: "keyboard", options: ["keyboard", "monitor", "mouse", "printer"] },
            { q: "The devices which are used to give commands are known as ___ devices.", a: "input", options: ["input", "output", "storage", "processing"] },
            { q: "The ____ is also called as Visual Display unit.", a: "Monitor", options: ["Monitor", "Keyboard", "CPU", "Printer"] },
            { q: "The ___ is used to play games and make a drawing as well.", a: "mouse", options: ["mouse", "keyboard", "printer", "speakers"] },
            { q: "The devices which are used to give results are called ___ devices.", a: "output", options: ["output", "input", "storage", "processing"] },
            { q: "A ___ uses computers to make test papers and exam reports.", a: "teacher", options: ["teacher", "doctor", "engineer", "pilot"] },
            { q: "A ___ looks like a television screen.", a: "monitor", options: ["monitor", "keyboard", "printer", "mouse"] },
            { q: "Computers help doctors to perform ___.", a: "operations", options: ["operations", "cooking", "driving", "teaching"] },
            { q: "Computers are used to withdraw money from ___.", a: "ATMs", options: ["ATMs", "schools", "hospitals", "parks"] },
            { q: "In banks, computers are used to maintain ___ of customers.", a: "accounts", options: ["accounts", "reports", "timetables", "bills"] },
            { q: "In shopping malls, computers are used to generate ___.", a: "bills", options: ["bills", "tickets", "accounts", "reports"] },
            { q: "Computers help in booking ___ at railway stations and airports.", a: "tickets", options: ["tickets", "bills", "books", "timetables"] },
            { q: "Computers are used to prepare ___ for schools.", a: "timetables", options: ["timetables", "bills", "tickets", "accounts"] },
            { q: "Students can draw and ___ with the help of a computer.", a: "colour", options: ["colour", "sleep", "run", "swim"] },
            { q: "You can solve ___ on a computer.", a: "sums", options: ["sums", "games", "songs", "movies"] },
            { q: "AI helps doctors in _____.", a: "hospitals", options: ["hospitals", "schools", "banks", "malls"] },
            { q: "AI robots can ____ your house ", a: "clean", options: ["clean", "drive", "cook", "fly"] },
            { q: "AI helps at ____ to make lesson fun.", a: "schools", options: ["schools", "hospitals", "banks", "airports"] }
],
            true_false: [
                { q: "CPU is used to take the printout of the work done on a paper.", a: "False", options: ["True", "False"] },
                { q: "Speakers are multimedia devices used with a computer.", a: "True", options: ["True", "False"] },
                { q: "The monitor is the brain of the computer.", a: "False", options: ["True", "False"] },
                { q: "The devices which are used to give output, are called input devices.", a: "False", options: ["True", "False"] },
                { q: "The mouse is used to point, select, draw and play games.", a: "True", options: ["True", "False"] },
                { q: "Single-click is used to open a document or a window.", a: "False", options: ["True", "False"] },
                { q: "Computers are used to store information and data.", a: "True", options: ["True", "False"] },
                { q: "In a police station, computers are used to generate bills.", a: "False", options: ["True", "False"] },
                { q: "Computers cannot help doctors to test patients.", a: "False", options: ["True", "False"] },
                { q: "Computers at banks are used for calculations and to maintain records.", a: "True", options: ["True", "False"] },
                { q: "Doctors help computers to perform operations.", a: "False", options: ["True", "False"] },
                { q: "Computers are used to prepare timetables.", a: "True", options: ["True", "False"] },
                { q: "Computers in the library are used to make exam reports.", a: "False", options: ["True", "False"] },
                { q: "Computers at home are used to print medical reports.", a: "False", options: ["True", "False"] },
                { q: "Student can draw and colour with the help of a computer.", a: "True", options: ["True", "False"] },
                { q: "Computers at home are used to print medical reports.", a: "False", options: ["True", "False"] },
                { q: "AI robots can clean your house.", a: "True", options: ["True", "False"] },
                { q: "AI helps at schools to make lessons fun.", a: "True", options: ["True", "False"] },
                { q: "Computers are used for booking tickets at railway stations and airports.", a: "True", options: ["True", "False"] }        
            ],
            one_word: [
                { q: "The device used to record your voice and other sounds into the computer.", a: "Microphone", options: ["Microphone", "Speaker", "Printer", "Scanner"] },
                { q: "A device used to play games and move the pointer on the screen.", a: "Mouse", options: ["Mouse", "Keyboard", "CPU", "Monitor"] },
                { q: "A device used to put pictures and documents from paper into the computer.", a: "Scanner", options: ["Scanner", "Printer", "Microphone", "Speaker"] },
                { q: "The printed copy of your work on a sheet of paper.", a: "Printout", options: ["Printout", "Soft copy", "Monitor", "Keyboard"] },
                { q: "The part that keeps a computer ON for a few minutes even when the electricity goes off.", a: "UPS", options: ["UPS", "CPU", "Pen Drive", "CD"] },
                { q: "A small, rectangular board on a laptop that works like a mouse.", a: "Touchpad", options: ["Touchpad", "Keyboard", "Screen", "Speaker"] },
                { q: "A small device used to store and transfer data from one computer to another.", a: "Pen drive", options: ["Pen drive", "Monitor", "Printer", "Scanner"] },
                { q: "A place where computers are used to make your school projects.", a: "Home", options: ["Home", "Police station", "Bank", "Hospital"] },
                { q: "A place where computers are used to track criminal records.", a: "Police station", options: ["Police station", "School", "Airport", "Shopping mall"] },
                { q: "A place where computers are used to make test papers.", a: "School", options: ["School", "Police station", "Airport", "Shopping mall"] },
                { q: "A place where computers are used to maintain a list of items and their prices.", a: "Shopping mall", options: ["Hospitals", "Schools", "Banks", "Shopping mall"] },
                { q: "A place where computers are used to scan the items purchased.", a: "Shopping mall", options: ["Shopping mall", "Hospital", "Bank", "Railway station"] },
                { q: "A place where computers are used to withdraw money from an ATM.", a: "Bank", options: ["Bank", "School", "Hospital", "Police station"] },
                { q: "The person who uses computers to prepare exam reports.", a: "Teacher", options: ["Teacher", "Doctor", "Police", "Pilot"] },
                  // Extra questions for one_word category
                { q: "A place where computers are used to make flight bookings.", a: "Airports", options: ["Airports", "Banks", "Hospitals", "Schools"] },
                { q: "A place where computers are used to keep patient records.", a: "Hospital", options: ["Hospital", "Bank", "School", "Police station"] }
            ],
            match_following: [
                  // From Chapter 2: Parts of a Computer (Image Data)
                { q: "It looks like a television screen. It has a power button to turn it ON and OFF.", a: "Monitor" },
                { q: "It controls the functioning of all parts of the computer.", a: "CPU" },
                { q: "I am used to take printouts of the work done on the computer.", a: "Printer" },
                { q: "It has several keys.", a: "Keyboard" },
                { q: "It is used to hear sounds and music without disturbing others.", a: "Headphones" },
                 // From Chapter 3: Uses of Computer (Description Left, Place Right)
                { q: "To make test papers and interactive lessons.", a: "School" },
                { q: "To help doctors diagnose patients.", a: "Hospital" },
                { q: "To manage accounts and keep money safe.", a: "Bank" },
                { q: "To book tickets for flights and trains.", a: "Airports" },
                // Extra Practice: Parts & Uses of a Computer
                { q: "A pointing device used to draw pictures and select items on the screen.", a: "Mouse" },
                { q: "Used to listen to loud music and sounds from the computer.", a: "Speakers" },
                { q: "Used to record your voice and other sounds into the computer.", a: "Microphone" },
                { q: "Keeps the computer ON for some time when the electricity goes off.", a: "UPS" },
                { q: "To track criminal records and keep information about cases.", a: "Police Station" },
                { q: "To scan purchased items and generate bills for customers.", a: "Shopping Mall" }
            
            ],
            missing_letters: [
                // From Chapter 2: Parts of a Computer
                { q: "Complete the word: M _ U _ E", a: "MOUSE", options: ["MOUSE", "MAUSE", "MIUSE", "MEUSE"] },
                { q: "Complete the word: W I _ E _ E S S", a: "WIRELESS", options: ["WIRELESS", "WORELESS", "WARELESS", "WURELESS"] },
                { q: "Complete the word: O _ T I _ A L", a: "OPTICAL", options: ["OPTICAL", "OVTICAL", "OSTICAL", "ONTICAL"] },
                { q: "Complete the word: S C _ O _ L I N G", a: "SCROLLING", options: ["SCROLLING", "SCRALLING", "SCRELLING", "SCRULLING"] },
                { q: "Complete the word: K E _ B O _ R D", a: "KEYBOARD", options: ["KEYBOARD", "KAYBOARD", "KOYBOARD", "KIYBOARD"] },
                { q: "Complete the word: M O _ I _ O R", a: "MONITOR", options: ["MONITOR", "MANITOR", "MENITOR", "MUNITOR"] },
                { q: "Complete the word:S _ A N N_ R", a: "SCANNER", options: ["SCANNER", "SCANNAR", "SCANER", "SCANNIR"] },
                // Chapter 3: Uses of Computer
                { q: "Complete the word: T _ M _ T A B _ E", a: "TIMETABLE", options: ["TIMETABLE", "TAMETABLE", "TOMETABLE", "TEMETABLE"] },
                { q: "Complete the word: H O _ P I T _ L", a: "HOSPITAL", options: ["HOSPITAL", "HASPITAL", "HESPITAL", "HUSPITAL"] },
                { q: "Complete the word: L I _ R A _ Y", a: "LIBRARY", options: ["LIBRARY", "LOBRARY", "LEBRARY", "LABRARY"] },
                { q: "Complete the word: M _ S S A _ E", a: "MESSAGE", options: ["MESSAGE", "MASSAGE", "MOSSAGE", "MISSAGE"] },
                { q: "Complete the word: D R A W _ N _", a: "DRAWING", options: ["DRAWING", "DROWING", "DREWING", "DREAWING"] },
                { q: "Complete the word: H O _ E W O _ K", a: "HOMEWORK", options: ["HOMEWORK", "HAMEWORK", "HEMEWORK", "HIMEWORK"] },
                { q: "Complete the word: T _ A C H I _ G", a: "TEACHING", options: ["TEACHING", "TOACHING", "TAACHING", "TUUCHING"] },
                { q: "Complete the word: B _ N K _ N G", a: "BANKING", options: ["BANKING", "BONKING", "BENKING", "BUNKING"] },
                { q: "Complete the word: R E _ O R _ S", a: "REPORTS", options: ["REPORTS", "RAPORTS", "RIPORTS", "ROPURTS"] },
                { q: "Complete the word: P R I N _ E R", a: "PRINTER", options: ["PRINTER", "PRINER", "PRINTR", "PRINTE"] },
                { q: "Complete the word: S P E A K _ R S", a: "SPEAKERS", options: ["SPEAKERS", "SPEEKARS", "SPAKERS", "SPOEKARS"] },
                 
            ],
            rearrange: [
                { q: "Unscramble 'ROTINOM':", a: "MONITOR", options: ["MONITOR", "MINOTOR", "MONOTIR", "MONITER"] },
                { q: "Unscramble 'RDOABYEK':", a: "KEYBOARD", options: ["KEYBOARD", "KYEBOARD", "KEYBAORD", "KYEBOADR"] },
                { q: "Unscramble 'RETNIRP':", a: "PRINTER", options: ["PRINTER", "PRENTIR", "PRANTIR", "PRONTIR"] },
                { q: "Unscramble 'HPORCIMONE':", a: "MICROPHONE", options: ["MICROPHONE", "MACROPHONE", "MECROPHONE", "MOCROPHONE"] },
                { q: "Unscramble 'ESUOM':", a: "MOUSE", options: ["MOUSE", "MUOSE", "MESOU", "MOESU"] },
                { q: "Unscramble 'REKAPSES':", a: "SPEAKERS", options: ["SPEAKERS", "SPEEKARS", "SPAKERS", "SPOEKARS"] },
                { q: "Unscramble 'GNILLORCS':", a: "SCROLLING", options: ["SCROLLING", "SCRALLING", "SCROLLENG", "SCRULLING"] },
                { q: "Unscramble 'SSELERIW':", a: "WIRELESS", options: ["WIRELESS", "WIRELOSS", "WARILESS", "WERILESS"] },
                { q: "Unscramble 'EOMH':", a: "HOME", options: ["HOME", "HEMO", "HMOE", "HOEM"] },
                { q: "Unscramble 'CHOOSL':", a: "SCHOOL", options: ["SCHOOL", "SHCOOL", "SCOHOL", "SCHLOO"] },
                { q: "Unscramble 'NKBA':", a: "BANK", options: ["BANK", "BKNK", "BKAN", "BNAK"] },
                { q: "Unscramble 'OECIFF':", a: "OFFICE", options: ["OFFICE", "OFIFCE", "OFICFE", "OFCIFE"] },
                { q: "Unscramble 'HSPO':", a: "SHOP", options: ["SHOP", "SOHP", "SPHO", "SHPO"] },
                { q: "Unscramble 'IGNAMB':", a: "GAMING", options: ["GAMING", "GIMANG", "GAMNIG", "GANMIG"] },
                { q: "Unscramble 'ILLIGNB':", a: "BILLING", options: ["BILLING", "BILINGL", "BLLINIG", "BILNIGL"] },
                { q: "Unscramble 'TGNIEACH':", a: "TEACHING", options: ["TEACHING", "TAECHING", "TIECHING", "TOACHING"] },
                { q: "Unscramble 'ITALHOSP':", a: "HOSPITAL", options: ["HOSPITAL", "HOSPITEL", "HASPITAL", "HOSPITOL"] }
            ],
            drawing: [
                { q: "Draw and label any two parts of a computer.", a: "[Draw Diagram]", options: ["[Draw Diagram]"] },
                { q: "Draw two devices that are used to store data (e.g., Pen drive, CD).", a: "[Draw Storage Devices]", options: ["[Draw Storage Devices]"] }
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
            { q: "Once there was a green and ___ farm.", a: "beautiful", options: ["beautiful", "sorry", "lemon", "sad"] },
            { q: "The little kitten took the straws from the ___.", a: "scarecrow", options: ["scarecrow", "garden", "grandmother", "nest"] },
            { q: "The straw helped the kitten keep ___ the entire night.", a: "warm", options: ["warm", "cold", "water", "beautiful"] },
            { q: "Leila went to the house to say ___.", a: "sorry", options: ["sorry", "hello", "forgave", "thank you"] },
            { q: "Natasha found a baby bird under the ___ tree.", a: "lemon", options: ["lemon", "mango", "scarecrow", "garden"] },
            { q: "A seed needs ___ to grow.", a: "water", options: ["water", "milk", "warm", "sorry"] },
            { q: "She named the bird ___.", a: "Cammie", options: ["Cammie", "Kitty", "lemon", "scarecrow"] },
            { q: "Tina planted the seeds in the ___.", a: "garden", options: ["garden", "room", "water", "beautiful"] },
            { q: "Tina's ___ helped her.", a: "grandmother", options: ["grandmother", "friend", "Cammie", "teacher"] },
            { q: "The uncle ___ Leila.", a: "forgave", options: ["forgave", "scolded", "sorry", "called"] }
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
        { id: 'mcq_standard', title: 'Choose the correct answer', max: 25, default: 10, marksPerQ: 1 },
        { id: 'fill_blanks', title: 'Fill in the blanks', max: 15, default: 5, marksPerQ: 1 },
        { id: 'true_false', title: 'Write True or False', max: 15, default: 5, marksPerQ: 1 },
        { id: 'one_word', title: 'Name the following', max: 12, default: 5, marksPerQ: 1 },
        { id: 'match_following', title: 'Match the following', max: 12, default: 5, marksPerQ: 1 },
        { id: 'missing_letters', title: 'Missing Letters', max: 15, default: 5, marksPerQ: 1 },
        { id: 'rearrange', title: 'Re-arrange the words', max: 10, default: 5, marksPerQ: 1 },
        { id: 'drawing', title: 'Diagram', max: 2, default: 1, marksPerQ: 5 }
    ],
    bank: {
        mcq_standard: [
            // Chapter 4: Food We Eat
            { q: "We get pulses from ___", a: "plants", options: ["plants", "animals", "water", "air"] },
            { q: "Which food keeps our bones and teeth strong?", a: "milk", options: ["milk", "wheat", "rice", "sugar"] },
            { q: "Protective foods are ___", a: "Fruits and vegetables", options: ["Fruits and vegetables", "Pizza and burger", "Chips and fries", "Soft drinks"] },
            { q: "What are the two main sources of food?", a: "Plants and animals", options: ["Plants and animals", "Sun and moon", "Soil and water", "Air and wind"] },
            { q: "What are energy-giving foods?", a: "Foods that give energy to work and play", options: ["Foods that give energy to work and play", "Foods that make us sleep", "Foods that make us sick", "Foods that we don't eat"] },
            { q: "Why is eating too much junk food not good?", a: "It can make us sick", options: ["It can make us sick", "It makes us strong", "It makes us tall", "It cleans our body"] },
            { q: "Why do babies and old people eat soft food?", a: "It is easy to chew and digest", options: ["It is easy to chew and digest", "It is very hard", "It looks beautiful", "It is very cold"] },

            // Chapter 5: Water around Us
            { q: "Which is a man-made source of water?", a: "Well", options: ["Well", "River", "Rain", "Ocean"] },
            { q: "Drinking dirty water makes us ___", a: "ill", options: ["ill", "healthy", "strong", "happy"] },
            { q: "Where do we get water from?", a: "Rivers, lakes, and rainwater", options: ["Rivers, lakes, and rainwater", "Sun and moon", "Trees and plants", "Fire and soil"] },

            // Chapter 6: Clothes We Wear
            { q: "We get cotton from ___", a: "cotton plants", options: ["cotton plants", "sheep", "cows", "silk worms"] },

            // Chapter 7: Air
            { q: "Which of these kills germs in the air?", a: "Sunlight", options: ["Sunlight", "Water", "Moonlight", "Wind"] },
            { q: "What do you understand by ventilation?", a: "The way air moves around inside a house", options: ["The way air moves around inside a house", "The way water flows", "The way we cook food", "The way we sleep"] },
            { q: "What is one thing we should do to stay healthy?", a: "Do exercise regularly", options: ["Do exercise regularly", "Eat only junk food", "Sleep all day", "Drink dirty water"] },
            { q: "Why should we grow more plants?", a: "They keep the air clean", options: ["They keep the air clean", "They make the air dirty", "They give us plastic", "They drink all our water"] },

            // Chapter 8: Our Surroundings & Houses
            { q: "We should keep our surroundings ___", a: "clean and green", options: ["clean and green", "dirty and messy", "noisy and crowded", "polluted and dry"] },
            { q: "We should use bags made of ___", a: "cloth and paper", options: ["cloth and paper", "plastic", "glass", "iron"] },
            { q: "Dustbins should be ___", a: "covered", options: ["covered", "open", "broken", "dirty"] },
            { q: "Houses made of thick cloth used in deserts are called ___", a: "Tent", options: ["Tent", "Houseboat", "Igloo", "Duplex"] },
            { q: "Why should windows have wire nettings?", a: "To stop flies and mosquitoes", options: ["To stop flies and mosquitoes", "To stop sunlight", "To stop rain", "To stop air"] },
            { q: "Why are houses in small cities usually big?", a: "Land and building materials are cheaper", options: ["Land and building materials are cheaper", "Land is very expensive", "There are no builders", "People like small houses"] }
        ],
   
     fill_blanks: [
            // Chapter 4: Food We Eat
            { q: "Babies and old people eat ___ food.", a: "soft", options: ["soft", "hard", "spicy", "crunchy"] },
            { q: "People who do not eat meat or fish are called ___.", a: "vegetarians", options: ["vegetarians", "non-vegetarians", "farmers", "doctors"] },
            { q: "___ in food helps us in digestion.", a: "Fibre", options: ["Fibre", "Sugar", "Salt", "Water"] },

            // Chapter 5: Water
            { q: "___ kills the germs present in water.", a: "Boiling", options: ["Boiling", "Freezing", "Cooling", "Washing"] },
            { q: "Drinking or using polluted water is ___ for our health.", a: "bad", options: ["bad", "good", "safe", "healthy"] },
            { q: "We use boat and ship to travell on ___.", a: "Water", options: ["Water", "Land", "Air", "Roads"] },
            { q: "We should drink ___ glasses of water every day.", a: "8 to 10", options: ["8 to 10", "1 to 2", "20 to 30", "50 to 100"] },

            // Chapter 6:House around Us
            { q: "The house we live in is called ___.", a: "Home", options: ["Home", "School", "Office", "Market"] },
            { q: "Some pepole live in a floating house called ___.", a: "Houseboat", options: ["Houseboat", "Igloo", "Tent", "Caravan"] },
            { q: "A house with two floors is called a ___.", a: "duplex", options: ["duplex", "flat", "hut", "tent"] },
            { q: "___ houses are strong houses made of bricks and cement.", a: "Pucca", options: ["Pucca", "Kutcha", "Wooden", "Mud"] },

            // Chapter 7: Clothes We Wear
            { q: "We ___ clothes to make them look neat.", a: "iron", options: ["iron", "wash", "fold", "tear"] },
            { q: "Jute is a ___ fibre.", a: "plant", options: ["plant", "animal", "plastic", "toy"] },
            { q: "We wear ___ in winter.", a: "sweaters", options: ["sweaters", "raincoats", "t-shirts", "shorts"] },

            // Chapter 9: cleanliness and Health
            { q: "Flies and mosquitoes breed on ___ dumps.", a: "garbage", options: ["garbage", "sand", "flower", "toy"] },
            { q: "Clean ___helps to keep us healthy.", a: "surroundings", options: ["surroundings", "classrooms", "dustbins", "clothes"] },
            { q: "We should throw garbage in a ___.", a: "dustbin", options: ["dustbin", "road", "floor", "park"] }
        ],
        true_false: [
            // Chapter 4: Food We Eat
            { q: "Sugar is the body building food.", a: "False", options: ["True", "False"] },
            { q: "Sugar is the energy giving food.", a: "True", options: ["True", "False"] },
            { q: "Burger is a healthy food.", a: "False", options: ["True", "False"] },
            { q: "Meat and fish are body-building food.", a: "True", options: ["True", "False"] },

            // Chapter 5: Water around Us
            { q: "Plants and animals need water to live.", a: "True", options: ["True", "False"] },
                { q: "We should drink dirty water.", a: "False", options: ["True", "False"] },
                { q: "We should use water wisely.", a: "True", options: ["True", "False"] },
                { q: "We should store water in dirty containers.", a: "False", options: ["True", "False"] },
                { q:"We should not throw garbage in water bodies.", a: "True", options: ["True", "False"] },
                { q: "We should use clean water for cooking food.", a: "True", options: ["True", "False"] },
                 { q: "We should use  clean water for drinking.", a: "True", options: ["True", "False"] },
         // Chapter 6 : House Around Us
            { q: "We should keep our surroundings clean.", a: "True", options: ["True", "False"] },
            

            // Chapter 6: Clothes We Wear
            { q: "Woollens keep us warm during winter.", a: "True", options: ["True", "False"] },
            { q: "Nylon and rayon are natural fibres.", a: "False", options: ["True", "False"] },
            { q: "Silk is a shiny fibre produced by silkworms.", a: "True", options: ["True", "False"] },

            // Chapter 7: Air
            { q: "We should sleep for 8 to 9 hours everyday.", a: "True", options: ["True", "False"] },
            { q: "Sunlight kills the germs.", a: "True", options: ["True", "False"] },
            // Chapter 8 : Cleanliness and Health
            { q: "We should use paper or cloth bags.", a: "True", options: ["True", "False"] },
            { q: "We should write on walls.", a: "False", options: ["True", "False"] },
            { q: "We should throw garbage in the open.", a: "False", options: ["True", "False"] },
            { q: "We should keep our surroundings clean.", a: "True", options: ["True", "False"] },
            { q: "We should use dustbins to throw garbage.", a: "True", options: ["True", "False"] },
           { q:"We should sleep  for 8 to 9 hours everyday.", a: "True", options: ["True", "False"] }
            
        ],
        one_word: [
            // Chapter 4: Food We Eat
            { q: "Name two junk foods.", a: "Pizza and Chips", options: ["Pizza and Chips", "Dal and Rice", "Fruits and Vegetables", "Milk and Egg"] },
            { q: "People who eat meat and fish are called ___", a: "Non-vegetarians", options: ["Non-vegetarians", "Vegetarians", "Herbivores", "Farmers"] },

            // Chapter 5: Water
            { q: "Very tiny living beings that make the water impure.", a: "Germs", options: ["Germs", "Fish", "Plants", "Stones"] },
            { q: "The water present below the ground.", a: "Groundwater", options: ["Groundwater", "Rainwater", "River water", "Sea water"] },

            // Chapter 6: Clothes We Wear
            { q: "The soft, thick hair on animals.", a: "Fur", options: ["Fur", "Skin", "Feathers", "Scales"] },
            { q: "Materials made of thread.", a: "Fibres", options: ["Fibres", "Bricks", "Wood", "Glass"] },
            { q: "Cleaning clothes without using water.", a: "Dry clean", options: ["Dry clean", "Washing", "Ironing", "Drying"] },

            // Chapter 7: Air
            { q: "The process in which air and water get dirty.", a: "Pollution", options: ["Pollution", "Purification", "Cleaning", "Boiling"] },

            // Chapter 8: Our Surroundings & Houses
            { q: "A small round house made with blocks of snow.", a: "Igloo", options: ["Igloo", "Tent", "Caravan", "Duplex"] },
            { q: "Houses made of straw, mud and wood.", a: "Kuchcha house", options: ["Kuchcha house", "Pucca house", "Igloo", "Apartment"] }
        ],
        match_following: [
            // Chapter 5: Water
            { q: "Drink", a: "8 to 10 glasses of water" },
            { q: "Clean water", a: "Filtering" },

            // Chapter 6: Clothes We Wear
            { q: "Raincoat", a: "Rainy season" },
            { q: "Pullovers", a: "Winter season" },
            { q: "Ropes", a: "Jute" },
            { q: "Nylon", a: "Manmade fibres" },

            // Chapter 7: Air
            { q: "Breathing dirty air", a: "Makes us ill" },
            { q: "Exercise", a: "Yoga, jogging" },

            // Chapter 8: Our Surroundings & Houses
            { q: "Waste", a: "Dustbin" },
            { q: "Plants", a: "Keep the air clean" }
        ],
        missing_letters: [
            // Chapter 4: Food We Eat
            { q: "Complete the word: M _ L _", a: "MILK", options: ["MILK", "MALK", "MOLK", "MELK"] },
            { q: "Complete the word: M _ A _", a: "MEAT", options: ["MEAT", "MOAT", "MIAT", "MUAT"] },
            { q: "Complete the word: W _ E A T", a: "WHEAT", options: ["WHEAT", "WHOAT", "WHIAT", "WHUAT"] },
            { q: "Complete the word: D _ G E S T", a: "DIGEST", options: ["DIGEST", "DAGEST", "DOGEST", "DUGEST"] },
            { q: "Complete the word: F R _ I T S", a: "FRUITS", options: ["FRUITS", "FROITS", "FREITS", "FRAITS"] },

            // Chapter 5: Water
            { q: "Complete the word: R _ I N W _ TER", a: "RAINWATER", options: ["RAINWATER", "REINWATER", "ROINWATER", "RUNWATER"] },

            // Chapter 6: Clothes We Wear
            { q: "Complete the word: G U M B _ O T S", a: "GUMBOOTS", options: ["GUMBOOTS", "GAMBOOTS", "GEMBOOTS", "GIMBOOTS"] },

            // Chapter 8: Our Surroundings & Houses
            { q: "Complete the word: G _ R B A _ E", a: "GARBAGE", options: ["GARBAGE", "GERBAGE", "GIRBAGE", "GORBAGE"] },
            { q: "Complete the word: R _ B _ ISH", a: "RUBBISH", options: ["RUBBISH", "RABBISH", "REBBISH", "ROBBISH"] },
            { q: "Complete the word: B R _ C K S", a: "BRICKS", options: ["BRICKS", "BROCKS", "BRACKS", "BRECKS"] },
            { q: "Complete the word: D U P _ E X", a: "DUPLEX", options: ["DUPLEX", "DAPLEX", "DIPLEX", "DOPLEX"] }
        ],
        rearrange: [
            // Chapter 4: Food We Eat
            { q: "Unscramble 'RONGST':", a: "STRONG", options: ["STRONG", "STONG", "STRANG", "STRUNG"] },
            { q: "Unscramble 'BREFI':", a: "FIBRE", options: ["FIBRE", "FABRE", "FEBRI", "FOBRE"] },

            // Chapter 5: Water
            { q: "Unscramble 'TERWA':", a: "WATER", options: ["WATER", "WETER", "WOTER", "WITER"] },
            { q: "Unscramble 'LLSWE':", a: "WELLS", options: ["WELLS", "WALLS", "WILLS", "WOLLS"] },

            // Chapter 6: Clothes We Wear
            { q: "Unscramble 'PSHI':", a: "SHIP", options: ["SHIP", "SHEP", "SHAP", "SHOP"] },
            { q: "Unscramble 'KLSI':", a: "SILK", options: ["SILK", "SALK", "SOLK", "SELK"] },

            // Chapter 8: Our Surroundings & Houses
            { q: "Unscramble 'BAGGARE':", a: "GARBAGE", options: ["GARBAGE", "GERBAGE", "GORBAGE", "GIRBAGE"] },
            { q: "Unscramble 'ARPTAMNET':", a: "APARTMENT", options: ["APARTMENT", "APERTMENT", "APORTMENT", "OPARTMENT"] }
        ],
        drawing: [
            // Chapter 4: Food We Eat
            { q: "Draw and name any two foods we get from animals.", a: "[Draw Food from Animals]", options: ["[Draw Food from Animals]"] },
            { q: "Draw any two junk foods and name them.", a: "[Draw Junk Food]", options: ["[Draw Junk Food]"] }
        ]
    }
}
};

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];