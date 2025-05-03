//제너릭과 타입 추론
function identity<T>(arg: T): T {
  return arg;
}

let output = identity("string"); //output의 타입이 string으로 추론됨
let numOutput = identity(42); //numOutput의 타입이 number로 추론됨

//콜백함수의 매개변수 타입 추론
const numbers = [1, 2, 3, 4, 5];

//item의 타입이 number로 추론됨
numbers.forEach((item) => {
  console.log(item.toFixed(2));
});

//value의 타입이 number로 추론됨
const doubled = numbers.map((value) => value * 2);

//조건부 타입과 타입추론
