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
}
