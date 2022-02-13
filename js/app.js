const firstNameElems = document.querySelectorAll(
  ".sign-up__form-item--first-name > *"
);
const lastNameElems = document.querySelectorAll(
  ".sign-up__form-item--last-name > *"
);
const emailElems = document.querySelectorAll(".sign-up__form-item--email > *");
const passwordElems = document.querySelectorAll(
  ".sign-up__form-item--password > *"
);
const inputElems = document.querySelectorAll(".sign-up__form-input");
const formElem = document.getElementById("sign-up__form");

let emailTemplate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwdTemplate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  if (firstNameElems[0].value == "") {
    firstNameElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  }
  if (lastNameElems[0].value == "") {
    lastNameElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  }
  if (emailElems[0].value == "") {
    emailElems[2].innerText = "Email Address cannot be empty";
    emailElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  } else if (!emailTemplate.test(emailElems[0].value)) {
    emailElems[2].innerText = "Looks like this is not an email";
    emailElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  }
  if (passwordElems[0].value == "") {
    passwordElems[2].innerText = "Password cannot be empty";
    passwordElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  } else if (!passwordElems[0].value.match(passwdTemplate)) {
    passwordElems[2].innerText =
      "Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]";
    passwordElems.forEach((e) => {
      e.dataset.valid = "false";
    });
  }
});

firstNameElems[0].addEventListener("click", () => {
  firstNameElems.forEach((e) => {
    e.dataset.valid = "true";
  });
});

lastNameElems[0].addEventListener("click", () => {
  lastNameElems.forEach((e) => {
    e.dataset.valid = "true";
  });
});

emailElems[0].addEventListener("click", () => {
  emailElems.forEach((e) => {
    e.dataset.valid = "true";
  });
});

passwordElems[0].addEventListener("click", () => {
  passwordElems.forEach((e) => {
    e.dataset.valid = "true";
  });
});
