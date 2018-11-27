const { equal, deepEqual } = require('assert');
let {  world } = require('../src/library.js');

describe("test for isLatitudeLongitudeValid ()",function() {
  world.lifeExistence = [['A','D','A'], ['A','D','A'],['A','D','A']];
  it("it should return false for negative index",function() {
    deepEqual(world.isLatitudeLongitudeValid(0,0),true);
    deepEqual(world.isLatitudeLongitudeValid(-1,0),false);
    deepEqual(world.isLatitudeLongitudeValid(0,-2),false);
    deepEqual(world.isLatitudeLongitudeValid(-1,-1),false);
  });

  it("it should return false for index greater than or equal to length",function() {
    deepEqual(world.isLatitudeLongitudeValid(1,3),false);
    deepEqual(world.isLatitudeLongitudeValid(3,1),false);
    deepEqual(world.isLatitudeLongitudeValid(3,3),false);
    deepEqual(world.isLatitudeLongitudeValid(2,2),true);
  });
});
