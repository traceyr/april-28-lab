'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.
    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |
 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(population, consumedPerHour) {
  this.population = population;
  this.consumedPerHour = consumedPerHour;
}

var blob = new Blob(1000, 1);

function popDemise(obj) {
  var hour = 0;
  var population = obj.population;
  var consumedPerHour = obj.consumedPerHour;
  while(population > 0) {
    population -= consumedPerHour;
    consumedPerHour++;
    hour++;
  }
  return hour;
}

popDemise(blob);

var hoursSpentInDowington = popDemise(blob); // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hours = 0;
  while(population > 0) {
    population -= peoplePerHour;
    peoplePerHour++;
    hours++;
  }
  return hours;
};

// TODO: implement me based on the instructions above.
// Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(5, 5) === 1, 'wrong');
assert(blob.hoursToOoze(15, 5) === 3, 'wrong again');
assert(blob.hoursToOoze(22, 1) === 7, 'wrong again again');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing (homePlanet, languages) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.languages = languages;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
  console.log(hello[this.languages]);

  var langOfListener = sb.languages;
  if(hello[langOfListener]) {
    return hello[langOfListener];
  }

};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
var klingon = new SentientBeing('Qo\'noS', 'klingon');
var human = new SentientBeing('Earth', 'federation standard');
var romulan = new SentientBeing('Romulus','romulan');

// assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
//   'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  stringArray.sort(function byLastLetter(a, b) {
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    var stringA = a.length;
    var lastCharA = a.charAt(stringA - 1);
    var stringB = b.length;
    var lastCharB = b.charAt(stringB - 1);
    if( lastCharA > lastCharB) {
      return 1;
    } else if (lastCharA < lastCharB ){
      return -1;
    } else {
      return 0;
    }
  });
  return stringArray;
}
var array1 = ['words', 'do', 'feel', 'see'];
var array2 = ['this', 'i', 'find', 'super', 'stressful'];
assert((JSON.stringify(lastLetterSort(array1)) === JSON.stringify(['see', 'feel', 'do', 'words'])), 'wrong silly');
assert((JSON.stringify(lastLetterSort(array2)) === JSON.stringify(['find', 'i', 'stressful', 'super', 'this'])), 'wrong silly');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(e) {
    sum += e;
  });
  return sum;
}
var array3 = [1,2,3,4];
var array4 = [2,4,6,8];

assert(sumArray(array3) === 10, 'wrong silly');
assert(sumArray(array4) === 20, 'wrong silly');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    sumArray(item);
  });
}
// Status API Training Shop Blog About
// © 2016 GitHub, Inc. Terms Privacy Security Contact Help
