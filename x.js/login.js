document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username && password) {
        validateLogin(username, password);
    } else {
        errorMessage.textContent = 'Please enter both username and password.';
    }
});

async function validateLogin(username, password) {
    try {
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser && storedUser.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
            window.location.href = 'dashboard.html';
        } else {
            throw new Error('Incorrect username or password');
        }
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
}