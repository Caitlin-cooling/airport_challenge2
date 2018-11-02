var Airport = function(){
  DEFAULT_CAPACITY = 10;
  this.capacity = DEFAULT_CAPACITY ;
  this.hangar = [];
};

Airport.prototype.getCapacity = function (number) {
  this.capacity = number || DEFAULT_CAPACITY
  return this.capacity
};

Airport.prototype.getHangar = function () {
  return this.hangar.length
};
