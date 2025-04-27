/**
 * 타입스크립트는 복잡한 타입을 쉽게 조작할 수 있는 여러 유틸리티 타입을 제공한다.
 */

//------------------------------------------------------------------------------------------------------------------
//Partial<T> : 모든 속성을 선택적으로 만든다.

// AS-IS
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser1(user: User) {
  //모든 필드를 업데이트 해야함
}
//TO-BE
function updaterUser(user: Partial<User>) {
  //일부 필드만 업데이트 가능
  return user;
}

updaterUser({ name: "Noh" }); //유효

//------------------------------------------------------------------------------------------------------------------
//Required<T> : 모든 속성을 필수로 만듭니다.

// AS-IS
interface Conifg {
  debug?: boolean;
  timeout?: number;
}

//TO-BE
type RequiredConfig = Required<Conifg>;

const config: RequiredConfig = {
  debug: true,
  timeout: 3,
};

//------------------------------------------------------------------------------------------------------------------
//Pick<T,K> : 특정 속성만 선택합니다.

//AS-IS
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

//TO-BE
type ProductPreview = Pick<Product, "name" | "price">;

const preview: ProductPreview = {
  name: "gh",
  price: 11,
};

//------------------------------------------------------------------------------------------------------------------
//Omit<T,K>: 특정 속성을 제외합니다.

//AS-IS
interface User1 {
  id: number;
  username: string;
  password: string;
}
//TO-BE
type PublicUser = Omit<User1, "password">;

const publicInfo: PublicUser = {
  id: 1,
  username: "j",
};

//------------------------------------------------------------------------------------------------------------------
//Record<K,T> : 키-값 쌍의 타입을 정의합니다.

//AS-IS
const fruitInventory = {
  apple: 10,
  banana: 20,
  orange: 15,
};
//TO-BE
type Fruit = "apple" | "banana" | "orange";
type Stock = Record<Fruit, number>; //key는 Fruit이고 value는 number타입이다.

const fruitInventory1: Stock = {
  apple: 10,
  banana: 1,
  orange: 1,
};

//------------------------------------------------------------------------------------------------------------------
//Readonly<T>
//AS-IS

interface Configg {
  apiKey: string;
  timeout: number;
}
//TO-BE
type ReadonlyCOnifgg = Readonly<Configg>;

const config1: ReadonlyCOnifgg = {
  apiKey: "a",
  timeout: 2,
};

// config1.apiKey = "aa"; -> Error!!!

//------------------------------------------------------------------------------------------------------------------
//ReturnType<T> : 함수의 반환 타입을 추출합니다.
//AS-IS
function fetchUser() {
  return { id: 1, name: "Jojn", age: 10 };
}
//TO-BE
type User2 = ReturnType<typeof fetchUser>;
// 	   id: number;
//     name: string;
//     age: number; -> 반환타입

const user2: User2 = {
  id: 2,
  name: "na",
  age: 22,
};

//------------------------------------------------------------------------------------------------------------------
//Parameters<T> : 함수의 매개변수 타입들을 튜플로 추출합니다.
//AS-IS
function greet(name: string, age: number) {
  return `Hello, ${name} ${age}`;
}
//TO-BE
type GreetParams = Parameters<typeof greet>;

const params: GreetParams = ["a", 3];
console.log(greet(...params));
