// let nameu = "Jhon";
// let age = 25; 
// let isenrolled = true;
// let subject = ["programaion","Base de datos","IA"];

// // acceder a la información 
// console.log(typeof(nameu));
// console.log(typeof(age));
// console.log(typeof(isenrolled));
// console.log(typeof(subject));

// console.log(Array.isArray(subject));

// console.log(subject.map(function (s) {return typeof(s); }));

// subject.forEach(function (element){
//     console.log(element);
// })


let estudiante = {
    "name":"John M",
    "age": 25,
    "IsEnrolled":  true,
    "materias": ["Programación", "base de datos", "IA"]
} 

console.log(typeof(estudiante));

//accedemos a los datos especificos del objet
console.log("El nombre del estudiante es:", estudiante.name);
console.log("La edad del estudiante es:", estudiante.age);
console.log("Esta inscrito?:", estudiante.IsEnrolled);
console.log("La primera materia es:", estudiante.materias[0]);
console.log("la cantidad de materias:", estudiante.materias.length);

//mostramos el objeto completo
console.log("El estudiante completo es:", estudiante);
console.table(estudiante);// mostramos  en tabla
