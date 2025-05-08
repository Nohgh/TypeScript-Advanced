//인터섹션 타입과 유니온 타입을 이용한 복잡한 상태 관리
type UserRole = "admin" | "user" | "guest";

interface BaseState {
  isLoading: boolean;
  error: string | null;
}

interface GuestState extends BaseState {
  userRole: "guest";
}

interface UserState extends BaseState {
  userRole: "user";
  username: string;
}

interface AdminState extends BaseState {
  userRole: "admin";
  username: string;
  adminToken: string;
}

type AppState = GuestState | UserState | AdminState;

function updateState(
  currentState: AppState,
  update: Partial<AppState>,
): AppState {
  return { ...currentState, ...update } as AppState;
}

//사용 예시
let state: AppState = { isLoading: true, error: null, userRole: "guest" };

state = updateState(state, {
  isLoading: false,
  userRole: "user",
  username: "john_doe",
});

state = updateState(state, { userRole: "admin", adminToken: "secret_token" });
