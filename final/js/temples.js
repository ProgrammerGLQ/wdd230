const URL = '../js/data.json'; 
const cards = document.querySelector('.cards');
i = 0

async function getTemples() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        console.log(data); 
        buildTempleCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildTempleCards(data) {
    data.Temples.forEach(Temple => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let telephone = document.createElement('p');
        let p = document.createElement('p');
        let email = document.createElement('p');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let ordinances_chedule = document.createElement('p');
        let session_schedule = document.createElement('p');
        let temple_closure_schedule = document.createElement('p');
        let div = document.createElement('div');


        let img = document.createElement('img');
        i = i + 1;
        h2.innerHTML = `${Temple.name}`;
        p.innerHTML = `Address: ${Temple.address}`;
        telephone.innerHTML = `Telephone: ${Temple.telephone}`;
        email.innerHTML = `Email: ${Temple.email}`;
        services.innerHTML = `Services: ${Temple.services}`;
        history.innerHTML = `History: ${Temple.history}`;
        ordinances_chedule.innerHTML = `Ordinance schedule: ${Temple.ordinance_schedule}`;
        session_schedule.innerHTML = `Session_schedule: ${Temple.session_schedule}`;
        temple_closure_schedule.innerHTML = `Temple_closure_schedule: ${Temple.temple_closure_schedule}`;

        div.innerHTML = `<p><button id="b${i}" onclick="clickCounter${i}()" type="button${i}">Like </button></p>
        <div id="result${i}"></div>`;




        img.setAttribute("src",Temple.image);
        img.setAttribute("alt", `Picture of Temple ${Temple.name}`)
        img.setAttribute("loading", "lazy");


        card.append(h2);
        card.append(img);
        card.append(div);
        card.append(telephone)
        card.append(p);
        card.append(email);
        card.append(services);
        card.append(history);
        card.append(ordinances_chedule);
        card.append(session_schedule);
        card.append(temple_closure_schedule);

        
        cards.append(card);
    });
}

getTemples();  