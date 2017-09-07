//Q3: Write a function that accepts numbers as input with spaces in between 
//(such as: 1 2 3 ) and returns highest and the lowest number?

/*
	function to find hightest and lowest number
*/

function highestAndLowest(numbers){
  var numbers = "2 4 5 6 3";
  const data = numbers.split(" ");
  data.sort(function(a, b){return a - b});
  return data[data.length - 1] + " " + data[0];
}
module.exports = highestAndLowest;