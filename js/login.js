document.addEventListener("DOMContentLoaded", function () {
    const referrer = document.referrer;
    // correct back page
    if (
        referrer &&
        !referrer.includes("Signup.html") &&
        !referrer.includes("forgot.html")  
    ) {
        localStorage.setItem("loginReferrer", referrer);
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    let userData = JSON.parse(localStorage.getItem("users") || "{}");
    let storedUser = userData[username];

    console.log("Stored User Data:", storedUser);
    console.log("Stored Password:", storedUser?.password);
    console.log("Entered Password:", password);

    if (!storedUser) {
        alert("No account found with this username!");
        return;
    }

    if (storedUser.password === password) {
        alert("Login successful! Welcome, " + username);
        localStorage.setItem("currentUser", JSON.stringify({ username: username }));

        const urlParams = new URLSearchParams(window.location.search);
        let returnTo = urlParams.get("returnTo") || urlParams.get("returnUrl") || localStorage.getItem("loginReferrer") || "index.html";

        if (returnTo.includes("Signup.html")) {
            returnTo = "index.html";
        }

        if (returnTo.includes("forgot.html")) {
        returnTo = "favourite.html";
    }

        window.location.href = returnTo;
        localStorage.removeItem("loginReferrer");
    } else {
        alert("Wrong password!");
    }
});

function goBack() {
    const urlParams = new URLSearchParams(window.location.search);
    let returnTo = urlParams.get("returnTo") || urlParams.get("returnUrl") || localStorage.getItem("loginReferrer") || "index.html";

    if (returnTo.includes("Signup.html")) {
        returnTo = "index.html";
    }

     if (returnTo.includes("forgot.html")) {
        returnTo = "favourite.html";
    }

    window.location.href = returnTo;
    localStorage.removeItem("loginReferrer");
}

function registerUser(username, password) {
    let userData = JSON.parse(localStorage.getItem("users") || "{}");
    userData[username] = { password: password }; // Store as object for future extensibility
    localStorage.setItem("users", JSON.stringify(userData));
}

function getCookie(name) {
    let ca = document.cookie.split(";");
    name = name + "=";
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(name) === 0) return c.substring(name.length);
    }
    return "";
}