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
      if (node.data === arr[0]) {
        arr.shift()
        this.buildTree(arr)
      } else {
        this.searchTree(node, arr)
      }
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
    }
  }

  insert (value: number, node: null | { data: number, left: any | null, right: any | null } = this.root) {
    if (node == null) {
      return new Node(value)
    }
    if (node.data > value) {
      node.left = this.insert(value, node.left)
    } else if (node.data < value) {
      node.right = this.insert(value, node.right)
    }
    return node
  }

  delete (value: number, node: null | { data: number, left: any | null, right: any | null } = this.root) {
    if (node == null) {
      console.log('value not found')
      return node
    }
    if (node.data > value) {
      node.left = this.delete(value, node.left)
      return node
    } else if (node.data < value) {
      node.right = this.delete(value, node.right)
      return node
    }

    if (node.right === null) return node.left
    else if (node.left === null) return node.right
    else {
      let parent = node
      let successor = node.right
      while (successor.left != null) {
        parent = successor
        successor = successor.left
      }
      if (parent === node) {
        parent.right = successor.right
      } else {
        parent.left = successor.right
      }
      node.data = successor.data
    }
    return node
  }

  find (value: number, node: null | { data: number, left: any | null, right: any | null } = this.root) {
    if (node == null) {
      console.log('value not found')
      return
    }
    if (node.data === value) {
      console.log(node)
      return
    }
    if (node.data > value) {
      this.find(value, node.left)
    } else if (node.data < value) {
      this.find(value, node.right)
    }
  }

  levelOrder (arr: number[] = [], node: null | { data: number, left: any | null, right: any | null } = this.root) {
    if (node == null) {
      return
    }
    const queue: any[] = []
    queue.push(node)
    while (queue.length !== 0) {
      const tempNode = queue.shift()
      arr.push(tempNode.data)
      if (tempNode.left != null) {
        queue.push(tempNode.left)
      }
      if (tempNode.right != null) {
        queue.push(tempNode.right)
      }
    }
    console.log(arr)
  }
}
