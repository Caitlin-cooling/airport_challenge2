describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();
  })

  describe('has a status', function() {
    it('defaults to landed', function() {
      expect(plane.getStatus()).toBe("Landed")
    });

    it('changes to flying when the plane takes off', function() {
      plane.takeOff()
      expect(plane.getStatus()).toBe("Flying")
    });

    it('changes to landed when the plane lands', function() {
      plane.takeOff()
      plane.land()
      expect(plane.getStatus()).toBe("Landed")
    });
  });
});
