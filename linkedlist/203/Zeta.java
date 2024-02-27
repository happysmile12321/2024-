class Solution {
    public ListNode removeElements(ListNode cur, int val) {
        
        if (cur == null) return null;
        ListNode next = removeElements(cur.next, val);
        if (cur.val == val) {
            return next;
        } else {
            cur.next = next;
            return cur;
        }
    }
}
