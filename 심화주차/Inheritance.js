/** Inheritance **/
class Mother { // Mother 부모 클래스
  constructor(name, age, tech) { // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
  getTech(){ return this.tech; } // 부모 클래스 getTech 메서드 리턴 하겠다.
}
            //extends 부모 클래스를 상속 받기 위한 메서드
class Call extends Mother{ // Mother 클래스를 상속받은 Child 자식 클래스
  constructor(name, age, tech) { // 자식 클래스 생성자
    super(name, age, tech);
    //super 부모 클래스의 생성자를 호출 할수 있다.
  }
}

const call = new Call("잉", "228", "잉.js");
console.log(call.name); // 이용우
console.log(call.age); // 28
console.log(call.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js