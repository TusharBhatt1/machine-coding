const BEFORE = {
    user: {
        name: "Alice",
        age: 25,
        address: {
            city: "New York",
            zip: 10001,
            coords: {
                lat: 40.7128,
                lng: -74.006
            }
        },
        hobbies: ["reading", "traveling"]
    },
    active: true
};
const AFTER = {
    user: {
        name: "Alice",
        age: 26, // modified
        address: {
            city: "Boston", // modified
            country: "USA", // added
            coords: {
                lat: 42.3601, // modified
                lng: -71.0589 // modified
            }
        },
        hobbies: ["reading", "traveling", "gaming"] // modified
    },
    active: false, // modified
    lastLogin: "2026-01-30" // added
};

function checkObjects(before, after) {
    let result = {}
    for (let k in before) {
        const inAfter = k in after
        if (!inAfter) result[k] = { status: "deleted" }
        else if (Array.isArray(before[k])) {
            if (JSON.parse(JSON.stringify(before[k])) === JSON.parse(JSON.stringify(after[k]))) result[k] = { "status": "same" }
            else result[k] = { "status": "modified", "before": before[k], "after": after[k] }
        }
        else if (typeof before[k] === "object") {
            result[k] = checkObjects(before[k], after[k])
        }
        else if (after[k] === before[k]) result[k] = { "status": "same" }
        else if (after[k] !== before[k]) result[k] = { "status": "modified", "before": before[k], "after": after[k] }
    }
    for (let k in after) {
        const isInBefore = k in before
        if (!isInBefore) result[k] = { "status": "added" }
    }
    return result
}
const ans = checkObjects(BEFORE, AFTER)
console.log(ans)

