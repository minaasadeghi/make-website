const menu = document.querySelector("nav ul");
const toggleButton = document.getElementById("menu-toggle");

toggleButton.addEventListener("click", function() {
    menu.classList.toggle("show");
});

const sections = document.querySelectorAll("section");

sections.forEach(function(section) {
    section.addEventListener("click", function() {
        section.style.backgroundColor = "darkblue";
    });
});

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const weatherDiv = document.createElement("div");
        weatherDiv.textContent = "Weather: " + data.weather[0].description;
        document.body.appendChild(weatherDiv);
    })
    .catch(function(error) {
        console.log("Error fetching weather data:", error);
    });

document.getElementById("learn-more").addEventListener("click", function() {
    document.getElementById("home").style.color = "green";
});

document.querySelectorAll(".service button").forEach(function(button) {
    button.addEventListener("click", function() {
        alert("You clicked a service!");
    });
});

const anchorLinks = document.querySelectorAll("nav ul li a");

anchorLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
       
    });
});

let clickCount = 0;

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
});

function fetchUserData(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            const userDiv = document.createElement("div");
            userDiv.textContent = `User: ${user.name}, Email: ${user.email}`;
            document.body.appendChild(userDiv);
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });
}

fetchUserData(1);
const hour = new Date().getHours();
let greetingMessage = "";

if (hour < 12) {
    greetingMessage = "Good Morning!";
} else if (hour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

document.getElementById("home").insertAdjacentHTML('beforebegin', `<h3>${greetingMessage}</h3>`);