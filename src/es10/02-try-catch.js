try {
    hello();
} catch (error){
    console.log(error);
}

//OPTIONAL CATCH BINDING
try {
    other();
} catch{
    console.log('Es un error');
}
