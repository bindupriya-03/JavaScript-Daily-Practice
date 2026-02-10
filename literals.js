/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    
    const A = expressions[0];
    const P = expressions[1];

    const s = P / 2;
    const d = Math.sqrt(s * s - 4 * A);

    const side1 = (s + d) / 2;
    const side2 = (s - d) / 2;

    return [side1, side2].sort((a, b) => a - b);
    
}
