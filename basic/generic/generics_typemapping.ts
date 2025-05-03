//제너릭 타입 매핑

type Nullable<T> = { [P in keyof T]: T[P] | null };
//[P in keyof T]: 각 키에 대해 반복적으로 매핑
//T[P] | null: 해당 키의 타입에 null을 추가
//T[P] : 제너릭 타입 T의 프로퍼티 타입을 참조하는 문법

//P는 T의 모든 키 (keyof T)중 하나, T[P]는 T객체에서 P라는 키의 타입을 의미한다.
//그래서 T의 모든 키를 순회하며 그 타입을, 본인의 타입 그리고 null을 가질 수 있게 한다

interface User3 {
  name: string;
  age: number;
}

type NullableUser = Nullable<User3>;
// 결과: { name: string | null; age: number | null; }
