const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
// Toggle menu on click
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Helper function to validate phone number (10 digits)
const isValidPhone = (phone) => /^\d{10}$/.test(phone);

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  // Collect form inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error flag
  let hasError = false;

  // Reset error messages
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.style.display = "none"));

  if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid Email format";
    document.getElementById("emailError").style.display = "block";
    hasError = true;
  }

  if (!isValidPhone(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be exactly 10 digits";
    document.getElementById("phoneError").style.display = "block";
    hasError = true;
  } else {
    document.getElementById("phoneError").style.display = "none";
  }

  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters";
    document.getElementById("passwordError").style.display = "block";
    hasError = true;
  }

  // If no errors, log form data as an object
  if (!hasError) {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      password: password,
    };
    console.log(formData);
    alert("Form submitted successfully!");
  }
});
