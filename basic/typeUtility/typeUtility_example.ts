//실제 사용 예제: 복합 유틸리티 타입

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

//관리자용 사용자 정보 타입(비밀번호 제외, 모든 필드 읽기 전용)
type AdminSafeUser = Readonly<Omit<User, "password">>;

//사용자 생성 시 필요한 정보 타입(id 제외, 관리자 여부 선택적)
//밑의 코드가 주어진 예제이지만, 오류가 발생 <- isAdmin이 &이전에 이미 필수로 정해짐
// type CreateUserDto = Omit<User, "id"> & Partial<Pick<User, "isAdmin">>;
type CreateUserDto = Partial<User> &
  Required<Pick<User, "name" | "email" | "password">> & { id?: number };

function createUser1(userData: CreateUserDto) {
  console.log(userData);
  //사용자 생성 로직
}

createUser1({
  name: "Noh",
  email: "dd",
  password: "sss",
  id: 2,
});
