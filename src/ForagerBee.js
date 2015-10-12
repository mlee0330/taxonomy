var ForagerBee = function() {
  HoneyMakerBee.call(this, arguments);
  this.age = 10;
  this.job = 'find pollen';
  this.food = 'jelly';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
  console.log(ForagerBee.prototype.parent);
}