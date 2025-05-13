
window.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("colorToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("highlight");
    });
  
   
    const magicBtn = document.getElementById("magicBtn");
    magicBtn.addEventListener("dblclick", () => {
      alert("🎉 Secret double-click discovered!");
    });
  
 
    document.querySelectorAll(".heading").forEach((heading) => {
      heading.addEventListener("mouseover", () => {
        heading.style.color = "purple";
      });
      heading.addEventListener("mouseout", () => {
        heading.style.color = "";
      });
    });
  
 
    document.addEventListener("keydown", (e) => {
      console.log(`Key pressed: ${e.key}`);
    });
  
   
    const slideshowImages = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentIndex = 0;
    const slideshow = document.querySelector("#slideshow img");
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideshowImages.length;
      slideshow.src = slideshowImages[currentIndex];
    }, 3000);
  

    const accordion = document.querySelector(".accordion");
    const panel = document.querySelector(".panel");
    accordion.addEventListener("click", () => {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  
   
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pwd");
    const emailFeedback = document.getElementById("emailFeedback");
    const pwdFeedback = document.getElementById("pwdFeedback");
  
    emailInput.addEventListener("input", () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      emailFeedback.textContent = valid ? "Valid email" : "Invalid email format";
      emailFeedback.style.color = valid ? "green" : "red";
    });
  
    passwordInput.addEventListener("input", () => {
      const valid = passwordInput.value.length >= 8;
      pwdFeedback.textContent = valid ? "Strong password" : "Password must be at least 8 characters";
      pwdFeedback.style.color = valid ? "green" : "red";
    });
  
  
    const form = document.getElementById("regForm");
    form.addEventListener("submit", (e) => {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      const isPasswordValid = passwordInput.value.length >= 8;
      if (!isEmailValid || !isPasswordValid) {
        e.preventDefault();
        alert("Please fix the form errors before submitting.");
      }
    });
  });
  