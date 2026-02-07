document.addEventListener("DOMContentLoaded", function () {
    console.log("LifeSync homepage loaded!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animate elements when they appear in the viewport
    function animateOnScroll() {
        document.querySelectorAll(".slide-in, .zoom-in").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add("show"); // Adds animation when visible
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load
});


/* 1st code
document.addEventListener("DOMContentLoaded", function () {
  console.log("LifeSync homepage loaded!");

  // Heartbeat Animation Spe/ed Adjustment
  const heart = document.querySelector(".logo-image");
  if (heart) {
      setInterval(() => {
          heart.style.transform = `scale(${1 + Math.random() * 0.1})`;
      }, 1000);
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Animate testimonials on scroll
  const testimonials = document.querySelectorAll(".testimonial");
  window.addEventListener("scroll", function () {
      testimonials.forEach((testimonial, index) => {
          const rect = testimonial.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
              testimonial.style.animation = `fadeIn 1.5s ease-in-out ${index * 0.2}s both`;
          }
      });
  });
});

*/


















