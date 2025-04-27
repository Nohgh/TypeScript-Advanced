//함수
function addNum(x: number, y: number): number {
  return x + y;
}

//선택적 매개변수
function log(message: string, userId?: string) {
  console.log(message, userId || "Not signed in");
}

//함수 오버로딩
function padding(all: number);
function padding(topAndBotton: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}
