//화살표 함수를 알아보자
//일반 익명 함수로 부터 좀 더 간단하게 쓸 수 있는 함수이다.

//일반 적인 함수 식
// const sum = function(a, b) { 
//     return a + b; //변수로 선언한 함수 이름에 값이 들어오면 a + b 를 리턴 시켜서 그 값을 넣어준다
//   };

// const a = sum(1,2); // 1 ,2 값을 함수로 넣어주고 그값을 리턴 받아 3이된다.

// console.log(a) // 3

// //위에 식처럼 함수는 function 를 사용 하여 값을 부르고 돌려주는데 화살표 함수는 그 과정을 줄여준다.

// const sums = (a , b) => { //이런 식으로 function 문을 생략 하여 사용 가능하다/
//     return a + b ;
// }
// console.log (sums(1,2)) // 3

// const sum2 = (a , b) =>  a + b; // return문구를 없애고 좀더 간단하게도 사용 가능하다

// console.log(sum2(3,4)) // 7

// //인자가 하나일때는 () 생략 가능
// const hello = a => {
//     return a;
// }
// console.log(hello("안녕!!!"))


// //화살표 함수 구현해보기
// //배열이 주어졌을때 사용자의 연령 평균을 구해주는 함수를 만들어보자!!
// const personArray = [
//     { name: "John Doe", age: 20 },
//     { name: "Jane Doe", age: 19 },
//     { name: "Fred Doe", age: 32 },
//     { name: "Chris Doe", age: 45 },
//     { name: "Layla Doe", age: 37 },
//   ];
//   console.log(personArray[2]) // 배열안의 { name: "Fred Doe", age: 32 }가 출력된다.
//   // personArray의 나이 평균을 구해주는 Arrow Function을 작성해봅시다.
//   const getAgeAverage = () => {
//         let a = 0; // person
//         for(const person of personArray){ //personArray 배열을 person에 하나씩 넣으면서 반복한다.
//             a += person['age']//받은 배열 값의 age의 값을 추출해서 a에 누적증가 시킨다.
//         };
//        return a / personArray.length; //누적된 age의 값을 배열의 길이로 나눠서 평균을 구한다.
//   };
  
// console.log(getAgeAverage(personArray)); // 30.6



// 구조 분해 할당 
// const array = [100,200];

// const [a,b] = array//array 배열의 값을 불러내서 쓸수있다.
// console.log(a)

// const student = {
//     name: "KimGiHeon",
//     age: 26,
//     onlineClass: "Node JS",
//   };
//   const { name, age, onlineClass } = student //student 라는 객채에서 name,age, onloneClass를 뽑아내서 사용할수 있다
//   console.log(name); // "Sparta"
//   console.log(age); // 18
//   console.log(onlineClass); // "Node JS"

// const example = ['apple','banana','mango','kiwi','melon'];
// //반복문을 사용해서 배열안의 값을 가져오자!!
// // for (const examples of example){ // for of 문을 사용하여 배열 값을 하나씩 가져온다.
// //     a = examples;
// //     console.log(a)//example 의 배열의 객체값이 하나씩 들어온다.
// // };


// // for (let i = 0; i < example.length; i++){ //for의 증감문을 사용하는데 배열의 길이 만큼 가져와야한다.
// //     b = example[i]// i값을 돌면서 example 안에 있는 객체의 자리값을 가져와서 출력한다.
// //     console.log(b)
// // };
// //그렇다면 배열을 돌면서 각 객체 마다 개행을 해서 밑으로 붙히게 한다면 어떻게 하는가??
// let a = "";
//     for (const examples of example){ // for of 문을 사용하여 배열 값을 하나씩 가져온다.
//     a = a + `${examples}\n` // 각 객체를 가져오는데 그값을 하나씩 불러올때마다 개행을 바로 추가해서 넣어준다.
//     }
// console.log(a)

// const a = 1;
// const b = 2;
// let num = 1
// const c = a=> {
//     if (a % 2 == 0){
//     return "odd"
// } else {
//     return "Even"
// }
// }

// console.log(c(num));

//두 정수 사이의 합
// const a = 5;
// const b = -3;
// let sum = 0;
// //Math 라는 메소드를 사용 a , b 중 작은값 부터 시작해서 큰값까지 i를 증가해라
// for (i = Math.min(a,b); i <= Math.max(a,b); i++){
//   sum += i //sum에 i값을 누적 증가해라.
// }
// console.log(sum)

