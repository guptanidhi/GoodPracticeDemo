/*Q2. Write a program which accept average marks of the student achieved in exams and convert them into grade
and display ratings of each student, grades and ratings can be calculated asper the following table:
*/

/*const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];*/
/*
	function to get Student object with grade & rating
*/
function getStudentGrade(){
  var studentDetails = [
    {name:'David',marks:80},
    {name:'Vinoth',marks:77},
    {name:'Divya',marks:88},
    {name:'Ishitha',marks:95},
    {name:'Thomas',marks:68}
  ];
  var studentsGradeRatingArr = [];
  for (var i=0; i < studentDetails.length; i++) {  
    var updateObject = {}
    if(studentDetails[i].marks<=60 && studentDetails[i].marks>=0) {
      updateObject.grade = "F";
      updateObject.name = studentDetails[i].name;
      updateObject.rating = "Poor";
    }else if(studentDetails[i].marks>=61 && studentDetails[i].marks<=70){
      updateObject.grade = "D";
      updateObject.name = studentDetails[i].name;
      updateObject.rating = "Fair";
    }else if(studentDetails[i].marks>=71 && studentDetails[i].marks<=80){
      updateObject.grade = "C";
      updateObject.name = studentDetails[i].name;
      updateObject.rating = "Average";
    }else if(studentDetails[i].marks>=81 && studentDetails[i].marks<=90){
      updateObject.grade = "B";
      updateObject.name = studentDetails[i].name;
      updateObject.rating = "Good";
    }else if(studentDetails[i].marks>=91 && studentDetails[i].marks<=100){
      updateObject.grade = "A";
      updateObject.name = studentDetails[i].name;
      updateObject.rating = "Excellent";
    }
    studentsGradeRatingArr.push(updateObject);
  }    
  return studentsGradeRatingArr;
}
module.exports = getStudentGrade();