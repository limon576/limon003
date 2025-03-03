document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const cards = document.querySelectorAll(".card");

    window.addEventListener("scroll", function() {
        let sectionPosition = aboutSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add("show");
        }

        cards.forEach((card, index) => {
            let cardPosition = card.getBoundingClientRect().top;
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            }
        });
    });
});


const textElement = document.getElementById("typing-text");
const textArray = ["Web Developer", "Ethical Hacker", "AI Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        textElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});


document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    window.addEventListener("scroll", function() {
        let screenPosition = window.innerHeight / 1.3;

        projectCards.forEach((card, index) => {
            let cardPosition = card.getBoundingClientRect().top;
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            }
        });
    });
});



// Show the button when user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Wait for the page to load completely
window.onload = function() {
    document.getElementById("loadingOverlay").style.display = "none"; // Hide the loading animation
}