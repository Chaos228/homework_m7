function checkObj(str, obj){
    if (str in obj){
      return true;
    } else {
      return false;
    }
  }
  
  const strCheck = "123";
  
  const objCheck = {
    name: 'ivan',
    age: 19,
    123: 'test'
  }
  
  console.log(checkObj(strCheck,objCheck))