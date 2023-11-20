/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Node from './node'
export default class Tree {
  arr: number[]
  root: null | Node
  constructor (Array: number[]) {
    this.arr = Array
    this.root = null
  }

  searchTree (node: { data: number, right: null | Node, left: null | Node }, arr: number[]) {
    if (node.data > arr[0]) {
      if (node.left == null) {
        node.left = new Node(arr.shift()!)
      } else if (node.left != null) this.buildTree(arr, node.left)
    } else if (node.data < arr[0]) {
      if (node.right == null) {
        node.right = new Node(arr.shift()!)
      } else if (node.right != null) this.buildTree(arr, node.right)
    } else if (node.data === arr[0]) arr.shift()
  }

  buildTree (arr: number[], root = this.root) {
    const node = root
    const start = 0
    const end = arr.length
    const mid = Math.floor((start + end) / 2)
    console.log(arr[mid])
    if (node == null) {
      this.root = new Node(arr[mid])
    }
    if (node != null) {
      this.searchTree(node, arr)
    }
  }
}
