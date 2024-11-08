document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let errorMessage = "";
  
    if (name === "") {
      errorMessage = "Name is required.";
    } else if (email === "") {
      errorMessage = "Email is required.";
    } else if (password.length < 6) {
      errorMessage = "Password must be at least 6 characters long.";
    }
  
    if (errorMessage) {
      document.getElementById("message").innerText = errorMessage;
    } else {
      document.getElementById("message").innerText = "";
      this.submit(); // Submit form if validation passes
    }
  });
  