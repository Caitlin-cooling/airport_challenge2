var Plane = function(){
};

Plane.prototype.status = function () {
  if(status === '') {
    return"Landed"
  } else {
    return status
  }
};

Plane.prototype.takeOff = function() {
  status = "Flying"
};

Plane.prototype.land = function() {
  status = "Landed"
};
