const world = {
  grid :[['A','D','D'], ['A','D','D'],['A','D','D']],

  getWorldSize : function(grid){
    return grid.length;
  },
  
  isNeighbourValid : function(position) {
    let { latitude, longitude } = position;
    return !( Math.min(latitude,longitude) < 0 || Math.max(latitude,longitude) >= this.getWorldSize(this.grid));
  }
}


module.exports = { 
  world 
};
