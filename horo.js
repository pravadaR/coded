const myNumber = 1; // January
let sign = "";
let symbol = "";
let fortunes = [];

if (myNumber === 1) {
  sign = "Capricorn"; symbol = "♑";
} else if (myNumber === 2) {
  sign = "Aquarius"; symbol = "♒";
} else if (myNumber === 3) {
  sign = "Pisces"; symbol = "♓";
} else if (myNumber === 4) {
  sign = "Aries"; symbol = "♈";
} else if (myNumber === 5) {
  sign = "Taurus"; symbol = "♉";
} else if (myNumber === 6) {
  sign = "Gemini"; symbol = "♊";
} else if (myNumber === 7) {
  sign = "Cancer"; symbol = "♋";
} else if (myNumber === 8) {
  sign = "Leo"; symbol = "♌";
} else if (myNumber === 9) {
  sign = "Virgo"; symbol = "♍";
} else if (myNumber === 10) {
  sign = "Libra"; symbol = "♎";
} else if (myNumber === 11) {
  sign = "Scorpio"; symbol = "♏";
} else if (myNumber === 12) {
  sign = "Sagittarius"; symbol = "♐";
}

fortunes = [
  "Your patience today will become tomorrow's reward — keep climbing.",
  "A practical decision made now will open three doors next week.",
  "The mountain ahead is steep, but your footing has never been surer.",
  "Others look to you for stability. Lead by example and watch them follow."
];

const randomIndex = Math.floor(Math.random() * fortunes.length);
const fortune = fortunes[randomIndex];
console.log(symbol + " " + sign);
console.log(fortune);
