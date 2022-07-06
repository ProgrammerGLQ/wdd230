const requestURL = "../js/json/data.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = (jsonObject["businesses"]);
        let jsonBusiness = businesses.filter(business => {
            if (business.membership == "Gold membership" || business.membership == "Silver membership") {
                return business;
            }
        })
        console.log(jsonBusiness);
        randomChoice(jsonBusiness);
    })

    function displayBusinesses(spotlight, position) {
        const spot = document.querySelector(position);
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p = document.createElement("p");
    
        h2.textContent = spotlight.name;
        img.setAttribute("src", spotlight.image);
        img.setAttribute("alt", `${spotlight.name} logo`)
        p.innerHTML = `Web Site: <a href="#">${spotlight.url}</a>  <br>Phone: ${spotlight.phone}`;
    
        spot.appendChild(h2);
        spot.appendChild(img);
        spot.appendChild(p);
    }

function randomChoice(jsonBusiness) {
    const number = jsonBusiness.length;
    let spot1 = Math.floor(Math.random() * number);
    let spot2 = spot1;
    let spot3 = spot1;

    while (spot2 == spot1) {
        spot2 = Math.floor(Math.random() * number);
    }
    while (spot3 == spot1 || spot3 == spot2) {
        spot3 = Math.floor(Math.random() * number);
    }
    displayBusinesses(jsonBusiness[spot1], ".spot1");
    displayBusinesses(jsonBusiness[spot2], ".spot2");
    displayBusinesses(jsonBusiness[spot3], ".spot3");
}