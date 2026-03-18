// Simple text scroll / reveal animations without external dependencies
// - Fades/slides in hero text on load
// - Reveals elements with .scroll-reveal as they enter the viewport

document.addEventListener("DOMContentLoaded", () => {
  // Hero text animation on page load
  const containers = document.querySelectorAll(".textlanding");
  containers.forEach(container => {
    const children = Array.from(container.children);
    if (!children.length) return;

    children.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

      const delay = index * 80; // ms
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  });

  // Scroll-based reveal using IntersectionObserver
  const revealEls = document.querySelectorAll(".scroll-reveal");
  if (!("IntersectionObserver" in window) || !revealEls.length) {
    return;
  }

  revealEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";
      obs.unobserve(target);
    });
  }, {
    threshold: 0.15
  });

  revealEls.forEach(el => observer.observe(el));
});



