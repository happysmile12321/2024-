/*
 * @lc app=leetcode.cn id=203 lang=java
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    // 多加些辅助变量，对解题可能会很有帮助
    public ListNode removeElements(ListNode head, int val) {
        // 虚拟头结点
        ListNode dummyNode = new ListNode();
        dummyNode.next = head;
        // 游标
        ListNode cursor = new ListNode();
        cursor = dummyNode.next;
        // 记录前节点的信息
        ListNode pre = dummyNode;
        while (cursor != null) {

            // 移除
            if (cursor.val == val) {
                pre.next = cursor.next;
            } else {
                pre = cursor;
            }

            cursor = cursor.next;
        }

        return dummyNode.next;

    }
}
// @lc code=end
