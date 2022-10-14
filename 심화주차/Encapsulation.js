/** Encapsulation **/
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user = new User(); // user 인스턴스 생성
user.setName("이용우");
user.setAge(284);
console.log(user.getName()); // 이용우
console.log(user.getAge()); // 28
// console.log(user.name); // Error: User클래스의 name 변수는 private로 설정되어 있어 바로 접근할 수 없습니다.
