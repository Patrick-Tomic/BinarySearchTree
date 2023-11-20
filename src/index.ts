import Tree from './tree'

const tree = new Tree([9, 7, 5, 2, 3])
tree.buildTree(tree.arr)
console.log(tree.root)
