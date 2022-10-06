//10진수를 다른진수로 바꿀때 toString() 괄호안에 필요한 진수 넣기
//다른 수를 10진수로 표시할때 는 parseInt()

// 자연수 n이 매개변수로 주어집니다. 
// n을 3진법 상에서 앞뒤로 뒤집은 후, 
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// n (10진법)	  n (3진법)	  앞뒤 반전(3진법)	10진법으로 표현
// 45            1200	        0021	                  7

function solution(n) {
  var answer = 0;
  let N = n.toString(3).split("").reverse().join("")
  //n을 toString(3)을 이용하여 문자로 변환하고 쪼개서 배열로 만들어준다
  // [1,2,0,0] reverse()로 반전 시켜서 문자열로 합쳐준다
  return answer = parseInt(N,3) //parseInt(N,3) 을이용하여 3진법으로 바꿔준다.
}
let n = 125
console.log(solution(n))