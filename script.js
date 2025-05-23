document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugin
  gsap.registerPlugin(ScrollTrigger);
  //+++++++++++ PreLoader section ++++++++++++
  let preloader = document.querySelector(".portfolio-loader");

  setTimeout(() => {
    preloader.style.transform = "translateY(-100%)";
  }, 6000);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 7000);

  // +++++++++heardr left slide section for smartfones++++++++++
  let crossIcon = document.querySelector(".cross-icon");
  let hamburgurIcon = document.querySelector(".hamburgur-icon");
  let header = document.querySelector("header");
  let main = document.querySelector("main");

  hamburgurIcon?.addEventListener("click", () => {
    header.style.transform = "translateX(0)";
    main.style.filter = "blur(1.8px)";
  });

  crossIcon?.addEventListener("click", () => {
    header.style.transform = "translateX(100%)";
    main.style.filter = "unset";
  });

  //+++++++ Typewritter effect home section++++++++++

  let typeWriter = document.querySelector("h2 span");

  let words = ["programmer", "ui/ux designer", "web developer"];

  let wrdIdx = 0,
    charIdx = 0,
    isDelete = false;

  let typeEffect = () => {
    let currWord = words[wrdIdx];
    let currChar = currWord.substring(0, charIdx);
    typeWriter.textContent = currChar;
    typeWriter.classList.add("stop-blink");

    if (!isDelete && charIdx < currWord.length) {
      // if condition is true, then type the next character
      charIdx++;
      setTimeout(typeEffect, 200);
    } else if (isDelete && charIdx > 0) {
      // if condition is true then remove previous character
      charIdx--;
      setTimeout(typeEffect, 100);
    } else {
      isDelete = !isDelete;
      typeWriter.classList.remove("stop-blink");
      if (!isDelete) wrdIdx = (wrdIdx + 1) % words.length;
      setTimeout(typeEffect, 600);
    }
  };
  typeEffect(); //Typewriter effec calling

  // GSAP scrollTrigger Effects section
  function initGSAPAnimations() {
    // Kill previous triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    ScrollTrigger.matchMedia({
      // Mobile Animations
      "(max-width: 768px)": () => {
        // gsap scrollTrigger
        gsap.to(".home-right img", {
          duration: 0.3,
          delay: 0.2,
          scale: 0,
          rotate: 180,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-right ",
            scroller: "body",
            scrub: 1,
            start: "bottom 36%",
            end: "bottom 20%",
          },
        });

        gsap.to(".home-buttons-group", {
          duration: 0.3,
          delay: 0.5,
          x: 400,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-info",
            scroller: "body",
            scrub: 1,
            start: "bottom 50%",
            end: "bottom 30%",
          },
        });

        gsap.to(".home-info", {
          duration: 0.3,
          delay: 0.5,
          y: 120,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-left",
            scroller: "body",
            scrub: 1,
            start: "bottom 50%",
            end: "bottom 30%",
          },
        });

        gsap.from(".about-me", {
          duration: 0.3,
          delay: 0.3,
          opacity: 0,
          scale: 0,
          scrollTrigger: {
            trigger: ".admin-dets-left",
            scroller: "body",
            scrub: 1,
            start: "bottom 80%",
            end: "bottom 70%",
          },
        });

        gsap.from(".admin-dets-leftimg-box", {
          duration: 0.3,
          delay: 0.3,
          rotate: 90,
          scale: 0.2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-left",
            scroller: "body",
            scrub: 1,
            start: "bottom 80%",
            end: "bottom 20%",
          },
        });

        gsap.from(".admin-dets-right h2", {
          duration: 0.3,
          delay: 0.3,
          x: 300,
          opacity: 0,
          scrollTrigger: {
            trigger: "admin-dets-left",
            scroller: "body",
            scrub: 1,
            start: "bottom 35%",
            end: "bottom 15%",
          },
        });

        gsap.from(".admin-dets-right h4", {
          duration: 0.3,
          delay: 0.3,
          x: -150,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-right h4",
            scroller: "body",
            scrub: 1,
            start: "top 55%",
            end: "bottom 70%",
          },
        });

        gsap.from(".admin-infos ul>li , .admin-resume", {
          duration: 0.3,
          delay: 0.5,
          y: 130,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-right h4",
            scroller: "body",
            scrub: 1,
            start: "top 65%",
            end: "bottom 30%",
          },
        });

        gsap.from(".skill-items , .custom-title", {
          duration: 0.3,
          delay: 0.3,
          rotate: 180,
          x: -300,
          scale: 0,
          scrollTrigger: {
            trigger: ".skill-items",
            scroller: "body",
            scrub: 1,
            start: "top 75%",
            end: "bottom 55%",
          },
        });

        gsap.from("#my-resume .timeline ol li , .resume-title", {
          duration: 0.3,
          delay: 0.5,
          rotate: 180,
          x: 350,
          scale: 0.3,
          opacity: 0,
          scrollTrigger: {
            trigger: "#my-resume .timeline ol li>div",
            scroller: "body",
            scrub: 1,
            start: "top 50%",
            end: "bottom 30%",
          },
        });

        gsap.from(".gallery__item , .portfolio-title h4", {
          duration: 0.3,
          delay: 0.5,
          x: -350,
          opacity: 0,
          scrollTrigger: {
            trigger: ".gallery__item",
            scroller: "body",
            scrub: 1,
            start: "top 55%",
            end: "bottom 90%",
          },
        });

        gsap.from("#contact .boxes>div .con-item , .contact-title", {
          duration: 0.3,
          delay: 0.3,
          rotate: 180,
          x: 450,
          scale: 0.3,
          opacity: 0,
          scrollTrigger: {
            trigger: "#contact .boxes>div .con-item",
            scroller: "body",
            scrub: 1,
            start: "top 45%",
            end: "bottom 55%",
          },
        });
      },
      // Laptop Animations
      "(min-width: 1024px)": () => {
        // **************************************************************
        // when device are laptop and monitors or big screen working this code..
        // gsap scrollTrigger
        gsap.to(
          ".home-right img , .home-left .title h2 , .home-left .subtitle p ",
          {
            duration: 0.3,
            delay: 0.5,
            x: 150,
            opacity: 0,
            scrollTrigger: {
              trigger: ".home-right img",
              scroller: "main",
              scrub: 1,
              start: "top 12%",
              end: "bottom 60%",
            },
          }
        );

        gsap.to(".home-left .title h3 , .home-left .title p", {
          duration: 0.3,
          delay: 0.5,
          x: -150,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-right img",
            scroller: "main",
            scrub: 1,
            start: "top 12%",
            end: "bottom 60%",
          },
        });

        gsap.to(".home-buttons-group", {
          duration: 0.3,
          delay: 0.5,
          x: "55%",
          scrollTrigger: {
            trigger: ".home-right img",
            scroller: "main",
            scrub: 1,
            start: "top 12%",
            end: "bottom 60%",
          },
        });

        gsap.to(".home-info", {
          duration: 0.3,
          delay: 0.5,
          y: 120,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-right img",
            scroller: "main",
            scrub: 1,
            start: "top 12%",
            end: "bottom 60%",
          },
        });

        gsap.to("#yoyo", {
          duration: 0.3,
          delay: 0.5,
          y: -120,
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-right img",
            scroller: "main",
            scrub: 1,
            start: "top 12%",
            end: "bottom 60%",
          },
        });

        gsap.to("#yoyo", {
          duration: 0.5,
          delay: 0.2,
          y: 25,
          repeat: -1,
          yoyo: true,
        });

        gsap.from(".admin-dets-leftimg-box ", {
          duration: 0.3,
          delay: 0.5,
          rotate: 180,
          scale: 0.2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-leftimg-box",
            scroller: "main",
            scrub: 1,
            start: "top 44%",
            end: "bottom 60%",
          },
        });

        gsap.to(".admin-dets-leftimg-box ", {
          duration: 0.3,
          delay: 0.3,
          y: 625,
          x: 700,
          scrollTrigger: {
            trigger: ".admin-skills",
            scroller: "main",
            scrub: 1,
            start: "top 97%",
            end: "top 25%",
          },
        });

        gsap.from(".admin-dets-right h4", {
          duration: 0.8,
          delay: 0.5,
          x: -150,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-leftimg-box",
            scroller: "main",
            scrub: 1,
            start: "top 44%",
            end: "bottom 90%",
          },
        });

        gsap.to(".admin-dets-right h4", {
          duration: 0.8,
          delay: 0.3,
          scale: 0,
          rotate: 180,
          scrollTrigger: {
            trigger: ".admin-skills",
            scroller: "main",
            scrub: 1,
            start: "top 97%",
            end: "top 25%",
          },
        });

        gsap.from(".admin-dets-right h2 , .about-me", {
          duration: 0.6,
          delay: 0.5,
          y: -130,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-leftimg-box",
            scroller: "main",
            scrub: 1,
            start: "top 50%",
            end: "bottom 90%",
          },
        });

        gsap.to(".admin-dets-right h2", {
          duration: 0.6,
          delay: 0.5,
          x: -1200,
          rotate: 90,
          scale: 1.5,
          scrollTrigger: {
            trigger: ".admin-skills",
            scroller: "main",
            scrub: 1,
            start: "top 97%",
            end: "top 25%",
          },
        });

        gsap.from(".admin-infos ul>li , .admin-resume", {
          duration: 0.3,
          delay: 0.5,
          y: 130,
          opacity: 0,
          scrollTrigger: {
            trigger: ".admin-dets-leftimg-box",
            scroller: "main",
            scrub: 1,
            start: "top 48%",
            end: "bottom 90%",
          },
        });

        gsap.to(".admin-infos ul>li , .admin-resume", {
          duration: 0.6,
          delay: 0.5,
          x: -1200,
          rotate: 90,
          scrollTrigger: {
            trigger: ".admin-skills",
            scroller: "main",
            scrub: 1,
            start: "top 97%",
            end: "top 25%",
          },
        });

        gsap.from(".skill-items , .custom-title", {
          duration: 0.3,
          delay: 0.5,
          rotate: 180,
          x: -300,
          scale: 0,
          scrollTrigger: {
            trigger: ".skill-items",
            scroller: "main",
            scrub: 1,
            start: "top 28%",
            end: "bottom 35%",
          },
        });

        gsap.to(".skill-items", {
          duration: 0.3,
          delay: 0.5,
          y: 1100,
          scrollTrigger: {
            trigger: "#my-resume .timeline ol",
            scroller: "main",
            scrub: 1,
            start: "top 99%",
            end: "bottom 95%",
          },
        });

        gsap.from("#my-resume .timeline ol li , .resume-title", {
          duration: 0.3,
          delay: 0.5,
          rotate: 180,
          x: 350,
          scale: 0.3,
          opacity: 0,
          scrollTrigger: {
            trigger: "#my-resume .timeline ol li>div",
            scroller: "main",
            scrub: 1,
            start: "top 53%",
            end: "bottom 60%",
          },
        });

        gsap.to("#my-resume .timeline ol li", {
          duration: 0.3,
          delay: 0.5,
          right: 800,
          scrollTrigger: {
            trigger: ".gallery__item",
            scroller: "main",
            scrub: 1,
            start: "top 105%",
            end: "bottom 75%",
          },
        });

        gsap.from(".gallery__item , .portfolio-title h4", {
          duration: 0.3,
          delay: 0.5,
          x: -350,
          opacity: 0,
          scrollTrigger: {
            trigger: ".gallery__item",
            scroller: "main",
            scrub: 1,
            start: "top 12%",
            end: "bottom 69%",
          },
        });

        gsap.to(".gallery__item", {
          duration: 0.3,
          delay: 0.5,
          scale: 0.1,
          rotate: 360,
          y: -800,
          scrollTrigger: {
            trigger: ".contact-title",
            scroller: "main",
            scrub: 1,
            start: "top 99%",
            end: "bottom 70%",
          },
        });

        gsap.from("#contact .boxes>div .con-item , .contact-title", {
          duration: 0.3,
          delay: 0.3,
          rotate: 180,
          x: 350,
          scale: 0.3,
          opacity: 0,
          scrollTrigger: {
            trigger: "#contact .boxes>div .con-item",
            scroller: "main",
            scrub: 1,
            start: "top 28%",
            end: "bottom 48%",
          },
        });
      },
    });

    //============ shrey Js section ==============
    // Initialize Shery.js only on larger screens
    if (window.innerWidth >= 1024 && typeof Shery !== "undefined") {
      Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });

      Shery.makeMagnet(
        ".author , .nav , .nav a , .social-icon a , .home-f-btns , .home-t-btns , .title , .title h3 , .title h2 , .title p, .home-right>img , #yoyo , .home-info li ,.admin-dets-right h2 , .admin-dets-right h4 , .admin-infos ul , .admin-infos li , .admin-resume , .skills-content , .skill-items , .skill-items svg , .timeline li>div , .education , .experience , .gallery__item , .boxes , .boxes>div>div , .box-icon , .social li" /* Element to target.*/,
        {
          //Parameters are optional.
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        }
      );

      Shery.hoverWithMediaCircle(
        ".author , .social-icon , .home-right>img , .title , #yoyo , .home-info ul , .admin-dets-left img , .timeline li" /* Element to target.*/,
        {
          images: ["image1.jpg", "image2.jpg", "image3.jpg"],
          /*OR*/
          //videos: ["video1.mp4", "video2.mp4"],
        }
      );
    }
  }

  initGSAPAnimations();
  window.addEventListener("resize", initGSAPAnimations);
});
