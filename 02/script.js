const main = document.querySelector("main");
const path = document.querySelector("#svgPath path");
const dpath = "M 5 15 Q 50 15 95 15";

main.addEventListener("mousemove", function (e) {
    let rect = main.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 30; 

    gsap.to(path, {
        duration: 0.5,
        attr: { d: `M 5 15 Q ${x} ${y} 95 15` },
    });
});

main.addEventListener("mouseleave", function () {
    gsap.to(path, {
        attr: { d: dpath },
        ease: "elastic.out(1, 0.2)",
        duration: 1,
    });
});
