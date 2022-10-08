function solution(numbers) {
  var answer = [];
  //반복문을 배열의 길이만큼 돌린다 (5번)
  for(i = 0; i < numbers.length; i++){
    //1부터 시작해서 4까지 동작 하는데 4번 3번 2번
    for(j = i+1; j < numbers.length; j++){
        answer.push(numbers[i]+numbers[j])
    }
    }
    return [...new Set(answer)].sort((a,b)=>a-b)
            //중복을 제거하여 오름 차순
}

const numbers = [2,1,3,4,1]
console.log(solution(numbers))