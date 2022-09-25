// // console.log(2 + 1) //더하기
// // console.log(2 - 1) //빼기
// // console.log(2 * 2) //곱하기
// // console.log(4 / 2) //나누기
// // console.log(10 % 3) //10을 3으로 나눈 값의 나머지
// // console.log(10 ** 2) //10의 2승 (즉 제곱근)


// //증감연산자
// // let count = 1
// // const preCount = ++count 
// // //count 에서 1의 값을 받아온다.
// // //count를 1증가시켜 count재할당한다.
// // //precount에 2의 값을 준다.
// // //즉 증감 연산자를 앞에 붙혔을때는 count에 값을 증가(재할당)시키고 preCount에 값을 준다
// // console.log(`count : ${count}, preCount : ${preCount}`)

// // let counts = 1
// // const preIncrement = counts++ 
// // //counts에 1의 받을 받아온다.
// // //preIncrement에 먼저 1의 값을 할당한다
// // //counts에 1을 증가 시키고 counts 재할당한다
// // //증감연산자를 뒤에 붙힐때는 preInremont에 먼저 값을 할당하고 counts에 재할당 된다.
// // //변수를 할당 할때 const말고 let 을 쓰는이유
// // //증감 연산자가 뒤에있을경우에는 재할당을 하기때문에 const를 쓰면 에러가 뜬다
// // console.log(`counts : ${counts}, preIncrement : ${preIncrement}`)

// // const first = 10000
// // const second = 8000
// // let last = 0
// // last += first //자기 자신과 first의 값의 더한 값을 자기자신에 재할당
// // console.log(last)
// // last += second//자기 자신과 second의 값을 더한 값을 자기자신에 재할당
// // console.log(last)
// // last -= second//자기 자신과 second의 값을 뺀 값을 자기자신에 재할당
// // console.log(last)

// //비교연산자
// // console.log(1 < 2) //1이 2보다 작은지 true
// // console.log(1 <=2)// 1이 2보다 작거나 같은지 false
// // console.log(1 > 2)// 1이 2보다 큰지 true
// // console.log(1 >= 2) // 1이 2보다 크거나 같은지 false

// //논리 연산자 

// // && (그리고)둘다 맞아야 함,  
// // || 둘중에 하나만 맞으면 됨(또는) 
// // !(not) 반대값이 나옴

// // let a = true
// // let b = true

// // console.log(a && b) // true && true 이므로 ture
// // console.log(a || b) // true || true 이므로 ture

// // a = false
// // console.log(a && b) // false && true 이므로 false
// // console.log(a || b) // false || true 이므로 true

// // b = false
// // console.log(a && b) // false && false 이므로 false
// // console.log(a || b) // false || false 이므로 false

// // console.log(!a) // flase 이므로 ture 반대값이 나옴 

// // 일치 연산자
// // console.log(1 == 1) // 두개의 값이 일치헐때 true
// // console.log(1 == "1") // "1" 문자열로 들어왔지만 값은 1이기 때문에 true
// // console.log(1 === 1) // 두개의 값과 형태가 같기 떄문에 true
// // console.log(1 === "1")//두개의 값은 같지만 형태는 숫자와 문자열 이기때문에 false
// // 예제 1)
// // const a = 90
// // const b = 10
// // const c = a + b
// // console.log(`가격은 ${c * 0.8}원 입니다.`)

// //조건문 중요!!!!!!!!
// // if (1 > 2){  // (조건) 1은 2보다 크다
// //     console.log("안녕")  //1은 2보다 작기 때문에 실행되지 않는다.
// //    }
// //    if (1 < 2){ //(조건) 1은 2보다 작다
// //     console.log("hi") //1은 2보다 작기 때문에 hi가 출력된다.
// //    }

// // 예제 1)

// // const price = 30000
// // if (price < 20000){
// //     console.log("안녕!!") 
// // } else if (price <= 30000){
// //     console.log("안녕하세요") //출력
// // } else {
// //     console.log("hi!!")
// // }

// // 예제 2
// // const KilloMeter =  10
// // if (KilloMeter < 2){
// //     console.log("걸어가자")
// // } else if (KilloMeter >= 2 && KilloMeter < 5){ 킬로미터가 2이상 그리고 킬로미터가 5미만
// //     console.log("택시를 타자")
// // } else {
// //     console.log("기차를 타자")
// // }

