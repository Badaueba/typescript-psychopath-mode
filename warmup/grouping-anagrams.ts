/*

Given an array of strings, group the anagrams together. 
You can return the answer in any order.

Two strings are anagrams if they contain the same characters with the same frequencies, but possibly in a different order.

🧷 Examples
ts
Copiar
Editar
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

*/


const groupAnagrams = (anagrams: string[]): Array<string[]> => {
    
    const arrMap = new Map<string, string[]>()

    anagrams.map(anagram => {
        const sorted = [...anagram].sort().toString()

        const existent = arrMap.get(sorted) || []
        existent.push(anagram) 
        arrMap.set(sorted, existent)
    
    })

    const result: Array<string[]> = [];
    arrMap.forEach((values) => {
        result.push(values)
    })
    return result
    
}

const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"]
const output = groupAnagrams(anagrams)
console.log(output)

