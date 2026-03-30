function Warrior(n){
  let name = n;  
  this.name = function(n){
    if(n) name = n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
let warrior = new Warrior("CodeWarrior");
console.log(warrior.toString()); // "Hi! my name's CodeWarrior"