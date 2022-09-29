// const a = function(){
//     console.log(1+2) //3
//     console.log(5-3) // 2
//     console.log(5-1) // 4
//     console.log(1+10) //11
// }
// a();
// ////
// function b(a,b){
//  console.log(a+b) //12
//  console.log(a/b) //5
// }

// b(10,2)
// ////
// function f(x) {
//     return x * x // 3 * 3
// }
// console.log(f(3))
// ////
// function sumAll(a,b){
//     let output = 0
//     for (let i = a; i <= b; i++){
//         output += i // i의 값음 1~30
//     }
//     return output;
// }

// console.log(`1부터 30까지의 합 ; ${sumAll(1,30)}`)
// console.log(`1부터 50까지의 합 ; ${sumAll(1,50)}`)

// /////
// function min(array) {
//     let out = array[0]
//     for (const item of array){ // for of 문은 배열의 값을 하나씩 가져옵니다.
//         if(out > item){ //
//             out = item
//         }
//     }
//    return out
// }

// const testArray = [52,273,32,103,275,24,57]
// console.log(`${testArray}중에서`)
// console.log(`최솟값 = ${min(testArray)}`)

// ////
// function max(array) {
//     let out = array[0] 
//     for (const item of array){ // for of 문은 배열의 값을 하나씩 가져옵니다.
//         if(out < item){ //
//             out = item
//         }
//     }
//    return out
// }

// const testArray1 = [52,273,32,103,275,24,57]
// console.log(`${testArray1}중에서`)
// console.log(`최대값 = ${max(testArray1)}`)

// ////나머지 변수와 일반 매개변수
// ///function 함수이름(...나머지 애개변수){}
// function sample(...item){
//     console.log(item)
// }
// sample(1,2)
// sample(1,2,3)
// sample(1,2,3,4)


// ///전개 연산자활용 하기
// function sample2(...items){
//     console.log(items)
// }
// Math.max(..)
// const arr4 = [1,2,3,4]

// console.log(`전개 연사자를 사용 x`)
// console.log(arr4)//[1,2,3,4]
// console.log(`전개 연산자를 사용할경우`)
// console.log(...arr4)// 1 2 3 4
// //기본 매개변수
// 함수이름(매개변수, 매개변수=기본값,매개변수=기본값)
// function sample(a=기본값 , b){}

// function ab (name, money=8590, hours=40){ //기본 매개변수 money=8590,hours=40
//     console.log(`${name}님의 급여정보`)
//     console.log(`시급 : ${money}원`)
//     console.log(`근무시간 ; ${hours}`)
//     console.log(`급여 : ${money * hours}`)
// }
// ab('구름')
// ab('별',10000)
// ab('인성', 10000,52)

// function multiplyAll(a,b){
//     let sum = 1;
//     for (i = a; i<=b; i++){
//         sum = sum*i
        
//     }
//     return sum
// }
// console.log(multiplyAll(1,2))
// console.log(multiplyAll(1,3))

// const max = function(max){
//     let output = max[0]
// output = Math.max(...max)
// return output
// }
// console.log(max([1,2,3,4]))

const max = function (first, ...rests) {
    let output
    if (Array.isArray(first)) {
    output = Math.max(...first)
    } else if (typeof (first) === 'number') {
    output = Math.max(first,...rests)
    }
    return output
    }
    
    console.log(`max(배열): ${max([8, 2, 3, 4, 5, 6, 7])}`) //결과값 max(배열):4
    console.log(`max(숫자,...): ${max(5,2, 3, 4)}`) //결과값 max(숫자,...):4


    const sum = (a) =>  a+1
    console.log(sum(1))
