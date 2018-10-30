var Airport = function(){
  this.capacity = 10;
  this.hangar = [];
};

Airport.prototype.getCapacity = function (number) {
  this.capacity = number || 10
  return this.capacity
};

Airport.prototype.addPlane = function (plane) {
  this.hangar.push(plane)
};

Airport.prototype.getHangar = function () {
  return this.hangar.length
};

Airport.prototype.isFull = function() {
  if(this.hangar.length > this.capacity) return true
};