// // let a = 20 
// // while (a < 25){
// //     console.log(`온도는 ${a}도 입니다`)
// //     a++
    
// // }

// // for (let a = 0; a < 25; a++) {
// //     console.log(`${a}도 정도면 적당해요`)
// // }

// // for (let a = 1; a <= 10; a++){
// //     if (a % 3 === 0){
// //         console.log(`${a}는 3으로 나눠서 떨어지는 값 입니다`) // 3 6 9 가 출력된다.
// //     }
// // }

// // for (let a = 0; a <= 20; a++){
// //     if (a % 2 === 0){
// //         console.log(`${a}는 짝수 입니다.`)
// //     } else if (a % 2 === 1){
// //         console.log(`${a}는 홀수 입니다.`)
// //     }
// // }
// // function a ( b, c ) {
// //     const sum = b + c //합
// //     console.log(`두 상품의 합은 ${sum}입니다.`)
// //     const avg = sum / 2 //평균
// //     return avg //최종 적으로 avg의 할당된 데이터를 반환한다
// // }

// // const b =  1000
// // const c =  3000
// // const d = a(b, c) //만들어 두었던 fuction 함수를 실행
// // console.log(`평균은 ${d}`) // 2000출력

// // function init() {
// //     var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
// //     function displayName() { // displayName() 은 내부 함수이며, 클로저다.
// //       console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
// //     }
// //     displayName();
// //   }
// //   init();

// //   if (Math.random() > 0.5) {
// //     var x = 1;
// //   } else {
// //     var x = 2;
// //   }
// //   console.log(x)

// //   if (Math.random() > 0.5) {
// //     const t = 1;
// //   } else {
// //     const t = 2;
// //   }
// //   console.log()

// //   function makeFunc() {
// //     var name = "Mola";
// //     function displayName() {
// //       console.log(name);
// //     }
// //     return displayName;
// //   }

// //   var myFunc = makeFunc();
// //   //myFunc변수에 displayName을 리턴함
// //   //유효범위의 어휘적 환경을 유지
// //   myFunc();
// //   //리턴된 displayName 함수를 실행(name 변수에 접근)
// // function a (a1,a2,a3) {
// //     const avg = (a1+a2+a3) / 3
// //     return avg
// // }

// // a11 = 1000
// // a22 = 2000
// // a33 = 3000
// // const avg = a(a11,a12,a13)
// // console.log(avg)
// // const Notebook1Name = "sam"
// // const Notebook1Price = "2000"
// // const Notebook1com = "Apple"

// // class Notebook {
// //     constructor (name, price, company){
// //         this.name = name
// //         this.price = price
// //         this.com = com
// //     }
// // }

// // let a = 3;
// // let b = 5;
// // let c = 0;
// // for (i = Math.min(a,b); i <= Math.max(a,b); i++){
// //     if (a == b){
// //        //console.log(i)
// //     }else {
// //         c = c + i  
// //     }    
// // }
// // console.log(c)

// // for (let a = 0; a <= 20; a++){
// //     if (a % 2 === 0){
// //         console.log(`${a}는 짝수 입니다.`)
// //     } else if (a % 2 === 1){
// //         console.log(`${a}는 홀수 입니다.`)
// //     }
// // }
// //  홀수 짝수
// // char* solution(int num) {
// //     // 리턴할 값은 메모리를 동적 할당해주세요
// //     char* answer = (char*)malloc(answer);
// //     if (num % 2 == 0){
// //         return answer = "Even"     
// //     } else{
// //         return answer = "Odd"
// //     }
// // }

// // 두정수의 합
// // // const a = 5;
// // // const b = 3; 
// // // let c = 0;
// // // for ( i = Math.min(a,b); i <= Math.max(a,b); i++){
// // //     if (a == b){
// // //         return a
// // //     }else {
// // //       c = c + i  
// // //     }
// // //     console.log(c)
// // // }
// // let b = 3;
// // let a = 5;
// // for ( j = 1; j <= a; j++){
// //     for (i = 1; i <= b; i++){
// //         c = "*".repeat(i);
// //         } 
// //         console.log(c)
// // }   

// //변수 = []
// //변수[순서]
// // const arr = [1,2,3,4,5] //index 는 배열안에 자리 잡은 순서이다 0부터 시작한다.
//  // console.log(arr[0])// 호출한 배열을 부를때는 변수[순서] 해주면 된다.
//  // console.log(arr[1])
//  // console.log(arr[2])
//  // console.log(arr[3])
// // console.log(arr[4])

