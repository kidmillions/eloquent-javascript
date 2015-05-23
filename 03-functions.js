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
