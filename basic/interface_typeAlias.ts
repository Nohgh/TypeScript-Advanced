interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

type Poring = {
  x: number;
  y: number;
};

const pt: Poring = { x: 10, y: 3 };
