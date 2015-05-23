var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024


// What's goin' on under the hood!: 
// count 0 -> 1 * 2
// count 1 -> (1 * 2) * 2
// count 2 -> (1 * 2 * 2) * 2
// count 3 -> (1 * 2 * 2 * 2) * 2
// count 4 -> (1 * 2 * 2 * 2 * 2) * 2
// count 5 -> (1 * 2 * 2 * 2 * 2 * 2) * 2
// count 6 -> (1 * 2 * 2 * 2 * 2 * 2 * 2) * 2
// count 7 -> (1 * 2 * 2 * 2 * 2 * 2 * 2 * 2) * 2
// count 8 -> (1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2) * 2
// count 9 -> (1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2) * 2

// nested scope example with the mountain
var landscape = function() {
  var result = "";
  var flat = function(size) {
  	for (var count = 0; count < size; count++)
 		 result += "_";
  }
  var hill = function(size) {
    result += "/"; // begin the hill
    for (var count = 0; count < size; count++)
      result += "'"; // this is the top of the hill.
    result += "\\"; // when it's done looping through, it'll do this. 
  }
  flat(5);
  hill(2);
  flat(5);
  hill(2);
  // a landscape filled with skinny hills.
  return result; // don't forget to return this. if you forget, it'll stay in there.
}
console.log(landscape());



// closure

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2); 
// var twice = function(number) {
//   return number * 2
// };

}
console.log(twice(5));
// this means var twice = function(5) {
//   return 5 * 2
// }
// → 10




// recursion example

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1); // does this mean that whatever this returns is power()?
}

console.log(power(2, 3));

// power(2, 3)
// 2 * power(2 ,2)
// 2 * (2 * power(2 ,1))
// 2 * (2 * 2 * power(2 ,0))
// 2 * 2 * 2 * 1
// = 8
//
//

// → 8



// WTF

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)


// start = current number
// history = string describing how we reached the number

find(1, "1");
  find(6, "(1 + 5)") // since start == target
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        find(21, "((((1 + 5) + 5) + 5)")
          find(26)
            // too large
      // at this point, let's multiply by 3
      find(48) //too big
    find(33) // too big
  find(18, "(1 + 5) * 3"); // give up, multiplying by 3 will only make it huge
  // find(54) too big!

  find(3, "(1 * 3)")
    find(8, "(1 * 3) + 5")
      find(13, "(((1 * 3) + 5) + 5)")
        find(18, "(((1 * 3) + 5) + 5 + 5)")
          find(23, "((((1 * 3) + 5) + 5) + 5) + 5")
            find(28) // stop
          find(69) //stop 
        find(54) // stop
      find(39) //stop
    find(24, "((1 * 3) + 5) * 3")



// We want to write a program that prints two numbers, the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them, and
// zeros padded before both numbers so that they are always three digits long.

// 007 Cows
// 011 Chickens

/*
We need to turn these into strings. Use the String function to do it. 
*/

function printFarmInv(cows, chickens) {
  var cowString = String(cows); // watch how this is written. it's NOT String.cows
  while(cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while(chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}

printFarmInv(7, 11);



function zeroPad(number, width) {
  var numberString = String(number);
  while(numberString.length < width)
    numberString = "0" + numberString; // don't forget the semicolon here! 
  return numberString;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(6, 3, 3);


// side effects vs. return value 

// Functions can be roughly divided into those that are called for
// -> their side effects; and those that are called fo
// ->  their return value. (Though it is definitely also possible to
// have both side effects and return a value.)

// what's the difference between a side effect and a value? 