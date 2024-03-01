// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   const firstNode = { next: null };
//   let currNode = head;
//   firstNode.next = swap(currNode);
//   currNode = firstNode.next.next;
//   while (currNode.next && currNode.next.next) {
//     const node = swap(currNode.next);
//     currNode.next = node;
//     currNode = node.next;
//   }
//   return firstNode.next;
// };

// function swap(head) {
//   const next = head.next;
//   const nextN = next.next;
//   next.next = head;
//   head.next = nextN;
//   return next;
// }

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   const firstNode = { next: swap(head) };
//   let currNode = firstNode.next.next;
//   while (currNode.next && currNode.next.next) {
//     const node = swap(currNode.next);
//     currNode.next = node;
//     currNode = node.next;
//   }
//   return firstNode.next;
// };

// function swap(head) {
//   const next = head.next;
//   const nextN = next.next;
//   next.next = head;
//   head.next = nextN;
//   return next;
// }

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   const firstNode = { next: head };
//   let currNode = firstNode;
//   while (currNode.next && currNode.next.next) {
//     // store 1
//     const temp = currNode.next;
//     // 1 = 2
//     currNode.next = currNode.next.next;
//     // 1 -> 2.next
//     temp.next = currNode.next.next;
//     // 2 -> 1
//     currNode.next.next = temp;
//     // currNode = 1
//     currNode = temp;
//   }
//   return firstNode.next;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let nodeA = swapPairs(head.next.next);
  let nodeB = head.next;
  head.next = nodeA;
  nodeB.next = head;
  return nodeB;
};

// 测试代码

function mockData(values) {
  const createNode = (val, next = null) => ({ val, next });
  const head = values.reduceRight((prev, curr) => createNode(curr, prev), null);
  return head;
}

function linkedListToString(head, valueKey = "val", nextKey = "next") {
  const result = [];
  while (head) {
    result.push(head[valueKey]);
    head = head[nextKey];
  }
  return result.join(",");
}

const data = mockData([1, 2, 3, 4, 5, 6]);
console.log("after:>", linkedListToString(data));

const head = swapPairs(data);
console.log("before:>", linkedListToString(head));
