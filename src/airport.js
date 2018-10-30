var Airport = function(){
  this.capacity = 10
};

Airport.prototype.getCapacity = function (number) {
  this.capacity = number || 10
  return this.capacity
};
