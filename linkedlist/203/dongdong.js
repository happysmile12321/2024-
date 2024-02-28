/* 递归思想
链表具有递归的性质
递归的时间复杂度是 on n是链表的长度 因为递归的时候需要遍历一次链表
*/

var removeElements = function(head, val) {
    if(head === null){
        return head
    }
    head.next = removeElements(head.next,val)
    return head.val === val? head.next : head
}


/* 迭代思想 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    let temp = dummyHead
    while(temp.next !== null){
        if(temp.next.val === val ){
            temp.next = temp.next.next
        }else{
            temp = temp.next
        }
    }
    return dummyHead.next
}
/* 要新建一个temp去操作删除符合条件的node 返回最后的dummHead.next  他们公用一个数据 */

/* 循环思路 */
var removeElements = function(head, val) {
    while(head && head.val === val){
       head = head.next
    }
    let cur = head
    while(cur){
        while(cur.next?.val === val){
            cur.next = cur.next.next
            
        }
        cur = cur.next
    }
    return head
}