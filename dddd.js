
// {
//   const books=[{
//     name:'혼자 공부하는 파이썬',
//     price : 18000,
//     publisher : '한빛 미디어'
//   }
//  , {
//   name:'HTML5 웹 프로그래밍 입문',
//   price : 26000,
//   publisher : '한빛 아카데미'
// },{
//   name:'머신러닝 딥러닝 실전개발 입문',
//   price : 30000,
//   publisher : '위키북스'
// },{
//   name:'딥러닝 위한 수학',
//   price : 25000,
//   publisher : '위키북스'
// }]
// const output = _.sortBy(books,(book)=> book.price)
// console.log(JSON.stringify(output,null,2))
// }

// {
// function printLang(code){
//   return printLang._Lang[code]
// }
// printLang._Lang = {
//   ko: '한국어',
//   en: '영어',
//   ja: '일본어',
//   fr: '프랑스어',
//   es: '스페인어',
// }
// console.log('printLang("ja"):',printLang('ko'))
// console.log('printLang("en"):',printLang('es'))
// }

// {
//   const degree = 90
//   const radian = degree * (Math.PI/180)
//   //Math.PI  = 원의 둘레와 지름의 비율, 약 3.14159의 값을 가집니다.
//   console.log(Math.PI/180)
//   console.log(radian)
//   //Math.sin() , Math.cos(), Math.tan()
//   console.log(Math.sin(radian))
// }


{
  const books=[{
    name:'혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛 미디어'
  }
 , {
  name:'HTML5 웹 프로그래밍 입문',
  price : 26000,
  publisher : '한빛 아카데미'
},{
  name:'머신러닝 딥러닝 실전개발 입문',
  price : 30000,
  publisher : '위키북스'
},{
  name:'딥러닝 위한 수학',
  price : 25000,
  publisher : '위키북스'
}]
console.log(_.oderBy(books,(book)=> book.name))
}

// {
//   const num = Math.random()
//   console.log(num)
//   console.log('#랜덤한 숫자')
//   console.log('0-1 사이의 랜덤한')
//   console.log('')

//   console.log('#랜덤한 숫자 범위 확대')
//   console.log('0-10 사이의 랜덤한 숫자:',num * 10)
//   console.log('0-60 사이의 랜덤한 숫자:',num * 60)
//   console.log('')

//   console.log('#랜덤한 숫자 범위 이동')
//   console.log('-5~5 사이의 랜덤한 정수 숫자:',Math.floor(num * 10-5))
//   console.log('-25~25 사이의 랜덤한 정수 숫자:',Math.floor(num * 50-25))
//                 //('50개를 찾는데 -25부터 시작하겠다')
//   console.log('')
// }


// {
// const num = 52000
// num.원 = function(){
//   return this.valueOf() + '원'
// }

// console.log(num.원())
// }
