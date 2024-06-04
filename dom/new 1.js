 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');
  var errorMessages = document.getElementById('errorMessages');
  
  var usernameValue = usernameInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  
  // Reset styles
  usernameInput.classList.remove('invalid');
  passwordInput.classList.remove('invalid');
  document.getElementById('usernameIcon').innerHTML = '';
  document.getElementById('passwordIcon').innerHTML = '';
  errorMessages.innerHTML = '';
  
  // Check for empty fields
  if (usernameValue === '') {
    showError('Please enter username');
    usernameInput.classList.add('invalid');
    document.getElementById('usernameIcon').innerHTML = '<i class="fas fa-times-circle icon invalid"></i>';
  } else if (usernameValue !== 'new_user') {
    showError('Please enter valid username');
    usernameInput.classList.add('invalid');
    document.getElementById('usernameIcon').innerHTML = '<i class="fas fa-times-circle icon invalid"></i>';
  } else if (passwordValue === '') {
    showError('Please enter password');
    passwordInput.classList.add('invalid');
    document.getElementById('passwordIcon').innerHTML = '<i class="fas fa-times-circle icon invalid"></i>';
  } else if (passwordValue !== '123456789') {
    showError('Please enter valid password');
    passwordInput.classList.add('invalid');
    document.getElementById('passwordIcon').innerHTML = '<i class="fas fa-times-circle icon invalid"></i>';
  } else {
    // Success
    usernameInput.classList.add('valid');
    passwordInput.classList.add('valid');
    document.getElementById('usernameIcon').innerHTML = '<i class="fas fa-check-circle icon valid"></i>';
    document.getElementById('passwordIcon').innerHTML = '<i class="fas fa-check-circle icon valid"></i>';
    errorMessages.innerHTML = '<p class="success">Successful login!</p>';
  }
});

function showError(message) {
  var errorMessages = document.getElementById('errorMessages');
  var p = document.createElement('p');
  p.textContent = message;
  errorMessages.appendChild(p);
}