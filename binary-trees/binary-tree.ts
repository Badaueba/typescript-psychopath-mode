
export class TreeNode {
    value: number
    left?: TreeNode | null
    right?: TreeNode | null

    constructor(val: number, left?: TreeNode | null, right?: TreeNode  | null) {
        this.value = val;
        this.left = left
        this.right = right
    }
}


export const defaultTop = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4, new TreeNode(6), new TreeNode(7)),
        new TreeNode(8)
    ),
    new TreeNode(3)
)



