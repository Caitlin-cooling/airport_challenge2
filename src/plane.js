var Plane = function(){
  this.status = "Landed"
};

Plane.prototype.getStatus = function () {
  return this.status
};

Plane.prototype.takeOff = function() {
  this.status = "Flying"
};

Plane.prototype.land = function() {
  this.status = "Landed"
};
