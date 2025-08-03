// Image Slider Logic
var index = 0;
var sliderContainer = document.getElementById("image-slider"); 
var images = sliderContainer.querySelectorAll("img"); 

function nextImage(){
    images[index].classList.remove("event");
    index++;
    if(index >= images.length){
        index = 0; 
    }
    images[index].classList.add("event");
}
function prevImage(){
    images[index].classList.remove("event");
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    images[index].classList.add("event");
}

// Optional: Auto-play slider (uncomment to activate)
// setInterval(function() {
//     nextImage();
// }, 3000); // Change image every 3 seconds

// Dark Mode Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
<<<<<<< Updated upstream
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial display for the first image
showImage(currentImageIndex);
//fnhjm,k
=======
});
>>>>>>> Stashed changes
