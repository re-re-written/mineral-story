gsap.registerPlugin(ScrollTrigger);

// Fade in Hero text smoothly on load
gsap.from(".text-1", {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
});

gsap.from(".text-2", {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "power2.out",
    delay: 1.0
});

gsap.from(".scroll-indicator", {
    opacity: 0,
    duration: 1,
    delay: 1.8
});

// ScrollTrigger for Section 2 Note
gsap.from(".scroll-note", {
    scrollTrigger: {
        trigger: "#buildup",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1
});

// White Quartz Section Animation
gsap.from("#white-quartz .mineral-drawing", {
    scrollTrigger: {
        trigger: "#white-quartz",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Cross Section Animation
gsap.from("#cross-section .mineral-drawing", {
    scrollTrigger: {
        trigger: "#cross-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Amethyst Section Animation
gsap.from("#amethyst .mineral-drawing", {
    scrollTrigger: {
        trigger: "#amethyst",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Ruby Section Animation
gsap.from("#ruby .mineral-drawing", {
    scrollTrigger: {
        trigger: "#ruby",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Tiger's Eye Section Animation
gsap.from("#tigers-eye .mineral-drawing", {
    scrollTrigger: {
        trigger: "#tigers-eye",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Emerald Section Animation
gsap.from("#emerald .mineral-drawing", {
    scrollTrigger: {
        trigger: "#emerald",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Final Climax Section Animation
gsap.from("#final-climax .mineral-drawing", {
    scrollTrigger: {
        trigger: "#final-climax",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
});

// Transition Path & Notes ScrollTrigger
gsap.from(".draw-path", {
    scrollTrigger: {
        trigger: "#transition-path",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 700,
    ease: "none"
});

gsap.from(".note-cut", {
    scrollTrigger: {
        trigger: "#transition-path",
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 1
});

gsap.from(".note-more", {
    scrollTrigger: {
        trigger: "#transition-path",
        start: "top 40%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 1
});

// Layer Realization Animation
gsap.from(".note-layered", {
    scrollTrigger: {
        trigger: "#transition-layers",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1
});

// Winding Line Draw Animation
gsap.from(".draw-path-layers", {
    scrollTrigger: {
        trigger: ".winding-line-svg",
        start: "top 60%",
        end: "bottom 40%",
        scrub: true
    },
    strokeDashoffset: 650,
    ease: "none"
});

// Question Notes Fade Ins
gsap.from(".note-why", {
    scrollTrigger: {
        trigger: ".note-why",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

gsap.from(".note-what", {
    scrollTrigger: {
        trigger: ".note-what",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

gsap.from(".note-scroll", {
    scrollTrigger: {
        trigger: ".note-scroll",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

// Amethyst to Ruby Transition Animations
gsap.from(".draw-path-ame-ruby", {
    scrollTrigger: {
        trigger: "#transition-amethyst-ruby",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 550,
    ease: "none"
});

gsap.from(".note-continues", {
    scrollTrigger: {
        trigger: "#transition-amethyst-ruby",
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 15,
    duration: 0.8
});

// Ruby to Tiger's Eye Transition
gsap.from(".draw-path-ruby-tiger", {
    scrollTrigger: {
        trigger: "#transition-ruby-tiger",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 500,
    ease: "none"
});

gsap.from(".note-why-like-this", {
    scrollTrigger: {
        trigger: "#transition-ruby-tiger",
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

// Tiger's Eye to Emerald Transition
gsap.from(".draw-path-tiger-emerald", {
    scrollTrigger: {
        trigger: "#transition-tiger-emerald",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 550,
    ease: "none"
});

gsap.from(".note-meaning", {
    scrollTrigger: {
        trigger: "#transition-tiger-emerald",
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

// Emerald to Final Climax Transition Animations
gsap.from(".draw-path-emerald-final", {
    scrollTrigger: {
        trigger: "#transition-emerald-final",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 800,
    ease: "none"
});

gsap.from(".note-almost", {
    scrollTrigger: {
        trigger: ".note-almost",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

gsap.from(".note-stopped", {
    scrollTrigger: {
        trigger: ".note-stopped",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

gsap.from(".note-writes", {
    scrollTrigger: {
        trigger: ".note-writes",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8
});

// Climax Stanzas Scroll Animations
const climaxLines = gsap.utils.toArray('.climax-line');

climaxLines.forEach((line) => {
    gsap.from(line, {
        scrollTrigger: {
            trigger: line,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 35,
        duration: 1.2,
        ease: "power2.out"
    });
});

// Realization Path & Notes ScrollTrigger
gsap.from(".draw-path-realization", {
    scrollTrigger: {
        trigger: "#transition-realization",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true
    },
    strokeDashoffset: 1000,
    ease: "none"
});

const realizationNotes = [
    ".note-what-realization",
    ".note-quartz-weight",
    ".note-tiger-shield",
    ".note-ruby-fire",
    ".note-emerald-heart"
];

realizationNotes.forEach((note) => {
    gsap.from(note, {
        scrollTrigger: {
            trigger: note,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8
    });
});

// Final Outro Animation
gsap.from(".outro-line", {
    scrollTrigger: {
        trigger: "#final-outro",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 25,
    duration: 1,
    stagger: 0.4,
    ease: "power2.out"
});