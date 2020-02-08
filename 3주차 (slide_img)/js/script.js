var currentIndex = 0;
var topHeight = 0;

var slideContainer = document.getElementsByClassName("slider-container");
var navPrev = document.getElementById("prev");
var navNext = document.getElementById("next");

var slides = document.getElementsByClassName("slide");
var slideCount = slides.length;

var slideWrapper = document.getElementsByClassName("container");

////////////////////// var 선언 //////////////////////////////

height(); // li의 높이를 자동으로 조정해준다.

function slide(idx) {
    currentIndex = idx;
    slideContainer[0].style.left = idx * -100 + "%";

    // buttonHide();
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

// 슬라이드 이동 함수

// 버튼을 클릭하면 슬라이드 이동시키기

// 버튼 사라지게 하기

// (추가) 첫번째 슬라이드 먼저 보이도록 하기

// (추가) 슬라이드가 있으면 가로로 배열하기

// (추가) 슬라이드의 높이 확인하여 부모의 높이로 지정하기

// (추가) 처음에서 뒤로가는 버튼 누르면 마지막으로 가기 (마지막도 동일)

function height() {
    for (var j = 0; j < slideCount; j++) {
        if (topHeight < slides[j].offsetHeight) {
            topHeight = slides[j].offsetHeight;
        }
    }
    slideWrapper[0].style.height = topHeight + "px";
    slideContainer[0].style.height = topHeight + "px";
}
