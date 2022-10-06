const express = require('express')
const router = express.Router()
const user = require('../schemas/user')






//회원 전체 목록 조회
router.get('/', async (req,res)=>{
  try{
      const findUser = await user.find()  //모든 유저의 정보를 받아온다
      const users = findUser.map((user)=>{ //map을 이용하여 키값을 바꿔준다.
        return {
          userId : user._id,
          name : user.name,
          ID : user.ID,
          pw : user.pw
        } 
      })
      res.status(200).json({result : users})
      }catch(error){
        console.log(error)
        res.status(400).send({'message': "회원 목록 조회 실패"})
      }
  })
  
  //한 회원의 userid를 주었을때 회원 정보를 조회
  router.get('/:userid', async (req,res)=>{
  try{
    const { userid } = req.params  //입력한 아이디 값을 받아옴
    const findUser = await user.findOne({_id : userid}) //받은 아이디 값과 디비에 아이디를 비교해서 찾아온다.
    const userOne = {
      userId : findUser._id,
      name : findUser.name,
      ID : findUser.ID,
      pw : findUser.pw
    }
    res.status(200).json({result : userOne})
    }catch(error){
      console.log(error)
      res.status(400).send({"message": "회원 상세 조회 실패"})
    }
  })

  module.exports = router;