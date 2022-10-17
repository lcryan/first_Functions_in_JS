/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

const greeter = function (naam) {
  return "Hoi " + naam + "!";
}

const actualGreeter = greeter("Jan");
console.log(actualGreeter)


/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

const minutesToSeconds = function (minutes) {
  return minutes * 60;
}

const oneMinute = minutesToSeconds(1);
const twoMinutes = minutesToSeconds(2);
const threeMinutes = minutesToSeconds(3);
const twentyThreeMinutes = minutesToSeconds(23)
console.log(twentyThreeMinutes);


/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

const merge = function(word1, word2) {
  return word1 + word2;
}
const magic = merge("abra", "cadabra");
const sweet = merge("zoet", "sappig");
console.log(magic)
console.log(sweet)

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

const calculateDogYears = function (number){
  return "Jouw hond is " + number * 7 + " " + "jaar oud in mensenjaren."
}

const six = calculateDogYears(6);
console.log(six)
const two = calculateDogYears(2)
console.log(two)

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

const wrapper = function(word, sign){
  return sign + word + sign
}

const glasses = wrapper("bril","*");
console.log(glasses)
const beep = wrapper("beep", "_");
console.log(beep)
const cheese = wrapper("kaas", "Q");
console.log(cheese);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."


const createDetailString = (fName, lName, prof) => {
  return {firstName: fName, lastName: lName, profession: prof }
}

const jan = createDetailString("Jan", "Jansen", "docent");
console.log(jan);