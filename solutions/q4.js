//Q4. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax) {
	var array = [];
	var num = 0;
	array.push(num);
	array.push(++num);
	while (true) {
		var next = array[array.length -2] + array[array.length -1];
		if(next < numMax){
			array.push(next);
		}else{
			break;
		}
	}
	return array;
}
module.exports = fibonacci;