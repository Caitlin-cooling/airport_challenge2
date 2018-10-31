var Plane = function(){
  this.status = "Landed"
};

Plane.prototype.getStatus = function () {
  return this.status
};

Plane.prototype.takeOff = function(airport) {
  if(this.status == "Landed") {
    this.status = "Flying"
  } else {
    var e = new Error("Cannot take off: plane flying")
    throw e;
  };
};

Plane.prototype.land = function(airport) {
  var hangar = airport.getHangar()
  var capacity = airport.getCapacity()

  if(hangar.length >= capacity) {
    var e = new Error("Cannot land: airport full")
    throw e;
  } else {
    this.status = "Landed"
    hangar.push(this)
    console.log("hanger after landing", hangar);
  };
};
