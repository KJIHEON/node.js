//정리는 외부에서 받은거 맨위로 그다음 내부 순으로하기
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); //z쿠키파서는 인덱스 라우터를 걸쳐서 들어감 앞에다가 적어주기
const indexRouter = require('./routes/index') 

app.use(cookieParser())
app.use(express.json()); //body-parser //기본적으로 디폴트 값이 설정되어있어서 읽을 수 없지만 바디 파서를 이용하여 정보를 읽을수 있게함



const port = 3000;


app.use(indexRouter);


app.listen(port,() =>{
    console.log('port 3000')
});