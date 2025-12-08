
// tracks the color theme is active or not
let colorChange = false;

// this toggles the color them when the user clicks the logo 
function changeColor() {
    // flip the bool
    colorChange = !colorChange;
    if (colorChange) {
        // apply the dark
    document.body.classList.add("switch-color");
    }
    // remove the dark  
    else {
        document.body.classList.remove("switch-color");
    }
}


