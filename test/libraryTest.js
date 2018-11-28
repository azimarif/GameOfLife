const { equal, deepEqual } = require('assert');
let {  world } = require('../src/library.js');

describe("test for isNeighbourValid ()",function() {
  world.grid = [['A','D','A'], ['A','D','A'],['A','D','A']];

  it("should return false for negative neighbour positions",function() {
    equal(world.isNeighbourValid({latitude :0, longitude : 0}),true);
    equal(world.isNeighbourValid({latitude :-1, longitude : 0}),false);
    equal(world.isNeighbourValid({latitude :0, longitude : -2}),false);
    equal(world.isNeighbourValid({latitude :-1, longitude : -1}),false);
  });

  it("should return false for neighbour position greater than or equal to grid length",function() {
    equal(world.isNeighbourValid({latitude :1, longitude : 3}),false);
    equal(world.isNeighbourValid({latitude :3, longitude : 1}),false);
    equal(world.isNeighbourValid({latitude :3, longitude : 3}),false);
  });

  it('should return true for valid neighbour positions', function(){  
    equal(world.isNeighbourValid({latitude :2, longitude : 2}),true);
  })
});
