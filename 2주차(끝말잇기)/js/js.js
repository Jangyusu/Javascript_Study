function first() {
    var startText = document.getElementsByName("js_startText")[0].value;
    var answer = document.getElementsByName("js_answer")[0].value;

    var lastWord = startText.charAt(startText.length - 1);
    var startWord = answer.charAt(0);

    if (answer === "") {
        alert("단어를 입력하세요.");
    } else if (lastWord == startWord) {
        document.getElementsByName("js_startText")[0].value = answer;
        document.getElementsByName("js_list")[0].value += startText;
        document.getElementsByName("js_answer")[0].value = "";
    } else {
        alert("정답이 아닙니다.");
    }
}
