// Function takes an integer array and returns the array with the shortest path to the last element.
// If the array is empty, contains non-integers, or the path to the final element cannot be found, 0 is returned.
export default function findMinJumpsPath(arr) {

    // Check if array doesn't contain non-integer values
    if (arr.filter((n) => Number.isInteger(n)).length !== arr.length) return 0;

    // Empty array
    if (arr.length === 0) return 0;
    
    // No jumps can be made from the first node
    if (arr[0] <= 0) return 0;

    // Array with one element
    if (arr.length === 1) return arr;


    var shortestPath = [arr[0]]; // array of integers on the shortest path (initialized with the first element)
    var maxDistance = arr[0]; // current max distance reachable from the integers that have already been checked
    var maxDistanceIndex = 0; // array index of the integer with the current max distance 
    var jumps = arr[0]; // jumps that can still be made from the current max distance integer

    for (var i=0; i < arr.length; i++) {

        // If the end has been reached, add the last element to the shortest path and return the path array.
        if (i === arr.length - 1) {
            shortestPath.push(arr[i]);
            return shortestPath;
        }
        
        // If the current integer can jump further than the previous best, set it as the new maxDistance.
        if (i + arr[i] > maxDistance) {
            maxDistance = arr[i] + i;
            maxDistanceIndex = i;
        }
        
        // If the the last position can be reached from the current integer, add it and the last integer
        // to the shortest path and return the path array.
        if (maxDistance >= arr.length -1) {
            // Check if it's not the first element, because it's already been added.
            if (maxDistanceIndex > 0) {
                shortestPath.push(arr[maxDistanceIndex]);
            }
            shortestPath.push(arr[arr.length-1]);
            return shortestPath;
        }

        jumps--;

        // If no more jumps can be made from the current max distance integer.
        if (jumps === 0) {

            // Add current max distance integer to the shortest path (if it's not the first element).
            if (maxDistanceIndex > 0) {
                shortestPath.push(arr[maxDistanceIndex]);
            }

            // If the current position is beyond the reach of the integer with the max reachable distance.
            if (i >= maxDistance) {
                return 0;
            }

            // Set how many new jumps can be made from the current position.
            jumps = maxDistance - i;
        }
    }
    return 0;
}