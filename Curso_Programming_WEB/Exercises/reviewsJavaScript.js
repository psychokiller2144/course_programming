
const age = 20;

//JSON
//JavaScript Object Notation
const personList = [

    {
        name: 'Adam adam',
        age: 12,
        email: 'adam@example.com'
    },
    {
        name: 'Eve perkings',
        age: 18,
        email: 'eve@example.com'
    },
    {
        name: 'Adam adam',
        age: 12,
        email: 'adam@example.com'
    },
    {
        name: 'melvin wood',
        age: 20,
        email: 'mevlin@example.com'
    },
    {
        name: 'William rasmus',
        age: 26,
        email: 'william@example.com'
    },
];

function init(){

    console.log('persons List');
    //console.log(personList);
    printArray(personList);

    constpersonAbove = getPersonAboveAge(personList, age);
    console.log(`Persons Above ${age} List`);
    printArray(constpersonAbove);

}

//init();

function getPersonAboveAge(array, age){
    const personAboveAge = [];
    for(let person of array){
    
        if(person.age >= age){
            personAboveAge.push(person);
        }
    }
    return personAboveAge;  
}


function printArray(array) {
    
    for(let i = 0; i < array.length; i++){
         console.log(`
            ${array[i].name}
            (${array[i].age})
            ${array[i].email}
         `);

    }   
}