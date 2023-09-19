// NAVBAR
const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// ON SCROLL NAVBAR =======================================
const navEl = document.querySelector(".s2");
const obs1 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs1.observe(navEl);
// Form submit event

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const message = document.getElementById("message").value;
  const subject = document.getElementById("subject").value;
  let isValid = true;

  if (name === "") {
    displayError("name", "Please enter your name");
    isValid = false;
  }

  if (email === "") {
    displayError("email", "Please enter your email");
    isValid = false;
  } else if (!validateEmail(email)) {
    displayError("email", "Please enter a valid email");
    isValid = false;
  }

  if (subject === "") {
    displayError("subject", "Please enter Subject");
    isValid = false;
  }

  if (message === "") {
    displayError("message", "Please enter your message");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit it or perform other actions
    // alert(`${name} Your Form Submitted Successfully`);
    form.reset(); // Reset the form
  }
});

function displayError(fieldId, errorMessage) {
  const errorElement = document.getElementById(`${fieldId}Error`);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}

function validateEmail(email) {
  // Simple email validation regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhone(phone) {
  // Simple phone number validation regex pattern
  const pattern = /^\d{10}$/;
  return pattern.test(phone);
}

// POPUP IN FORM
const submitBtn = document.querySelector("#submit");
const popupBtn = document.querySelector(".btn");
const popup = document.querySelector(".popup");

submitBtn.addEventListener("click", function () {
  popup.classList.remove("hidden");
});

popupBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});
