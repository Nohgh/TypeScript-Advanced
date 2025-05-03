//Factory: { new (): T } -> 생성자 타입
//의미: Factory는 new()로 호춣할 수 있는 클래스 또는 생성자 함수, T타입의 객체를 반환
function create<T>(Factory: { new (): T }): T {
  return new Factory(); //전달받은 Factory로 부터 새로운 인스턴스를 생성
}

class BeeKeeper {
  hashMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "noj";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

let bee = create(Bee);
let lion = create(Lion);
