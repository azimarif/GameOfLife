const world = [ [0,1,2], [0,1,2], [0,1,2] ];

const isLatitudeLongitudeValid = function(world, latitude, longitude) {
  if( Math.min(latitude,longitude) < 0 || Math.max(latitude,longitude) >= world.length)
    return false;
  return true;
}

module.exports = { isLatitudeLongitudeValid };
