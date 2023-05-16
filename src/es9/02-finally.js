const anotherFuncion = () =>{
    return new promise((resolve, reject)=>{
        if(true){
            resolve('Hey!!');
        }else{
            reject('Ups!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(error =>console.log(error))
    .finally(() => console.log('Finally'));