document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const secret = document.getElementById("secret").value.trim();

  // Validate form
  if (!validateForm(username, password, confirmPassword, secret)) {
    return;
  }

  // Show loading state
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // Check if username exists in localStorage
    let userData = JSON.parse(localStorage.getItem("users") || "{}");
    if (userData[username]) {
      showNotification("Username already exists! Please choose a different one.", "error");
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      document.querySelector(".login-container").classList.add("shake");
      setTimeout(() => document.querySelector(".login-container").classList.remove("shake"), 500);
      return;
    }

    // Store user data in localStorage
    userData[username] = {
      password: password,
      secret: secret,
    };
    localStorage.setItem("users", JSON.stringify(userData));
    console.log("User Data Saved:", userData); // Debug log to verify storage

    // Success animation
    document.querySelector(".login-container").classList.add("success");
    showNotification("Account created successfully! Welcome aboard! 🎉", "success");

    // Reset form and show success
    document.getElementById("signupForm").reset();
    document.getElementById("passwordStrength").style.display = "none";

    // Get the returnTo query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const returnTo = urlParams.get("returnTo") || localStorage.getItem("loginReferrer") || "favourite.html";

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      showNotification("You can now sign in with your credentials!", "success");

      // Redirect to login.html with the returnTo query parameter
      window.location.replace(`login.html?returnTo=${encodeURIComponent(returnTo)}`);
    }, 1000);
  }, 1500);
});

// Form validation
function validateForm(username, password, confirmPassword, secret) {
  if (username.length < 3) {
    showNotification("Username must be at least 3 characters long", "error");
    return false;
  }

  if (password.length < 6) {
    showNotification("Password must be at least 6 characters long", "error");
    return false;
  }

  if (password !== confirmPassword) {
    showNotification("Passwords do not match", "error");
    return false;
  }

  if (secret.length < 2) {
    showNotification("Security word must be at least 2 characters long", "error");
    return false;
  }

  return true;
}

// Password strength checker
document.getElementById("password").addEventListener("input", function (e) {
  const password = e.target.value;
  const strengthIndicator = document.getElementById("passwordStrength");
  const strengthFill = document.getElementById("strengthFill");
  const strengthText = document.getElementById("strengthText");

  if (password.length === 0) {
    strengthIndicator.style.display = "none";
    return;
  }

  strengthIndicator.style.display = "block";

  let strength = 0;
  let strengthLabel = "";
  let strengthClass = "";

  // Check password criteria
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Set strength level
  if (strength <= 2) {
    strengthLabel = "Weak";
    strengthClass = "strength-weak";
  } else if (strength <= 3) {
    strengthLabel = "Medium";
    strengthClass = "strength-medium";
  } else {
    strengthLabel = "Strong";
    strengthClass = "strength-strong";
  }

  // Update UI
  strengthFill.style.width = (strength / 5) * 100 + "%";
  strengthFill.className = "strength-fill " + strengthClass;
  strengthText.textContent = strengthLabel;
  strengthText.className = "strength-text " + strengthClass;
});

// Password toggle functionality
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;

  if (input.type === "password") {
    input.type = "text";
    button.textContent = "🙈";
  } else {
    input.type = "password";
    button.textContent = "👁️";
  }
}

// Notification system
function showNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notif) => notif.remove());

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${type === "success" ? "✓" : "⚠️"}</span>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Auto remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOut 0.3s ease-in-out forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, 4000);
}

// Add input animations
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentNode.style.transform = "translateY(-2px)";
  });

  input.addEventListener("blur", function () {
    this.parentNode.style.transform = "translateY(0)";
  });
});

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Signup page loaded successfully");
});