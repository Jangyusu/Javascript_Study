function a() {
    var number = window.prompt("");

    for (var i = 0; i <= number; i++)
        if (i % 2 == 1) {
            document.write("<br>" + i);
        }
}

a();
