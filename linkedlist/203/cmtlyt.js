// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @return {ListNode}
//  */
// var removeElements = function (head, val) {
//   let result = null;
//   let curr = head;
//   while (curr) {
//     if (curr.val !== val) {
//       result = curr;
//       break;
//     }
//     curr = curr.next;
//   }
//   while (curr) {
//     let temp = curr.next;
//     while (temp?.val === val) temp = temp.next;
//     curr.next = temp;
//     curr = temp;
//   }
//   return result;
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
//  * @param {number} val
//  * @return {ListNode}
//  */
// var removeElements = function (head, val) {
//   while (head && head.val === val) head = head.next;
//   let curr = head;
//   while (curr) {
//     let temp = curr.next;
//     while (temp?.val === val) temp = temp.next;
//     curr.next = temp;
//     curr = temp;
//   }
//   return head;
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) head = head.next;
  let curr = head;
  while (curr) {
    while (curr.next?.val === val) curr.next = curr.next.next;
    curr = curr.next;
  }
  return head;
};
