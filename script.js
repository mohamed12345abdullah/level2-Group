// Get the sidebar toggle checkbox and the overlay
const sidebarToggle = document.getElementById("sidebar-toggle");
const overlay = document.getElementById("overlay");
const themeSwitch = document.getElementById("theme-switch");

// Function to toggle sidebar visibility and overlay
function toggleSidebar() {
    // The sidebar visibility is controlled by the checkbox's :checked state
    // and associated CSS rules. No direct JS class toggling needed on navbar itself.
    if (sidebarToggle.checked) {
        overlay.style.display = "block"; // Show overlay
    } else {
        overlay.style.display = "none"; // Hide overlay
    }
}

// Add event listener to the sidebar toggle checkbox
if (sidebarToggle) {
    sidebarToggle.addEventListener("change", toggleSidebar);
}

// Add event listener to the overlay to close the sidebar when clicked
if (overlay) {
    overlay.addEventListener("click", () => {
        sidebarToggle.checked = false; // Uncheck the sidebar toggle
        toggleSidebar(); // Update overlay display
    });
}

// Dark Mode Toggle
if (themeSwitch) {
    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Image Slider functionality (original code, assumed to work as intended)
let currentImageIndex = 0;
const images = document.querySelectorAll('#image-slider img');

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('event');
        } else {
            img.classList.remove('event');
        }
    });
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