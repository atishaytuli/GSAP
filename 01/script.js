let main = document.querySelector("main");
let text = document.querySelectorAll(".page2 h1");
let lettersArray = [];

function splitText() {
    text.forEach((h1) => {
        const textContent = h1.textContent.trim();
        h1.innerHTML = ""; 

        const letters = textContent.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            span.style.position = "relative";
            span.style.opacity = "0";
            h1.appendChild(span);
            return span;
        });

        lettersArray.push(...letters);
    });
}

function unHideText() {
    text.forEach((h1) => {
        h1.style.opacity = 1;
    });
}

function scrollText() {
    if (lettersArray.length === 0) {
        return;
    }

    gsap.fromTo(
        lettersArray,
        {
            rotateY: () => Math.random() * 360 - 180,
            x: () => Math.random() * 200 - 100,
            y: () => Math.random() * 200 - 100,
            scale: () => Math.random() * 2 + 0.5,
            opacity: 0
        },
        {
            rotateY: 0,
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "elastic.out(1, 0.5)",
            stagger: {
                amount: 1,
                from: "random"
            },
            scrollTrigger: {
                trigger: ".page2",
                start: "top top",
                end: "bottom 30%",
                pin: true,
                anticipatePin: true,
                scrub: 1
            }
        }
    );
}
document.addEventListener("DOMContentLoaded", () => {
    splitText();
    unHideText();
    setTimeout(scrollText, 500);
});
