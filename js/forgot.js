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

    // 从 localStorage 获取所有用户数据
    const allUsers = JSON.parse(localStorage.getItem('users') || '{}');
    const userData = allUsers[username]; // 取出当前用户的数据

    console.log("All users:", allUsers);
    console.log("Current user data:", userData);

    // 通知系统
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

    // 输入错误时抖动动画
    const addShakeAnimation = () => {
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
    };

    // 没有找到用户
    if (!userData) {
      showNotification("No account found with this username!", "error");
      addShakeAnimation();
      console.log("No user found for username:", username);
      return;
    }

    // 验证 secret
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

// 添加 slideOut 动画
const style = document.createElement("style");
style.textContent = `
  @keyframes slideOutNotification {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
