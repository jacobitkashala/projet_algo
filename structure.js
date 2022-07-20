

//const { isNumber } = require("util");

// const tribulle = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (array[i] < array[j]) {
//                 swap(array, i, j)
//             }
//         }
//     }
//     console.log(array);
// }
// tribulle([1, 3, 10, 4])
// const swaper=(Array,i,j)=>{
//     const currentValue=Array[i];
//     Array[i]=Array[j];
//     Array[j]=currentValue
// }

// for (let index = 1; index < 64; index=index*2) {
//    console.log(index)

// }

// let ob={name:"jean",prenom:"kool",}
// let bP=Object.getOwnPropertyNames(ob);
// console.log(bP);
//console.log(Number.EPSILON);
// function isPrime(nombre){
//    if(nombre <=1 ===0) return false;
//    if(nombre <=3 ===0) return true;
//    if(nombre % 2 ===0||nombre % 3===0) return false;

//    for(let i=5; i*i<=nombre; i=i+6){
//       if(nombre%i ===0 || nombre %(i+2)===0) return false;
//    }
//    return true;
// }

// for (let index = 0; index < 200; index++) {
//    if(isPrime(index)){
//       console.log(index)
//    }

// }
// let n=120;
// while(n%2===0){
//    console.log(n);
//    n=n/2;
// }

// function isPrime(n) {
//    if (n <= 1) return false;
//    if (n <= 3) return true;
//    if (n % 2 === 0 || n % 3 === 0) return false;

//    for (let i = 5; i * i <= n; i = 6 + i) {
//       if (n % i === 0 || n % (i + 2) === 0) return false;
//    }

//    return true;
// }
// i = 0;
// while(i<=100){
//    if(isPrime(i)){
//       console.log(i)
//    }
//    i++;
// }
// let date=Date.now();
//console.log(date);
// function isPrime(n) {
//    if (n <= 1) return false;
//    if (n <= 3) return true;
//    if (n % 2===0 || n % 3===0) return false;
//    for (let i = 5; i * i <= n; i = 6 + i) {
//       if (n % i === 0 || n % (i + 2) === 0) return false;
//    }
//    return true;
// }

// let j = 0;
// while (j < 100) {
//    if (isPrime(j)) { 
//       console.log(j); 
//    }
//    j++;
// }

// let n="1211";
// let result=n.split('');
// console.log(n===n.split("").reverse().join("")?"wins":"abd");


// //input:E5-S1-G4-R3-E2 => out:SERGE
// let string = "red pukk1";
// var str = "He's my2 king 2from1 this1day1 until his last day ha maison";
// var count = 0;
// let newString1=str.split("1").join(" un");
// let newString2=newString1.split("2").join("deux");
// console.log(newString2);

// const question = x => y => x + y === 7;
// let result = question(3)(7)
// console.log(result);

// state = {
//     first: "Jason",
//     name: "Smith",
//     profession: "Agent",
//     place: "Matrix",
// }

// const { name, ...rest } = state
// console.log(rest)

let toDoList = [
    {
        text: 'Js',
        completed: false,
        id: 0
    }
    ,
    {
        text: 'Apprendre React',
        completed: false,
        id: 1
    },
    {
        text: 'Apprendre Next.js',
        completed: false,
        id: 3,
    },
    {
        text: 'Apprendre Redux',
        completed: false,
        id: 2
    }
]
console.log(toDoList);

// const type = ["lege", "aigu", "aigu modere"];
// const test="aigu modere";
// //(typeMalnutri === 'Aigu modére' && 'error') || 'success'
// let value = (test === "lege" ? "verte" : test === "aigu modere" ? "orange" : "rouge")
// console.log(value);
// const stabilizedThis = toDoList.map((el, index) => [el, index]);
// console.log(stabilizedThis);
// let newId = state.length
// let newId=toDo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
// let updatToDo = {
//     text: 'Apprendre vanila',
//     completed: false,
//     id: 0
// }
// toDoList = toDoList.map((todo) => {
//     return todo.id === updatToDo.id ? {
//         ...todo,
//         text: updatToDo.text,
//     } : todo
// })

// //toDoList.splice()
// console.log(toDoList);

// function ExampleClass() {

//     this.name = "JavaScript";
//     this.sayName = function () {
//         console.log(this.name);
//     }
// }

// var example1 = new ExampleClass();
// example1.sayName();
// let id = 3;
// let check = toDoList.findIndex(toDo => toDo.id == id);
// console.log(check);
// toDoList.splice(id, 1);
//console.log(toDoList);

//Somme de deux matrices

// const matrice = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let sommeDiagPrincipal = 0;
// let sommeDiagSecondaire = 0;
// let matriceLength = matrice.length;
// console.log(matrice[1, 1]);

// for (let i = 0; i < matrice.length; i++) {
//     let colonne = matrice.length - 1 - i;
//     sommeDiagPrincipal += matrice[i][i];
//     sommeDiagSecondaire += matrice[i][colonne];
//     // console.log(matrice[i][matrice.length -1 -i]);
// }
// console.log(`la somme de diagonal principal ${sommeDiagPrincipal}`, `la somme de diagonal sec ${sommeDiagSecondaire}`)

