/** Encapsulation **/
class User {
  private name: string;
  private age: number;

  setName(name: string) { // Private 속성을 가진 name 변수의 값을 변경합니다.
    this.name = name;
  }
  getName() { // Private 속성을 가진 name 변수의 값을 조회합니다.
    return this.name;
  }
  setAge(age: number) { // Private 속성을 가진 age 변수의 값을 변경합니다.
    this.age = age;
  }
  getAge() { // Private 속성을 가진 age 변수의 값을 조회합니다.
    return this.age;
  }
}

const user = new User(); // user 인스턴스 생성
user.setName("이용우");
user.setAge(284);
console.log(user.getName()); // 이용우
console.log(user.getAge()); // 28
// console.log(user.name); // Error: User클래스의 name 변수는 private로 설정되어 있어 바로 접근할 수 없습니다.