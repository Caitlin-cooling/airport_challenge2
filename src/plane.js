var Plane = function(){
  this.status = "Landed"
  this.weather = "Sunny"
};

Plane.prototype.getStatus = function () {
  return this.status
};

Plane.prototype.takeOff = function(airport, weather) {
  var hangar = airport.getHangar();
  if (weather == "Stormy") throw 'Cannot take off: the weather is stormy';
  if (this.status == "Flying") throw "Cannot take off: plane flying"
  this.status = "Flying"
  hangar.pop()
};

Plane.prototype.land = function(airport, weather) {
  var hangar = airport.getHangar();
  var capacity = airport.getCapacity();

  if(hangar.length >= capacity) throw "Cannot land: airport full";
  if(weather == 'Stormy') throw 'Cannot take off: the weather is stormy';
  this.status = "Landed"
  hangar.push(this)
};
