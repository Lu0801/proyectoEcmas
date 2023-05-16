var  lastName = 'David';
lastName = 'oscar';
console.log("🚀 ~ file: 00-let-const.js:3 ~ lastName:", lastName)

let fruit = 'Apple';
fruit = 'Kiwi';
console.log("🚀 ~ file: 00-let-const.js:7 ~ fruit:", fruit);

const animal = 'Dog';
animal = 'cat';
console.log("🚀 ~ file: 00-let-const.js:11 ~ animal:", animal)

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banano';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
