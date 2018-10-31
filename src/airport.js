var Airport = function(){
  this.capacity = 10;
  this.hangar = [];
};

Airport.prototype.getCapacity = function (number) {
  this.capacity = number || 10
  return this.capacity
};

Airport.prototype.getHangar = function () {
  return this.hangar.length
};
