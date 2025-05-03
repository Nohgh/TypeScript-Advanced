//제너릭 심화
/**
 * 제너릭을 사용하면 타입을 마치 함수의 매개변수처럼 사용할 수 있어,
 * 재사용 가능하고 유연한 코드를 작성할 수 있습니다.
 */
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("strong"); //타입을 명식적으로 지정
let output2 = identity(42);
