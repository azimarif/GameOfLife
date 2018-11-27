const world = {
  lifeExistence :[ [0,1,2], [0,1,2], [0,1,2] ],
  isLatitudeLongitudeValid : function(latitude, longitude) {
    if( Math.min(latitude,longitude) < 0 || Math.max(latitude,longitude) >= this.lifeExistence.length)
      return false;
    return true;
  }
};

module.exports = {
  world
}
