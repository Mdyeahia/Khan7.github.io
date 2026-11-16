
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs from the previous steps
    var templateParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_rzoypfb', '__ejs-test-mail-service__', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  });
