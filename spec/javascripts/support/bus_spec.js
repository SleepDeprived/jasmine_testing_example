describe("a bus", function(){

  var bus;
  var passenger1;
  var passenger2;

// use beforeEach with above defined variable
  beforeEach(function(){
    bus = new Bus();
    passenger = {name: "Levon Helm"};
    passenger2 = {name: "Yoko Ono"};
  })

  it("is empty", function(){
    // var bus = new Bus();   THIS WAS REPLACED BY beforeEach
    expect(bus.isEmpty()).toBe(true);
  })

  it("accepts a passenger", function(){
    // var bus = new Bus();   THIS WAS REPLACED BY beforeEach
    // var passenger = {name: "Levon Helm"};
    bus.add(passenger);
    expect(bus.isEmpty()).not.toBe(true);
  })

  it("returns true if it contains a specific passenger", function(){
    // var passenger = {name: "Levon Helm"};
    // var passenger2 = {name: "Yoko Ono"};
    bus.add(passenger);
    expect(bus.contains(passenger)).toBe(true);
    expect(bus.contains(passenger2)).toBe(false);
  });

  it("accepts multiple passengers", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    bus.add(passenger2);
    expect(bus.getSize()).toBe(2);
  });


// Phil REFACTORED and added this check into the next test
  // it("won't accept the same passenger twice", function(){
  //   bus.add(passenger);
  //   expect(bus.getSize()).toBe(1);
  //   bus.add(passenger);
  //   expect(bus.getSize()).toBeLessThan(2);
  // });


// to check errors that are thrown, you need to wrap the volitile code in a function, and then call it in the
  it("throws and error if we add passenger twice", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    var test = function(){
      bus.add(passenger);
    }
    // don't need to call test in expect (e.g. test()) because it is called by toThrow();
    expect(test).toThrow();
    expect(bus.getSize()).toBeLessThan(2);
  });

  it("returns a list of passenger names", function(){
    bus.add(passenger);
    bus.add(passenger2);
    expect(bus.getPassengers()).toEqual(["Levon Helm", "Yoko Ono"]);
  });

})
