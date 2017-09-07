//Q5. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences 
// of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter){
	const regExp = new RegExp(letter,"gi");
	return str.match(regExp).length;
}
module.exports = char_count;