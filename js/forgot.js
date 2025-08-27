document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("forgotForm");
  if (!form) {
    console.error("Forgot form not found!");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const secret = document.getElementById("secret").value.trim();
    console.log("Submitted:", { username, secret });

    // load all data from localStorage 
    const allUsers = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = allUsers[username]; // obtain current user data

    console.log("All users:", allUsers);
    console.log("Current user data:", userData);

    // notic
    const showNotification = (message, type) => {
      const notification = document.createElement("div");
      notification.className = `notification ${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.animation = "slideOutNotification 0.3s ease-out";
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    };

    const addShakeAnimation = () => {
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
    };

    // cant find user
    if (!userData) {
      showNotification("No account found with this username!", "error");
      addShakeAnimation();
      console.log("No user found for username:", username);
      return;
    }

    // validation secret
    if (userData.secret === secret) {
      showNotification(`Your password is: ${userData.password}`, "success");
      form.classList.add("success");
      setTimeout(() => form.classList.remove("success"), 600);
      console.log("Password retrieved:", userData.password);
    } else {
      showNotification("Secret word is incorrect!", "error");
      addShakeAnimation();
      console.log("Secret mismatch for username:", username);
    }
  });
});

// add slideOut animation
const style = document.createElement("style");
style.textContent = `
  @keyframes slideOutNotification {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
