// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;  // initialize the radius
    }
  
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Test cases
  const circle1 = new Circle(5);
  console.log(circle1.diameter);      // 10
  console.log(circle1.circumference); // 31.41592653589793
  console.log(circle1.area);          // 78.53981633974483
  
  circle1.diameter = 12;
  console.log(circle1.radius);        // 6 (since diameter was set to 12, radius = 12 / 2)
  
  circle1.circumference = 62.83185307179586;
  console.log(circle1.radius);        // 10 (since circumference was set to 62.83, radius = 62.83 / (2 * Math.PI))
  
  circle1.area = 314.1592653589793;
  console.log(circle1.radius);        // 10 (since area was set to 314.16, radius = sqrt(314.16 / Math.PI))
  