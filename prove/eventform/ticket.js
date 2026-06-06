const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errorsDiv = document.querySelector("#errors");
const ticketInfo = document.querySelector("#ticketInfo");

typeSelect.addEventListener("change", function () {
  extraInput.value = "";

  if (typeSelect.value === "student") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "Enter 9 digit student I number";
  } else if (typeSelect.value === "guest") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Access Code";
    extraInput.placeholder = "Enter access code";
  } else {
    extraField.classList.add("hidden");
    extraLabel.textContent = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = [];

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventDate = document.querySelector("#eventDate").value;
  const type = typeSelect.value;
  const extraValue = extraInput.value.trim();

  errorsDiv.innerHTML = "";
  ticketInfo.innerHTML = "";

  if (firstName === "") {
    errors.push("Please enter your first name.");
  }

  if (lastName === "") {
    errors.push("Please enter your last name.");
  }

  if (email === "") {
    errors.push("Please enter your email.");
  }

  if (eventDate === "") {
    errors.push("Please choose an event date.");
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(eventDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      errors.push("The event date must be later than the current date.");
    }
  }

  if (type === "") {
    errors.push("Please choose Student or Guest.");
  }

  if (type === "student") {
    const studentPattern = /^[0-9]{9}$/;

    if (!studentPattern.test(extraValue)) {
      errors.push("Student I# must be exactly 9 digits.");
    }
  }

  if (type === "guest") {
    if (extraValue !== "EVENT131") {
      errors.push("Access Code must be EVENT131.");
    }
  }

  if (errors.length > 0) {
    let errorHTML = "<h2>Please fix the following errors:</h2><ul>";

    errors.forEach(function (error) {
      errorHTML += `<li>${error}</li>`;
    });

    errorHTML += "</ul>";
    errorsDiv.innerHTML = errorHTML;
    return;
  }

  ticketInfo.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
  `;

  form.reset();
  extraField.classList.add("hidden");
});