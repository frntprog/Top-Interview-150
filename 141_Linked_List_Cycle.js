/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

const initializeLinkedListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }

  let head = new Node(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    let newNode = new Node(array[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let current = head;
  let printStr = "";

  while (current) {
    printStr += current.value + "->";
    current = current.next;
  }

  console.log(printStr);
};

var hasCycle = function (head) {
  let values = [];
  let current = head;
  if (!current || !current.next) return false;

  values.push(current.value);
  while (current.next) {
    current = current.next;
    let match = values.find((el) => el === current);
    if (match) {
      return match ? true : 0;
    }
    current ? values.push(current) : 0;
  }
  return false;
};

// *** Floyd's Cycle Finding Algorithm ***

// function hasCycle(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true; // Loop detected
//     }
//   }

//   return false; // No loop found
// }

const head = initializeLinkedListFromArray([
  -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14,
  14, 2, 13, -24, 21, 23, -21, 5,
]);
console.log(head);
printLinkedList(head);
console.log(hasCycle(head));
