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

  getAllNeighbours : function(position){
    let { latitude, longitude } = position;
    let points = [-1, 0, 1];
    let neighbour=[];

    points.forEach((x)=> {
      points.forEach((y) =>{
        neighbour.push([latitude+x, longitude+y]);
      });
    });

    return neighbour.filter((x)=>{ return !(x[0] ==latitude && x[1] == longitude)});
  },
}

module.exports = { 
  world 
};