// function solution(a, b) {
//     var answer = 0;
//     let c = 0;
// for ( i = Math.min(a,b); i <= Math.max(a,b); i++){ //작은 값에서 큰값 까지 증가해라
//     if (a === b){ //만약 a와 b가 같다면
//         return answer = a; //a의 값을 반환
//     }else {
//       c = c + i  //그렇지 않으면 c의 값에 증가시켜라
//     }
//     console.log(c)
// }    
// }
// const s = "abcdedz"
// const avg = s.length / 2
// if (s % 2 == 0){
//   s.substring(avg-1,avg+1)
// } else (
//   s.substring(avg,avg+1)
// )
// let a = [1, 2, 3]
// let b = [false,false,true]
// // console.log(a+b)
// for(const nums of (a)){
//   for (const numss of b){
//     // console.log(numss+nums)
//   }

// }
// let a = [1, 2, 3]
// let b = [false,false,true]
// let c = 0;
// for (i = 0; i < a.length; i++){ //a의 길이만큼 반복한다.
//  if (b[i] === true){ //b[i]즉 false ,false, true 을 뽑아낸다.
//   c += a[i] // b[i]의 값이 true c에 a[i] 값을 증가시킨다 (더하기)
// }else {
//   c -= a[i] //b[i]의 값이 false c에 a[i]의 값을 빼준다
// }
// }
// console.log(c)

// const numbers = [1,2,3,4,6,7,8,0] // 5, 9 비어있음 14
// let c = 0;
// for (i = 0; i <= 9; i++){
//    if(numbers.includes(i) == false){ 
//     //i의 값에 number의 값이 포함 되는지 물어보고 포함 하면 true 포함X면 false를 보낸다.
//     //그 값이 false면 i값을 더해줘라.  
//     c += i //false인 i값을 더해라
//    }
// }


// let avg = 0;
// for (const array of arr){ //arr 배열안에 있는 값을 가져온다 5 5 
//    avg += array // 가져온 값을 누적 더해준다
   
// }
// a = avg /arr.length //더해진 값을 arr의 길이로 나눠준다.
// console.log(a)
// arr = [5,3,4]
// function avg(arr){

//   a = arr.reduce((a,b) => a + b) / arr.length; //화살표 함수로 표현한다.
//   console.log(a)
// }

// 전화번호가 문자열 phone_number로 주어졌을 때, 
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 
// 리턴하는 함수, solution을 완성해주세요.
// let phone = "027778888" //*****8888
// let phones =""; //if ***** else 8888
// for (i = 0; i < phone.length; i++){ //phone의 길이 만큼 반복한다
//   if(i < (phone.length)-4 ){ //i의 값이 phone길이의 -4를 뺸값(즉 i값 01234 번까지) 까지 phones에 *를 추가한다.
//       phones += "*" // phones *****
//   } else { //넘어가면 else안에 함수가 실행
//     phones += phone[i] //5678 까지 번호를 누적해서 넣어줌
//   }
// }console.log(phones)
// // console.log(phone.substring((phone.length)-4,phone.length)) 7891
// // phone[i] = phone 027778888 (123456789)
// // i = 012345678


// // //slice 함수 알아보기
// const s = [1,2,3,4,5]
// // //즉 변수.slice() 
// console.log(s.slice(-3)) //[3,4] 인덱스 값 2에서 부터 -1 뒤에서 몇번째 까지
// // console.log(s.slice(0)) //[1,2,3,4,5]
// // console.log(s.slice(2,-2)) //[3]

// //repeat 함수 알아보기
// //주어진 문자열을 ()조건 만큼 반복한다
// console.log("abc".repeat(2)) //abcabc

// c ="*".repeat(phone.length - 4) //*을 길이9에 -4를 뺀만큼 즉 5번 반복해준다. *****
//               + phone.slice(-4) //*****값에 phone의값을
// console.log(c)


//  //  console.log(a) 는 인덱스 값이 나온다. 0,1 
// //console.log(b)는 0,1,0,1

// let answer = [];
// for (let i=0; i<arr1.length; i++){
//   answer[i] = [];
//   for(let j=0; j<arr1.length; j++){
//       answer[i].push(arr1[i][j] + arr2[i][j]);
     
//   }
// }
// return answer;
// let arr1 = [[1,2],[3,4]] 
// let arr2 = [[5,6],[7,8]]


//   answer= [[]]
//     for(var i = 0; i < arr1.length; i++){
//        answer[i] = []
//   for(var j = 0; j < arr1; j++){
      
//       answer[i][j] = arr1[i][j] + arr2[i][j]               
//   }
// }
// let x = -4;
// let n = 2;
// let c = [];
// let d = 0;
// for(let j = 0; j < n; j++){ 
//     c.push(d += x)
// }
// return c;
const myMoney = 30
const price = 3;
const count = 4; // 3 6 9 12
const money = 4
let total = 0;
for (i = 1; i <= count; i++){
  total += price * i
}
result = Math.max(myMoney,total)-Math.min(myMoney,total)
console.log(result)
