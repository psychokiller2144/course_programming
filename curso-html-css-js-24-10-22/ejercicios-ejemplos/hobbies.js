document.addEventListener('DOMContentLoaded', function(evt){
    document.getElementById('newHobbyButton').addEventListener('click',addHobbies );
    document.getElementById('deleteHobbyButton').addEventListener('click',deleteHobbies );
});



function addHobbies(){ 
    
    const inputList = document.querySelectorAll('.hobbiesInput');
    
    if(inputList.length < 5){
        const hobbiesList = document.getElementById('hobbiesList');

        const newLineElement = createNode('br');
        const inputElement = createNode('input');
        inputElement.setAttribute("class","hobbiesInput");

        append(hobbiesList,newLineElement);
        append(hobbiesList,inputElement);

    }else{
        document.getElementById('newHobbyButton').removeEventListener('click',addHobbies);
    }
}

function createNode (element) {
    return document.createElement(element); 
}

function append(parent, child) {
    return parent.appendChild(child);
}

function deleteHobbies(){

    const inputList = document.querySelectorAll('.hobbiesInput');

    if(inputList.length > 1){
      
        const elementBr = document.querySelector('div > br');
        elementBr.nextSibling.remove();
        elementBr.remove();

    }else{
        document.getElementById('deleteHobbyButton').removeEventListener('click',addHobbies);
    }
}