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
var name=prompt("enter a name")
if(name=="mohamed"){
    console.log("hello mohamed");
    
}
else{
    console.log("hello unknown");
}
    var name=prompt("أدخل المادة")
    if(name=="math"){
        console.log("math");
        
    }else if(name=="arabic"){
        console.log("arabic");
        
    }else if(name=="english"){
        console.log("english");
        
    }else{
        console.log("unknown");
        
    }

var num=prompt("أدخل الدرجة")
if(num>90  &&  num<100){
    console.log("ممتاز");
}
else if(num>80  &&  num<90){
    console.log("جيد جدًا");
    }
    else if(num>70  && num<80){
        console.log("جيد");
        
    }
    

else if(num>60  &&  num<70){
    console.log("مقبول");
    
}
else{
    console.log("ضعيف");
    
}




// // Function to get user input and calculate the result
// function calculateStudentGrade() {
//     // Get input from the user
//     c onst studentName = prompt("ادخل اسم الطالب:");
//     const subjectName = prompt("ادخل اسم المادة:");
//     const score = parseFloat(prompt("ادخل الدرجة التي حصل عليها الطالب:"));
//     const totalScore = parseFloat(prompt("ادخل الدرجة النهائية للمادة:"));
  
//     // Validate input
//     if (isNaN(score) || isNaN(totalScore) || score < 0 || totalScore <= 0) {
//       alert("الرجاء إدخال أرقام صحيحة وموجبة للدرجات.");
//       return; // Exit the function if input is invalid
//     }
  
//     // Calculate the percentage
//     const percentage = (score / totalScore) * 100;
  
//     // Determine the grade
//     let grade;
//     if (percentage >= 90) {
//       grade = "ممتاز";
//     } else if (percentage >= 80) {
//       grade = "جيد جدًا";
//     } else if (percentage >= 70) {
//       grade = "جيد";
//     } else if (percentage >= 60) {
//       grade = "مقبول";
//     } else {
//       grade = "ضعيف";
//     }
  
//     // Display the result
//     console.log("--- نتيجة الطالب ---");
//     console.log(`الطالب: ${studentName}`);
//     console.log(`المادة: ${subjectName}`);
//     console.log(`النسبة: ${percentage.toFixed(2)}%`); // .toFixed(2) to show 2 decimal places
//     console.log(`التقدير: ${grade}`);
//     console.log("------------------");
//   }

  
//   // Call the function to run the program
//   calculateStudentGrade();

//endddddddddddddd






//   1. toUpperCase()
//   * الوظيفة: تقوم بتحويل جميع الأحرف الإنجليزية في السلسلة النصية إلى أحرف كبيرة (Capital Letters).
//   * مثال:
//     "Hello World".toUpperCase()  // ينتج "HELLO WORLD"
 
//  2. toLowerCase()
//   * الوظيفة: تقوم بتحويل جميع الأحرف الإنجليزية في السلسلة النصية إلى أحرف صغيرة (Small Letters).
//   * مثال:
//     "HELLO World".toLowerCase()  // ينتج "hello world"
 
//  3. includes()
//   * الوظيفة: تتحقق مما إذا كانت السلسلة النصية تحتوي على سلسلة نصية أخرى معينة وتعيد true إذا وجدت، و false إذا لم تجد.
//   * مثال:
//     "apple".includes("app")  // ينتج true
//  "banana".includes("grape") // ينتج false
 
//  4. startsWith()
//   * الوظيفة: تتحقق مما إذا كانت السلسلة النصية تبدأ بسلسلة نصية معينة وتعيد true إذا كانت كذلك، و false إذا لم تكن.
//   * مثال:
//     "watermelon".startsWith("water")  // ينتج true
//  "melon".startsWith("water")       // ينتج false
 
//  5. endsWith()
//   * الوظيفة: تتحقق مما إذا كانت السلسلة النصية تنتهي بسلسلة نصية معينة وتعيد true إذا كانت كذلك، و false إذا لم تكن.
//   * مثال:
//     "programming".endsWith("ming")  // ينتج true
//  "code".endsWith("ing")         // ينتج false
 
//  6. slice()
//   * الوظيفة: تستخرج جزءًا (شريحة) من السلسلة النصية الأصلية بناءً على مؤشري بداية ونهاية (والنهاية غير شاملة). لا تقوم بتعديل السلسلة الأصلية.
//   * مثال:
//     "developer".slice(0, 5)  // ينتج "devel"
//  "developer".slice(5)     // ينتج "oper" (من المؤشر 5 حتى النهاية)
 
//  7. substring()
//   * الوظيفة: تستخرج جزءًا من السلسلة النصية الأصلية بين مؤشرين محددين. تشبه slice() إلى حد كبير، ولكن هناك اختلافات طفيفة في كيفية تعاملها مع المؤشرات السالبة أو إذا كان مؤشر البداية أكبر من مؤشر النهاية.
//   * مثال:
//     "javascript".substring(4, 9)  // ينتج "scrip"
//  "javascript".substring(9, 4)  // ينتج "scrip" (تقوم بتبديل المؤشرين إذا كان الأول أكبر)
 
//  8. indexOf()
//   * الوظيفة: تبحث عن أول ظهور لسلسلة نصية معينة داخل السلسلة الأصلية وتُرجع مؤشر (موقع) الحرف الأول من هذا الظهور. إذا لم يتم العثور عليها، تُرجع -1.
//   * مثال:
//     "hello world".indexOf("o")    // ينتج 4 (أول حرف 'o' موجود في المؤشر 4)
//  "hello world".indexOf("xyz")  // ينتج -1
 
//  9. replace()
//   * الوظيفة: تستبدل أول ظهور (أو جميع الظهورات إذا استخدمت تعابير نمطية مناسبة) لسلسلة نصية معينة بسلسلة نصية جديدة. لا تقوم بتعديل السلسلة الأصلية.
//   * مثال:
//     "dog cat dog".replace("dog", "bird") // ينتج "bird cat dog"
 
//  10. trim()
//   * الوظيفة: تزيل المسافات البيضاء (مثل المسافات، علامات الجدولة، فواصل الأسطر) من بداية ونهاية السلسلة النصية. لا تزيل المسافات من المنتصف.
//   * مثال:
//     "   Hello World   ".trim()  // ينتج "Hello World"