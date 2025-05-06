/**
 * 맵드 타입
기존에 정의되어 있는 타입을 새로운 타입으로 만들어준다
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
