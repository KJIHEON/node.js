{
  const students = []
  students.push({이름 : '구름', 국어 : 87, 영어 : 98, 수학: 88, 과학 : 90})
  students.push({이름 : 'ㅇㅇ', 국어 : 92, 영어 : 98, 수학: 96, 과학 : 88})
  students.push({이름 : '별', 국어 : 76, 영어 : 96, 수학: 94, 과학 : 86})
  students.push({이름 : '름', 국어 : 98, 영어 : 52, 수학: 98, 과학 : 92})

  let outPut = `이름\t총점\t평균\n`
  for (const s of students){
    const sum = s.국어+ s.영어+ s.수학+s.과학
    const avg = sum/students.length
    outPut +=  `${s.이름}\t${sum}점\t${avg}점\n`
  }
  console.log(outPut)
  // console.log(JSON.stringify(students,null,2))
              //json 문자열로 변환할때 사용
}

console.clear()
{
  const students = []
  students.push({이름 : '구름', 국어 : 87, 영어 : 98, 수학: 88, 과학 : 90})
  students.push({이름 : 'ㅇㅇ', 국어 : 92, 영어 : 98, 수학: 96, 과학 : 88})
  students.push({이름 : '별', 국어 : 76, 영어 : 96, 수학: 94, 과학 : 86})
  students.push({이름 : '름', 국어 : 98, 영어 : 52, 수학: 98, 과학 : 92})
//값을 다더해주는 함수
  function getSumOf (student) {
    return student.국어 + student.영어 + student.수학 + student.과학
  }
  //다더한 함수를 가져와 평균을 내줌
  function getAvgOf (student){
    return getSumOf(student)/students.length
  }
  let output = '이름\t총점\t평균\n'
  for (const s of  students){
    output += `${s.이름}\t${getSumOf(s)}점\t${getAvgOf(s)}점\n`
  }
  console.log(output)
}

console.clear()
{
  const students = []
  students.push({이름 : '구름', 국어 : 87, 영어 : 98, 수학: 88, 과학 : 90})
  students.push({이름 : 'ㅇㅇ', 국어 : 92, 영어 : 98, 수학: 96, 과학 : 88})
  students.push({이름 : '별', 국어 : 76, 영어 : 96, 수학: 94, 과학 : 86})
  students.push({이름 : '름', 국어 : 98, 영어 : 52, 수학: 98, 과학 : 92})
//값을 다더해주는 함수
for (const student of  students){
 student.getSumOf = ()=>{ 
  return student.국어 + student.영어 + student.수학 + student.과학
 }
 
  //다더한 함수를 가져와 평균을 내줌
  student.getAvgOf =  ()=>{
    return this.getSumOf()/students.length
  }
}
  let output = '이름\t총점\t평균\n'
  for (const s of  students){
    output += `${s.이름}\t${getSumOf(s)}점\t${getAvgOf(s)}점\n`
  }
  console.log(output)  
}

console.clear()

{
  //객체를 만든다
  function createStudent(이름,국어,영어,수학,과학){
    return{
          이름 : 이름,
          국어 : 국어,
          영어 : 영어,
          수학 : 수학,
          과학 : 과학,
      //getSum함수를 만듬
      getSum(){
        return this.국어,this.영어,this.수학,this.과학
      },
      //getAvg함수만듬
      getAvg(){
        return this.getSum()/students.length
      },

      toString(){
        return `${this.이름}\t${this.getSum()}점\t${this.getAvg()}점\n`
      }
      }
    }
    const students = []
    students.push(createStudent('구름',87,98, 88, 90))
    students.push(createStudent('ㅇㅇ',92, 98,96, 88))
    students.push(createStudent('별',76, 96,94, 86))
    students.push(createStudent('름',98, 52,98, 92))
    students.push(createStudent('름',98, 52,98, 92))

    let output = '이름\t총점\t평균\n'
    for (const s of students){
      output += s.toString()
    }
    console.log(output)
  }

  console.clear()
  {
    class Student {

    }
    const Student = new Student()
    
    const student = [
      new Student(),
      new Student(),
      new Student(),
      new Student(),
    ]
  }

  {
    class Student {
      constructor(이름,국어,영어,수학,과학){
        this.이름 = 이름,
        this.국어 = 국어,
        this.영어 = 영어,
        this.수학 = 수학,
        this.과학 = 과학
      }
    }

  const students = []
  students.push(createStudent('구름',87,98, 88, 90))
  students.push(createStudent('ㅇㅇ',92, 98,96, 88))
  students.push(createStudent('별',76, 96,94, 86))
  students.push(createStudent('름',98, 52,98, 92))
  students.push(createStudent('름',98, 52,98, 92))
  }
{
  class Student {
    constructor(이름,국어,영어,수학,과학){
      this.이름 = 이름,
      this.국어 = 국어,
      this.영어 = 영어,
      this.수학 = 수학,
      this.과학 = 과학
    }
    getSum(){
      return this.국어,this.영어,this.수학,this.과학
    }
    //getAvg함수만듬
    getAvg(){
      return this.getSum()/students.length
    }

    toString(){
      return `${this.이름}\t${this.getSum()}점\t${this.getAvg()}점\n`
    }

    }
  

const students = []
students.push(createStudent('구름',87,98, 88, 90))
students.push(createStudent('ㅇㅇ',92, 98,96, 88))
students.push(createStudent('별',76, 96,94, 86))
students.push(createStudent('름',98, 52,98, 92))

let output = '이름\t총점\t평균\n'
for (const s of  students){
  output += `${s.이름}\t${getSumOf(s)}점\t${getAvgOf(s)}점\n`
}
console.log(output)  
}
