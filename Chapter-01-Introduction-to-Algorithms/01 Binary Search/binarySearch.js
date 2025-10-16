/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @param {function(a, b)} [comparatorCallback] // Comparator object will give us common comparison methods like equal() and lessThan().
 * @returns {(number|-1)} Number of index if the value is found or -1 otherwise
 */

export default function binarySearch(Array, item, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);

    let low = 0 // Lower Bound
    let high = Array.length - 1 // Upper Bound

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (comparator.equal(Array[mid], item)) {
            return mid;
        }
        if (comparator.lessThan(Array[mid], item)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

