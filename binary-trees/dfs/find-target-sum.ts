/*

Tree:
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \
7    2

Target Sum: 22

✅ Output: true

Explanation: 5 → 4 → 11 → 2 = 22

*/

import { TreeNode } from "../binary-tree"


const sumNodesUntilTarget = (root: TreeNode | null | undefined, target: number): boolean => {
    console.log(target)
    if (!root) return false
    if ( target === root.value) return true

    return sumNodesUntilTarget(root.left, target - root.value)
     || sumNodesUntilTarget(root.right, target - root.value)

}   


const tree = new TreeNode(5,
    new TreeNode(4, 
        new TreeNode(11, 
            new TreeNode(7),
            new TreeNode(2)
        )
    ),
    new TreeNode(8, 
        new TreeNode(13),
        new TreeNode(4)
    )
)


const result = sumNodesUntilTarget(tree, 22)
console.log(result)