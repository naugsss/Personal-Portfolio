const projects = [
  {
    id: 1,
    name: "Github profile tracker",
    img: "./assets/github-profile-tracker.png",
    text: "Displays the github details of a user based on his username searched.",
    link: "https://naugsss.github.io/Github-Profile-Tracker/",
  },

  {
    id: 2,
    name: "Random GIF generator",
    img: "./assets/random-gif-generator.png",
    text: "Generates a random GIF based on the search input of a user.",
    link: "https://naugsss.github.io/Random-GIF-Generator/",
  },
  {
    id: 3,
    name: "Weather App",
    img: "./assets/weather-app.png",
    text: "Displays the weather and other details of a place based on the search location.",
    link: "https://naugsss.github.io/Weather-Application/",
  },
];

const img = document.getElementById("project-img");
const info = document.getElementById("info");
const projectName = document.getElementById("project-name");
const projectLink = document.getElementById("project-link");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

prevBtn.addEventListener("click", function () {
  currentItem = currentItem - 1;
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem = currentItem + 1;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = projects[person];
  img.src = item.img;
  projectName.textContent = item.name;
  info.textContent = item.text;
  projectLink.href = item.link;
}
