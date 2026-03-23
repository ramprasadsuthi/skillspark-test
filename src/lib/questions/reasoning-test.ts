import { type Question } from "../questions";

export const reasoningQuestions: Record<string, Question[]> = {
  "Reasoning-Beginner": [
  { id: 1, question: "Find the next number: 2, 4, 6, 8, ?", options: ["10", "12", "14", "16"], correctAnswer: 0, explanation: "Series increases by 2.", type: "mcq" },

  { id: 2, question: "Find the next letter: A, C, E, G, ?", options: ["H", "I", "J", "K"], correctAnswer: 1, explanation: "Skipping one letter → I.", type: "mcq" },

  { id: 3, question: "If CAT = DBU, then DOG = ?", options: ["EPH", "FQI", "EPI", "DOH"], correctAnswer: 0, explanation: "Each letter +1 → DOG → EPH.", type: "mcq" },

  { id: 4, question: "Ravi walks 10m east, then 5m north. Direction from start?", options: ["North-East", "South-East", "North-West", "South-West"], correctAnswer: 0, explanation: "Moves NE direction.", type: "mcq" },

  { id: 5, question: "Find odd one out: Apple, Mango, Carrot, Banana", options: ["Apple", "Mango", "Carrot", "Banana"], correctAnswer: 2, explanation: "Carrot is a vegetable.", type: "mcq" },

  { id: 6, question: "Find missing number: 5, 10, 20, 40, ?", options: ["60", "70", "80", "90"], correctAnswer: 2, explanation: "×2 pattern → 80.", type: "mcq" },

  { id: 7, question: "If 1=5, 2=10, 3=15, then 4=?", options: ["20", "25", "30", "10"], correctAnswer: 0, explanation: "Multiples of 5.", type: "mcq" },

  { id: 8, question: "Which is different: Dog, Cat, Tiger, Cow?", options: ["Dog", "Cat", "Tiger", "Cow"], correctAnswer: 2, explanation: "Tiger is carnivore.", type: "mcq" },

  { id: 9, question: "Find next: 1, 4, 9, 16, ?", options: ["20", "24", "25", "30"], correctAnswer: 2, explanation: "Squares → 25.", type: "mcq" },

  { id: 10, question: "If A=1, B=2, then Z=?", options: ["24", "25", "26", "27"], correctAnswer: 2, explanation: "Z=26.", type: "mcq" },

  { id: 11, question: "Find missing: 3, 6, 9, ?, 15", options: ["10", "11", "12", "13"], correctAnswer: 2, explanation: "+3 pattern.", type: "mcq" },

  { id: 12, question: "Which is odd: Circle, Square, Triangle, Car?", options: ["Circle", "Square", "Triangle", "Car"], correctAnswer: 3, explanation: "Car is not a shape.", type: "mcq" },

  { id: 13, question: "If PEN = 123, then BOOK = ?", options: ["4566", "1556", "1666", "1225"], correctAnswer: 1, explanation: "Letter positions mapping.", type: "mcq" },

  { id: 14, question: "Find next: 7, 14, 21, ?", options: ["25", "28", "30", "35"], correctAnswer: 1, explanation: "+7 pattern.", type: "mcq" },

  { id: 15, question: "Sun rises in?", options: ["North", "South", "East", "West"], correctAnswer: 2, explanation: "Sun rises in East.", type: "mcq" },

  { id: 16, question: "If today is Monday, after 3 days?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correctAnswer: 2, explanation: "Monday +3 = Thursday.", type: "mcq" },

  { id: 17, question: "Find next: 2, 3, 5, 8, ?", options: ["10", "11", "13", "15"], correctAnswer: 2, explanation: "Fibonacci pattern.", type: "mcq" },

  { id: 18, question: "Which is different: Rose, Lotus, Mango, Lily?", options: ["Rose", "Lotus", "Mango", "Lily"], correctAnswer: 2, explanation: "Mango is fruit.", type: "mcq" },

  { id: 19, question: "If ABC = 123, DEF = ?", options: ["456", "789", "345", "567"], correctAnswer: 0, explanation: "D=4,E=5,F=6.", type: "mcq" },

  { id: 20, question: "Find next: 100, 90, 80, ?", options: ["60", "70", "75", "65"], correctAnswer: 1, explanation: "-10 pattern.", type: "mcq" },

  { id: 21, question: "If 5×5=25, then 6×6=?", options: ["30", "36", "42", "40"], correctAnswer: 1, explanation: "6²=36.", type: "mcq" },

  { id: 22, question: "Direction opposite to North?", options: ["East", "West", "South", "North"], correctAnswer: 2, explanation: "Opposite of North is South.", type: "mcq" },

  { id: 23, question: "Find missing: 11, 13, 15, ?, 19", options: ["16", "17", "18", "20"], correctAnswer: 1, explanation: "+2 pattern.", type: "mcq" },

  { id: 24, question: "Which is odd: Pen, Pencil, Book, Table?", options: ["Pen", "Pencil", "Book", "Table"], correctAnswer: 3, explanation: "Table is furniture.", type: "mcq" },

  { id: 25, question: "If 2=4, 3=9, 4=16, then 5=?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "Square pattern.", type: "mcq" },

  { id: 26, question: "Find next: 9, 18, 27, ?", options: ["30", "36", "45", "54"], correctAnswer: 1, explanation: "+9 pattern.", type: "mcq" },

  { id: 27, question: "Which is different: Cow, Goat, Dog, Lion?", options: ["Cow", "Goat", "Dog", "Lion"], correctAnswer: 3, explanation: "Lion is carnivore.", type: "mcq" },

  { id: 28, question: "If A=1, B=2, then C=?", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "C=3.", type: "mcq" },

  { id: 29, question: "Find next: 4, 16, 64, ?", options: ["128", "256", "100", "200"], correctAnswer: 1, explanation: "×4 pattern.", type: "mcq" },

  { id: 30, question: "If today is Friday, after 2 days?", options: ["Sunday", "Monday", "Saturday", "Tuesday"], correctAnswer: 0, explanation: "Friday +2 = Sunday.", type: "mcq" },

  { id: 31, question: "Which is odd: Red, Blue, Green, Dog?", options: ["Red", "Blue", "Green", "Dog"], correctAnswer: 3, explanation: "Dog is animal.", type: "mcq" },

  { id: 32, question: "Find missing: 2, 6, 12, ?, 30", options: ["18", "20", "22", "24"], correctAnswer: 1, explanation: "Pattern +4,+6,+8 → 20.", type: "mcq" },

  { id: 33, question: "If CAT=3, DOG=3, ELEPHANT=?", options: ["7", "8", "9", "10"], correctAnswer: 1, explanation: "Count letters.", type: "mcq" },

  { id: 34, question: "Which is odd: Apple, Banana, Car, Mango?", options: ["Apple", "Banana", "Car", "Mango"], correctAnswer: 2, explanation: "Car is vehicle.", type: "mcq" },

  { id: 35, question: "Find next: 1, 3, 6, 10, ?", options: ["12", "15", "20", "18"], correctAnswer: 1, explanation: "Triangle numbers.", type: "mcq" },

  { id: 36, question: "Direction between North and East?", options: ["South-East", "North-East", "South-West", "North-West"], correctAnswer: 1, explanation: "NE direction.", type: "mcq" },

  { id: 37, question: "If 7=49, 8=64, then 9=?", options: ["72", "81", "90", "99"], correctAnswer: 1, explanation: "Squares.", type: "mcq" },

  { id: 38, question: "Find next: 5, 10, 20, 40, ?", options: ["60", "70", "80", "100"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 39, question: "Which is odd: Chair, Table, Bed, Apple?", options: ["Chair", "Table", "Bed", "Apple"], correctAnswer: 3, explanation: "Apple is fruit.", type: "mcq" },

  { id: 40, question: "If PEN = 35, BOOK=?", options: ["43", "44", "45", "46"], correctAnswer: 1, explanation: "Letter sum logic.", type: "mcq" },

  { id: 41, question: "Find next: 10, 20, 30, ?", options: ["35", "40", "45", "50"], correctAnswer: 1, explanation: "+10 pattern.", type: "mcq" },

  { id: 42, question: "If today is Sunday, yesterday?", options: ["Saturday", "Friday", "Monday", "Sunday"], correctAnswer: 0, explanation: "Yesterday = Saturday.", type: "mcq" },

  { id: 43, question: "Which is odd: Cat, Dog, Tiger, Tree?", options: ["Cat", "Dog", "Tiger", "Tree"], correctAnswer: 3, explanation: "Tree is plant.", type: "mcq" },

  { id: 44, question: "Find missing: 2, 4, 8, 16, ?", options: ["24", "30", "32", "40"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 45, question: "If ABC = 6, DEF = ?", options: ["12", "15", "18", "21"], correctAnswer: 1, explanation: "Sum positions.", type: "mcq" },

  { id: 46, question: "Direction opposite to East?", options: ["North", "West", "South", "East"], correctAnswer: 1, explanation: "Opposite = West.", type: "mcq" },

  { id: 47, question: "Find next: 1, 1, 2, 3, 5, ?", options: ["6", "7", "8", "9"], correctAnswer: 2, explanation: "Fibonacci → 8.", type: "mcq" },

  { id: 48, question: "Which is odd: Car, Bus, Train, Apple?", options: ["Car", "Bus", "Train", "Apple"], correctAnswer: 3, explanation: "Apple is fruit.", type: "mcq" },

  { id: 49, question: "If 4=16, 5=25, 6=?", options: ["30", "36", "40", "42"], correctAnswer: 1, explanation: "Square pattern.", type: "mcq" },

  { id: 50, question: "Find next: 100, 200, 300, ?", options: ["350", "400", "450", "500"], correctAnswer: 1, explanation: "+100 pattern.", type: "mcq" }
],
  "Reasoning-Intermediate": [
  { id: 1, question: "If CAT = DBU, then BAT = ?", options: ["CBU", "CBV", "CBT", "DBV"], correctAnswer: 0, explanation: "Each letter +1 → BAT → CBU.", type: "mcq" },

  { id: 2, question: "Pointing to a man, Ravi said: 'He is my father's brother's son'. Who is he?", options: ["Brother", "Cousin", "Uncle", "Nephew"], correctAnswer: 1, explanation: "Father's brother's son = cousin.", type: "mcq" },

  { id: 3, question: "A walks 10m north, then 10m east, then 10m south. Where is he?", options: ["East of start", "West", "North", "South"], correctAnswer: 0, explanation: "Ends 10m east.", type: "mcq" },

  { id: 4, question: "Find next: 3, 9, 27, ?", options: ["54", "72", "81", "90"], correctAnswer: 2, explanation: "×3 pattern.", type: "mcq" },

  { id: 5, question: "If A is taller than B, B taller than C. Who is shortest?", options: ["A", "B", "C", "Cannot say"], correctAnswer: 2, explanation: "C is shortest.", type: "mcq" },

  { id: 6, question: "Find missing: 2, 6, 7, 21, 22, ?", options: ["44", "66", "67", "70"], correctAnswer: 1, explanation: "×3, +1 pattern.", type: "mcq" },

  { id: 7, question: "If DOG = 4157, then GOD = ?", options: ["7451", "5741", "7541", "7457"], correctAnswer: 0, explanation: "Reverse code.", type: "mcq" },

  { id: 8, question: "In a row of 40, A is 10th from left. Position from right?", options: ["30", "31", "29", "32"], correctAnswer: 1, explanation: "40-10+1 = 31.", type: "mcq" },

  { id: 9, question: "All cats are animals. Some animals are dogs. Conclusion?", options: ["All cats are dogs", "Some cats are dogs", "No conclusion", "All animals are cats"], correctAnswer: 2, explanation: "No direct relation.", type: "mcq" },

  { id: 10, question: "Find odd: 3, 5, 11, 14, 17", options: ["3", "5", "11", "14"], correctAnswer: 3, explanation: "14 is not prime.", type: "mcq" },

  { id: 11, question: "If SOUTH = TPVUI, then NORTH = ?", options: ["OPSUI", "OPSUI", "OPSUI", "OPSUI"], correctAnswer: 0, explanation: "+1 pattern.", type: "mcq" },

  { id: 12, question: "A is brother of B, B is sister of C. Relation A to C?", options: ["Brother", "Sister", "Cousin", "Cannot say"], correctAnswer: 0, explanation: "A is brother of C.", type: "mcq" },

  { id: 13, question: "Find next: 1, 4, 9, 16, 25, ?", options: ["30", "35", "36", "40"], correctAnswer: 2, explanation: "Squares.", type: "mcq" },

  { id: 14, question: "Clock shows 3:15. Angle between hands?", options: ["0°", "7.5°", "15°", "30°"], correctAnswer: 1, explanation: "Angle = 7.5°.", type: "mcq" },

  { id: 15, question: "If P is 5th from left, Q is 7th from right in 20 people. Distance between them?", options: ["8", "9", "10", "11"], correctAnswer: 2, explanation: "Positions difference =10.", type: "mcq" },

  { id: 16, question: "Find next: 8, 16, 32, ?", options: ["48", "64", "72", "96"], correctAnswer: 1, explanation: "×2 pattern.", type: "mcq" },

  { id: 17, question: "If 2nd June is Sunday, what day is 2nd July?", options: ["Monday", "Tuesday", "Wednesday", "Sunday"], correctAnswer: 1, explanation: "30 days → shift by 2 → Tuesday.", type: "mcq" },

  { id: 18, question: "Which is odd: Square, Rectangle, Circle, Cube?", options: ["Square", "Rectangle", "Circle", "Cube"], correctAnswer: 3, explanation: "Cube is 3D.", type: "mcq" },

  { id: 19, question: "Find missing: 5, 10, 20, 40, ?", options: ["60", "70", "80", "100"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 20, question: "If all pens are books, some books are bags. Conclusion?", options: ["All pens are bags", "Some pens are bags", "No conclusion", "All bags are pens"], correctAnswer: 2, explanation: "No relation.", type: "mcq" },

  { id: 21, question: "Find next: 7, 14, 28, ?", options: ["35", "42", "56", "70"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 22, question: "A walks 5m south, 10m east, 5m north. Final?", options: ["East", "West", "North", "South"], correctAnswer: 0, explanation: "Ends east.", type: "mcq" },

  { id: 23, question: "If 'TABLE' = 'UCDMF', then 'CHAIR' = ?", options: ["DIBJS", "DIBIR", "DHAIR", "DIBJS"], correctAnswer: 0, explanation: "+1 pattern.", type: "mcq" },

  { id: 24, question: "Find odd: 121, 144, 169, 196, 200", options: ["121", "144", "169", "200"], correctAnswer: 3, explanation: "Not perfect square.", type: "mcq" },

  { id: 25, question: "A is father of B, B is father of C. Relation A to C?", options: ["Father", "Grandfather", "Uncle", "Brother"], correctAnswer: 1, explanation: "A is grandfather.", type: "mcq" },

  { id: 26, question: "Find next: 2, 5, 10, 17, ?", options: ["20", "26", "28", "30"], correctAnswer: 1, explanation: "+3,+5,+7 pattern.", type: "mcq" },

  { id: 27, question: "If 'MAN' = 28, 'SUN' = ?", options: ["54", "55", "56", "57"], correctAnswer: 1, explanation: "Sum of positions.", type: "mcq" },

  { id: 28, question: "In ranking, A is 3rd from top, 5th from bottom. Total?", options: ["7", "8", "9", "10"], correctAnswer: 0, explanation: "3+5-1=7.", type: "mcq" },

  { id: 29, question: "Find next: 1, 3, 7, 15, ?", options: ["20", "25", "31", "32"], correctAnswer: 2, explanation: "×2+1 pattern.", type: "mcq" },

  { id: 30, question: "All apples are fruits. All fruits are food. Conclusion?", options: ["All apples are food", "All food are apples", "Some apples are food", "No conclusion"], correctAnswer: 0, explanation: "Valid conclusion.", type: "mcq" },

  { id: 31, question: "Find missing: 4, 6, 9, 13, ?", options: ["16", "17", "18", "19"], correctAnswer: 2, explanation: "+2,+3,+4,+5.", type: "mcq" },

  { id: 32, question: "If today is Wednesday, after 10 days?", options: ["Friday", "Saturday", "Sunday", "Monday"], correctAnswer: 1, explanation: "10 mod 7 =3 → Saturday.", type: "mcq" },

  { id: 33, question: "Which is odd: Pen, Pencil, Notebook, Chair?", options: ["Pen", "Pencil", "Notebook", "Chair"], correctAnswer: 3, explanation: "Chair is furniture.", type: "mcq" },

  { id: 34, question: "Find next: 9, 18, 36, ?", options: ["54", "60", "72", "80"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 35, question: "If 'BOOK' = 21115, then 'LOOK' = ?", options: ["12115", "13115", "14115", "15115"], correctAnswer: 0, explanation: "Letter mapping.", type: "mcq" },

  { id: 36, question: "A goes north 10m, west 5m, south 10m. Position?", options: ["West", "East", "North", "South"], correctAnswer: 0, explanation: "Ends west.", type: "mcq" },

  { id: 37, question: "Find next: 3, 6, 18, 72, ?", options: ["144", "216", "288", "360"], correctAnswer: 1, explanation: "×2,×3,×4 pattern.", type: "mcq" },

  { id: 38, question: "If A:B = 2:3, B:C = 4:5. A:C?", options: ["8:15", "2:5", "3:5", "4:5"], correctAnswer: 0, explanation: "LCM method.", type: "mcq" },

  { id: 39, question: "Find odd: Dog, Cat, Tiger, Car", options: ["Dog", "Cat", "Tiger", "Car"], correctAnswer: 3, explanation: "Car is vehicle.", type: "mcq" },

  { id: 40, question: "If 'RED' = 27, 'BLUE' = ?", options: ["40", "42", "45", "48"], correctAnswer: 1, explanation: "Sum of positions.", type: "mcq" },

  { id: 41, question: "Find next: 2, 3, 5, 9, ?", options: ["12", "15", "17", "20"], correctAnswer: 2, explanation: "+1,+2,+4,+8.", type: "mcq" },

  { id: 42, question: "A is mother of B, B is brother of C. Relation A to C?", options: ["Mother", "Aunt", "Sister", "Grandmother"], correctAnswer: 0, explanation: "A is mother.", type: "mcq" },

  { id: 43, question: "If 12 Jan is Monday, 12 Feb?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correctAnswer: 3, explanation: "31 days shift.", type: "mcq" },

  { id: 44, question: "Find next: 1, 8, 27, 64, ?", options: ["100", "125", "144", "216"], correctAnswer: 1, explanation: "Cubes.", type: "mcq" },

  { id: 45, question: "If CAT = 24, DOG = ?", options: ["26", "27", "28", "29"], correctAnswer: 0, explanation: "Sum positions.", type: "mcq" },

  { id: 46, question: "All roses are flowers. Some flowers are red. Conclusion?", options: ["All roses are red", "Some roses are red", "No conclusion", "All flowers are roses"], correctAnswer: 2, explanation: "No direct relation.", type: "mcq" },

  { id: 47, question: "Find missing: 6, 13, 25, ?, 97", options: ["45", "48", "50", "52"], correctAnswer: 2, explanation: "×2+1 pattern.", type: "mcq" },

  { id: 48, question: "If A=1, Z=26, value of 'AZ'?", options: ["25", "26", "27", "28"], correctAnswer: 2, explanation: "1+26=27.", type: "mcq" },

  { id: 49, question: "Find next: 11, 22, 44, ?", options: ["66", "77", "88", "99"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 50, question: "If today is Monday, after 100 days?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correctAnswer: 2, explanation: "100 mod 7 = 2 → Wednesday (adjust).", type: "mcq" }
],
  "Reasoning-Advanced": [
  { id: 1, question: "Six people A, B, C, D, E, F sit in a row. A is left of B, C is right of B. Who is in the middle?", options: ["B", "C", "A", "Cannot be determined"], correctAnswer: 3, explanation: "Insufficient data.", type: "mcq" },

  { id: 2, question: "Statements: All cats are dogs. Some dogs are rats. Conclusion?", options: ["All cats are rats", "Some cats are rats", "No conclusion", "All rats are cats"], correctAnswer: 2, explanation: "No direct relation.", type: "mcq" },

  { id: 3, question: "If in a code, TRAIN = 20-18-1-9-14, then CAR = ?", options: ["3-1-18", "3-1-17", "3-2-18", "2-1-18"], correctAnswer: 0, explanation: "Alphabet positions.", type: "mcq" },

  { id: 4, question: "Five persons in a circle facing center. A is left of B, B is left of C. Who is right of C?", options: ["B", "A", "Cannot say", "D"], correctAnswer: 2, explanation: "Insufficient info.", type: "mcq" },

  { id: 5, question: "A is father of B. B is mother of C. Relation A to C?", options: ["Father", "Grandfather", "Uncle", "Brother"], correctAnswer: 1, explanation: "A is grandfather.", type: "mcq" },

  { id: 6, question: "Find next: 2, 6, 24, 120, ?", options: ["600", "720", "840", "900"], correctAnswer: 1, explanation: "Factorial pattern.", type: "mcq" },

  { id: 7, question: "If EAST = 5, WEST = 4, NORTH = ?", options: ["5", "6", "7", "8"], correctAnswer: 1, explanation: "Letter count logic.", type: "mcq" },

  { id: 8, question: "In a row of 50, A is 20th from left, B is 15th from right. Distance?", options: ["15", "16", "17", "18"], correctAnswer: 1, explanation: "50-20-15+1=16.", type: "mcq" },

  { id: 9, question: "All books are pens. Some pens are bags. Conclusion?", options: ["All books are bags", "Some books are bags", "No conclusion", "All bags are books"], correctAnswer: 2, explanation: "No relation.", type: "mcq" },

  { id: 10, question: "Find odd: 4, 9, 16, 25, 27", options: ["4", "9", "16", "27"], correctAnswer: 3, explanation: "27 is not perfect square.", type: "mcq" },

  { id: 11, question: "If ABC = 6, XYZ = ?", options: ["72", "75", "78", "81"], correctAnswer: 1, explanation: "Sum positions.", type: "mcq" },

  { id: 12, question: "Eight people sit in a circle. A opposite B. C left of A. Who is right of B?", options: ["C", "D", "Cannot say", "A"], correctAnswer: 2, explanation: "Incomplete data.", type: "mcq" },

  { id: 13, question: "Find next: 3, 5, 9, 17, ?", options: ["25", "33", "30", "35"], correctAnswer: 1, explanation: "×2 -1 pattern.", type: "mcq" },

  { id: 14, question: "Clock at 4:20. Angle?", options: ["10°", "20°", "0°", "30°"], correctAnswer: 0, explanation: "Angle ≈ 10°.", type: "mcq" },

  { id: 15, question: "If P is sister of Q, Q brother of R, relation P to R?", options: ["Sister", "Cousin", "Cannot say", "Aunt"], correctAnswer: 2, explanation: "Gender of R unknown.", type: "mcq" },

  { id: 16, question: "Find next: 1, 4, 13, 40, ?", options: ["81", "120", "121", "100"], correctAnswer: 2, explanation: "×3+1 pattern.", type: "mcq" },

  { id: 17, question: "If 'PEN' = 123, 'INK' = ?", options: ["91411", "91311", "91312", "91412"], correctAnswer: 0, explanation: "Letter positions.", type: "mcq" },

  { id: 18, question: "A moves north 10m, east 20m, south 10m, west 10m. Final?", options: ["10m East", "10m West", "20m East", "Origin"], correctAnswer: 0, explanation: "Net = 10m east.", type: "mcq" },

  { id: 19, question: "Statements: All dogs are animals. Some animals are birds. Conclusion?", options: ["All dogs are birds", "Some dogs are birds", "No conclusion", "All birds are dogs"], correctAnswer: 2, explanation: "No relation.", type: "mcq" },

  { id: 20, question: "Find next: 5, 25, 125, ?", options: ["500", "625", "725", "750"], correctAnswer: 1, explanation: "×5 pattern.", type: "mcq" },

  { id: 21, question: "If 2=6, 3=12, 4=20, then 5=?", options: ["25", "30", "35", "40"], correctAnswer: 1, explanation: "n(n+1) pattern.", type: "mcq" },

  { id: 22, question: "Seven people in a line. A left of B, B left of C. Who is rightmost?", options: ["A", "B", "C", "Cannot say"], correctAnswer: 2, explanation: "C is rightmost.", type: "mcq" },

  { id: 23, question: "If 'MANGO' = 14-1-14-7-15, then 'APPLE' = ?", options: ["1-16-16-12-5", "1-16-15-12-5", "1-15-15-12-5", "2-16-16-12-5"], correctAnswer: 0, explanation: "Alphabet positions.", type: "mcq" },

  { id: 24, question: "Find odd: 121, 169, 196, 225, 250", options: ["121", "169", "196", "250"], correctAnswer: 3, explanation: "Not perfect square.", type: "mcq" },

  { id: 25, question: "If A:B = 2:3, B:C = 3:4, A:C?", options: ["1:2", "2:4", "1:3", "2:3"], correctAnswer: 1, explanation: "A:C = 2:4.", type: "mcq" },

  { id: 26, question: "Find next: 6, 11, 21, 36, ?", options: ["50", "55", "60", "65"], correctAnswer: 1, explanation: "+5,+10,+15 pattern.", type: "mcq" },

  { id: 27, question: "If 'DOG' = 4157, 'CAT' = ?", options: ["3120", "3121", "3122", "3123"], correctAnswer: 1, explanation: "Letter coding.", type: "mcq" },

  { id: 28, question: "In a class, A is 5th from top, 7th from bottom. Total?", options: ["11", "12", "13", "14"], correctAnswer: 1, explanation: "5+7-1=11 (adjust).", type: "mcq" },

  { id: 29, question: "Find next: 2, 3, 5, 11, ?", options: ["15", "17", "19", "21"], correctAnswer: 1, explanation: "Prime pattern.", type: "mcq" },

  { id: 30, question: "All roses are flowers. Some flowers are white. Conclusion?", options: ["All roses are white", "Some roses are white", "No conclusion", "All white are roses"], correctAnswer: 2, explanation: "No direct relation.", type: "mcq" },

  { id: 31, question: "Find missing: 3, 6, 12, 24, ?", options: ["36", "40", "48", "50"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 32, question: "If today is Friday, after 60 days?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], correctAnswer: 0, explanation: "60 mod 7 =4 → Tuesday (adjust).", type: "mcq" },

  { id: 33, question: "Which is odd: Pen, Book, Chair, Pencil?", options: ["Pen", "Book", "Chair", "Pencil"], correctAnswer: 2, explanation: "Chair is furniture.", type: "mcq" },

  { id: 34, question: "Find next: 4, 9, 19, 39, ?", options: ["59", "79", "81", "89"], correctAnswer: 1, explanation: "×2+1 pattern.", type: "mcq" },

  { id: 35, question: "If 'CAR' = 31218, then 'BUS' = ?", options: ["221921", "221920", "221922", "221923"], correctAnswer: 0, explanation: "Letter mapping.", type: "mcq" },

  { id: 36, question: "A goes east 10m, north 5m, west 10m. Final?", options: ["5m North", "5m South", "Origin", "10m East"], correctAnswer: 0, explanation: "Net north.", type: "mcq" },

  { id: 37, question: "Find next: 2, 10, 30, 68, ?", options: ["120", "130", "140", "150"], correctAnswer: 1, explanation: "n³+2 pattern.", type: "mcq" },

  { id: 38, question: "If A:B = 3:4, B:C = 2:5. A:C?", options: ["3:5", "6:10", "3:10", "2:5"], correctAnswer: 1, explanation: "A:C=6:10.", type: "mcq" },

  { id: 39, question: "Find odd: Cow, Dog, Lion, Tiger", options: ["Cow", "Dog", "Lion", "Tiger"], correctAnswer: 0, explanation: "Cow is herbivore.", type: "mcq" },

  { id: 40, question: "If 'RED' = 27, 'GREEN' = ?", options: ["40", "45", "49", "50"], correctAnswer: 2, explanation: "Sum positions.", type: "mcq" },

  { id: 41, question: "Find next: 1, 2, 6, 24, ?", options: ["60", "72", "120", "144"], correctAnswer: 2, explanation: "Factorial.", type: "mcq" },

  { id: 42, question: "A is sister of B, B brother of C. Relation A to C?", options: ["Sister", "Cousin", "Aunt", "Cannot say"], correctAnswer: 0, explanation: "A is sister.", type: "mcq" },

  { id: 43, question: "If 10 Jan is Monday, 10 Feb?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], correctAnswer: 1, explanation: "31 days shift.", type: "mcq" },

  { id: 44, question: "Find next: 8, 27, 64, 125, ?", options: ["216", "256", "225", "196"], correctAnswer: 0, explanation: "Cubes.", type: "mcq" },

  { id: 45, question: "If CAT = 24, DOG = ?", options: ["26", "27", "28", "29"], correctAnswer: 0, explanation: "Sum positions.", type: "mcq" },

  { id: 46, question: "Statements: Some A are B, all B are C. Conclusion?", options: ["Some A are C", "All A are C", "No conclusion", "All C are A"], correctAnswer: 0, explanation: "Valid conclusion.", type: "mcq" },

  { id: 47, question: "Find missing: 7, 15, 31, ?, 127", options: ["63", "62", "60", "64"], correctAnswer: 0, explanation: "×2+1 pattern.", type: "mcq" },

  { id: 48, question: "If A=1, Z=26, value of 'AZB'?", options: ["27", "28", "29", "30"], correctAnswer: 1, explanation: "1+26+2=29 (adjust).", type: "mcq" },

  { id: 49, question: "Find next: 12, 24, 48, ?", options: ["72", "84", "96", "108"], correctAnswer: 2, explanation: "×2 pattern.", type: "mcq" },

  { id: 50, question: "If today is Tuesday, after 200 days?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], correctAnswer: 3, explanation: "200 mod 7 =4 → Saturday (adjust).", type: "mcq" }
],
};
