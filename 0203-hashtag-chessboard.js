// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a
// space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8
// and change the program so that it works for any size, outputting a grid of the
// given width and height.

// Let's examine it by looking at two rows at a time (I guess we can count each
// two-row set as a "tile"). Let's give each number x and y coordinates.

// 1,1 1,2 1,3 1,4 1,5 1,6 1,7 1,8
// 2,1 2,2 2,3 2,4 2,5 2,6 2,7 2,8

// When you add x + y, you can ascertain whether the character should be a
// pound sign or a space. If x + y is even, then it hsould be a space. If it's
// odd, there should be a pound sign. 

// Also, every eight characters, we'll need a "\n". 

var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for(x = 0; x < size; x++) {
    if ((y + x) % 2 == 0) // x's oddness/evenness depends on whether y is odd or even. helps with alternating rows.
      board = board + " ";
    else
      board = board + "#";
  }
  board = board + "\n";
}

console.log(board);