//제너릭 함수
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["1", "a"]);

//제너릭 인터페이스
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T) {
  return arg;
}

let myIdtity: GenericIdentityFn<number> = identity;
