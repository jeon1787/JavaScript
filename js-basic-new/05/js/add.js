var num1  = parseInt(prompt("첫 번째 숫자는?"))
var num2  = parseInt(prompt("두 번째 숫자는?"))
var result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

// 함수 기본형
function addNumber(a, b) {
    return a + b;
}

// 함수 표현식 - 익명 함수
var add = function(a, b) {
    return a + b;
}

// 함수 표현식 - 즉시 실행 함수
var result1 = (
    function() {
        return 10 + 20;
    }
)();

var result2 = (
    function() {
        return 10 + 20;
    }()
);

///////////////////////////////////////////////

// 함수 표현식 - 익명 함수
const hi1 = function() {
    return "안녕하세요?";
}

// 함수 표현식 - 화살표 함수
const hi2 = () => { return "안녕하세요?"}
const hi3 = () => "안녕하세요?";

///////////////////////////////////////////////

// 함수 표현식 - 익명 함수
let hi4 = function(user) {
    document.write(user + "님, 안녕하세요?");
}

// 함수 표현식 - 매개변수가 1개인 화살표 함수
let hi5 = user = document.write(user + "님, 안녕하세요?");

///////////////////////////////////////////////

// 함수 표현식 - 익명 함수
let su1 = function(a, b) {
    return a + b;
}

// 함수 표현식 - 매개변수가 2개인 화살표 함수
let sum2 = (a, b) => {return a + b}

let sum3 = (a, b) => a + b;