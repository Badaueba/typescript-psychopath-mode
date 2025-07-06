/*
Given a string s, find the length of the longest substring without repeating characters.

** Examples
Input: "abcabcbb"
Output: 3
Explanation: "abc" is the longest substring without repeating characters.

Input: "bbbbb"
Output: 1

Input: "pwwkew"
Output: 3
Explanation: "wke" is the longest — note that "pwke" is **not** valid because "k" comes after "w".

*/


const longestSubstring = (str: string): number => {
  const substring = new Set<string>();
  let left = 0;
  let right = 0;
  let longest = 0;

  while (right < str.length) {
    const char = str[right];

    if (!substring.has(char)) {
      substring.add(char);
      right++;
      if (substring.size > longest) {
        longest = substring.size;
      }
    } else {
      substring.delete(str[left]);
      left++;
    }
  }

  return longest;
};
const inputs = ["abcabcbb", "bbbbb", "pwwkew"];

const outputs = inputs.map((input) => longestSubstring(input))

console.log(outputs)

