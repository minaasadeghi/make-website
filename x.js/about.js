document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
});

const darkModeButton = document.createElement("button");
darkModeButton.classList.add("dark-mode-button");
darkModeButton.textContent = "🌙";
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

const header = document.querySelector("header");
header.classList.add("bounce-header");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        document.body.classList.add("mobile-view");
    } else {
        document.body.classList.remove("mobile-view");
    }
});

const teamMembers = document.querySelectorAll(".team-member");
teamMembers.forEach(member => {
    member.addEventListener("click", () => {
        alert(`You clicked on ${member.textContent}`);
    });
});

const loadTeamData = () => {
    fetch("https://api.example.com/team")
        .then(response => response.json())
        .then(data => {
            const teamSection = document.getElementById("team-section");
            data.forEach(member => {
                const memberDiv = document.createElement("div");
                memberDiv.classList.add("team-member");
                memberDiv.textContent = member.name;
                teamSection.appendChild(memberDiv);
            });
        })
        .catch(error => console.log("Error fetching team data:", error));
};

loadTeamData();

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log("Form submitted:", formObject);
    alert("Thank you for contacting us!");
});

const backToTopButton = document.createElement("button");
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add("back-to-top-button");
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});