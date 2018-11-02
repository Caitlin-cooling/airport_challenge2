describe("Plane", function() {

  var airport;
  var badWeather;
  var goodWeather;
  airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
  airport.getHangar.and.callFake(function() {return []; });
  airport.getCapacity.and.callFake(function() {return 10; });
  badWeather = jasmine.createSpyObj('weather', ['getWeather']);
  goodWeather = jasmine.createSpyObj('weather', ['getWeather']);
  badWeather.getWeather.and.callFake(function(){return "Stormy"; });
  goodWeather.getWeather.and.callFake(function(){return "Sunny"; });

  beforeEach(function(){
    plane = new Plane();
  })

  describe('has a status', function() {
    it('defaults to landed', function() {
      expect(plane.getStatus()).toBe("Landed")
    });
  });

  describe('landing a plane', function() {
    it('status changes to landed', function() {
      var weather = goodWeather.getWeather();
      plane.takeOff(airport, weather)
      plane.land(airport)
      expect(plane.getStatus()).toBe("Landed")
    });

    it("won't allow a plane to land if the airport is full", function() {
      airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
      airport.getHangar.and.callFake(function() {return []; });
      airport.getCapacity.and.callFake(function() {return 0; });
      expect(function(){plane.land(airport)}).toThrow("Cannot land: airport full")
    });

    it('raises an error if the weather is stormy', function() {
      var weather = badWeather.getWeather();
      expect(function() {plane.takeOff(airport, weather)}).toThrow('Cannot take off: the weather is stormy')
    });
  });

  describe('taking off a plane', function(){
    it('status changes to flying', function() {
      var weather = goodWeather.getWeather();
      plane.takeOff(airport, weather)
      expect(plane.getStatus()).toBe("Flying")
    });

    it('raises error if a flying plane tries to take off', function() {
      var weather = goodWeather.getWeather();
      plane.takeOff(airport, weather)
      expect(function() {plane.takeOff(airport, weather)}).toThrow("Cannot take off: plane flying")
    });

    it('raises an error if the weather is stormy', function() {
      var weather = badWeather.getWeather();
      expect(function() {plane.takeOff(airport, weather)}).toThrow('Cannot take off: the weather is stormy')
    });
  });
});
