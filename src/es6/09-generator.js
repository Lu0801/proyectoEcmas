function* iterate(array){
    for(let value of array){
        yield value;
    }
}
const it = iterate(['Oscar','David','Angel','Maria','Ulises']);
//console.log(typeof(it));
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


