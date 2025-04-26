//References to the form element, the success window, the certain elements within the window.
const emailForm = document.getElementById("emailForm");
const successWindow = document.getElementById("successWindow");
const submittedEmail = successWindow.querySelector("b");
const dismissButton = document.getElementById("dismiss");

//A regex validating the format of the email submission.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Checks the email submission and returns either the success window or an error message.
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  
  if (!emailRegex.test(email)) {
    emailForm.classList.add("incorrect");
  } else {
    emailForm.classList.remove("incorrect");
    submittedEmail.textContent = email;
    successWindow.style.display = "flex";
  }
});

//Reloads the page when the user dismisses the success message.
dismissButton.addEventListener("click", () => { location.reload(); });