import java.util.ArrayList;

/**
 * @Author: OvvO
 * @Description: TODO
 * @Date: Created in 21:03 2024/3/2
 * @Modified By:
 */
public class OvvO {
    public ListNode reverseList(ListNode head) {
        ArrayList<ListNode> listNodes = new ArrayList<>();
        while (head != null) {
            listNodes.add(head);
            head = head.next;
        }

        ListNode dummy = new ListNode();
        ListNode pre = dummy;

        for (int i = listNodes.size() - 1; i >= 0; i--) {
            pre.next = listNodes.get(i);
            listNodes.get(i).next = null;
            pre = pre.next;
        }

        return dummy.next;
    }

    public ListNode reverseList2(ListNode head) {
        ListNode pre = null;
        ListNode cur = head;
        ListNode tmp = null;
        while(cur!=null) {
            tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }
        return pre;
    }
}
