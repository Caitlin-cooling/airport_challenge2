describe("Weather", function() {

  beforeEach(function(){
    weather = new Weather ();
  })

  it("determines the weather as sunny", function() {
    spyOn(Math, "random").and.returnValue(4);
    expect(weather.getWeather()).toBe("Sunny")
  });

  it("determines the weather as stormy", function() {
    spyOn(Math, "random").and.returnValue(0);
    expect(weather.getWeather()).toBe("Stormy")
  });
});
