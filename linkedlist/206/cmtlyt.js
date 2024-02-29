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
// var reverseList = function (head) {
//   if (!head) return null;
//   const nextNode = head.next;
//   head.next = null;
//   const lastNode = reverseList(nextNode);
//   if (!nextNode) return head || null;
//   nextNode.next = head;
//   return lastNode || nextNode;
// };

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
// var reverseList = function (head) {
//   return reverse(null, head);
// };

// function reverse(prev, curr) {
//   if (!curr) return prev;
//   const next = curr.next;
//   curr.next = prev;
//   prev = curr;
//   return reverse(prev, next);
// }

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
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

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

const data = mockData([1, 2, 3]);
console.log("after:>", linkedListToString(data));

const head = reverseList(data);
console.log("before:>", linkedListToString(head));
