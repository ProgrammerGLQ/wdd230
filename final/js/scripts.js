// hamburger
function menu() {
    document.getElementById("nav").classList.toggle("open");
    document.getElementById("menu-button").classList.toggle("open");
}
const x = document.getElementById("menu-button")
x.onclick = menu;

// modification
document.querySelector("#modified").textContent = `Last Modification: ${document.lastModified}`;
