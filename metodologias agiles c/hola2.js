 let nameu = "Jhon";
 let age = 25; 
 let isenrolled = true;
 let subject = ["programaion","Base de datos","IA"];

// acceder a la información 

console.log(Array.isArray(subject));

console.log(subject.map(function (s) {return typeof(s); }));

subject.forEach(function (element){
     console.log(element);
})