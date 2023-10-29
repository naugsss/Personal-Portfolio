// these are the values which will be displayed on the browser
const reviews = [
  {
    id: 1,
    name: "Github profile tracker",
    img: "github-profile-tracker.png",
    text: "Displays the github details of a user based on his username searched.",
    link: "https://naugsss.github.io/Github-Profile-Tracker/",
  },
  {
    id: 2,
    name: "Random GIF generator",
    img: "random-gif-generator.png",
    text: "Generates a random GIF based on the search input of a user.",
    link: "https://naugsss.github.io/Random-GIF-Generator/",
  },
  {
    id: 3,
    name: "Weather App",
    img: "weather-app.png",
    text: "Displays the weather and other details of a place based on the search location.",
    link: "https://naugsss.github.io/Weather-Application/",
  },
];

// select all the items that we want to change
const img = document.getElementById("project-img");
const info = document.getElementById("info");
const projectName = document.getElementById("project-name");
const projectLink = document.getElementById("project-link");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
// console.log(projectLink);
// set starting items
let currentItem = 0;
// we want that when the document loads, we want to display the first item of the array i.e Aaryan Naugaraiya wali photo

// we've added an event listener which will update the values when the user click on the prev or the next button
prevBtn.addEventListener("click", function () {
  currentItem = currentItem - 1;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem = currentItem + 1;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// load initial item
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// this is the function which will be called everytime the user clicks on the next and the prev button
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  projectName.textContent = item.name;
  info.textContent = item.text;
  projectLink.href = item.link;
}
