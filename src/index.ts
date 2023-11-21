/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Tree from './tree'
import type Node from './node'
const tree = new Tree([9, 7, 5, 2, 3])
tree.buildTree(tree.arr)
console.log(tree.root)
const prettyPrint = (node: Node | null, prefix = '', isLeft = true) => {
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
prettyPrint(tree.root)
