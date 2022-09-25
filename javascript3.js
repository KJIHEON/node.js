//화살표 함수를 알아보자
//일반 익명 함수로 부터 좀 더 간단하게 쓸 수 있는 함수이다.

//일반 적인 함수 식
const sum = function(a, b) { 
    return a + b; //변수로 선언한 함수 이름에 값이 들어오면 a + b 를 리턴 시켜서 그 값을 넣어준다
  };

const a = sum(1,2); // 1 ,2 값을 함수로 넣어주고 그값을 리턴 받아 3이된다.

console.log(a) // 3

//위에 식처럼 함수는 function 를 사용 하여 값을 부르고 돌려주는데 화살표 함수는 그 과정을 줄여준다.

const sums = (a , b) => { //이런 식으로 function 문을 생략 하여 사용 가능하다/
    return a + b ;
}
console.log (sums(1,2)) // 3

const sum2 = (a , b) =>  a + b; // return문구를 없애고 좀더 간단하게도 사용 가능하다

console.log(sum2(3,4)) // 7
