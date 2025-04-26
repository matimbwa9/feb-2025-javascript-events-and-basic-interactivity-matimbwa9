// Double-click on About Me picture
const aboutPic = document.getElementById('about-photo'); // Assuming your img has id="about-photo"

aboutPic.addEventListener('dblclick', function() {
    alert('You found the secret! 🎉 Madaq Creatives is full of surprises!');
});

// Profile Picture interaction
const profilePicture = document.getElementById('about-photo'); // ID of the profile picture
const secretMessage = document.getElementById('secretMessage'); // The secret message to display

// Double-click event
profilePicture.addEventListener('dblclick', () => {
    secretMessage.style.display = 'block'; // Show the secret message
    setTimeout(() => {
        secretMessage.style.display = 'none'; // Hide it after 5 seconds
    }, 5000);
});

// Long press event (holding the mouse)
let pressTimer;
profilePicture.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        secretMessage.style.display = 'block'; // Show the secret message on long press
        setTimeout(() => {
            secretMessage.style.display = 'none'; // Hide it after 5 seconds
        }, 5000);
    }, 1000); // 1000ms (1 second) for long press
});

profilePicture.addEventListener('mouseup', () => {
    clearTimeout(pressTimer); // Clear timer if mouse is released before 1 second
});

// Skills progress animation on hover
const progresses = document.querySelectorAll('.progress');

progresses.forEach(progress => {
  progress.parentElement.addEventListener('mouseenter', () => {
    progress.style.opacity = "1";
    progress.style.backgroundColor = "#007bff";
  });

  progress.parentElement.addEventListener('mouseleave', () => {
    progress.style.backgroundColor = "#0a0a23";
  });
});

// Function to toggle project information
function showProjectInfo(id) {
    const info = document.getElementById(id);
    if (info.style.display === "block") {
      info.style.display = "none";  // Hide if already open
    } else {
      // First hide all
      document.querySelectorAll('.project-info').forEach((el) => {
        el.style.display = "none";
      });
      // Then show the clicked one
      info.style.display = "block";
    }
}

// Change button text and color on click
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Check if any field is empty
  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill all the fields!');
    return;
  }

  // Check if email is valid
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address!');
    return;
  }

  // If everything is valid
  submitBtn.textContent = "Message Sent!";
  submitBtn.style.backgroundColor = "#28a745"; // Success color
  alert('Thank you for contacting Madaq Creatives!');
  // Reset form after submission
  document.getElementById('contactForm').reset();
  setTimeout(() => {
    submitBtn.textContent = "Send Message";
    submitBtn.style.backgroundColor = "#0a0a23"; // Default color
  }, 3000); // Reset button text and color after 3 seconds
});

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting by default
  
  // Select form fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Validate if any field is empty
  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill all the fields!');
    return;
  }

  // Validate the email format
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address!');
    return;
  }

  alert('Thank you for contacting Madaq Creatives!');
  // Optionally reset form after submitting
  contactForm.reset();
  submitBtn.textContent = "Send Message";
  submitBtn.style.backgroundColor = "#0a0a23"; // Default button color
});

// Email Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Bonus: double-click action
submitBtn.addEventListener('dblclick', () => {
  alert('Double-click detected! 🚀');
});
