// hamburger
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// modification
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


// date
const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

// banner

const today = new Date();
const day = today.getDay();

const banner = document.querySelector(".banner");
const bannerButton = document.querySelector(".bannerButton");

if (day === 1 || day == 2) {
  banner.classList.remove("hidden");
}
