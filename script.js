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

// setting the value onto these inputs.
const includeTheValue = (input, message) => {

if(input.value.trim() === "") {
    return appearingError(input, message) 
} else {
    return correctInfo(input)
}
}
//console.log(input)

// function for email
const validateEmail = (input, requiredMsg, invalidMsg) => {
	// check if the value is not empty
	if (!includeTheValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
    console.log(email)
	if (!emailRegex.test(email)) {
		return appearingError(input, invalidMsg);
	}
	return true;
}

//mobile phone function

const validatePhone = (input, requiredMsg, invalidMsg) => {

    if (!includeTheValue(input, requiredMsg)) {
		return false;
	}

    let mobileRegex = /^[0-9]{11}$/;

    let insertTelephone = input.value.trim();
    console.log(insertTelephone)

    if(!mobileRegex.test(insertTelephone)) {
        appearingError(input, invalidMsg);
    }
    return true;
  }

  //validatePhone()
  const vitalMobileNum = "Please insert your number";
  const incorrectNum = "Please enter a correct number";

  const emailAddressNeeded = "Please enter your email here";
  const incorrectEmail = "Please enter a correct email address format";


  // fuction to check if both mobile and email are valid, if not then throw and alert.
  const checkConfirm = e => {
  e.preventDefault();

	// validate the form information for both number and email.
	let numberValidation = validatePhone(confirmForm.elements["mobile-contact"], vitalMobileNum, incorrectNum);
	let emailValidation = validateEmail(confirmForm.elements["email"], emailAddressNeeded, incorrectEmail);

	// then if num and email are both valid then post an alert.
    let bothAcceptable = numberValidation && emailValidation;
    // if both are true
	if (bothAcceptable = true) {
		alert("Confirming and posting the information");
	}
  }

  // handling the confirmation handler with an event listener on 'submit'.

  confirmForm.addEventListener("submit", checkConfirm);


