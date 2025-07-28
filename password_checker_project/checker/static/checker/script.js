// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById('password');    // Password input
    const barFill = document.getElementById('barFill');           // Inner bar for strength
    const feedback = document.getElementById('feedback');         // Feedback message
    const toggleBtn = document.getElementById('togglePassword');  // Eye icon
  
    // Analyze password on input
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
  
      if (!password) {
        barFill.style.width = '0%';
        barFill.style.backgroundColor = 'transparent';
        feedback.textContent = 'Start typing to test your password strength.';
        return;
      }
  
      const result = zxcvbn(password);
      const score = result.score;
      const suggestions = result.feedback.suggestions.join(' ');
  
      // Update width (0–100%) based on score
      barFill.style.width = `${(score + 1) * 20}%`;
  
      // Change bar color and message
      switch (score) {
        case 0:
          barFill.style.backgroundColor = '#e74c3c'; // Red
          feedback.textContent = `Very weak. ${suggestions}`;
          break;
        case 1:
          barFill.style.backgroundColor = '#e67e22'; // Orange
          feedback.textContent = `Weak. ${suggestions}`;
          break;
        case 2:
          barFill.style.backgroundColor = '#f1c40f'; // Yellow
          feedback.textContent = `Fair. ${suggestions}`;
          break;
        case 3:
          barFill.style.backgroundColor = '#2ecc71'; // Light Green
          feedback.textContent = `Good. ${suggestions}`;
          break;
        case 4:
          barFill.style.backgroundColor = '#27ae60'; // Strong Green
          feedback.textContent = `Strong password!`;
          break;
      }
    });
  
    // Toggle visibility and icon
    toggleBtn.addEventListener('click', () => {
      const isPasswordVisible = passwordInput.type === 'text';
      passwordInput.type = isPasswordVisible ? 'password' : 'text';
  
      // Swap Font Awesome class
      toggleBtn.classList.toggle('fa-eye');
      toggleBtn.classList.toggle('fa-eye-slash');
    });
  });
  