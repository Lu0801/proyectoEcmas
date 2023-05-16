class user{
    //metodo constructor 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos con # el metodo se vuelve privado
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    // solo se pueden utilizar dentro de la clase se vuelven privados
    get #Age(){
        return this.age;
    }
    set #Age(n){
        this.age = n;
    }
};

const maria = new user('maria', 22);
console.log(maria.Age);
console.log(maria.Age = 20);