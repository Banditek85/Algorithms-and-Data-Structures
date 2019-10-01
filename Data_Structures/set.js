// Set is collection of distinct values and cannot contain duplicates. 
class MySet {
    constructor(...args) {
        this.set = [];
        this.add(...args);
    };

    // Check if element is contained in the set
    contains(element) {
        return this.set.indexOf(element) !== -1;
    }

    // Returns current size of the set
    size() {
        console.log(this.set.length);
    }

    // Adds elements passed as parameters to the set. Potential duplicate insertion attempts are skipped.
    add(...elements) {
        for (const element of elements) {
            if (this.set.indexOf(element) !== -1) {
                console.log("Element " + element + " already in set, skipping...");
            } else {
                this.set.push(element);
            }
        }
    }

    // Removes element from the set
    remove(element) {
        this.set.splice(this.set.indexOf(element), 1);
        console.log("element removed successfully");
    }


    // Unions two sets and ignores duplicates
    union(otherSet) {
        let union = new MySet();
        for (const element of this.set) {
            union.add(element);
        }

        for (const element of otherSet.set) {
            union.add(element);
        }

        console.log('unioned ', union);
    }

    // Returns set with common elements from both sets
    intersect(otherSet) {
        let intersect = new MySet();
        for (const element of this.set) {
            if (otherSet.contains(element)) {
                intersect.add(element);
            }
        }

        console.log('intersected: ', intersect);
    }
 
    // Checks if it's set that calling the function a subset of another set
    isSubset(otherSet) {
        let result = this.set.every(function(element) {
            return otherSet.contains(element);
        });
        console.log('isSubset: ', result);
    }
}

// Test code
var my_set = new MySet();
my_set.add(34, 23);
console.log(my_set);

var other = new MySet();
other.add(34, 99, 100, 23);

my_set.union(other);
my_set.intersect(other);
my_set.isSubset(other);

//  End Test Code