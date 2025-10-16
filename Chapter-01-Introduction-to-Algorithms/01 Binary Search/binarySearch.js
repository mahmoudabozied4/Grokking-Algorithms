/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @param {function(a, b)} [comparatorCallback] // Comparator object will give us common comparison methods like equal() and lessThan().
 * @returns {(number|-1)} Number of index if the value is found or -1 otherwise
 */

// Simple Comparator class (if you don't have one)
class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    static defaultCompareFunction(a, b) {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    }

    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }
}

export default function binarySearch(list, item, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
    let low = 0; // Lower Bound
    let high = list.length - 1; // Upper Bound

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (comparator.equal(list[mid], item)) {
            return mid;
        }
        if (comparator.lessThan(list[mid], item)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// Correct usage:
console.log(binarySearch([1, 3, 5, 7], 5)); // Output: 2
console.log(binarySearch([1, 3, 5, 7], 8)); // Output: -1
console.log(binarySearch([1, 3, 5, 7], 1)); // Output: 0