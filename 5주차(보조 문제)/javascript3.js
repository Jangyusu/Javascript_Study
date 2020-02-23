function a() {
    var number = window.prompt("숫자를 입력하세요."),
        number2 = parseInt(number),
        sum;
    if (number2 === 0) {
        document.write("1");
    } else {
        sum = 1;
        document.write(number2 + "! = 1");
        for (var i = 2; i <= number2; i++) {
            sum = sum * i;
            document.write(" X " + i);
        }
        document.write("<br> 총 합은 = " + sum + "이다.");
    }
}

a(); // 팩토리얼 구현
