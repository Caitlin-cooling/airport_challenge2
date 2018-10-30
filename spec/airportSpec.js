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

    // it('can tell when the airport is full', function() {
    //   spyOn(airport, "land").and.returnValue(1);
    // });
  });
});
