const world = {
  grid :[['A','D','D'], ['A','D','D'],['A','D','D']],

  getWorldSize : function(grid){
    return grid.length;
  },

  isNeighbourValid : function(position) {
    let { latitude, longitude } = position;
    return !( Math.min(latitude,longitude) < 0 || Math.max(latitude,longitude) >= this.getWorldSize(this.grid));
  },

  isNeighbourAlive : function(position) {
    let { latitude, longitude } = position;
    return (this.isNeighbourValid(latitude,longitude)) &&  (this.grid[latitude][longitude] == 'A');
  },
}

module.exports = { 
  world 
};
