/** Abstraction **/
interface Human {
  name: string;
  setName(name);
  getName();
}

// 인터페이스에서 상속받은 프로퍼티와 메소드는 구현하지 않을 경우 에러가 발생합니다.
class Employee implements Human {
  constructor(public name: string) {  }
  
  // Human 인터페이스에서 상속받은 메소드
  setName(name) { this.name = name; }
  
  // Human 인터페이스에서 상속받은 메소드
  getName() { return this.name; }
}

const employee = new Employee("");
employee.setName("이용우"); // Employee 클래스의 name을 변경하는 setter
console.log(employee.getName()); // Employee 클래스의 name을 조회하는 getter