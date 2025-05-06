/**
 * 타입가드: 여러 개의 타입 중 원하는 타입으로 타입을 걸러낸다.
 */
function isString(age: string | number): age is string {
  return typeof age === "string";
}

function getAge(age: string | number) {
  if (isString(age)) {
    //age의 타입은 문자열
    age.length;
  }
}
