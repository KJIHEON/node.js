let b = 2;

function hi () {

const a = 1;

let b = 100;

b++; // b의 값을 증가 시킨다

console.log(a,b); //진행순서 2
//function hi() {} 안에 값이 찍힌다.
// const a = 1;, let b = 100; b++ 실행 (b++ = b의 값을 하나 증가시켜라)
// 결과 값 : 1 101

}

//console.log(a);
//function (){} 안에 선언한 값은 function 문이 품고 있어서 function 밑에서는 값을 받을 수 없다.
//오류

console.log(b); //진행순서 : 1 
//function(){} 위에 let b = 2;  값이 찍힌다. 
//function (){} 안에 선언한 값은 function 문이 품고 있어서 function 밑에서는 값을 받을 수 없다.
//결과 값 : 2

hi(); //진행순서 2
//위에 console.log(b)의 값이 찍히고 hi() 실행

console.log(b); //진행순서 3
//function (){} 위에 let으로 선언한 값이 찍힌다. let b = 2;
//function (){} 안에 선언(let, const)한 값은 function 문이 품고 있어서 function 밑에서는 값을 받을 수 없다.
//결과 값 2