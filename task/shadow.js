/*const timeline = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
      .to(".ribbon", {
        duration: 5,
        opacity: 1,
        stagger: 0.5
      })
      .to(".ribbon", {
        duration: 5,
        opacity: 0,
        stagger: 0.5
      });

    let timeout;
    
    function startAnimation() {
      timeline.play();
      clearTimeout(timeout);
    }

    function stopAnimation() {
      timeout = setTimeout(() => {
        timeline.pause();
      }, 2000); 
    }

    function handleMouseMove() {
      startAnimation();
      stopAnimation();
    }

    document.addEventListener("mousemove", handleMouseMove);

    
    document.addEventListener("mousedown", () => {
      timeline.restart(); 
    });

   
    Draggable.create("#demo", { bounds: "#demo" });
    
   */
    document.addEventListener('DOMContentLoaded', () => {
      const ribbons = document.querySelectorAll('.ribbon');

      document.addEventListener('mousemove', (event) => {
        // Calculate percentage based on mouse position
        const xPercent = (event.clientX / window.innerWidth) * 100;
        const yPercent = (event.clientY / window.innerHeight) * 100;

        // Generate dynamic percentages for color stops
        const colorStop1 = xPercent;
        const colorStop2 = yPercent;
        const colorStop3 = 100 - xPercent;

        // Create the new background gradient
        const newBackground = `radial-gradient(to left, #ff0037 ${colorStop1}%, pink ${colorStop2}%, black ${colorStop3}%)`;

        // Animate the background change with GSAP
        gsap.to(ribbons, {
          duration: 2,
          background: newBackground,
          ease: "power1.out"
        });
      });
    });


  