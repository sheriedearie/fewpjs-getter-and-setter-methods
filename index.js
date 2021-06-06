class Circle {
    constructor (radius){
    this.radius = radius;
    }
// correctly returns the radius property of a Circle instance using `circle.radius`
    get PI (){
       return this.PI;
    }

    get diameter (){
        return this.radius + this.radius;
    }
    // the diameter of a circle using the pseudo-property `circle.diameter`

    set diameter(newDiameter){
        this.radius = Math.radius(newDiameter);
    }
    get circumference (){
        return this.PI + this.diameter;
    }

    get area (){
        return this.PI * this.radius * this.radius;
    }
}

let Circle = new Circle()
// Define getter methods for diameter, circumference, 
// and area which will calculate each value using this.radius and pi

// Define setter methods for diameter, circumference, and area which 
// will accept values for each calculation, calculate the radius based 
// on the input value and set this.radius accordingly

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2