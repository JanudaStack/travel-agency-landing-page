// Toggle between Login and Register Forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");

showRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Link eka click wena eka nawaththanawa
  loginForm.classList.remove("active-form");
  // Mobile waladi form eka display:none wenna thiyana nisa timeout ekak one na desktop nam
  // Eth smooth transition ekata podi delay ekak nathiwa class maru karamu

  // Slight delay for smooth fade effect check
  setTimeout(() => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    setTimeout(() => {
      registerForm.classList.add("active-form");
    }, 10);
  }, 400); // Wait for fade out
});

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active-form");

  setTimeout(() => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    setTimeout(() => {
      loginForm.classList.add("active-form");
    }, 10);
  }, 400);
});

// Initial Setup for Fade Logic (JS walin controls handle karanna)
document.addEventListener("DOMContentLoaded", () => {
  // Ensure correct initial state
  registerForm.style.display = "none";
});

// Toggle Password Visibility (Eye Icon)
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
