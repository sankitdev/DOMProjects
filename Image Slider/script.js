const carouselContainer = document.querySelector(".carousel-container");
let carouselItems = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
const touch = document.querySelector("img")

// Function to handle "Next" button click
function handleNext() {
    // Update class names
    carouselItems[1].classList.replace("active", "previous");
    carouselItems[2].classList.replace("next", "active");
    carouselItems[0].classList.replace("previous", "next");

    // Reorder the carousel by moving the first item to the end
    carouselContainer.appendChild(carouselItems[0]);

    // Refresh the carousel items after reordering
    carouselItems = document.querySelectorAll(".carousel");
}

// Function to handle "Previous" button click
function handlePrev() {
    // Update class names
    carouselItems[1].classList.replace("active", "next");
    carouselItems[2].classList.replace("next", "previous");
    carouselItems[0].classList.replace("previous", "active");

    // Reorder the carousel by moving the last item to the front
    carouselContainer.insertBefore(carouselItems[2], carouselItems[0]);

    // Refresh the carousel items after reordering
    carouselItems = document.querySelectorAll(".carousel");
}

// Attach event listeners for "Next" and "Previous" buttons


function touchScreen(){
    carouselContainer.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX; // Get the X coordinate when touch starts
    });
    
    // Capture final touch position
    carouselContainer.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX; // Get the X coordinate when touch ends
        handleSwipe(); // Check swipe direction
    });
    
    // Function to determine swipe direction and trigger appropriate action
    function handleSwipe() {
        const deltaX = touchEndX - touchStartX; // Calculate swipe distance
    
        if (deltaX > 30) { // If swipe is to the right
            handlePrev(); // Trigger previous
        } else if (deltaX < -30) { // If swipe is to the left
            handleNext(); // Trigger next
        }
    }
}

touchScreen();
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);