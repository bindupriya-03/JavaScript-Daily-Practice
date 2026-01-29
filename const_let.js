function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    let r=parseFloat(readLine());
    const PI=Math.PI;
    let area=PI*(r*r);
    let perimeter=2*PI*r;
    console.log(area);
    console.log(perimeter);
    