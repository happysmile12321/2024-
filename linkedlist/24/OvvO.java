/**
 * @Author: OvvO
 * @Description: TODO
 * @Date: Created in 19:31 2024/3/2
 * @Modified By:
 */
public class OvvO {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode();
        dummy.next = head;
        ListNode pre = dummy;

        if (head == null || head.next == null) {
            return head;

        }


        while (pre.next != null && pre.next.next != null) {
            ListNode node1 = pre.next;
            ListNode node2 = pre.next.next;

            pre.next = node2;
            node1.next = node2.next;
            node2.next = node1;

            pre = node1;
        }

        return dummy.next;
    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
