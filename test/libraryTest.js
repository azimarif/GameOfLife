const { equal, deepEqual } = require('assert');
const { isLatitudeLongitudeValid } = require('../src/library.js');

describe("test for isLatitudeLongitudeValid ()",function() {
  const world = [ [0,1,2], [0,1,2], [0,1,2] ];
  it("it should return false for negative index",function() {
    deepEqual(isLatitudeLongitudeValid(world,0,0),true);
    deepEqual(isLatitudeLongitudeValid(world,-1,0),false);
    deepEqual(isLatitudeLongitudeValid(world,0,-2),false);
    deepEqual(isLatitudeLongitudeValid(world,-1,-1),false);
  });

  it("it should return false for index greater than or equal to length",function() {
    deepEqual(isLatitudeLongitudeValid(world,1,3),false);
    deepEqual(isLatitudeLongitudeValid(world,3,1),false);
    deepEqual(isLatitudeLongitudeValid(world,3,3),false);
    deepEqual(isLatitudeLongitudeValid(world,2,2),true);
  });
});
