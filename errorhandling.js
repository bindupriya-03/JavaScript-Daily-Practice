/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
    let reversed=s.split("").reverse().join("");
    console.log(reversed);
    
}
catch(e){
    console.log(e.message);
    console.log(s)
}
}