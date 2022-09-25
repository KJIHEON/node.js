let b = 1;

const a = 3; //오류를 수정해서 위에 선언

function hi () {

let b = 100;

b++;

console.log(a,b); //진행 순서 3

}

console.log(a); // 진행 순서 : 1
//function(){} 안에 선언한 값을 받을수 없어 밖에 선언

console.log(b); //진행 순서 : 2

hi(); // 진행 순서 3

console.log(b);  //진행 순서 4