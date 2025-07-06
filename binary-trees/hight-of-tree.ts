import { defaultTop, TreeNode } from "./binary-tree"


const hasChildNode = (node: TreeNode): TreeNode | null =>  {
    if (node.left) return node.left
    if (node.right) return node.right
    return null
}

const checkTreeHeight = (node: TreeNode | null): number =>{
    
    if (!node) return 0;

    let lefHeight = checkTreeHeight(node.left ?? null)
    let rightHeight = checkTreeHeight(node.right ?? null)

    return lefHeight > rightHeight ? ++lefHeight : ++rightHeight
}


const root = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4, new TreeNode(6, new TreeNode(7)))), 
    new TreeNode(3, new TreeNode(5))
)

const height = checkTreeHeight(root)
console.log(height)

