const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'; 
const cards = document.querySelector('.cards');

async function getProphets() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        console.log(data); 
        buildProphetCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildProphetCards(data) {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let p = document.createElement('p');
        let img = document.createElement('img');

        let fullName = `${prophet.name} ${prophet.lastname}`;

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Location of Birth: <strong>${prophet.birthplace}</strong>`;
        birthdate.innerHTML = `Birth Date: ${prophet.birthdate}`;
        img.setAttribute("src",prophet.imageurl);
        img.setAttribute("alt", `Picture of president ${fullName} - ${prophet.order} Latter-day President`)
        img.setAttribute("loading", "lazy");



        card.append(h2);
        card.append(birthdate)
        card.append(p);
        card.append(img);

        cards.append(card);
    });
}

getProphets();  

