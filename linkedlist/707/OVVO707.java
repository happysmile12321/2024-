/**
 * @Author: OVVO
 * @Description: TODO
 * @Date: Created in 21:48 2024/3/2
 * @Modified By:
 */
public class OVVO707 {

}


class MyLinkedList {

    ListNode head;
    int size;

    private class ListNode {
        int val;
        ListNode next;
        ListNode pre;
    }

    public MyLinkedList() {
    }

    public int get(int index) {
        if (index > size - 1) {
            return -1;
        }

        ListNode dummy = head;

        for (int i = 0; i < index; i++) {
            dummy = dummy.next;
        }
        return dummy.val;
    }

    public void addAtHead(int val) {
        size++;
        ListNode listNode = new ListNode();
        listNode.val = val;

        if (head == null) {
            head = listNode;
            return;
        }

        listNode.next = head;
        head = listNode;
    }

    public void addAtTail(int val) {
        ListNode listNode = new ListNode();
        listNode.val = val;
        size++;

        if (head == null) {
            head = listNode;
            return;
        }

        ListNode dummy = head;
        while (dummy.next != null) {
            dummy = dummy.next;
        }

        dummy.next = listNode;
    }

    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }
        ListNode dummy = new ListNode();
        dummy.next = head;
        ListNode listNode = new ListNode();
        listNode.val = val;

        if (index==0){
            addAtHead(val);
            return;
        }

        for (int i = 0; i < index; i++) {
            dummy = dummy.next;
        }

        listNode.next = dummy.next;
        dummy.next = listNode;
        size++;
    }

    public void deleteAtIndex(int index) {
        if (index > size - 1) {
            return;
        }

        size--;
        if (index == 0) {
            head = head.next;
            return;
        }

        ListNode tmp = new ListNode();
        tmp.next = head;

        for (int i = 0; i < index; i++) {
            tmp = tmp.next;
        }


        tmp.next = tmp.next.next;
    }
}

