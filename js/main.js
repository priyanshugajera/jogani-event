/*====================================================
JOGANI EVENT
Premium Main JS
Part - 1A
====================================================*/

"use strict";

/*====================================================
DOM Ready
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initSmoothScroll();
    initNavbar();
    initMobileMenu();
    initScrollProgress();
    initBackToTop();

});


/*====================================================
Loader
====================================================*/

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    });

}


/*====================================================
Smooth Scroll
====================================================*/

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}


/*====================================================
Navbar
====================================================*/

function initNavbar() {

    const header = document.querySelector("header");

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        if (header) {

            if (window.scrollY > 80) {

                header.classList.add("sticky");

            } else {

                header.classList.remove("sticky");

            }

        }

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}


/*====================================================
Mobile Menu
====================================================*/

function initMobileMenu() {

    const menuBtn = document.querySelector(".menu-btn");

    const mobileMenu = document.querySelector(".mobile-menu");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


/*====================================================
Scroll Progress
====================================================*/

function initScrollProgress() {

    const progress = document.querySelector(".progress-bar");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const width = (scrollTop / height) * 100;

        progress.style.width = width + "%";

    });

}


/*====================================================
Back To Top
====================================================*/

function initBackToTop() {

    const btn = document.getElementById("topBtn");

    if (!btn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            btn.style.display = "flex";

        } else {

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================
End Part - 1A
=========================*/
/*====================================================
JOGANI EVENT
Premium Main JS
Part - 1B
====================================================*/

/*====================================================
Custom Cursor
====================================================*/

function initCustomCursor() {

    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.querySelectorAll(
        "a,button,.btn,.service-card,.gallery-item,.machine-card,.why-card"
    ).forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });

    });

}


/*====================================================
Fade Animation
====================================================*/

function initFadeAnimation() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.20

    });

    document.querySelectorAll(".fade-up").forEach(item => {

        observer.observe(item);

    });

}


/*====================================================
Gallery Filter
====================================================*/

function initGalleryFilter() {

    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".gallery-item");

    if (!buttons.length || !items.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            items.forEach(item => {

                if (
                    filter === "all" ||
                    item.dataset.category === filter
                ) {

                    item.style.display = "block";

                    requestAnimationFrame(() => {

                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";

                    });

                } else {

                    item.style.opacity = "0";
                    item.style.transform = "scale(.9)";

                    setTimeout(() => {

                        item.style.display = "none";

                    }, 300);

                }

            });

        });

    });

}


