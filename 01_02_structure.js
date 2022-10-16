/**
 * 출처 : https://ko.javascript.info/structure
 * 문(statement)은 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미합니다.
 * 
 * 서로 다른 statement는 세미콜론으로 구분
 * 
*/
alert("Hello");
alert("World");



/*
 * 자바스크립트는 줄 바꿈이 있으면 이를 ‘암시적’ 세미콜론으로 해석합니다. 
 * 이런 동작 방식을 세미콜론 자동 삽입(automatic semicolon insertion)이라 부릅니다. 
 */

// [정상작동 예제]
alert("Hello without semicolon")
alert("World without semicolon")

/*
 * 반면, 세미콜론이 정말로 필요하지만 자바스크립트가 이를 추정하지 ‘못하는’ 상황도 존재합니다.
 * 
 */

// [에러 예제]
alert("에러가 발생합니다.")
[1, 2].forEach(alert)
// 에러 메세지 : Uncaught TypeError: Cannot read properties of undefined (reading '2') at 01_02_structure.js:29:1

/* 
 * 에러가 발생했던 이유는 자바스크립트가 대괄호 [...]앞에는 세미콜론이 있다고 가정하지 않기 때문입니다.
 * 따라서 세미콜론 자동 삽입이 일어나지 않고 첫 번째 예제는 단일 문으로 처리됩니다. 
 * 자바스크립트 엔진이 보게 될 코드는 다음과 같아지죠.
 * alert("에러가 발생합니다.")[1, 2].forEach(alert)
 */


/* 
 * 세미콜론은 생략할 수 있습니다. 
 * 하지만 세미콜론을 사용하는 것이 더 안전하므로 이를 기억하고 따르도록 합시다.
 */
