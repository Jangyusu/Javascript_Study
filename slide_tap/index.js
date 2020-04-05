window.addEventListener("load", function () {
    var div = document.querySelector("div"),
        a = document.querySelectorAll("a"),
        span = document.querySelector("span");

    span.style.width = `${a[0].offsetWidth}px`;
    span.style.left = `${a[0].offsetLeft}px`;





    div.addEventListener("mouseover", slide);
    window.addEventListener("resize", slide);





    function slide(e) {
        target = e.target;

        if (target.nodeName == "A") {
            span.style.width = `${target.offsetWidth}px`;
            span.style.left = `${target.offsetLeft}px`;
        }
    }
});

