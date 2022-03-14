function checkObj(obj){
    for (let key in obj){
      console.log(`ключ: ${key}, со свойством: ${obj[key]}`);
    }
  }
  
  const obj1 = {
    name: "ivan",
    age: 19,
    profession: "manager"
  }
  
  checkObj(obj1);