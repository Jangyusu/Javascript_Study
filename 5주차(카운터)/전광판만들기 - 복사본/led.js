var text = document.getElementById("inputText"),
    color = document.getElementById("inputColor"),
    speed = document.getElementById("inputSpeed"),
    led = document.getElementById("led");

text.addEventListener("input", function() {
    led.innerHTML = text.value;
});

color.addEventListener("input", function() {
    led.style.color = color.value;
});

speed.addEventListener("input", function() {
    led.getAttribute("scrollamount") = speed.value;
});
