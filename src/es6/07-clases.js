// declarando una clase
class User{};
// instancia de una clase
const newUser = new User();

const gndx = new user();
console.log(gndx.greeting());

//Constructor
class user {
    //metodos
    constructor(){
        console.log('nuevo usuario');
    }
    greeting1(){
        return 'Hello!';
    }
};

const david = new user(); //resultado sale el mensaje del constructor porque esta inicializando los elementos

//this 
class user{
    constructor(name){
        this.name = name;
    }
    //metodos 
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
};

const angel = new user('Angel');
console.log(angel.greeting());

//getters and setters
class user{
    //metodo constructor 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get Age(){
        return this.age;
    }
    set Age(n){
        this.age = n;
    }
};

const maria = new user('maria', 22);
console.log(maria.Age);
console.log(maria.Age = 20);