let input = document.querySelector("input")
let btn = document.querySelector("#btn")
let ul = document.querySelector("ul")
let li;
let span;

// Function to create a new list item and handle the click event on the span
function createListItem() {
    const text = input.value.trim(); // Trim any spaces from the input
    
    // Only create and add a list item if there's valid text
    if (text) { 
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.classList.add('custom-span'); // Applying the marker class
        li.textContent = text; 
        li.appendChild(span); 
        ul.appendChild(li); 
        input.value = ""; 

        // Event listener for crossing off the list item when the span is clicked
        span.addEventListener("click", function() {
            const crossedOff = li.style.textDecoration === "line-through";
            if(crossedOff) {
            li.style.textDecoration = "";
            li.style.color = ""; 
            span.style.backgroundColor = ""; 
            span.style.border = ""; 
            } else {
                li.style.textDecoration = "line-through"; 
                li.style.color = "grey"; 
                span.style.backgroundColor = "orange";
                span.style.border = "2px solid transparent"; 
            }
        });
    }
}

// Event listener for the button click
btn.addEventListener("click", createListItem); // Call the common function if the input has text

// Event listener for the "Enter" key on the input field
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the key pressed is "Enter"
        createListItem(); // Call the common function if the input has text
    }
});
