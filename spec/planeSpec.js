describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();
  })

  describe('has a status', function() {
    it('defaults to landed', function() {
      expect(plane.getStatus()).toBe("Landed")
    });
  });

  describe('landing a plane', function() {
    it('changes to landed when the plane lands', function() {
      var airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
       airport.getHangar.and.callFake(function() {
         return [];
       });
       airport.getCapacity.and.callFake(function() {
         return 10;
       });

      plane.takeOff()
      plane.land(airport)
      expect(plane.getStatus()).toBe("Landed")
    });

    it("won't allow a plane to land if the airport is full", function() {
     airport = jasmine.createSpyObj('airport', ['getHangar', 'getCapacity']);
      airport.getHangar.and.callFake(function() {
        return [];
      });
      airport.getCapacity.and.callFake(function() {
        return 0;
      });

      expect(function(){plane.land(airport)}).toThrow(new Error("Cannot land: airport full"))
    });
  });

  describe('taking off a plane', function(){
    it('changes to flying when the plane takes off', function() {
      plane.takeOff()
      expect(plane.getStatus()).toBe("Flying")
    });

    it('raises error if a flying plane tries to take off', function() {
      plane.takeOff()
      expect(function() {plane.takeOff()}).toThrow(new Error("Cannot take off: plane flying"))
    });
  });
});
