var Plane = function(){
  this.status = "Landed"
  this.weather = "Sunny"
};

Plane.prototype.getStatus = function () {
  return this.status
};

Plane.prototype.takeOff = function(weather) {
  if (weather == "Stormy") {
    var badWeather = new Error('Cannot take off: the weather is stormy')
    throw badWeather;
  } else if(this.status == "Landed") {
      this.status = "Flying"
  } else if (this.status = "Flying"){
      var flying = new Error("Cannot take off: plane flying")
      throw flying;
  };
};

Plane.prototype.land = function(airport, weather) {
  var hangar = airport.getHangar();
  var capacity = airport.getCapacity();

  if(hangar.length >= capacity) {
    var full = new Error("Cannot land: airport full")
    throw full;
  } else {
    this.status = "Landed"
    hangar.push(this)
  };
  if(weather == 'Stormy'){
    var badWeather = new Error('Cannot take off: the weather is stormy')
    throw badWeather;
  };
};
