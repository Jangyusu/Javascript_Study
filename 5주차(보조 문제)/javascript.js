function a() {
    var number = window.prompt("");
    for (var i = 1; i < 10; i++) {
        document.write("<br>" + number + " X " + i + " = " + number * i);
    }
}

a();
