//복합 예제: 제너릭을 활용한 상태관리 시스템
class StateManager<S> {
  private state: S;

  constructor(initialState: S) {
    this.state = initialState;
  }

  getState(): S {
    return this.state;
  }

  setState(newState: Partial<S>): void {
    this.state = { ...this.state, ...newState };
  }
}

interface UserState {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

const userStateManager = new StateManager<UserState>({
  name: "Guset",
  age: 0,
  isLoggedIn: false,
});

console.log(userStateManager.getState());

userStateManager.setState({ name: "noh", age: 25 });
console.log(userStateManager.getState());

userStateManager.setState({ isLoggedIn: true });
console.log(userStateManager.getState());
