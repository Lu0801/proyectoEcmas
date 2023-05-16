export function* getId() {
    let value = 0;
    for(let i=0; i<5;i++){
        value ++;
        yield value;
    }
  }

const catId = getId();
console.log(catId.next().value);
console.log(catId.next().value);
console.log(catId.next().value);
console.log(catId.next().value);
console.log(catId.next().value);


for(let value of catId) {
    console.log(value); 
  }
//otra forma

  export function* getId() {
    let id = 1;
    while(true) {
      yield id++;
    }
  }
  
  const catId1 = getId();
  console.log(catId1.next().value);
  console.log(catId1.next().value);
  console.log(catId1.next().value);
  console.log(catId1.next().value);