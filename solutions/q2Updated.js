/*Q2. Write a program which accept average marks of the student achieved in exams and convert them into grade
and display ratings of each student, grades and ratings can be calculated asper the following table:
*/


/*
	function to get Student object with grade & rating
*/
function getStudentGrade(){
	// Input Object
  var studentDetails = [
    {name:'David',marks:80},
    {name:'Vinoth',marks:77},
    {name:'Divya',marks:88},
    {name:'Ishitha',marks:95},
    {name:'Thomas',marks:68}
  ];
  // Array of students with Grade & Rating.
  const studentsGradeRatingArr = [];
  // Iterating students and adding their grades & Rating according to there marks
	studentDetails.forEach(function(student){
		// Student object with Grade & Rating.
	  const studentGradeRatingObj = { 
	  	name: student.name, 
	  	grade: checkGrade(student.marks), 
	  	rating: checkRating(student.marks)
	  };
	  studentsGradeRatingArr.push(studentGradeRatingObj);
	});
	return studentsGradeRatingArr;
}

/*
	function to get Student Grade
*/
function checkGrade(marks){
  if(marks<=60)
  	return "F";
  if(marks>=61 && marks<=70) 
  	return "D";
  if(marks>=71 && marks<=80) 
  	return "C";
  if(marks>=81 && marks<=90) 
  	return "B";
  else 
  	return "A";
}

/*
	function to get Student Rating
*/
function checkRating(marks){
  if(marks<=60) 
  	return "Poor";
  if(marks>=61 && marks<=70) 
  	return "Fair";
  if(marks>=71 && marks<=80) 
  	return "Average";
  if(marks>=81 && marks<=90) 
  	return "Good";
  else 
  	return "Excellent";
}

module.exports = getStudentGrade();