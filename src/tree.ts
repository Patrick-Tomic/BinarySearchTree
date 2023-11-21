/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Node from './node'
export default class Tree {
  arr: number[]
  root: Node | null
  constructor (Array: number[]) {
    this.arr = Array
    this.root = null
  }

  buildTree (arr: number[]) {
    const start = 0
    const end = arr.length
    const mid = Math.floor((start + end) / 2)
    const node = this.root
    if (arr.length < 1) return
    if (node == null) {
      this.root = new Node(arr[mid])
      this.buildTree(arr)
    }
    if (node != null) {
      this.searchTree(node, arr)
    }
  }

  searchTree (node: { data: number, left: any | null, right: any | null }, arr: number[]) {
    if (node.data > arr[0]) {
      if (node.left == null) {
        node.left = new Node(arr[0])
        arr.shift()
        this.buildTree(arr)
      } else if (node.left != null) {
        this.searchTree(node.left, arr)
      }
    } else if (node.data < arr[0]) {
      if (node.right == null) {
        node.right = new Node(arr[0])
        arr.shift()
        this.buildTree(arr)
      } else if (node.right != null) {
        this.searchTree(node.right, arr)
      }
    } else if (node.data === arr[0]) {
      arr.shift()
      this.buildTree(arr)
    }
  }

  insert (value: number, node: { data: number, left: any | null, right: any | null } | null = this.root) {
    if (node == null) {
      node = new Node(value)
    }
    if (node.data > value) {
      node.left = this.insert(value, node.left)
    } else if (node.data < value) {
      node.right = this.insert(value, node.right)
    }
  }
}
