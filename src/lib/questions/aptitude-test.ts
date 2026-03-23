import { type Question } from "../questions";

export const aptitudeQuestions: Record<string, Question[]> = {
  "Aptitude-Beginner": [
  { id: 1, question: "What is 25% of 200?", options: ["40", "50", "25", "75"], correctAnswer: 1, explanation: "25% of 200 = (25/100)*200 = 50.", type: "mcq" },

  { id: 2, question: "What is the average of 10, 20, 30?", options: ["20", "25", "15", "30"], correctAnswer: 0, explanation: "Average = (10+20+30)/3 = 20.", type: "mcq" },

  { id: 3, question: "If a number is multiplied by 2 and becomes 40, what is the number?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "x*2=40 → x=20.", type: "mcq" },

  { id: 4, question: "What is 15% of 300?", options: ["30", "60", "45", "75"], correctAnswer: 2, explanation: "15% of 300 = 45.", type: "mcq" },

  { id: 5, question: "What is the ratio of 4:8 simplified?", options: ["1:2", "2:4", "4:1", "8:4"], correctAnswer: 0, explanation: "Divide both by 4 → 1:2.", type: "mcq" },

  { id: 6, question: "What is 7 × 8?", options: ["48", "54", "56", "64"], correctAnswer: 2, explanation: "7×8 = 56.", type: "mcq" },

  { id: 7, question: "If x = 5, what is x²?", options: ["10", "15", "20", "25"], correctAnswer: 3, explanation: "5² = 25.", type: "mcq" },

  { id: 8, question: "What is the value of 100 ÷ 4?", options: ["20", "25", "30", "40"], correctAnswer: 1, explanation: "100 ÷ 4 = 25.", type: "mcq" },

  { id: 9, question: "What is 10% of 500?", options: ["50", "25", "75", "100"], correctAnswer: 0, explanation: "10% of 500 = 50.", type: "mcq" },

  { id: 10, question: "What is the sum of first 5 natural numbers?", options: ["10", "20", "15", "25"], correctAnswer: 2, explanation: "1+2+3+4+5 = 15.", type: "mcq" },

  { id: 11, question: "If a pen costs ₹10, what is the cost of 5 pens?", options: ["40", "50", "60", "45"], correctAnswer: 1, explanation: "5×10 = 50.", type: "mcq" },

  { id: 12, question: "What is 3/4 of 100?", options: ["75", "50", "25", "80"], correctAnswer: 0, explanation: "3/4 of 100 = 75.", type: "mcq" },

  { id: 13, question: "What is 9 × 9?", options: ["72", "81", "90", "99"], correctAnswer: 1, explanation: "9×9 = 81.", type: "mcq" },

  { id: 14, question: "If 2x = 10, what is x?", options: ["2", "3", "5", "10"], correctAnswer: 2, explanation: "x=5.", type: "mcq" },

  { id: 15, question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: 2, explanation: "√64 = 8.", type: "mcq" },

  { id: 16, question: "What is 50% of 80?", options: ["30", "40", "50", "60"], correctAnswer: 1, explanation: "Half of 80 = 40.", type: "mcq" },

  { id: 17, question: "What is 12 × 5?", options: ["50", "55", "60", "65"], correctAnswer: 2, explanation: "12×5 = 60.", type: "mcq" },

  { id: 18, question: "What is 1000 ÷ 10?", options: ["10", "50", "100", "200"], correctAnswer: 2, explanation: "1000 ÷ 10 = 100.", type: "mcq" },

  { id: 19, question: "What is 20% of 150?", options: ["20", "25", "30", "35"], correctAnswer: 2, explanation: "20% of 150 = 30.", type: "mcq" },

  { id: 20, question: "What is the average of 2, 4, 6, 8?", options: ["4", "5", "6", "7"], correctAnswer: 1, explanation: "Average = 20/4 = 5.", type: "mcq" },

  { id: 21, question: "What is 6²?", options: ["30", "36", "42", "48"], correctAnswer: 1, explanation: "6² = 36.", type: "mcq" },

  { id: 22, question: "What is 8 × 7?", options: ["54", "56", "64", "72"], correctAnswer: 1, explanation: "8×7 = 56.", type: "mcq" },

  { id: 23, question: "If 5x = 25, find x.", options: ["2", "3", "5", "10"], correctAnswer: 2, explanation: "x = 5.", type: "mcq" },

  { id: 24, question: "What is 1/2 of 60?", options: ["20", "25", "30", "35"], correctAnswer: 2, explanation: "Half of 60 = 30.", type: "mcq" },

  { id: 25, question: "What is 15 + 25?", options: ["30", "35", "40", "45"], correctAnswer: 2, explanation: "15+25=40.", type: "mcq" },

  { id: 26, question: "What is 90 ÷ 3?", options: ["20", "25", "30", "35"], correctAnswer: 2, explanation: "90÷3=30.", type: "mcq" },

  { id: 27, question: "What is 11 × 11?", options: ["111", "121", "131", "141"], correctAnswer: 1, explanation: "11×11=121.", type: "mcq" },

  { id: 28, question: "What is 40% of 50?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "40% of 50 = 20.", type: "mcq" },

  { id: 29, question: "What is 14 + 16?", options: ["28", "30", "32", "34"], correctAnswer: 1, explanation: "14+16=30.", type: "mcq" },

  { id: 30, question: "What is 100 ÷ 5?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "100÷5=20.", type: "mcq" },

  { id: 31, question: "What is 9²?", options: ["72", "81", "90", "99"], correctAnswer: 1, explanation: "9²=81.", type: "mcq" },

  { id: 32, question: "What is 5 × 6?", options: ["25", "30", "35", "40"], correctAnswer: 1, explanation: "5×6=30.", type: "mcq" },

  { id: 33, question: "What is 3/5 of 100?", options: ["40", "50", "60", "70"], correctAnswer: 2, explanation: "3/5 of 100 = 60.", type: "mcq" },

  { id: 34, question: "What is 18 + 12?", options: ["28", "30", "32", "34"], correctAnswer: 1, explanation: "18+12=30.", type: "mcq" },

  { id: 35, question: "What is 6 × 9?", options: ["48", "54", "60", "66"], correctAnswer: 1, explanation: "6×9=54.", type: "mcq" },

  { id: 36, question: "What is 200 ÷ 20?", options: ["5", "10", "15", "20"], correctAnswer: 1, explanation: "200÷20=10.", type: "mcq" },

  { id: 37, question: "What is 12²?", options: ["124", "144", "154", "164"], correctAnswer: 1, explanation: "12²=144.", type: "mcq" },

  { id: 38, question: "What is 25% of 80?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "25% of 80 = 20.", type: "mcq" },

  { id: 39, question: "What is 13 + 7?", options: ["18", "19", "20", "21"], correctAnswer: 2, explanation: "13+7=20.", type: "mcq" },

  { id: 40, question: "What is 45 ÷ 5?", options: ["7", "8", "9", "10"], correctAnswer: 2, explanation: "45÷5=9.", type: "mcq" },

  { id: 41, question: "What is 16 × 2?", options: ["28", "30", "32", "34"], correctAnswer: 2, explanation: "16×2=32.", type: "mcq" },

  { id: 42, question: "What is 50 + 25?", options: ["65", "70", "75", "80"], correctAnswer: 2, explanation: "50+25=75.", type: "mcq" },

  { id: 43, question: "What is 100% of 70?", options: ["50", "60", "70", "80"], correctAnswer: 2, explanation: "100% of 70 = 70.", type: "mcq" },

  { id: 44, question: "What is 81 ÷ 9?", options: ["7", "8", "9", "10"], correctAnswer: 2, explanation: "81÷9=9.", type: "mcq" },

  { id: 45, question: "What is 7²?", options: ["42", "45", "49", "56"], correctAnswer: 2, explanation: "7²=49.", type: "mcq" },

  { id: 46, question: "What is 2/3 of 90?", options: ["50", "55", "60", "65"], correctAnswer: 2, explanation: "2/3 of 90 = 60.", type: "mcq" },

  { id: 47, question: "What is 19 + 1?", options: ["18", "19", "20", "21"], correctAnswer: 2, explanation: "19+1=20.", type: "mcq" },

  { id: 48, question: "What is 72 ÷ 8?", options: ["8", "9", "10", "12"], correctAnswer: 1, explanation: "72÷8=9.", type: "mcq" },

  { id: 49, question: "What is 5³?", options: ["25", "75", "100", "125"], correctAnswer: 3, explanation: "5×5×5=125.", type: "mcq" },

  { id: 50, question: "What is 120 ÷ 6?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "120÷6=20.", type: "mcq" }
],
  "Aptitude-Intermediate": [
  { id: 1, question: "If CP = ₹100 and SP = ₹120, what is the profit %?", options: ["10%", "15%", "20%", "25%"], correctAnswer: 2, explanation: "Profit = 20 → 20% profit.", type: "mcq" },

  { id: 2, question: "Simple Interest on ₹1000 at 10% for 2 years?", options: ["200", "150", "250", "300"], correctAnswer: 0, explanation: "SI = (1000×10×2)/100 = 200.", type: "mcq" },

  { id: 3, question: "A can do work in 10 days. In how many days can he do half work?", options: ["10", "5", "15", "20"], correctAnswer: 1, explanation: "Half work = 5 days.", type: "mcq" },

  { id: 4, question: "Speed = 60 km/hr, time = 2 hrs. Distance?", options: ["100 km", "120 km", "140 km", "150 km"], correctAnswer: 1, explanation: "Distance = 60×2 = 120 km.", type: "mcq" },

  { id: 5, question: "If ratio is 2:3 and total is 100, first value?", options: ["40", "50", "60", "20"], correctAnswer: 0, explanation: "(2/5)*100 = 40.", type: "mcq" },

  { id: 6, question: "Compound Interest on ₹1000 at 10% for 2 years?", options: ["210", "220", "200", "230"], correctAnswer: 0, explanation: "CI = 1000*(1.1)^2 - 1000 = 210.", type: "mcq" },

  { id: 7, question: "A train travels 180 km in 3 hours. Speed?", options: ["50", "60", "70", "80"], correctAnswer: 1, explanation: "Speed = 180/3 = 60 km/hr.", type: "mcq" },

  { id: 8, question: "If 20% of a number is 50, find the number.", options: ["200", "250", "300", "150"], correctAnswer: 1, explanation: "Number = 50×100/20 = 250.", type: "mcq" },

  { id: 9, question: "A can do work in 12 days, B in 6 days. Together?", options: ["4 days", "5 days", "6 days", "3 days"], correctAnswer: 0, explanation: "LCM method → 4 days.", type: "mcq" },

  { id: 10, question: "If marked price is ₹500 and discount is 10%, SP?", options: ["400", "450", "480", "420"], correctAnswer: 1, explanation: "SP = 500 - 50 = 450.", type: "mcq" },

  { id: 11, question: "Average of 5 numbers is 20. Total?", options: ["80", "90", "100", "120"], correctAnswer: 2, explanation: "Total = 20×5 = 100.", type: "mcq" },

  { id: 12, question: "If 3x = 12, find x.", options: ["2", "3", "4", "6"], correctAnswer: 2, explanation: "x=4.", type: "mcq" },

  { id: 13, question: "If profit is 25%, SP = ₹125, CP?", options: ["80", "90", "100", "110"], correctAnswer: 2, explanation: "CP = 100.", type: "mcq" },

  { id: 14, question: "A man travels 30 km at 60 km/hr. Time?", options: ["0.5 hr", "1 hr", "2 hr", "1.5 hr"], correctAnswer: 0, explanation: "Time = 30/60 = 0.5 hr.", type: "mcq" },

  { id: 15, question: "If ratio 4:5, total 180, second value?", options: ["80", "100", "120", "60"], correctAnswer: 1, explanation: "(5/9)*180 = 100.", type: "mcq" },

  { id: 16, question: "SI for ₹500 at 8% for 2 years?", options: ["80", "70", "60", "90"], correctAnswer: 0, explanation: "SI = 80.", type: "mcq" },

  { id: 17, question: "If 25% of x = 75, x?", options: ["200", "250", "300", "150"], correctAnswer: 2, explanation: "x = 300.", type: "mcq" },

  { id: 18, question: "Speed 40 km/hr for 5 hrs. Distance?", options: ["150", "200", "180", "220"], correctAnswer: 1, explanation: "Distance = 200.", type: "mcq" },

  { id: 19, question: "A can do work in 15 days. 1 day work?", options: ["1/10", "1/12", "1/15", "1/20"], correctAnswer: 2, explanation: "1/15 work per day.", type: "mcq" },

  { id: 20, question: "Discount 20% on ₹1000. SP?", options: ["800", "700", "750", "850"], correctAnswer: 0, explanation: "SP = 800.", type: "mcq" },

  { id: 21, question: "Average of 10 numbers is 15. Sum?", options: ["120", "150", "180", "200"], correctAnswer: 1, explanation: "Sum = 150.", type: "mcq" },

  { id: 22, question: "If x:y = 3:2 and x=60, y?", options: ["30", "40", "50", "20"], correctAnswer: 1, explanation: "y=40.", type: "mcq" },

  { id: 23, question: "CI for ₹1000 at 10% for 1 year?", options: ["100", "110", "90", "120"], correctAnswer: 0, explanation: "CI = 100.", type: "mcq" },

  { id: 24, question: "Time = Distance/Speed. If D=100, S=50?", options: ["1 hr", "2 hr", "3 hr", "4 hr"], correctAnswer: 1, explanation: "Time = 2 hrs.", type: "mcq" },

  { id: 25, question: "Profit ₹50, CP ₹200. Profit %?", options: ["20%", "25%", "30%", "35%"], correctAnswer: 1, explanation: "Profit% = 25.", type: "mcq" },

  { id: 26, question: "A+B can do work in 6 days. Daily work?", options: ["1/5", "1/6", "1/7", "1/8"], correctAnswer: 1, explanation: "1/6 work per day.", type: "mcq" },

  { id: 27, question: "If 40% of number = 80, number?", options: ["200", "150", "180", "250"], correctAnswer: 0, explanation: "Number = 200.", type: "mcq" },

  { id: 28, question: "Speed = 80 km/hr, time = 3 hrs. Distance?", options: ["200", "220", "240", "260"], correctAnswer: 2, explanation: "Distance = 240.", type: "mcq" },

  { id: 29, question: "Ratio 5:7 total 120, first value?", options: ["50", "60", "70", "40"], correctAnswer: 0, explanation: "First = 50.", type: "mcq" },

  { id: 30, question: "SI on ₹2000 at 5% for 2 yrs?", options: ["150", "200", "250", "300"], correctAnswer: 1, explanation: "SI = 200.", type: "mcq" },

  { id: 31, question: "If CP ₹400, SP ₹360, loss %?", options: ["10%", "15%", "20%", "5%"], correctAnswer: 0, explanation: "Loss% = 10.", type: "mcq" },

  { id: 32, question: "A completes work in 8 days. Half work?", options: ["4", "6", "2", "8"], correctAnswer: 0, explanation: "Half work = 4 days.", type: "mcq" },

  { id: 33, question: "If 10% increase on ₹500?", options: ["520", "550", "530", "540"], correctAnswer: 1, explanation: "Increase = 50 → 550.", type: "mcq" },

  { id: 34, question: "Average of 4 numbers = 25. Total?", options: ["80", "90", "100", "110"], correctAnswer: 2, explanation: "Total = 100.", type: "mcq" },

  { id: 35, question: "Distance 150 km, speed 50 km/hr. Time?", options: ["2 hr", "3 hr", "4 hr", "5 hr"], correctAnswer: 1, explanation: "Time = 3 hrs.", type: "mcq" },

  { id: 36, question: "If 3/4 of number = 60, number?", options: ["80", "90", "70", "100"], correctAnswer: 0, explanation: "Number = 80.", type: "mcq" },

  { id: 37, question: "Profit 10%, CP ₹200. SP?", options: ["210", "220", "230", "240"], correctAnswer: 1, explanation: "SP = 220.", type: "mcq" },

  { id: 38, question: "If A alone takes 20 days, daily work?", options: ["1/10", "1/15", "1/20", "1/25"], correctAnswer: 2, explanation: "1/20 per day.", type: "mcq" },

  { id: 39, question: "Speed 90 km/hr, time 2 hrs. Distance?", options: ["160", "170", "180", "190"], correctAnswer: 2, explanation: "Distance = 180.", type: "mcq" },

  { id: 40, question: "If discount 25% on ₹200?", options: ["150", "160", "170", "140"], correctAnswer: 0, explanation: "SP = 150.", type: "mcq" },

  { id: 41, question: "Average of 3 numbers is 30. Sum?", options: ["60", "70", "80", "90"], correctAnswer: 3, explanation: "Sum = 90.", type: "mcq" },

  { id: 42, question: "Ratio 2:5 total 140, second?", options: ["80", "90", "100", "70"], correctAnswer: 2, explanation: "Second = 100.", type: "mcq" },

  { id: 43, question: "SI on ₹1000 at 5% for 3 yrs?", options: ["100", "150", "200", "250"], correctAnswer: 1, explanation: "SI = 150.", type: "mcq" },

  { id: 44, question: "If 50% of number = 100?", options: ["150", "200", "250", "300"], correctAnswer: 1, explanation: "Number = 200.", type: "mcq" },

  { id: 45, question: "Speed 100 km/hr for 1.5 hrs. Distance?", options: ["120", "130", "150", "160"], correctAnswer: 2, explanation: "Distance = 150.", type: "mcq" },

  { id: 46, question: "Loss ₹40, CP ₹200. Loss%?", options: ["10%", "20%", "15%", "25%"], correctAnswer: 1, explanation: "Loss% = 20.", type: "mcq" },

  { id: 47, question: "A+B work = 1/4 per day. Days?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "Total days = 4.", type: "mcq" },

  { id: 48, question: "If 20% increase on 200?", options: ["220", "230", "240", "250"], correctAnswer: 2, explanation: "Increase = 40 → 240.", type: "mcq" },

  { id: 49, question: "Distance 300 km, speed 60 km/hr. Time?", options: ["4", "5", "6", "7"], correctAnswer: 1, explanation: "Time = 5 hrs.", type: "mcq" },

  { id: 50, question: "CI for ₹1000 at 10% for 2 yrs?", options: ["200", "210", "220", "230"], correctAnswer: 1, explanation: "CI = 210.", type: "mcq" }
],
  "Aptitude-Advanced": [
  { id: 1, question: "A can do a work in 12 days and B in 18 days. Together they work for 4 days. Remaining work?", options: ["1/3", "5/9", "4/9", "2/3"], correctAnswer: 1, explanation: "Work done = 4*(5/36)=20/36=5/9 → remaining = 5/9.", type: "mcq" },

  { id: 2, question: "A pipe fills a tank in 6 hours and another empties it in 8 hours. Time to fill?", options: ["24 hrs", "20 hrs", "18 hrs", "22 hrs"], correctAnswer: 0, explanation: "Net = 1/6 -1/8 =1/24 → 24 hrs.", type: "mcq" },

  { id: 3, question: "Boat speed in still water = 10 km/hr, stream = 2 km/hr. Downstream speed?", options: ["8", "10", "12", "14"], correctAnswer: 2, explanation: "10+2 = 12 km/hr.", type: "mcq" },

  { id: 4, question: "CP = ₹500, gain = 20%. SP?", options: ["550", "600", "650", "700"], correctAnswer: 1, explanation: "SP = 500×1.2 = 600.", type: "mcq" },

  { id: 5, question: "If 20% discount gives SP ₹800, MP?", options: ["900", "1000", "1100", "1200"], correctAnswer: 1, explanation: "MP = 800/0.8 = 1000.", type: "mcq" },

  { id: 6, question: "CI - SI for 2 years on ₹1000 at 10%?", options: ["10", "20", "15", "25"], correctAnswer: 0, explanation: "Difference = ₹10.", type: "mcq" },

  { id: 7, question: "A train 100m long crosses a pole in 5 sec. Speed?", options: ["72 km/hr", "60 km/hr", "80 km/hr", "90 km/hr"], correctAnswer: 0, explanation: "Speed = 100/5=20 m/s = 72 km/hr.", type: "mcq" },

  { id: 8, question: "Ratio of milk to water = 3:2. Total 25L. Milk?", options: ["10", "12", "15", "18"], correctAnswer: 2, explanation: "(3/5)*25 = 15.", type: "mcq" },

  { id: 9, question: "A man increases salary by 20% then decreases by 20%. Net change?", options: ["0%", "-4%", "+4%", "-2%"], correctAnswer: 1, explanation: "Net loss = 4%.", type: "mcq" },

  { id: 10, question: "A can do work in 15 days, B in 10 days. Together?", options: ["5", "6", "7", "8"], correctAnswer: 1, explanation: "LCM method → 6 days.", type: "mcq" },

  { id: 11, question: "If x+y=10 and xy=21, find x²+y².", options: ["58", "60", "62", "64"], correctAnswer: 0, explanation: "(x+y)² -2xy =100-42=58.", type: "mcq" },

  { id: 12, question: "A train crosses 200m platform in 10 sec, length 100m. Speed?", options: ["108 km/hr", "90 km/hr", "72 km/hr", "120 km/hr"], correctAnswer: 0, explanation: "Total =300m →30 m/s=108 km/hr.", type: "mcq" },

  { id: 13, question: "Pipe fills tank in 4 hrs. After 2 hrs another pipe empties in 8 hrs. Total time?", options: ["6 hrs", "8 hrs", "10 hrs", "12 hrs"], correctAnswer: 1, explanation: "Remaining filled at slower rate.", type: "mcq" },

  { id: 14, question: "If CP:SP = 4:5, profit %?", options: ["20%", "25%", "30%", "15%"], correctAnswer: 1, explanation: "Profit = 1/4 = 25%.", type: "mcq" },

  { id: 15, question: "Boat goes upstream 6 km in 2 hrs. Speed of stream = 1 km/hr. Boat speed?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "Upstream speed = 3 → boat = 4.", type: "mcq" },

  { id: 16, question: "If A:B = 2:3 and B:C = 4:5, A:C?", options: ["8:15", "2:5", "3:5", "4:5"], correctAnswer: 0, explanation: "A:C = 8:15.", type: "mcq" },

  { id: 17, question: "A man travels 120 km at 60 km/hr and returns at 40 km/hr. Avg speed?", options: ["48", "50", "45", "52"], correctAnswer: 0, explanation: "Avg = 2xy/(x+y)=48.", type: "mcq" },

  { id: 18, question: "Mixture 40L milk + water ratio 3:1. Water?", options: ["10", "15", "20", "25"], correctAnswer: 0, explanation: "Water =10L.", type: "mcq" },

  { id: 19, question: "Simple interest = ₹400, principal ₹2000, time 2 yrs. Rate?", options: ["8%", "10%", "12%", "5%"], correctAnswer: 1, explanation: "Rate=10%.", type: "mcq" },

  { id: 20, question: "A does 1/3 work, B 1/4 work. Remaining?", options: ["1/12", "5/12", "7/12", "3/4"], correctAnswer: 1, explanation: "Remaining = 5/12.", type: "mcq" },

  { id: 21, question: "If x² - 9x + 20 = 0, x?", options: ["4,5", "3,6", "2,10", "1,20"], correctAnswer: 0, explanation: "Factors = (x-4)(x-5).", type: "mcq" },

  { id: 22, question: "Train speed = 54 km/hr. Time to cross 150m platform?", options: ["10 sec", "12 sec", "15 sec", "20 sec"], correctAnswer: 2, explanation: "Speed=15m/s → time=10 sec (adjusted).", type: "mcq" },

  { id: 23, question: "If cost increases by 25%, consumption decreases by?", options: ["20%", "25%", "15%", "30%"], correctAnswer: 0, explanation: "Inverse relation.", type: "mcq" },

  { id: 24, question: "A can complete in 20 days, B in 30 days. Together work for 5 days. Remaining?", options: ["1/4", "1/2", "2/3", "3/4"], correctAnswer: 1, explanation: "Remaining = 1/2.", type: "mcq" },

  { id: 25, question: "If 20% of x = 30% of y, ratio x:y?", options: ["2:3", "3:2", "1:1", "4:5"], correctAnswer: 1, explanation: "x/y=3/2.", type: "mcq" },

  { id: 26, question: "Boat downstream speed = 15, upstream = 5. Stream speed?", options: ["5", "6", "7", "8"], correctAnswer: 0, explanation: "(15-5)/2=5.", type: "mcq" },

  { id: 27, question: "CI for ₹1000 at 10% for 3 yrs?", options: ["300", "310", "331", "350"], correctAnswer: 2, explanation: "CI = 331.", type: "mcq" },

  { id: 28, question: "Average of 5 numbers is 30. Remove one (20). New avg?", options: ["32", "35", "30", "28"], correctAnswer: 0, explanation: "New avg=32.", type: "mcq" },

  { id: 29, question: "A train covers 180 km in 2 hrs. Speed?", options: ["80", "85", "90", "95"], correctAnswer: 2, explanation: "Speed=90.", type: "mcq" },

  { id: 30, question: "If SP ₹120, loss 20%. CP?", options: ["140", "150", "160", "180"], correctAnswer: 1, explanation: "CP=150.", type: "mcq" },

  { id: 31, question: "A+B+C = 6 days. A+B=10 days. C alone?", options: ["12", "15", "20", "30"], correctAnswer: 1, explanation: "C=15 days.", type: "mcq" },

  { id: 32, question: "If x:y=4:5, y:z=2:3. x:z?", options: ["8:15", "4:3", "5:6", "6:5"], correctAnswer: 0, explanation: "x:z=8:15.", type: "mcq" },

  { id: 33, question: "Discount 20% + 10% effective?", options: ["28%", "30%", "25%", "32%"], correctAnswer: 0, explanation: "Net discount=28%.", type: "mcq" },

  { id: 34, question: "Time = 5 hrs, speed 40 km/hr. Distance?", options: ["180", "200", "220", "250"], correctAnswer: 1, explanation: "Distance=200.", type: "mcq" },

  { id: 35, question: "A pipe fills tank in 3 hrs, B empties in 6 hrs. Time?", options: ["3", "4", "6", "2"], correctAnswer: 1, explanation: "Net = 1/6 → 6 hrs.", type: "mcq" },

  { id: 36, question: "If x²=49, x?", options: ["±7", "7", "-7", "0"], correctAnswer: 0, explanation: "x=±7.", type: "mcq" },

  { id: 37, question: "Profit ₹200, CP ₹800. Profit%?", options: ["20%", "25%", "30%", "15%"], correctAnswer: 1, explanation: "Profit%=25%.", type: "mcq" },

  { id: 38, question: "Train 120m crosses bridge 180m in 15 sec. Speed?", options: ["72", "60", "80", "90"], correctAnswer: 0, explanation: "Speed=72 km/hr.", type: "mcq" },

  { id: 39, question: "Mixture 50L, ratio 4:1. Water?", options: ["10", "15", "20", "25"], correctAnswer: 0, explanation: "Water=10.", type: "mcq" },

  { id: 40, question: "If 10% increase then 10% decrease. Net?", options: ["0", "-1%", "+1%", "-2%"], correctAnswer: 1, explanation: "Net loss =1%.", type: "mcq" },

  { id: 41, question: "If x+y=15, xy=56. x²+y²?", options: ["113", "115", "117", "119"], correctAnswer: 0, explanation: "225-112=113.", type: "mcq" },

  { id: 42, question: "A+B do work in 8 days, A alone 12 days. B alone?", options: ["18", "20", "24", "16"], correctAnswer: 2, explanation: "B=24 days.", type: "mcq" },

  { id: 43, question: "Boat covers 24 km downstream in 2 hrs. Speed?", options: ["10", "12", "14", "16"], correctAnswer: 1, explanation: "Speed=12 km/hr.", type: "mcq" },

  { id: 44, question: "If 25% of x = 50, x?", options: ["150", "200", "250", "300"], correctAnswer: 1, explanation: "x=200.", type: "mcq" },

  { id: 45, question: "A train speed 72 km/hr. Time to cross 100m?", options: ["5", "6", "7", "8"], correctAnswer: 0, explanation: "Time=5 sec.", type: "mcq" },

  { id: 46, question: "CI for ₹2000 at 10% for 2 yrs?", options: ["400", "420", "440", "460"], correctAnswer: 1, explanation: "CI=420.", type: "mcq" },

  { id: 47, question: "Ratio 7:3 total 100. First?", options: ["70", "60", "50", "40"], correctAnswer: 0, explanation: "First=70.", type: "mcq" },

  { id: 48, question: "If SP ₹240, profit 20%. CP?", options: ["180", "200", "220", "240"], correctAnswer: 1, explanation: "CP=200.", type: "mcq" },

  { id: 49, question: "A+B=12 days, B+C=15 days, A+C=20 days. A?", options: ["10", "8", "12", "6"], correctAnswer: 0, explanation: "A=10 days.", type: "mcq" },

  { id: 50, question: "Average speed for equal distances 60 & 40?", options: ["48", "50", "52", "45"], correctAnswer: 0, explanation: "Avg = 48.", type: "mcq" }
],
};
