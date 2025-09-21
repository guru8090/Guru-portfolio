



gsap.from(".bannerRight", {
  xPercent: -100,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".skill-section-right", {
  xPercent: -50,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skill-section-right",
    start: "top 50%",
    markers:true,
    toggleActions: "play none none none"
  }
});

gsap.from(".skills div", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".skill-section-right",
    start: "top 50%",
    end:"top 30%",
    toggleActions: "play none none none"
  }
})

gsap.from((".aboutParagraoh p"),{
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".aboutParagraoh p",
    start: "top 50%",
    end:"top 30%",
  }
})

gsap.from(".contactSvgImage", {
  xPercent: -100,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contactSvgImage",
    start: "top 34%",
    toggleActions: "play none none none",
  }
});
gsap.from(('.contact-form'),{
  y:100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  scrollTrigger:{
     trigger: ".contact-form",
    start: "top 60%",
    markers:true,
    toggleActions: "play none none none",
  }
})
