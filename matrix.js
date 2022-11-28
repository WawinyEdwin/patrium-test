/* Generates a new array of concatenated numbers given a multidimensional array as shown 
 Assumptions;
 -- The Input doesn't change: two md array.
 -- Time taken O(n^2) - Logarithmic Time .. Input size is affecting computation time
 if its dynamic for fixed size this is good 
 */

function generate(arr) {

  let elementOne = arr[0];
  let elementTwo = arr[1];
  let newArr = [];

  for (let i = 0; i < elementOne.length; i++) {
    for (let j = 0; j < elementTwo.length; j++) {
      elem = (elementOne[i] + " " + elementTwo[j]).toString();
      newArr.push(elem);
    }
  }

  return newArr;
}
console.log(
  generate([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

/*
   output :
   [
     '1 4', '1 5', '1 6',
     '2 4', '2 5', '2 6',
     '3 4', '3 5', '3 6'
   ]
   */
