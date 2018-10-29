describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  describe('capacity', function() {
    it('set capacity', function(){
      expect(airport.capacity(20)).toBe(20)
      expect(airport.capacity(50)).toBe(50)
    });
  });
});
