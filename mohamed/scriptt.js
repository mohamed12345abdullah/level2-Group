var num1 = 5;
if (num1 > 0) {
 console.log("Positive");
} else if (num1 < 0) {
 console.log("Negative");
} else {
 console.log("Zero");
}
var num2 = 3;
if (num2 % 2 === 0) {
 console.log("Even");
} else {
 console.log("Odd");
}
var num=prompt("enter a number")
result=num%2
if(result==0){
    console.log("even");
    
}
else if(result==1){
    console.log("odd");
    
}
else{
    console.log("not a number");
    
}
// Function to get user input and calculate the result
function calculateStudentGrade() {
    // Get input from the user
    const studentName = prompt("ادخل اسم الطالب:");
    const subjectName = prompt("ادخل اسم المادة:");
    const score = parseFloat(prompt("ادخل الدرجة التي حصل عليها الطالب:"));
    const totalScore = parseFloat(prompt("ادخل الدرجة النهائية للمادة:"));
  
    // Validate input
    if (isNaN(score) || isNaN(totalScore) || score < 0 || totalScore <= 0) {
      alert("الرجاء إدخال أرقام صحيحة وموجبة للدرجات.");
      return; // Exit the function if input is invalid
    }
  
    // Calculate the percentage
    const percentage = (score / totalScore) * 100;
  
    // Determine the grade
    let grade;
    if (percentage >= 90) {
      grade = "ممتاز";
    } else if (percentage >= 80) {
      grade = "جيد جدًا";
    } else if (percentage >= 70) {
      grade = "جيد";
    } else if (percentage >= 60) {
      grade = "مقبول";
    } else {
      grade = "ضعيف";
    }
  
    // Display the result
    console.log("--- نتيجة الطالب ---");
    console.log(`الطالب: ${studentName}`);
    console.log(`المادة: ${subjectName}`);
    console.log(`النسبة: ${percentage.toFixed(2)}%`); // .toFixed(2) to show 2 decimal places
    console.log(`التقدير: ${grade}`);
    console.log("------------------");
  }
  
  // Call the function to run the program
  calculateStudentGrade();