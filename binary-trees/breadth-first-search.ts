/* 

🔍 Prompt
Given the root of a binary tree, return a 2D array where each sub-array contains the values of the nodes at that level.

🧷 Example
Given the tree:

markdown
Copiar
Editar
        1
       / \
      2   3
     / \   \
    4   5   6
Your function should return:

[
  [1],       // level 0
  [2, 3],    // level 1
  [4, 5, 6]  // level 2
]

*/

import { TreeNode } from "./binary-tree"


const levelsOfTree = (treeNode: TreeNode): number[][] => {
  const levelsMap = new Map<number, number[]>();
  const queue: TreeNode[] = [treeNode];
  let level = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()!;
      currentLevel.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    levelsMap.set(level, currentLevel);
    level++;
  }

  return Array.from(levelsMap.values());
}

const root: TreeNode = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
)

const levels = levelsOfTree(root)
console.log(levels)