//조건부 타입과 제너릭
type NonNullable1<T> = T extends null | undefined ? never : T;
type Result = NonNullable1<string | number | null | undefined>;