/*====================================================
Hero Parallax
====================================================*/
function initHeroParallax() {

    if (window.innerWidth <= 768) return;

    const hero = document.querySelector(".hero");
    const content = document.querySelector(".hero-content");

    if (!hero || !content) return;

    hero.addEventListener("mousemove", e => {

        const x = (window.innerWidth / 2 - e.clientX) / 35;
        const y = (window.innerHeight / 2 - e.clientY) / 35;

        content.style.transform =
            `translate(${x}px,${y}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        content.style.transform = "translate(0,0)";

    });

}


/*====================================================
Mouse Glow
====================================================*/

function initMouseGlow() {
    if (window.innerWidth <= 768) return;
    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


/*====================================================
Ripple Effect
====================================================*/

function initRippleEffect() {

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.className = "ripple";

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                e.clientX - rect.left - size / 2 + "px";

            ripple.style.top =
                e.clientY - rect.top - size / 2 + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}


/*====================================================
Disable Image Drag
====================================================*/

function disableImageDrag() {

    document.querySelectorAll("img").forEach(img => {

        img.draggable = false;

    });

}


/*====================================================
Touch Device
====================================================*/

function detectTouchDevice() {

    if ("ontouchstart" in window) {

        document.body.classList.add("touch-device");

    }

}


/*====================================================
Initialize
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initCustomCursor();
    initFadeAnimation();
    initHeroParallax();
    initMouseGlow();
    initRippleEffect();
    disableImageDrag();
    detectTouchDevice();

});

/*=========================
End Part - 1B
=========================*/
/*====================================================
JOGANI EVENT
Premium Main JS
Part - 2A
GSAP + Cards + Counters
====================================================*/

"use strict";

/*====================================================
GSAP Register
====================================================*/

function initGSAP() {

    if (typeof gsap === "undefined") {

        console.warn("GSAP Not Loaded");
        return false;

    }

    if (typeof ScrollTrigger !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

    }

    return true;

}

/*====================================================
Service Cards Reveal
====================================================*/

function initServiceCards() {

    if (!initGSAP()) return;

    gsap.utils.toArray(".service-card").forEach((card, index) => {

        gsap.from(card, {

            opacity: 0,

            y: 80,

            duration: 1,

            delay: index * 0.08,

            ease: "power3.out",

            scrollTrigger: {

                trigger: card,

                start: "top 85%",

                toggleActions: "play none none reverse"

            }

        });

    });

}


/*====================================================
Why Cards Reveal
====================================================*/

function initWhyCards() {

    if (!initGSAP()) return;

    gsap.utils.toArray(".why-card").forEach(card => {

        gsap.from(card, {

            opacity: 0,

            scale: .9,

            duration: .9,

            ease: "power2.out",

            scrollTrigger: {

                trigger: card,

                start: "top 88%"

            }

        });

    });

}


/*====================================================
Machine Cards Reveal
====================================================*/

function initMachineCards() {

    if (!initGSAP()) return;

    gsap.utils.toArray(".machine-card").forEach(card => {

        gsap.from(card, {

            opacity: 0,

            y: 70,

            duration: 1,

            ease: "power2.out",

            scrollTrigger: {

                trigger: card,

                start: "top 88%"

            }

        });

    });

}


/*====================================================
Counter Animation
====================================================*/

function initCounters() {

    const counters = document.querySelectorAll(".counter-box h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const el = entry.target;

            const target = parseInt(
                el.dataset.count || el.innerText.replace(/\D/g, "")
            );

            if (isNaN(target)) return;

            let value = 0;

            const speed = target / 80;

            const update = () => {

                value += speed;

                if (value < target) {

                    el.innerText = Math.floor(value);

                    requestAnimationFrame(update);

                } else {

                    el.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(el);

        });

    }, {

        threshold: .5

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/*====================================================
3D Tilt Cards
====================================================*/

function initTiltCards() {

    const cards = document.querySelectorAll(

        ".service-card,.machine-card,.why-card"

    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 16;

            const rotateX = ((y / rect.height) - .5) * -16;

            card.style.transform =

                `perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =

                "perspective(900px) rotateX(0) rotateY(0)";

        });

    });

}


/*====================================================
Button Hover Glow
====================================================*/

function initButtonGlow() {

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.boxShadow =

                "0 0 40px rgba(212,175,55,.55)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.boxShadow = "none";

        });

    });

}


/*====================================================
Counter Boxes Hover
====================================================*/

function initCounterHover() {

    if (!initGSAP()) return;

    document.querySelectorAll(".counter-box").forEach(box => {

        box.addEventListener("mouseenter", () => {

            gsap.to(box, {

                scale: 1.06,

                duration: .30

            });

        });

        box.addEventListener("mouseleave", () => {

            gsap.to(box, {

                scale: 1,

                duration: .30

            });

        });

    });

}


/*====================================================
Hero Floating Animation
====================================================*/

function initHeroFloating() {

    if (window.innerWidth <= 768) return;

    if (!initGSAP()) return;

    gsap.to(".hero-content", {

        y: -18,

        repeat: -1,

        yoyo: true,

        ease: "power1.inOut",

        duration: 3

    });

}

/*====================================================
Initialize
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initServiceCards();
    initWhyCards();
    initMachineCards();

    initCounters();

    initTiltCards();

    initButtonGlow();

    initCounterHover();

    initHeroFloating();

});

/*====================================================
End Part - 2A
====================================================*/
/*====================================================
JOGANI EVENT
Premium Main JS
Part - 2B
Gallery + Premium Effects
====================================================*/

"use strict";

/*====================================================
Gallery Reveal Animation
====================================================*/

function initGalleryReveal() {

    if (typeof gsap === "undefined") return;

    gsap.utils.toArray(".gallery-item").forEach(item => {

        gsap.from(item, {

            opacity: 0,

            scale: .85,

            y: 40,

            duration: .8,

            ease: "power2.out",

            scrollTrigger: {

                trigger: item,

                start: "top 90%"

            }

        });

    });

}


