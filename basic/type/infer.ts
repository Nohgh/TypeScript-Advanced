/**
 * infer: 조건부 타입에서 미리 정의되지 않은 타입을 유연하게 정의할 수 있게 도와주는 문법
 * 항상 조건부 타입 문법과 같이 사용되면, 복잡한 타입 코드를 줄여준다.
 */

//ElementType 타입에 제너릭으로 넘긴 배열타입의 요소 타입을 반환
type ElementType<T> = T extends (infer ArrayElement)[] ? ArrayElement : T;
//밑의 코드를 작성하는것과 같다
// type ElementType<T> = T extends string[] ? string : T;
// type ElementType<T> = T extends number[] ? number : T;
// type ElementType<T> = T extends boolean[] ? boolean : T;
// type ElementType<T> = T extends never[] ? never : T;
type Result = ElementType<string[]>;
type Result = ElementType<number[]>;
type Result = ElementType<boolean>;

//infer 뒤에 나오는 타입(여기서는 ArrayElement)는 조건부 문법 안에서만 사용된다.
type InferExample<T> = T extends infer Person1 ? Person1 : never;
type Result1 = InferExample<{ name: "zoo" }>;
const capt: Person1 = {
  name: "zoo",
};

//위의 코드에서 infer로 사용된 Person1이라는 타입은 다른 코드에서 사용할 수 없다
