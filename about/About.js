let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show selected slide
}