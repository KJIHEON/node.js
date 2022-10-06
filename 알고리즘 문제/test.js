//1번 문제!!
function solution(arr1){
	let answer=0;
    let str = "";
    for(i = 0; i <= 9; i++){ 
        if(arr1.includes(i) == false){ 
            str += i
        } 
        
    }
    let str2 = str.split("").map(Number)
    let max = Math.max(...str2) 
    let min = Math.min(...str2)
for (j = min; j <= max; j++){ 
    answer += j
}
    return answer
}

let arr1=[7,8,3,5,6,1,2,4];
console.log(solution(arr1))

//2번 문제
function solution(s){
   b = s.split(" ").join("")
//    console.log(s.split(" "))
//    console.log(s.length)
   let abc = "";
   let count = "";
   for (j = 0; j < s.length; j++){
    console.log(s[j] == " ")
    if(s[j] == " "){
       count += j + ","
    }
}
   for (i = 0; i < b.length; i++){
    if(i % 2 == 0){
        abc += b[i].toUpperCase()
        
    }else {
        abc += b[i]
    }
   }
   let counts = count.split(",").map(Number)
   let abc2 = abc.split("")
   for (i = 0; i < counts.length; i++){
     abc2.splice(counts[i],0," ")
   }
return abc2.slice(1, s.length+1).join("")

}
let s= "hang hae ninety nine";
console.log(solution(s))


// //3번
// function solution(arr, n){
// 	let answer=[];
//     const arr1 = [...new Set(arr)]
//     console.log(arr1)
// 	return answer;
// }
// let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
// let n=2;
// console.log(solution(arr, n))
