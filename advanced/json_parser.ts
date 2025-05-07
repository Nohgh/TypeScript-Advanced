//타입스크립트의 재귀적 타입을 사용해 JSON 구조를 타입으로 표현
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

type JSONObject = { [key: string]: JSONValue };

function parseJSON(json: string): JSONValue {
  return JSON.parse(json); //js 객체를 json 문자열로 변환
}

function stringifyJSON(value: JSONValue): string {
  return JSON.stringify(value); //json문자열을 js객체로 변환
}

//사용예
const jsonString =
  '{"name":"John","age":30,"isStudent":false,"hobbies":["reading","coding"]}';

const parsed = parseJSON(jsonString);
console.log(parsed);

const stringified = stringifyJSON({ x: 5, y: [1, 2, 3] });
console.log(stringified);
