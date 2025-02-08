/**
 * Handles profile page logic.
 * Redirects unauthorized users and displays user information.
 */

document.addEventListener("DOMContentLoaded", function () {
  const loggedInEmail = localStorage.getItem("loggedInUser");

  if (!loggedInEmail) {
      window.location.href = "index.html";
      return;
  }

  const userData = localStorage.getItem(loggedInEmail);

  if (userData) {
      const user = JSON.parse(userData);
      document.getElementById("userName").textContent = user.name;
      document.getElementById("userEmail").textContent = user.email;
  } else {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
      return;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
          localStorage.removeItem("loggedInUser");
          window.location.href = "index.html";
      });
  }
});
