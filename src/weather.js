var Weather = function(){
  this.number = 0
  this.weather = ""
};

Weather.prototype.getWeather = function () {
  function set() {
    return Math.floor(Math.random() * Math.floor(4))
  };
  this.number = set();
  (this.number > 1) ? this.weather = "Sunny" : this.weather = "Stormy"
  return this.weather
};
