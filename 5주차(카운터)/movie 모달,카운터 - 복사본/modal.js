// function open() {
//     var open = document.getElementById("open"),
//         modalWrapper = document.querySelector(".modal-wrapper"),
//         close = document.getElementById("close");

//     open.addEventListener("click", function(e) {
//         e.preventDefault();
//         modalWrapper.style.display = "flex";
//     });

//     close.addEventListener("click", function(e) {
//         e.preventDefault();
//         modalWrapper.style.display = "none";
//     });
// }

// open(); // addEventListener로 만들기

var open = document.getElementById("open"),
    modalWrapper = document.querySelector(".modal-wrapper"),
    close = document.getElementById("close");

open.onclick = e => {
    e.preventDefault();
    modalWrapper.style.display = "flex";
};

close.onclick = e => {
    e.preventDefault();
    modalWrapper.style.display = "none";
}; // onclick으로 만들기
