// Dark Mode Toggle
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
// about.js

// The full paragraph text with styled spans
const text = `Welcome to <span class="shop-name">Faizullah Hardware & Software Shop</span> – 
your trusted place for the latest mobile parts, accessories, and software services.  
From stylish phone cases to durable chargers, professional software installation,  
and custom hardware solutions – <span class="highlight">we cover it all!</span>`;

let i = 0;
const speed = 40; // typing speed (ms)
let typingStarted = false;

// Typing animation
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML = text.substring(0, i+1);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Fade-in + start typing when section is visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !typingStarted) {
      // Show heading fade-in
      document.getElementById("about-heading").classList.add("show");

      // Delay typing slightly
      typingStarted = true;
      setTimeout(typeWriter, 500);
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector("#about"));
