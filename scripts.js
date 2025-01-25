document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    let lastScrollY = window.scrollY;
    
    // Function to check if user has scrolled to bottom
    const isBottom = () => {
        return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
    };

    window.addEventListener('scroll', () => {
        // Handle header scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Handle footer visibility
        // Show footer only at start (scrollY near 0) or at bottom of page
        if (window.scrollY < 100) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }

        lastScrollY = window.scrollY;
    });

    // Do not hide footer initially
    footer.classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const images = Array.from(carousel.querySelectorAll('img'));
    
    let currentIndex = 0;
    const totalImages = images.length;

    // Initial setup with transition
    images.forEach((img, index) => {
        img.style.position = 'absolute';
        img.style.top = '50%'; // Center vertically
        img.style.left = '50%'; // Center horizontally
        img.style.transform = 'translate(-50%, -50%)'; // Offset to truly center
        img.style.width = 'auto';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.transition = 'opacity 0.5s ease';
    });
    

    prevButton.addEventListener('click', () => {
        images[currentIndex].style.opacity = '0';
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].style.opacity = '1';
    });

    nextButton.addEventListener('click', () => {
        images[currentIndex].style.opacity = '0';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.opacity = '1';
    });
});


document.getElementById("song-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbwuccpuMsBFWirhBza4AC1eO0fpYssQ7hydJqzD-DhnJrzY9X4jqQRGYbfcJOexhFB6Lw/exec", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.text())
        .then((data) => {
            // Show custom modal popup
            const popup = document.getElementById("success-popup-song");
            popup.style.display = "block";

            // Add listeners for hiding the popup
            document.addEventListener("click", hidePopupOnClickOutside);
            document.addEventListener("scroll", hidePopupOnScroll);

            // Reset the form
            form.reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        });
});

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbw-96pzbeKtPydr6pwPsY5LZIfVoQxYi3hvHZZzXOzhCUynSZxh54rLRfV9CzsV6wJz/exec", {
        method: "POST",
        body: formData,
        mode: 'no-cors'
    })
    .then((response) => response.text())
    .then((data) => {
        // Show custom modal popup
        const popup = document.getElementById("success-popup-rsvp");
        popup.style.display = "block";

        // Add listeners for hiding the popup
        document.addEventListener("click", hidePopupOnClickOutside);
        document.addEventListener("scroll", hidePopupOnScroll);

        // Reset the form
        form.reset();
    })
    .catch((error) => {
        alert("Something went wrong. Please try again.");
    });
});

// Function to hide popup on click outside
function hidePopupOnClickOutside(event) {
    const popup = document.getElementById("success-popup-song");
    if (!popup.contains(event.target)) {
        popup.style.display = "none";
        removeHideListeners(); // Clean up listeners
    }
}

// Function to hide popup on scroll
function hidePopupOnScroll() {
    document.getElementById("success-popup-song").style.display = "none";
    removeHideListeners(); // Clean up listeners
}

// Function to hide popup on click outside
function hidePopupOnClickOutside(event) {
    const popup = document.getElementById("success-popup-rsvp");
    if (!popup.contains(event.target)) {
        popup.style.display = "none";
        removeHideListeners(); // Clean up listeners
    }
}

// Function to hide popup on scroll
function hidePopupOnScroll() {
    document.getElementById("success-popup-rsvp").style.display = "none";
    removeHideListeners(); // Clean up listeners
}

// Function to remove listeners
function removeHideListeners() {
    document.removeEventListener("click", hidePopupOnClickOutside);
    document.removeEventListener("scroll", hidePopupOnScroll);
}