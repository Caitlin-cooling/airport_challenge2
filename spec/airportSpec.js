describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  describe('capacity', function() {
    it('has a default capacity', function() {
      expect(airport.getCapacity()).toBe(10)
    });

    it('set capacity', function(){
      expect(airport.getCapacity(20)).toBe(20)
      expect(airport.getCapacity(50)).toBe(50)
    });

    it('adds a plane to the hangar when it lands', function() {
      var plane = jasmine.createSpyObj('plane', ['land']);
      plane.land.and.callFake(function() {
        return "1";
      });
      
      airport.addPlane(plane)
      expect(airport.getHangar()).toEqual(1)
    });
  });

  describe('isFull', function() {
    it('returns true when the hangar is full', function() {
      var plane = jasmine.createSpyObj('plane', ['land']);
      plane.land.and.callFake(function() {
        return "1";
      });

      for (var i = 0; i < 11; i++) {
        airport.addPlane(plane)
      }
      expect(airport.isFull()).toBe(true)
    });
  });
});
