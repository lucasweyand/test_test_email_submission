document.getElementById('joinForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  var scriptURL = 'https://script.google.com/macros/s/AKfycbxCUdSxIPHCrD59SFKVDyTd78G1oYF5MGDzrCtt22IP6MqtQExne1g6p7Cy8Xn8r7qX/exec'; // Replace with your deployed URL

  fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
  })
  .catch(error => console.error('Error!', error.message));
});