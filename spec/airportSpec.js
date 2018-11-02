describe('Airport', function() {

  DEFAULT_CAPACITY = 10;

  beforeEach(function() {
    airport = new Airport;
  });

  describe('capacity', function() {
    it('has a default capacity', function() {
      expect(airport.getCapacity()).toBe(DEFAULT_CAPACITY)
    });

    it('set capacity', function(){
      expect(airport.getCapacity(20)).toBe(20)
      expect(airport.getCapacity(50)).toBe(50)
    });
  });

    describe('getHangar', function(){
      it('adds a plane to the hangar when it lands', function() {
        expect(airport.getHangar()).toEqual(0)
      });
    });
  });