/*====================================================
Gallery Image Zoom
====================================================*/

function initGalleryImageZoom() {

    document.querySelectorAll(".gallery-item img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

}


/*====================================================
Floating Gold Particles
====================================================*/

function initParticles() {

    const container = document.createElement("div");

    container.className = "particles";

    document.body.appendChild(container);

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.width = (3 + Math.random() * 6) + "px";

        particle.style.height = particle.style.width;

        particle.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(particle);

    }

}


/*====================================================
Footer Animation
====================================================*/

function initFooterAnimation() {

    if (typeof gsap === "undefined") return;

    gsap.from("footer", {

        opacity: 0,

        y: 80,

        duration: 1,

        scrollTrigger: {

            trigger: "footer",

            start: "top 90%"

        }

    });

}


/*====================================================
Scroll Percentage
====================================================*/

function initScrollPercentage() {

    const progress = document.querySelector(".progress-text");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current = window.scrollY;

        const percent = Math.round((current / total) * 100);

        progress.innerHTML = percent + "%";

    });

}


/*====================================================
Hero Background Zoom
====================================================*/

function initHeroVideoZoom() {

    const heroVideo = document.querySelector(".hero video");

    if (!heroVideo) return;

    window.addEventListener("scroll", () => {

        const scale = 1 + window.scrollY * 0.00015;

        heroVideo.style.transform =
            `scale(${scale})`;

    }, {

        passive: true

    });

}


/*====================================================
Random Glow
====================================================*/

function initRandomGlow() {

    setInterval(() => {

        document.querySelectorAll(".gold-glow").forEach(item => {

            item.style.opacity =

                (0.5 + Math.random() * 0.5).toFixed(2);

        });

    }, 1200);

}


/*====================================================
Social Icon Animation
====================================================*/

function initSocialAnimation() {

    if (typeof gsap === "undefined") return;

    document.querySelectorAll(".social a").forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            gsap.to(icon, {

                rotation: 360,

                duration: .6,

                ease: "power2.out"

            });

        });

        icon.addEventListener("mouseleave", () => {

            gsap.to(icon, {

                rotation: 0,

                duration: .3

            });

        });

    });

}


/*====================================================
Hero Title Glow
====================================================*/

function initHeroGlow() {

    if (typeof gsap === "undefined") return;

    gsap.to(".hero h1", {

        textShadow:
            "0 0 20px #D4AF37,0 0 60px #D4AF37",

        repeat: -1,

        yoyo: true,

        duration: 2

    });

}


/*====================================================
Visibility Change
====================================================*/

function initVisibility() {

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            console.log("Animation Paused");

        } else {

            console.log("Welcome Back");

        }

    });

}


/*====================================================
Console Welcome
====================================================*/

function initConsoleMessage() {

    console.log(

        "%cJOGANI EVENT",

        "color:#D4AF37;font-size:28px;font-weight:bold;"

    );

    console.log(

        "%cLuxury Event Management Website",

        "color:white;font-size:16px;"

    );

}


/*====================================================
Performance Optimization
====================================================*/

function initPerformance() {

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            console.log("Resize Completed");

        }, 200);

    });

}


/*====================================================
Initialize
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initGalleryReveal();

    initGalleryImageZoom();

    initParticles();

    initFooterAnimation();

    initScrollPercentage();

    initHeroVideoZoom();

    initRandomGlow();

    initSocialAnimation();

    initHeroGlow();

    initVisibility();

    initConsoleMessage();

    initPerformance();

});

/*====================================================
End Part - 2B
====================================================*/
/*====================================================
JOGANI EVENT
Premium Main JS
Part - 3
Three.js + Premium Effects + Utilities
====================================================*/

"use strict";

/*====================================================
Three.js Background
====================================================*/

