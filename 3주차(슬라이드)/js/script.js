var currentIndex = 0;
var topHeight = 0;

var slideContainer = document.getElementsByClassName("slider-container");
var navPrev = document.getElementById("prev");
var navNext = document.getElementById("next");

var slides = document.getElementsByClassName("slide");
var slideCount = slides.length;

var slideWrapper = document.getElementsByClassName("container");

function slide(idx) {
    currentIndex = idx;
    slideContainer[0].style.left = idx * -100 + "%";
}

for (var i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + "%";
}

navPrev.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentIndex === 0) {
        slide(slideCount - 1);
    } else {
        slide(currentIndex - 1);
    }
});

navNext.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentIndex === slideCount - 1) {
        slide(currentIndex === 0);
    } else {
        slide(currentIndex + 1);
    }
});

function buttonHide() {
    if (currentIndex === 0) {
        navPrev.classList.add("disabled");
    } else {
        navPrev.classList.remove("disabled");
    }

    if (currentIndex === slideCount - 1) {
        navNext.classList.add("disabled");
    } else {
        navNext.classList.remove("disabled");
    }
}

function height() {
    for (var j = 0; j < slideCount; j++) {
        if (topHeight < slides[j].offsetHeight) {
            topHeight = slides[j].offsetHeight;
        }
    }
    slideWrapper[0].style.height = topHeight + "px";
    slideContainer[0].style.height = topHeight + "px";
}

height(); // li의 높이를 자동으로 조정해준다.
