document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Save data in LocalStorage
        const contactData = { name, email, message };
        localStorage.setItem('contactData', JSON.stringify(contactData));

        // Send data to server (simulated)
        sendToServer(contactData);

        // Display success message
        document.getElementById('status-message').textContent = 'Your message has been successfully sent!';
        document.getElementById('status-message').style.color = 'green';
    } else {
        document.getElementById('status-message').textContent = 'Please fill in all fields.';
        document.getElementById('status-message').style.color = 'red';
    }
});

async function sendToServer(data) {
    try {
        const response = await fetch('https://example.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.status === 200) {
            console.log('Server response:', responseData);
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
}