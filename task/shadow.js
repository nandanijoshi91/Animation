document.addEventListener('DOMContentLoaded', () => {
    const ribbons = document.querySelectorAll('.ribbon');

    // Define the GSAP timeline for continuous animation
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    // Create a slow-moving gradient animation
    timeline.to(ribbons, {
        duration: 10, // Duration of the animation
        backgroundPosition: "100% 0", // Move gradient to the right
        ease: "linear", // Smooth linear animation
        stagger: 0// Stagger start times for multiple ribbons
    })
    .to(ribbons, {
        duration: 10, // Duration of the animation (same as above to complete the loop)
        backgroundPosition: "0% 0", // Move gradient back to the left
        ease: "linear", // Smooth linear animation
        stagger: 0 // Stagger start times for multiple ribbons
    });

    // Initialize Draggable for element with id "demo"
    Draggable.create("#demo", { bounds: "#demo" });
});
