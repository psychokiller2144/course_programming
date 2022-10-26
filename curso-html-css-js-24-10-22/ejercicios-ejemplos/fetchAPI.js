const personApiURL = 'https://randomuser.me/api/?results=2&gender=male';

document.addEventListener('DOMContentLoaded', function(evt){
    document.getElementById('addPersonsBtn').addEventListener('click',getPersons);
});

async function getPersons () {

    try{

        let response = await fetch(personApiURL);

        if(response.ok){
            
            const data = await response.json();
            console.log(data.results);

            const table = document.getElementById('PersonTable');
            data.results.map((person) =>{
                const tr = document.createElement('tr');
                const fullName = document.createElement('td');
                const PicRow = document.createElement('td');
                const PicEl = document.createElement('img');
                const emailRow = document.createElement('td');

                fullName.innerHTML = `${person.name.title}. ${person.name.last} ${person.name.first}`;
                PicEl.src = person.picture.medium;
                emailRow.innerHTML = person.email;

                tr.appendChild(fullName);
                PicRow.appendChild(PicEl);
                tr.appendChild(PicRow);
                tr.appendChild(emailRow);
                table.appendChild(tr);
            });
        }

    }catch(e){
        console.log(e)
    }


} 