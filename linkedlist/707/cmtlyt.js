var MyLinkedNode = function (val, next = null) {
  this.next = next;
  this.val = val;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  let curr = new MyLinkedNode(null, this.head);
  while (index-- >= 0) curr = curr.next;
  return curr;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length || index < 0) return -1;
  return this.getNode(index)?.val ?? -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new MyLinkedNode(val, this.head);
  this.head = node;
  ++this.length;
  if (!this.tail) this.tail = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const oldTail = this.tail;
  const node = new MyLinkedNode(val);
  this.tail = node;
  ++this.length;
  if (oldTail) oldTail.next = node;
  else this.head = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);
  if (index > this.length || index < 0) return;
  const prevNode = this.getNode(index - 1);
  prevNode.next = new MyLinkedNode(val, prevNode.next);
  ++this.length;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0) return;
  if (index === 0) return (this.head = this.head?.next || null), void 0;
  const prevNode = this.getNode(index - 1);
  prevNode.next = prevNode.next.next;
  if (!prevNode.next) this.tail = prevNode;
  --this.length;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// 测试代码

function getList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function test(funcs, values) {
  const linkedList = new MyLinkedList();
  const result = [];
  values = values.slice(1);
  funcs.slice(1).forEach((func, idx) => {
    console.log(idx);
    const startList = getList(linkedList.head);
    console.log(
      "start=>",
      func,
      values[idx],
      startList,
      startList.length,
      linkedList.length
    );
    const val = linkedList[func].apply(linkedList, values[idx]);
    result.push(val);
    console.log("end=>", func, getList(linkedList.head), val);
  });
  return result;
}

const funcs = [
  "MyLinkedList",
  "addAtHead",
  "addAtTail",
  "addAtTail",
  "get",
  "get",
  "addAtTail",
  "addAtIndex",
  "addAtHead",
  "addAtHead",
  "addAtTail",
  "addAtTail",
  "addAtTail",
  "addAtTail",
  "get",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "addAtIndex",
  "addAtHead",
  "addAtTail",
  "deleteAtIndex",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "addAtTail",
  "get",
  "addAtIndex",
  "addAtTail",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "addAtTail",
  "addAtHead",
  "addAtHead",
  "get",
  "deleteAtIndex",
  "addAtTail",
  "addAtTail",
  "addAtHead",
  "addAtTail",
  "get",
  "deleteAtIndex",
  "addAtTail",
  "addAtHead",
  "addAtTail",
  "deleteAtIndex",
  "addAtTail",
  "deleteAtIndex",
  "addAtIndex",
  "deleteAtIndex",
  "addAtTail",
  "addAtHead",
  "addAtIndex",
  "addAtHead",
  "addAtHead",
  "get",
  "addAtHead",
  "get",
  "addAtHead",
  "deleteAtIndex",
  "get",
  "addAtHead",
  "addAtTail",
  "get",
  "addAtHead",
  "get",
  "addAtTail",
  "get",
  "addAtTail",
  "addAtHead",
  "addAtIndex",
  "addAtIndex",
  "addAtHead",
  "addAtHead",
  "deleteAtIndex",
  "get",
  "addAtHead",
  "addAtIndex",
  "addAtTail",
  "get",
  "addAtIndex",
  "get",
  "addAtIndex",
  "get",
  "addAtIndex",
  "addAtIndex",
  "addAtHead",
  "addAtHead",
  "addAtTail",
  "addAtIndex",
  "get",
  "addAtHead",
  "addAtTail",
  "addAtTail",
  "addAtHead",
  "get",
  "addAtTail",
  "addAtHead",
  "addAtTail",
  "get",
  "addAtIndex",
];
const values = [
  [],
  [84],
  [2],
  [39],
  [3],
  [1],
  [42],
  [1, 80],
  [14],
  [1],
  [53],
  [98],
  [19],
  [12],
  [2],
  [16],
  [33],
  [4, 17],
  [6, 8],
  [37],
  [43],
  [11],
  [80],
  [31],
  [13, 23],
  [17],
  [4],
  [10, 0],
  [21],
  [73],
  [22],
  [24, 37],
  [14],
  [97],
  [8],
  [6],
  [17],
  [50],
  [28],
  [76],
  [79],
  [18],
  [30],
  [5],
  [9],
  [83],
  [3],
  [40],
  [26],
  [20, 90],
  [30],
  [40],
  [56],
  [15, 23],
  [51],
  [21],
  [26],
  [83],
  [30],
  [12],
  [8],
  [4],
  [20],
  [45],
  [10],
  [56],
  [18],
  [33],
  [2],
  [70],
  [57],
  [31, 24],
  [16, 92],
  [40],
  [23],
  [26],
  [1],
  [92],
  [3, 78],
  [42],
  [18],
  [39, 9],
  [13],
  [33, 17],
  [51],
  [18, 95],
  [18, 33],
  [80],
  [21],
  [7],
  [17, 46],
  [33],
  [60],
  [26],
  [4],
  [9],
  [45],
  [38],
  [95],
  [78],
  [54],
  [42, 86],
];

test(funcs, values);
