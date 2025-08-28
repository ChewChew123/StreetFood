document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const avatarDiv = document.getElementById('profile-avatar');
  const usernameP = document.getElementById('profile-username');
  const loginLogoutBtn = document.getElementById('login-logout-btn');
  const toggleAvatarBtn = document.getElementById('toggle-avatar-btn');
  const toggleUsernameBtn = document.getElementById('toggle-username-btn');

  console.log('Current User:', currentUser);
  if (loginLogoutBtn) {
    console.log('Button found');
  }

  // Load user data
  if (currentUser && currentUser.username) {
    usernameP.textContent = currentUser.username;
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).avatar) {
      avatarDiv.innerHTML = `<img src="${JSON.parse(localStorage.getItem('user')).avatar}" class="card-image">`;
    } else {
      avatarDiv.textContent = currentUser.username.charAt(0).toUpperCase();
    }
    loginLogoutBtn.textContent = "Log Out";
  } else {
    usernameP.textContent = "Guest";
    avatarDiv.textContent = "G";
    loginLogoutBtn.textContent = "Log In";
  }

  // Add click event listener for authentication
  if (loginLogoutBtn) {
    loginLogoutBtn.addEventListener('click', handleAuthAction);
  }

  // Avatar button
  if (toggleAvatarBtn) {
    toggleAvatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllPopovers();
      togglePopover('avatar-popover');
    });
  }

  // Username button
  if (toggleUsernameBtn) {
    toggleUsernameBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllPopovers();
      togglePopover('username-popover');
    });
  }

  document.addEventListener('click', (e) => {
    const isPopover = e.target.closest('[id$="-popover"]');
    const isButton = e.target.closest('#toggle-avatar-btn, #toggle-username-btn');

    if (!isPopover && !isButton) {
      closeAllPopovers();
    }
  });
});

// Toggle helper
function togglePopover(id) {
  const popover = document.getElementById(id);
  popover?.classList.toggle("hidden");
}

// Close all
function closeAllPopovers() {
  document.querySelectorAll('[id$="-popover"]').forEach(pop => pop.classList.add("hidden"));
}

// Username update
function saveUsername() {
  const newUsername = document.getElementById('edit-username').value.trim();
  if (!newUsername) return;

  let user = JSON.parse(localStorage.getItem('user')) || {};
  user.username = newUsername;
  localStorage.setItem('user', JSON.stringify(user));

  document.getElementById('profile-username').textContent = newUsername;

  if (!user.avatar) {
    document.getElementById('profile-avatar').textContent = newUsername.charAt(0).toUpperCase();
  }

  closeAllPopovers();
}

// Avatar update
function saveAvatar() {
  const file = document.getElementById('edit-avatar').files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    let user = JSON.parse(localStorage.getItem('user')) || {};
    user.avatar = e.target.result;
    localStorage.setItem('user', JSON.stringify(user));

    document.getElementById('profile-avatar').innerHTML =
      `<img src="${e.target.result}" class="card-image">`;

    closeAllPopovers();
  };
  reader.readAsDataURL(file);
}

// Auth button
function handleAuthAction() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && currentUser.username) {
    // Logout
    localStorage.removeItem('currentUser');
    window.location.reload(); // Reload to update UI to Guest state
  } else {
    // Redirect to login page when not logged in
    window.location.href = "Login.html";
  }
}