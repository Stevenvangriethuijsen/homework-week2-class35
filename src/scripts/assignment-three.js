const darthApi = "https://swapi.co/api/people/4/";
const lukeApi = "https://swapi.co/api/people/1";

function lukeSkywalker() {
  getData(lukeApi);
  buttonCreationDarth();
}

function darthVader() {
  getData(darthApi);
  buttonCreationLuke();
}

function getData(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(myJson => {
      document.getElementById(
        "characterInfo"
      ).innerHTML = `name: ${myJson.name} <br /> height: ${myJson.height} <br /> mass: ${myJson.mass} <br /> 
    hair color: ${myJson.hair_color} <br /> skin color: ${myJson.skin_color} <br /> eye color: ${myJson.eye_color} <br /> 
    birth year: ${myJson.birth_year} <br /> gender: ${myJson.gender}`;
    });
}

function buttonCreationLuke() {
  const removeButton = document.getElementById("switchButton");
  removeButton.parentNode.removeChild(removeButton);
  const button = document.createElement("button");
  button.setAttribute("id", "switchButton");
  button.innerHTML = "Luke Skywalker";
  const buttonWindow = document.getElementById("buttonWindow");
  buttonWindow.appendChild(button);
  button.addEventListener("click", function() {
    lukeSkywalker();
  });
}

function buttonCreationDarth() {
  const removeButton = document.getElementById("switchButton");
  removeButton.parentNode.removeChild(removeButton);
  const button = document.createElement("button");
  button.setAttribute("id", "switchButton");
  button.innerHTML = "DARTH VADER";
  const buttonWindow = document.getElementById("buttonWindow");
  buttonWindow.appendChild(button);
  button.addEventListener("click", function() {
    darthVader();
  });
}
// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}
lukeSkywalker();
