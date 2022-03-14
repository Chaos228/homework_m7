class Technique {
    constructor(power) {
      this.power = power,
      this.display = 'sensory',
      this.production = 'apple'
    }
  }
  
  class Switched extends  Technique {
    constructor (switched, power){
      super(power),
      this.switched = switched
    }
  }
  
  const phone = new Switched("off", 5);
  phone.price = "500$";
  
  const laptop = new Switched("on", 20);
  laptop.system = "window";
  
  const tablet =  new Switched("on", 10);
  tablet.screenDiagonal = 10;
  
  console.log('tablet', tablet, 'laptop', laptop, 'phone', phone);