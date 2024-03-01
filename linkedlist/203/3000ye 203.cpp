class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        // 特判，删除开头的所有匹配项
        while (head and head->val == val) head = head->next;

        auto p = head;
        while (p and p->next) {  // 遍历删除其余节点
            if (p->next->val == val) p->next = p->next->next;
            else p = p->next;
        }

        return head;
    }
};
