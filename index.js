const PI = Math.PI

class Circle {
    constructor (radius){
    this.radius = radius;
    }
// correctly returns the radius property of a Circle instance using `circle.radius`

    get diameter (){
        return this.radius + this.radius;
    }
    // the diameter of a circle using the pseudo-property `circle.diameter`

    get circumference (){
        return PI * this.diameter;
    }
    
    get area (){
        return PI * this.radius * this.radius;
    }
    set diameter(newDiameter){
        this.radius = (newDiameter / 2);
    }

    set circumference(newCircumference){
        this.radius = (newCircumference / (PI *2))
    }
}


// let Circle = new Circle()
// Define getter methods for diameter, circumference, 
// and area which will calculate each value using this.radius and pi

// Define setter methods for diameter, circumference, and area which 
// will accept values for each calculation, calculate the radius based 
// on the input value and set this.radius accordingly

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2