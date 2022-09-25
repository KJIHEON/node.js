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

const example = ['apple','banana','mango','kiwi','melon'];
//반복문을 사용해서 배열안의 값을 가져오자!!
// for (const examples of example){ // for of 문을 사용하여 배열 값을 하나씩 가져온다.
//     a = examples;
//     console.log(a)//example 의 배열의 객체값이 하나씩 들어온다.
// };


// for (let i = 0; i < example.length; i++){ //for의 증감문을 사용하는데 배열의 길이 만큼 가져와야한다.
//     b = example[i]// i값을 돌면서 example 안에 있는 객체의 자리값을 가져와서 출력한다.
//     console.log(b)
// };
//그렇다면 배열을 돌면서 각 객체 마다 개행을 해서 밑으로 붙히게 한다면 어떻게 하는가??
let a = "";
    for (const examples of example){ // for of 문을 사용하여 배열 값을 하나씩 가져온다.
    a = a + `${examples}\n` // 각 객체를 가져오는데 그값을 하나씩 불러올때마다 개행을 바로 추가해서 넣어준다.
    }
console.log(a)
