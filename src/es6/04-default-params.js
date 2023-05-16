function newUser(name,edad,country){
    var name = name || 'lu';
    var edad = edad || 22;
    var country = country || 'Cali';
    console.log(name, edad, country);
}

newUser();
newUser('Luisa',23,'Bogotá');

function newAdmin(name = 'Oscar', edad = 20, country = 'CL'){
    console.log(name, edad, country);
}

newAdmin();
newAdmin('Lucy', 21, 'MX');
