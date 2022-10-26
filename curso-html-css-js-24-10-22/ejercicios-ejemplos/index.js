//JSON => JavaScript Object Notation
const personsList = [
    {
        name: 'Arturo Escobar',
        age: 26,
        email: 'arturo@mail.com'
    },
    {
        name: 'Adam Adams',
        age: 22,
        email: 'adam@mail.com'
    },
    {
        name: 'Eve Torres',
        age: 18,
        email: 'eve@mail.com'
    },
    {
        name: 'William Rasmussen',
        age: 32,
        email: 'william@mail.com'
    },
    {
        name: 'Stefy Roberts',
        age: 27,
        email: 'stefy@mail.com'
    },
];

const age = 26;

const init = () =>{
    
    console.log('sponsors');
    let sponsors = document.getElementById('sponsors');
    console.log(sponsors);
    /*
    //console.log(personsList);
    printArray(personsList);
    
    //crear funcion que imprima el array/list
    console.log('Persons List Above');

    const list = personsList.filter( (item) => item.age >= age );
    
    printArray(list);*/

    
}

const printArray = (array) => array.forEach(element => console.log(`${element.name} (${element.age}) (${element.email})`) );

const getPersonsAboveAge = function(array, age){

    const personsAboveAge = [];
    
    array.forEach( element => {
        if(element.age >= age){
            personsAboveAge.push(element)
        }
    });

    return personsAboveAge;
}

init();
