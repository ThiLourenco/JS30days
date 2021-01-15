const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.propotype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)); 

console.log("Filter the list of inventors for those who were born in the 1500's");
console.table(fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log("Give us an array of the inventors' first and last names");
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1 ));
console.log('Sort the inventors by birthdate, oldest to youngest');
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log('How many years did all the inventors live?');
console.log(totalYears);

// 5. Sort the inventors by years lived
const olders = inventors.sort((a, b) => {
  let personA = a.passed - a.year;
  let personB = b.passed - b.year;
  
  return personA > personB ? -1 : 1;
});
console.log('Sort the inventors by years lived');
console.table(olders)

// 6. create a list of Art's that contain 'ti' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Art
/* 
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const ti = links
              .map(link => link.textContent)
              .filter(art => art.includes('ti')) 
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
const name = people.sort((a, b) => {
  let [aLastName, aFirstName] = a.split(', ');
  let [bLastName, bFirstName] = b.split(', ');
  return aLastName > bLastName ? 1 : -1;
});
console.log(name);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;

}, {});
console.log('Sum up the instances of each of these');
console.log(transportation);