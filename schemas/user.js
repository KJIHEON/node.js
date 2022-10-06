const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ // 어떤 스키마에 넣을껀지 
  name: {
    type: String,
    required: true, //필수 요소
    unique: true ///하나만 가질수 있게함
  },
  pw: {
    type: String,
    required: true,
  },
  ID: {
    type: String
  }
})


module.exports = mongoose.model("user", userSchema); //호출시 스키마가 등록된다.