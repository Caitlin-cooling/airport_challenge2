describe("Plane", function() {

  beforeEach(function(){
    plane = new Plane();
    this.airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
    this.airport.getHangar.and.callFake(function() {return []; });
    this.airport.getCapacity.and.callFake(function() {return 10; });
    this.badWeather = jasmine.createSpyObj('weather', ['getWeather']);
    this.goodWeather = jasmine.createSpyObj('weather', ['getWeather']);
    this.badWeather.getWeather.and.callFake(function(){return "Stormy"; });
    this.goodWeather.getWeather.and.callFake(function(){return "Sunny"; });
  })

  describe('has a status', function() {
    it('defaults to landed', function() {
      expect(plane.getStatus()).toBe("Landed")
    });
  });

  describe('landing a plane', function() {
    it('status changes to landed', function() {
      var weather = this.goodWeather.getWeather();
      plane.takeOff(this.airport, weather)
      plane.land(this.airport)
      expect(plane.getStatus()).toBe("Landed")
    });

    it("won't allow a plane to land if the airport is full", function() {
      airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
      airport.getHangar.and.callFake(function() {return []; });
      airport.getCapacity.and.callFake(function() {return 0; });

      expect(function(){plane.land(airport)}).toThrow(new Error("Cannot land: airport full"))
    });

    it('raises an error if the weather is stormy', function() {
      var weather = this.badWeather.getWeather();
      expect(function() {plane.takeOff(this.airport, weather)}).toThrow(new Error('Cannot take off: the weather is stormy'))
    });
  });

  describe('taking off a plane', function(){
    it('status changes to flying', function() {
      var weather = this.goodWeather.getWeather();
      plane.takeOff(this.airport, weather)
      expect(plane.getStatus()).toBe("Flying")
    });

    it('raises error if a flying plane tries to take off', function() {
      var weather = this.goodWeather.getWeather();
      plane.takeOff(this.airport, weather)
      expect(function() {plane.takeOff(this.airport, weather)}).toThrow(new Error("Cannot take off: plane flying"))
    });

    it('raises an error if the weather is stormy', function() {
      var weather = this.badWeather.getWeather();
      expect(function() {plane.takeOff(this.airport, weather)}).toThrow(new Error('Cannot take off: the weather is stormy'))
    });
  });
});
