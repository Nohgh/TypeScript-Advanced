//제너릭 심화
/**
 * 제너릭을 사용하면 타입을 마치 함수의 매개변수처럼 사용할 수 있어,
 * 재사용 가능하고 유연한 코드를 작성할 수 있습니다.
 */
//기본 제너릭 함수
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("strong"); //타입을 명식적으로 지정
let output2 = identity(42);

//제너릭 인터페이스
interface GenericIdentityFn<T> {
  (arg: T): T;
}

//myIdentity는  number를 받아 number를 반환하는 함수
//identity는 제너릭으로 작성되어있어 타입에 유연하게 대응을 합니다.
let myIdentity: GenericIdentityFn<number> = identity;

//제너릭 클래스
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFn;
  }
}

let stringNumberic = new GenericNumber<string>("", (x, y) => x + y);
console.log(stringNumberic.add(stringNumberic.zeroValue, "test"));

let numberNumberic = new GenericNumber<number>(0, (x, y) => x + y);
console.log(numberNumberic.add(5, 10));

//제너릭 제약 조건
//length속성을 갖는 객체 타입
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
  return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity({ length: 10, value: 3 });
// loggingIdentity(3); 오류, number에는 .length가 없다.
