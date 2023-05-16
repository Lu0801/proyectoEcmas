//arrays destructuring

let fruits = ['Apple','Banana'];
let[a,b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = {userName: 'Oscar', age:34, country: 'Colombia', sexo: 'M'};
let{userName, age, ... estado} = user;
console.log(userName, age);

//spread operator 

let person = {name: 'Oscar', age: 20};
let country = 'MX';
let data = {id: 1, ...person, country}; //Agrego nueva información
console.log(data);

//rest parameters
//...values es para decirle que vamos a pasar parametros sin especificar cuales
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}

sum(1,1,2,3)

