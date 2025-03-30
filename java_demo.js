//   1. 함수는 함수의 실제 매개변수가 될수있다.
function foo1(arg) {
    arg();
}
function bar1() {
    console.log('bar');
}

foo1(bar1);

//   2. 함수는 함수의 반환값이 될수있다.
function foo2(arg) {
    return arg();
}
function bar2() {
    console.log('bar');
}

foo2(bar2);

// 3. 함수는 할당명령문의 대상상이 될수있다.
// 4. 함수는 동일비교의 대상이 될수있다.
const foo3 = function (arg) {
    return arg;
}

foo3(1);

// 1. 기본값 매개변수
function foo4(arg = 1){
    console.log(arg);
}

foo4();

// 2. 나머지 매개변수
function foo5(arg, ...rest){
    console.log(rest);
}

foo5(1,2,3,4);
// 3. arguments 객체
function foo6(arg){
    console.log(arguments);
}

foo6(1,2,3,4);

// 1. 함수 선언문
function foo7(){
    console.log('foo7');
}

foo7();

// 2. 함수 표현식
const foo8 = function foo8(){
    console.log('foo8');
};

foo8();

// 3. Function 생성자 함수
const foo9 = new Function("console.log('foo9')");

foo9();

// 4. 화살표 함수 표현식
const foo10 = () => {
    console.log('foo10');
}

foo10();

// 1. IIFE (즉시 실행 함수)
(function foo11() {
    console.log('foo11');
})();

// 2. 재귀함수
const foo12 = (arg) => {
    if(arg === 3) return;
    console.log('foo12');
    foo12(arg + 1);
}

foo12(1);

// 3. 중첩함수
const foo13 = () => {
    function bar(){
    console.log('foo13');
    }
    bar();
}

foo13();

// 4. 콜백함수
const foo14 = (arg) => {
    arg();
}

foo14(() => { console.log('foo14'); });