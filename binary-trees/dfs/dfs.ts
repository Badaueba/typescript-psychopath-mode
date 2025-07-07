/*

DFS means: Go as deep as you can down one path before going back.
There are 3 common ways to do this — just by changing the order:

Name	Order	Example Output
Inorder	Left → Root → Right	[4, 2, 5, 1, 3]

Preorder	Root → Left → Right	[1, 2, 4, 5, 3]

Postorder	Left → Right → Root	[4, 5, 2, 3, 1]



Preorder Example

write a function that takes this tree:

       1
      / \
     2   3
    / \
   4   5
And outputs this array:


[1, 2, 4, 5, 3]

*/

import { TreeNode } from "../binary-tree"


//hardcoded intuitive shit 
const hardCodedPreorder = (root: TreeNode): Array<number> => {

    const list: Array<number> = [root.value]
    let parent = root;
    let current = root;

    while(current.left || current.right) {
        
        //end of lefts, add right value
        if (!current.left?.left && current.right ) { 
            list.push(current.right.value)
        }
        //has left, go down 
        if (current.left) {
            list.push(current.left!.value)
            current = current.left
        } 
        //no child comeback
        if (!current.left?.left && !current.right) {
            current = parent
            //adds remaining right
            if (current.value === root.value) {
                if (current.right) list.push(current.right.value)
                break
            }
        }
    }

    return list
}


//generic recursive solution
const preorderTraversal = (root: TreeNode | undefined | null, result: number[] = []): number[] => {
    console.log("RES", result)
    if (!root) return result

    result.push(root.value)
    preorderTraversal(root.left, result)
    preorderTraversal(root.right, result)
    return result
}


const tree = new TreeNode(1, 
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
)

const hardcoded = hardCodedPreorder(tree)
console.log(hardcoded)

const preordered = preorderTraversal(tree)
console.log(preordered)