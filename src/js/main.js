const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

// CHECK SAVED THEME ON PAGE LOAD
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// TOGGLE THEME
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); // SAVE
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); // SAVE
  }
});


// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




// Animate About Skills on Scroll
const skillSection = document.querySelector(".about-skills");
const progressBars = document.querySelectorAll(".skill-progress");

function showSkills() {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    progressBars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }
}

window.addEventListener("scroll", showSkills);

// SKILL ANIMATION
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {
  skillBars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}

window.addEventListener("scroll", animateSkills);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "254717474657"; // your WhatsApp number

    const text =
        `New Portfolio Inquiry:%0A%0A` +
        `Name: ${firstName} ${lastName}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A%0A` +
        `Message:%0A${message}`;

    const url = `https://wa.me/0717474657?text=welcome`;

    window.open(url, "_blank");
});