// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class cuboidMaker{
  constructor(dimensions){
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  volume(length,width,height){
    return(this.length * this.width * this.height);
  }
  surfaceArea(length,width,height){
    return(this.length * this.width + this.length* this.height + this.width * this.height);
  }
}
const cuboid = new cuboidMaker({
  length : 4,
  width : 5,
  height : 5
});
//Tests
console.log(cuboid.volume()); 
console.log(cuboid.surfaceArea()); 
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/
/*
class CubeMaker extends cuboidMaker{
  constructor(attributes){
    super(cuboidMaker);
  }
  cubeSurfaceArea(length){
    return(6*(this.length*this.length));
  }
}
const cube = new CubeMaker({
  length:2,
  width : 2,
  height : 2
})
console.log(cube.cubeSurfaceArea());
console.log(cube.volume());
*/