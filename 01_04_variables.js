// 변수 선언
let message;

// 데이터 할당 
message = "message"; // 문자열 저장

// 변수명을 이용해 저장된 값에 접근
console.log(message);


// 변수를 정의하고 값을 할당
let message2 = "another message";

// 만들어진지 오래된 스크립트에서 let 대신 var를 볼 수 있다.
var john = "john";


// let 변수에는 값을 할당 후 다른 값으로 변경 가능
let hi = "Hi";
hi = "안녕"; // 값 변경
console.log(hi);

// 변수 두 개를 선언하고 한 변수를 다른 변수에 복사 가능
let hello = "greeting";
let greeting;
greeting = hello; // 값 복사

// 두 변수는 같은 값을 가짐
console.log(hello);
console.log(greeting);

// 같은 변수명으로 let을 두 번 선언 할 수 없음(재선언 불가)
let again;
// let again; // Cannot redeclare block-scoped variable 'again'.ts(2451)

/**
 * 출처 : https://ko.javascript.info/variables
 * 함수형(functional) 프로그래밍 언어는 변숫값 변경을 금지합니다. 
 * 
 * 스칼라(Scala)와 얼랭(Erlang)은 대표적인 함수형 언어입니다.
 * 이들 언어에서는 ‘상자 속에’ 값이 일단 저장되면, 그 값을 영원히 유지합니다. 
 * 다른 값을 저장하고 싶다면 새로운 상자를 만들어야(새 변수를 선언해야)만 합니다. 
 * 이전 변수를 재사용할 수 없습니다.
 * 
 * 처음 봤을 땐 좀 이상해 보일 수 있지만, 함수형 언어는 중대한 개발에 상당히 적합한 언어입니다. 
 * 이런 제약이 장점으로 작용하는 병렬 계산(parallel computation)과 같은 영역도 있죠. 
 * 당장은 사용할 계획이 없더라도 이런 언어를 공부하는 것은 시야를 넓히는 데 도움이 되므로, 학습을 권유 드립니다.
*/


// 변수 명명 규칙
let camelCase;

let $ = 1; // '$'라는 이름의 변수를 선언합니다.
let _ = 2; // '_'라는 이름의 변수를 선언합니다.

console.log($ + _); // 3

// let 1a; 숫자가 앞에 올 수 없음
// let my-name; 하이픈은 변수명에 사용할 수 없음

// 대소문자를 구분
let Apple;
let apple;
console.log(Apple === apple);

// 상수 변수 선언
const myBday = "27.06.1990";
// myBday = "26.06.1990";
// console.log(myBday);
// 에러메세지 : Uncaught TypeError: Assignment to constant variable.at 01_04_variables.js:69:8

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 됨
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

/**
 * '상수’는 변수의 값이 절대 변하지 않음을 의미합니다. 
 * 그중에는 (빨간색을 나타내는 16진수 값처럼) 코드가 실행되기 전에 이미 그 값을 알고 있는 상수도 있고, 
 * 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 있습니다.
 * 
 * [예시]
 * const pageLoadTime = '웹페이지를 로드하는데 걸린 시간';
 * pageLoadTime의 값은 페이지가 로드되기 전에는 정해지지 않기 때문에 일반적인 방식으로 변수명을 지었습니다. 
 * 하지만 이 값은 최초 할당 이후에 변경되지 않으므로 여전히 상수입니다.
 * 
 * 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 사용하면 됩니다.
*/

// let's practice
console.log("변수 가지고 놀기");
let admin;
let name = "John";
admin = name;
console.log(admin);


console.log("올바른 이름 선택하기");
let ourPlanetName = "Earth";
let currentUserName = "Jamie";
console.log(ourPlanetName, currentUserName);


console.log("대문자 상수 올바로 사용하기");
const BIRTHDAY = '18.04.1982'; // 대문자 상수로 바꿔도 괜찮을까요?
// const age = someCode(BIRTHDAY); // 대문자 상수로 바꿔도 괜찮을까요?


/**
 * 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 주로 사용합니다. 
 * 실행 전에 이미 값을 알고 있고, 코드에서 직접 그 값을 쓰는 경우에 사용하죠.
 * 위 코드에서 birthday가 그런 경우입니다. 따라서 birthday는 대문자 상수로 적합합니다.
 * 반면, age는 런타임에 평가됩니다. 
 * 올해의 나이와 내년의 나이는 다르죠. 
 * 상수는 코드가 실행될 때마다 바뀌지 않아야 하는 값이란 걸 아마 느끼셨을 겁니다. 
 * 이런 관점에서 보았을 때, age는 birthday보다 덜 상수스럽습니다. 런타임에 계산되죠. 
 * 따라서 age는 대문자 상수에 적합하지 않습니다.
*/