// // console.log(arr.length) //길이는 1부터 시작한다
// // console.log(arr[arr.length-1]) //마지막요소를 부를때는 길이의 -1  해주면 된다.

// // //배열 추가 및 삭제
// // const color = ['red', 'blue', 'yello']
// // console.log(color) //기존 값인 'red', 'blue', 'yello' 출력된다.
// // color.push('black')//push를 사용하여 color의 변수안에 black 을 추가한다.
// // console.log(color)//black 이 추가되어 'red', 'blue', 'yello', 'black' 출력된다
// // color.pop('black')// black 을 제거
// // console.log(color)// black 이 제거되어  'red', 'blue', 'yello'이 나온다

// // const color = ['red', 'blue', 'yello']
// // for (const colors of color){
// //     console.log(colors)
// // }
// //10개의 값의 합계와 평균 구하기
// // const data = [1,2,3,4,5,6,7,8,9,10]
// // let sum = 0; //반복 했던 sum의 값이 저장된다 55
// // for (i = 0; i < data.length; i++){
// //     sum = sum + data[i]
// // }
// // console.log(sum)
// // const avg = sum / data.length
// // console.log(avg) // 5.5


// // let sum = 0; // 55
// // for (const datas of data){
// //     sum += datas //data안에 있는 데이터를 누적해서 넣어준다. += 누적한다는 뜻
// // }
// // console.log(sum)
// // const avg = sum / data.length
// // console.log(avg) // 5.5

//    a = ("고양이");
// function b (){
//     console.log(`나의 이름은  ${a}입니다.`)
//     }
//     a = ("고양이");
// b();


// class names {
//     constructor (first, middle, last){
//         super(phone);
//         this.first = first
        
//         this.middle = middle
//         this.last = last
//     }
// }
// const name1 = new names('kim','ji','heon')
// console.log(name1)


// class User extends Member {
//     constructor(phone) {
//       this.phone = phone;
//       super(phone);
//     }
//   }


// function hello(name) {
//     let _name = name; //고정이라는 뜻 인거 같다.
//     return function () {
//       console.log('Hello, ' + _name);
//     };
//   }
  
//   let a = new hello('영서');
//   let b = new hello('아름');
  
//   a() //Hello, 영서
//   b() //Hello, 아름


// let result = "";

// for (let i = 0; i < b; i++) {
//     for (let j = 0; j < a; j++) {
//         result += '*';
//     }
//     result += '\n'
// }
// console.log(result);


// let a = 2;
// let b = 3;

// let c = "";
// for (j = 0; j < b; j++){    
//     for (i = 0; i < a; i++){
//     c += "*" 
//     }
//     c = c +'\n'
// }
// console.log(c);

// let c = "";
// for (j = 0; j < b; j++){    
// for (i = 0; i < a; i++){
// c += "*" 
// }
// c += '\n'
// }
// console.log(c)

// let s = "12345"

// let s1 = s.length;
// console.log(s.substring(2, 4))
// let s2 = s1/2;
// if (s1 % 2 == 0){
//     console.log(s.substring(s2-1,s2+1))
// } else {
//     console.log(s.substring(s2,s2+1))
// }

// let a = 3;
// let b = 5;
// let c = 0;
// for(i = Math.min(a,b); i <= Math.max(a,b); i++){
//     if(a == b){
//         return a
//     }
//     c = c + i
// }
// console.log(c)

// let a = [1,2,4,5,9]
// // console.log(a[1] == r)
// let sum = 0
// for(let i = 0; i <= 9; i++){
//     if(!a.includes(i)){
//           sum += i
//     }   
//  }

// //  console.log(sum)
// function sum(ho){
//   console.log()
// }
// sum(3,4);

// let a = 2;
// let b = 3;

// let c = "";
// for (j = 0; j < b; j++){    
//     for (i = 0; i < a; i++){
//     c += "*" 
//     }
//     c +='\n'
// }
// console.log(c);
// const example = ['apple','banana','mango','kiwi','melon'];

// for(const a of example){
//     console.log(a[0]) //배열을 도는데 각 배열의 값중 처음 값만 가져옴
// }

// const sum = function(a, b) {
//     return a + b;
//   };

// console.log(sum(1,2))