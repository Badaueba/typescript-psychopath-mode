
/*
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

Assume exactly one solution, and you can’t use the same element twice.
🧷 Example

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] // because nums[0] + nums[1] === 9
*/

interface Result {
    value: number
    index: number
}

// 2 Loops Problem 
const sumAndReturnIndexes = (arr: number[], target: number): string => { 
    
    const results: Result[] = []
    

    for (let curr = 0; curr < arr.length; curr++) {
        const currElement = arr[curr]
        arr.forEach((next: number, index: number) => {
            if (currElement !== next) {
                const sum = currElement + next
                if (sum === target) results.push({value: currElement, index: curr}, {value: next, index})
            }
        })
    }
    if (results.length)
        return `\nArray=[${arr}] \nTarget=${target} \narr[${results[0].index}] + arr[${results[1].index}] = ${target}`
    return `Not found`
}

//Solving 2 Loop problem with maps and subracting current value from target (opposite of sum)
const findComplementWithMaps = (arr: number[], target: number): [number, number] | null => {

    const map = new Map<number, number>();

    for (let i = 0; i< arr.length; i ++) {
        const complement = target - arr[i]
        if (map.has(complement)) {
            const mapIndex = map.get(complement)!
            return [mapIndex, i]
        }
        map.set(arr[i], i)
    }

    return null
}



const arr = [2, 4, 5, 6, 8, 11];
const target = 11

const result = sumAndReturnIndexes(arr, target)
console.log(result)

console.log("\n##########")


const resultWithMap = findComplementWithMaps(arr, target)
if (resultWithMap) {
    console.log(`\nArray=[${arr}] \nTarget=${target} \narr[${resultWithMap[0]}] + arr[${resultWithMap[1]}] = ${target}`)
}