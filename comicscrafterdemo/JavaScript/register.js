const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;

    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  const isValidEmail = (email) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
  
    if (firstNameValue === "") {
      setError(firstName, "First name is required");
    } else {
      setSuccess(firstName);
    }
    if (lastNameValue === "") {
        setError(lastName, "Last name is required");
      } else {
        setSuccess(lastName);
      }
  
    if (emailValue === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }
  
    if (passwordValue === "") {
      setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      setError(password, "Password must be at least 8 character.");
    } else {
      setSuccess(password);
    }
  
    if (confirmPasswordValue === "") {
      setError(confirmPassword, "Please confirm your password");
    } else if (confirmPasswordValue !== passwordValue) {
      setError(confirmPassword, "Passwords don't match");
    } else {
      setSuccess(confirmPassword);
    }
  };
  