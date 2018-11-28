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
    return (this.isNeighbourValid(position)) &&  (this.grid[latitude][longitude] == 'A');
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

  getAliveNeighbours : function(position) {
    let { latitude, longitude } = position;
    return this.getAllNeighbours(position).map((x)=> this.isNeighbourAlive({ latitude:x[0], longitude:x[1]})).map((x)=> 0+x);
  },

  getAliveNeighboursCount : function(position) {
    return this.getAliveNeighbours(position).reduce((x,y)=> x+y);
  }
}

module.exports = { 
  world 
};
