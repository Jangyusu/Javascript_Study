var btt = document.getElementById("back-to-top"),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

console.log(docElem);

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight !== "") {
    offset = docHeight / 4;
}

window.addEventListener("scroll", function() {
    scrollPos = docElem.scrollTop;
    btt.className = scrollPos > offset ? "visible" : "";
});

//

btt.addEventListener("click", function(e) {
    e.preventDefault();
    scrollToTop();
});

function scrollToTop() {
    var scrollInterval = setInterval(function() {
        if (scrollPos != 0) {
            window.scrollBy(0, -50);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
