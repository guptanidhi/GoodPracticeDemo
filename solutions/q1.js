//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

function getDate(){
	// To get Current date
  const date = new Date();
  const d = date.getDate(); // To Get Day of the month
  const m = date.getMonth() + 1; // To Get Month 
  const y = date.getFullYear(); // Getting Year yyyy
  return m+"/"+d+"/"+y; 
}

module.exports = getDate();