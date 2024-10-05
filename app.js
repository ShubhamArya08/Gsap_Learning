// gsap.from(".page1 .box", {
//   scale: 0,
//   rotate: 360,
//   duration: 1.5,
// });
// gsap.from(".page2 .box", {
//   scale: 0,
//   rotate: 360,
//   duration: 1.5,
//   scrollTrigger: {
//     trigger: ".page2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 70%",
//     end: "top 30%",
//   },
// });
// gsap.from(".page3 .box", {
//   scale: 0,
//   rotate: 360,
//   duration: 1.5,
//   delay: 2,
// });

gsap.to(".page2 h1", {
  transform: "translateX(-90%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});

gsap.to(".page3 img", {
  scale: 2, // Adjust the scale for zoom (2x in this case)
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body", // The container to trigger the scroll effect
    start: "top 0%", // Start when the top of the container reaches the center of the viewport
    end: "top -50%", // End when the bottom of the container reaches the center
    scrub: 3, // Smooth scrolling effect
    // markers: true,
    pin: true, // Markers to visualize the start and end (optional for debugging)
  },
});
