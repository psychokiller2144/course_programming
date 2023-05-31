const URL = 'https://randomuser.me/api/?results=5';

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('getPersons').addEventListener('click', getPersons);
});


async function getPersons() {
    try {

        let reponse = await fetch(URL);

        if (reponse.ok) {

            const { results } = await reponse.json();
            
            const table = document.getElementById("personsTable");

            
            results.map((person)=>{
                
                const tr = document.createElement("tr");
                const tdFullName = document.createElement("td");
                const tdPicture = document.createElement("td");
                const picture = document.createElement("img");
                const tdEmail = document.createElement("td");
                const tdPhone = document.createElement("td");
                
                tdFullName.innerHTML = `${person.name.title} ${person.name.last} ${person.name.first}`;
                picture.src = person.picture.medium;
                tdEmail.innerHTML = `${person.email}`;
                tdPhone.innerHTML = `${person.phone}`;

                tr.appendChild(tdFullName);
                tdPicture.appendChild(picture);
                tr.appendChild(tdPicture);
                tr.appendChild(tdEmail);
                tr.appendChild(tdPhone);
                table.appendChild(tr);



            });

        }

    } catch (error) {

    }
}