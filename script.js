// Selecting the Toggle Button

const toggleButton = document.querySelector("#toggleBtn");

// Function to switch between light and dark modes

function toggle() {

    // Storing everthing that needs colours changed in a variable
    const body = document.body;
    const mainContainer = document.querySelector(".main-container");
    const heading1 = document.querySelector("h1");
    const sub = document.querySelector(".subheading");
    const button = document.querySelector("button");
    const blogBlock1 = document.querySelector(".blog-block1");
    const blogBlock2 = document.querySelector(".blog-block2");
    const blogBlock3 = document.querySelector(".blog-block3");
    const blogBlock4 = document.querySelector(".blog-block4");
    const blogBlock5 = document.querySelector(".blog-block5");
    const blogBlock6 = document.querySelector(".blog-block6");

    // Toggling dark mode on all relevant elements
    body.classList.toggle("dark-mode");
    mainContainer.classList.toggle("dark-mode");
    heading1.classList.toggle("dark-mode");
    sub.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    blogBlock1.classList.toggle("dark-mode");
    blogBlock2.classList.toggle("dark-mode");
    blogBlock3.classList.toggle("dark-mode");
    blogBlock4.classList.toggle("dark-mode");
    blogBlock5.classList.toggle("dark-mode");
    blogBlock6.classList.toggle("dark-mode");
}


// Add an event listener to the button to toggle the light and dark modes
toggleButton.addEventListener("click", toggle);

