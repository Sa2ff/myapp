// Simple user storage for demonstration purposes
let users = [];

// Handle registration
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get values from registration form
    const username = document.getElementById('reg-username').value;   
    const email = document.getElementById('reg-email').value;   
    const password = document.getElementById('reg-password').value;   
    const phonenumber = document.getElementById('reg-phonenumber').value;   
    const gender = document.getElementById('reg-gender').value;   
    const role = document.getElementById('user-role').value;

    // Log form data to console for debugging
    console.log("Registering user:", { username, email, password, phonenumber, gender, role });

    // Store user data in an array
    users.push({ username, email, password, phonenumber, gender, role });
    
    // Show alert message after successful registration
    alert('Registration successful! You can now log in.');
    
    // Redirect to login page
    window.location.href = 'index.html';
});

// Handle login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;   
    const password = document.getElementById('password').value;

    // Log login attempt
    console.log("Login attempt:", { username, password });

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert('Login successful!');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
        console.warn("Login failed for user:", username); // Log failed login attempt
    }
});

// Logout function
function logout() {
     alert('You have logged out successfully.');
     // Redirect to login page
     window.location.href = 'index.html'; // Adjust as necessary
}