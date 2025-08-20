/**
 * @param {number[]} nums
 * @return {number}
 */

const testcases = require("./testcases.json");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.smallNodesCount = 0;
    this.equalNodesCount = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while (currNode) {
        if (newNode.data < currNode.data) {
          currNode.smallNodesCount++;
          if (!currNode.left) {
            currNode.left = newNode;
            break;
          }
          currNode = currNode.left;
        } else if (newNode.data > currNode.data) {
          if (!currNode.right) {
            currNode.right = newNode;
            break;
          }
          currNode = currNode.right;
        } else {
          currNode.equalNodesCount++;
          break;
        }
      }
    }
  }

  getSmallerCount(data) {
    if (data > this.root.data) {
      let count = this.root.smallNodesCount + this.root.equalNodesCount + 1;
      if (!this.root.right) return count;
      return count + this.getSmallerNodesCount(data, this.root.right);
    } else {
      if (!this.root.left) return 0;
      return this.getSmallerNodesCount(data, this.root.left);
    }
  }

  getSmallerNodesCount(data, node) {
    let currNode = node,
      count = 0;

    while (currNode) {
      if (data > currNode.data) {
        count += currNode.smallNodesCount + currNode.equalNodesCount + 1;
        if (!currNode.right) break;
        currNode = currNode.right;
      } else {
        count += currNode.smallNodesCount;
        if (!currNode.left) break;
        currNode = node.left;
      }
    }
    return count;
  }
}

var reversePairs = function (nums) {
  const bst = new BinarySearchTree();
  const l = nums.length;
  bst.insert(nums[l - 1] * 2);
  let count = 0,
    mx = 2 * nums[l - 1],
    mn = 2 * nums[l - 1],
    tnum;
  for (let i = l - 2; i >= 0; i--) {
    if (nums[i] > mx) {
      count += l - 1 - i;
    } else if (nums[i] > mn) {
      count += bst.getSmallerCount(nums[i]);
    }

    // console.log(nums[i], count);

    tnum = 2 * nums[i];
    if (i) bst.insert(tnum);
    if (tnum > mx) mx = tnum;
    if (tnum < mn) mn = tnum;
  }

  return count;
};
