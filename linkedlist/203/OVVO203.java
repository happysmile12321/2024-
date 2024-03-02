/**
 * @Author: OVVO
 * @Description: TODO
 * @Date: Created in 23:26 2024/3/2
 * @Modified By:
 */
public class OVVO203 {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyNode=new ListNode();
        dummyNode.next=head;
        ListNode prev=dummyNode;
        //确保当前结点后还有结点
        while(prev.next!=null){
            if(prev.next.val==val){
                prev.next=prev.next.next;
            }else{
                prev=prev.next;
            }
        }
        return dummyNode.next;
    }
}
