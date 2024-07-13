
// image zoom in zoom out
document.addEventListener('scroll', function () {
    const zoomFactor = 0.002; // Adjust the zoom factor as needed
    const scrollY = window.scrollY;
    const images = document.querySelectorAll('.carousel-item img');

    images.forEach((img) => {
        const scale = 1 + scrollY * zoomFactor;
        img.style.transform = `scale(${scale})`;
    });
});


const panel = document.querySelectorAll(".panel");

panel.forEach((panel) => {
   panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
   });
});

function removeActiveClasses() {
    panel.forEach((panel) => {
        panel.classList.remove("active");
    });
}

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".my-card",
        start: "85% 90%",
        end: "40% 30%",
        scrub: true,
        // markers: true
    }
});

tl.to(".my-card", {
    y:90,
    duration: 11,
    delay: 1,
    transition:0.5
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }
// JavaScript for Bootstrap form validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();