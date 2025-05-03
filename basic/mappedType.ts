/**
 * 맵드 타입
 * 기존 타입의 키를 기반으로 새 타입을 만드는 문법
 * 즉 어떤 타입 T가 있을 떄, 그 속성들을 하나씩 반복하며 변형된 타입을 만드는 기능
 */

//예시1. 모든 속성을 stirng으로 바꾸기
type Person = {
  name: string;
  age: number;
};
// type 새타입 = {
//   [K in keyof 기존타입]: 새로운타입정의;
// };
type AllString<T> = { [K in keyof T]: string };

type StirngPerson = AllString<Person>;
//결과:
//type StirngPerson = {
//     name: string;
//     age: string;
// }

//예시2. 모든 속성을 optional로 만들기 -> 내장 유티리티인 Partial
type Partiall<T> = {
  [K in keyof T]?: T[K];
};

type PartialPerson = Partiall<Person>;
// type PartialPerson = {
//     name?: string | undefined;
//     age?: number | undefined;
// }
