let slideIndex = 0; // Start at the first slide

// Function to automatically cycle through slides
function autoScrollSlides() {
    const slides = document.getElementsByClassName("slide"); // Get all slide elements
    const dots = document.getElementsByClassName("dot"); // Get all dot elements

    // Hide all slides and reset active dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide each slide
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", ""); // Reset dot style
    }

    // Increment slideIndex to move to the next slide
    slideIndex++;

    // If slideIndex exceeds the number of slides, reset to the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "flex"; // Display the active slide (centered)
    dots[slideIndex - 1].className += " active-dot"; // Highlight active dot

    // Set a timer to automatically call this function every 3 seconds
    setTimeout(autoScrollSlides, 3000);
}

// Start the slideshow when the page loads
autoScrollSlides();
