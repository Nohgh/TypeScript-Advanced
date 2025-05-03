//복합 예제
//타입추론을 활용한 유틸리티 함수

function createUser1<T extends object>(defaults: T, override: Partial<T>) {
  return { ...defaults, ...override };
}

const defaultUser = {
  name: "Guest",
  age: 0,
  isAdmin: false,
};

//user의 타입이 {name: string; age: number; isAdmin:boolean}로 추론
const user = createUser1(defaultUser, { name: "JH", age: 33 });
console.log(user);
