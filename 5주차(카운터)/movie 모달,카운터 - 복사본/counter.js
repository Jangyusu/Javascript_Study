var up = document.getElementById("bt1"),
    down = document.getElementById("bt2"),
    number = document.getElementById("number"),
    money = document.getElementById("money");

bt1.onclick = () => {
    if (number.innerHTML < 10) {
        number.innerHTML++;
        money.innerHTML = number.innerHTML * 9000;
    }
};

bt2.onclick = () => {
    if (number.innerHTML > 0) {
        number.innerHTML--;
        money.innerHTML = number.innerHTML * 9000;
    }
}; // onclick으로 만들기

// function count() {
//     var up = document.getElementById("bt1"),
//         down = document.getElementById("bt2"),
//         number = document.getElementById("number"),
//         money = document.getElementById("money");

//     up.addEventListener("click", function() {});

//     down.addEventListener("click", function() {});
// } // addEventListener으로 만들기

// count();
