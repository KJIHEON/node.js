//인덱스 파일 에 들어갈것 은 이거뿐
const mongoose = require("mongoose");


const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/nodejs1")
    .catch(err => console.log(err));
    console.log('db 연결완료입니다')
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
