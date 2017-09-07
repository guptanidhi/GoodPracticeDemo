//Q4. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done){
	if(numMax === 1){
		return [0];
	}else{
		var nums = fibonacci(numMax-1);
		if(nums.length > 1){
			nums.push(nums[nums.length-2] + nums[nums.length-1]) ;
		}else{
			nums.push(1);
		}
		return nums;
	}
}

module.exports = fibonacci;