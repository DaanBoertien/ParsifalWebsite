
gsap.registerPlugin(ScrollTrigger);

console.log("hoi")

ScrollTrigger.batch('.fadeIn', {
    onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.25, ease: Power2.out})
})