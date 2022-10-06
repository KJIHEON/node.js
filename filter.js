const express = require('express')
const app = express()
const connect = require("./schemas/index")
const indexRouter = require("./routes/index")
const port = 3000;




connect()
app.use(express.json())

app.use(indexRouter)


app.get('/', (req, res) => {
  res.send('Hello World!');
});





app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});


// arr.filter(callback(element[, index[, array]])[, thisArg])

//영어 뜻 그대로 배열의 값들 중 특정 조건이 true인 값들을 다 걸러내준다
// filter() 함수는 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴합니다.

const arr1 = [10, 20, 30, 40, 50]; //가독성이 좋아진다. 해당하는 함수를 쓰면 가독성이 좋아짐.

//값이 30 이상인 값 구하기
const result1 = arr1.filter(item => item>20); //변수명도 잘 작성하지 isexistPost //true flase  // is...으로 변수명을 써준다. 관련있는 변수명을 써준다.
console.log("값이 30 이상인 값 구하기");            //디비에서 데이터를 찾을때는 post (get find) create update findAllComment 가독성을 높여주는 변수명을 적절히 사용하기
console.log(result1);

//값이 40 인 값 구하기
const result2 = arr1.filter(item => item === 40);
console.log("\n값이 40 인 값 구하기");
console.log(result2);

//값이 30 이 아닌 값들 구하기
const result3 = arr1.filter(item => item !== 30);
console.log("\n값이 30 이 아닌 값들 구하기");
console.log(result3)

// filter( ) 함수가 특정 조건에 맞는 값들을 모두 걸러준다면,
// find( ) 함수는 특정 조건에 맞는 값이 나오면 그 값만 걸러내준다.
// 아래의 filter( ) 와 find( ) 를 비교해 사용한 예제코드를 보면 이해가 갈 것이다.
{
  console.log("파인드를 썻습니다")
const arr1 = [10, 23, 34, 41, 50];

//30 이상인 값 - find() 사용

// arr.find(callback(element[, index[, array]])[, thisArg])
// find() 함수가 특정 조건에 부합하는 배열의 첫번째 값만을 리턴한다고 한다면,
const result1 = arr1.find(item => item>9);
console.log("find() 사용");
console.log(result1);

//30 이상인 값 - filter() 사용
const result2 = arr1.filter(item => item %2 == 0);
console.log("\nfilter() 사용");
console.log(result2);
}






