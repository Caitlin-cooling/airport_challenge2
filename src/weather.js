var Weather = function(){
  this.number = 0
};

Weather.prototype.getWeather = function () {
  function set() {
    return Math.floor(Math.random() * Math.floor(4))
  };

  console.log(set());
  this.number = set();

  if(this.number > 1){
    return "Sunny"
  } else {
    return "Stormy"
  }
};
