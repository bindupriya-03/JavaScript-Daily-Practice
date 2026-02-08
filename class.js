/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 * 
 */

/*class Polygon{
    constructor(side){
        this.side=side;
        
    }
    perimeter() {
        return this.side.reduce((sum, side) => sum + side, 0);
}
}  */

   //Another method
   
   
   
   class Polygon{
    constructor(side){
        this.side=side;
        
    }
   
    perimeter() {
       let total=0;
       for(let i=0;i<this.side.length;i++){
        total+=this.side[i];
       }
       return total;
    }
   }
