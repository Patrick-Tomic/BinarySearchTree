/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Tree from './tree'
function prettyPrint (node: { data: number, right: any | null, left: any | null } | null, prefix = '', isLeft = true) {
  if (node === null) {
    return
  }
  if (node.right != null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
  if (node.left != null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }
}
// eslint-disable-next-line prefer-const
let arr: number[] = []
for (let i = 0; i < 100; i++) {
  arr.push((Math.floor(Math.random() * 100)) + 1)
}
const tree = new Tree(arr)
tree.buildTree(tree.arr)
prettyPrint(tree.root)
tree.isBalanced()
console.log(tree.preOrder())
console.log(tree.inOrder())
console.log(tree.postOrder())
tree.insert(7)
tree.insert(1004)
tree.insert(1)
tree.isBalanced()
tree.reBalance()
console.log(tree.preOrder())
console.log(tree.inOrder())
console.log(tree.postOrder())
