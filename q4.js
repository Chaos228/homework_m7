function Technique(){
  this.display = 'sensory',
  this.production = 'apple'
}

function Switched(switched, power){
  this.switched = switched,
    this.power = power
}

Switched.prototype = new Technique();

const phone = new Switched("off", 5);
phone.price = "500$";

const laptop = new Switched("on", 20);
laptop.system = "window";

const tablet =  new Switched("on", 10);
tablet.screenDiagonal = 10;

console.log('tablet', tablet, 'laptop', laptop, 'phone', phone);