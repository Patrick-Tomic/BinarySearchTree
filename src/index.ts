/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Tree from './tree'
const tree = new Tree([9, 7, 5, 1, 3])
tree.buildTree(tree.arr)
console.log(tree.root)
function prettyPrint (node: { data: number, right: any | null, left: any | null } | null, prefix = '', isLeft = true) {
  if (node === null) {
    return
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }
}
tree.insert(2)
prettyPrint(tree.root)
