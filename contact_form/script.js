let form = document.getElementById("form");
let send = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let input = document.getElementsByTagName("input");
const phonePattern = /^\+?(\d{10,12})$/;
const emailPattern =
  /^([a-zA-Z\d-\.]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,6})(\.[a-z]{2,6})?$/;
const successMessage = document.getElementById("success-message");

const handleSubmit = () => {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  let subjectValue = subject.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required!");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required!");
  } else if (!emailPattern.test(emailValue)) {
    setError(email, "Enter a valid email address!");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Phone Number is required!");
  } else if (!phonePattern.test(phoneValue)) {
    setError(phone, "Enter correct phone number!");
  } else {
    setSuccess(phone);
  }

  if (subjectValue === "") {
    setError(subject, "Subject is required!");
  } else if (subjectValue.length < 10) {
    setError(
      subject,
      "Should be atleast 10 characters, Kindly keep the subject appropriate!"
    );
  } else if (subjectValue.length >= 60) {
    setError(
      subject,
      "Should not be more than 60 characters, Kindly keep the subject to the point!"
    );
  } else {
    setSuccess(subject);
  }

  if (
    username.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    phone.parentElement.classList.contains("success") &&
    subject.parentElement.classList.contains("success")
  ) {
    successMessage.innerText = "Form submitted successfully!";
    email.value = "";
    username.value = "";
    subject.value = "";
    phone.value = "";
    message.value = "";

    let formBox = document.querySelectorAll(".form-box");
    formBox.classList.remove("success");
  }
};

const setError = (element, message) => {
  let inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (e) => {
  let inputControl = e.parentElement;
  let errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  });
});
form.addEventListener("reset", () => {
  successMessage.innerText = "";
});
