document.addEventListener('DOMContentLoaded', () => {
    gsap.to(".ribbon", {
      duration: 2,
      x: -200, // Move ribbons to the left within the black section
      y: -300, // Move ribbons upward within the black section
      opacity: 1,
      stagger: 0.5,
      ease: "power2.out",
      repeat: -1,
      yoyo: true
    });
  });