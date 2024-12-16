document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  // Ефекти для посилань
  const links = document.querySelectorAll(".link i");
  links.forEach((icon) => {
    icon.style.transition = "transform 0.3s ease";
  });

  document.querySelectorAll(".link").forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.querySelector("i").style.transform = "rotate(360deg)";
    });
    link.addEventListener("mouseout", () => {
      link.querySelector("i").style.transform = "rotate(0deg)";
    });
  });

  // Обробка форми
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Дякуємо за повідомлення! Ми зв'яжемося з вами найближчим часом.");
    contactForm.reset();
  });
});
