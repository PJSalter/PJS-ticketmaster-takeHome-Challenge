// ********** JavaScript code will go here ************* //

// picking up the form element to start off with so that I can access the rest of the elements.
const confirmForm = document.querySelector('#confirm');
console.log(confirmForm);

// show a message from a type of input, whether its the email or mobile.
// create a function that will appear this message once user confirms there details.

const popupMessage = (input, message, type) => {
    //picking up the <small> (small element) to pin a message
    // returning the parent of the particular node from the DOM tree.
    let messageBeep = input.parentNode.querySelector("small");
    messageBeep.innerText = message;
    console.log(messageBeep)
    // reforming the input class attribute
    input.className = type ? "success" : "error";
    return type;
}

// error will appear if information is incorrect

const appearingError = (input, message) => popupMessage(input, message, false);

console.log(appearingError)

// congrats to the user for entering the correct validated info.
const correctInfo = input => popupMessage(input, "", true);

console.log(correctInfo)

const includeTheValue = (input, message) => input.value.trim() === "" ? appearingError(input, message) : correctInfo(input)

//console.log(input)