function initThreeBackground() {
    if (window.innerWidth <= 768) return;
    if (typeof THREE === "undefined") {
        console.warn("Three.js not loaded");
        return;
    }

    const canvas = document.getElementById("threeCanvas");

    if (!canvas) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    camera.position.z = 35;

    const geometry =
        new THREE.BufferGeometry();

    const count = 2500;

    const vertices = [];

    for (let i = 0; i < count; i++) {

        vertices.push(

            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200

        );

    }

    geometry.setAttribute(

        "position",

        new THREE.Float32BufferAttribute(
            vertices,
            3
        )

    );

    const material =
        new THREE.PointsMaterial({

            color: 0xD4AF37,

            size: 0.6,

            transparent: true,

            opacity: 0.8

        });

    const stars =
        new THREE.Points(
            geometry,
            material
        );

    scene.add(stars);

    function animate() {

        requestAnimationFrame(animate);

        stars.rotation.y += 0.0007;

        stars.rotation.x += 0.0003;

        renderer.render(scene, camera);

    }

    animate();

    window.addEventListener(
        "resize",
        () => {

            camera.aspect =
                window.innerWidth /
                window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

        }
    );

}


/*====================================================
FPS Counter
====================================================*/

function initFPS() {

    const fps =
        document.querySelector(".fps");

    if (!fps) return;

    let last = performance.now();

    let frames = 0;

    function update(now) {

        frames++;

        if (now > last + 1000) {

            fps.innerHTML =
                frames + " FPS";

            frames = 0;

            last = now;

        }

        requestAnimationFrame(update);

    }

    requestAnimationFrame(update);

}


/*====================================================
Gold Dust Cursor
====================================================*/

function initGoldDust() {
    if (window.innerWidth <= 768) return;

    const dust =
        document.createElement("div");

    dust.className =
        "gold-dust";

    document.body.appendChild(dust);

    document.addEventListener(
        "mousemove",
        e => {

            dust.style.left =
                e.clientX + "px";

            dust.style.top =
                e.clientY + "px";

        }
    );

}


/*====================================================
Floating Icons
====================================================*/

function initFloatingIcons() {

    if (typeof gsap === "undefined")
        return;

    document
        .querySelectorAll(
            ".floating-icon"
        )
        .forEach((icon, index) => {

            gsap.to(icon, {

                y: -18,

                repeat: -1,

                yoyo: true,

                duration: 2 + index * 0.2,

                ease: "power1.inOut"

            });

        });

}


/*====================================================
Lazy Images
====================================================*/

function initLazyImages() {

    const images =
        document.querySelectorAll(
            "img[data-src]"
        );

    if (!images.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const img =
                        entry.target;

                    img.src =
                        img.dataset.src;

                    img.onload = () =>
                        img.classList.add(
                            "loaded"
                        );

                    observer.unobserve(img);

                });

            },

            {
                threshold: 0.2
            }

        );

    images.forEach(img =>
        observer.observe(img)
    );

}


/*====================================================
Disable Right Click (Optional)
====================================================*/

function disableContextMenu() {

    // Uncomment if required

    /*
    document.addEventListener(
        "contextmenu",
        e => e.preventDefault()
    );
    */

}


/*====================================================
Keyboard Shortcuts
====================================================*/

function initKeyboard() {

    document.addEventListener(
        "keydown",
        e => {

            if (
                e.key === "Home"
            ) {

                window.scrollTo({

                    top: 0,

                    behavior:
                        "smooth"

                });

            }

        }
    );

}


/*====================================================
Final Initialization
====================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initThreeBackground();

        initFPS();

        initGoldDust();

        initFloatingIcons();

        initLazyImages();

        disableContextMenu();

        initKeyboard();

    }
);
// Gallery Filter

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-btn");
    const galleries = document.querySelectorAll(".gallery-grid");

    galleries.forEach((grid, index) => {
        grid.style.display = index === 0 ? "grid" : "none";
    });

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            galleries.forEach(grid => {

                if (grid.classList.contains(filter)) {
                    grid.style.display = "grid";
                } else {
                    grid.style.display = "none";
                }

            });

        });

    });

});
/*====================================================
Single Video Audio Control
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {

        video.addEventListener("play", () => {

            videos.forEach(otherVideo => {

                if (otherVideo !== video) {

                    otherVideo.pause();
                    otherVideo.currentTime = 0;
                    otherVideo.muted = true;

                }

            });

            video.muted = false;

        });

    });

});
/*====================================================
END OF FILE
JOGANI EVENT
Production Version
====================================================*/