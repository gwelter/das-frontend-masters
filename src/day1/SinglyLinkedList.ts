export default class SinglyLinkedList<T> {
  public length: number;
  public listNode: ListNode<T> | undefined = undefined;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    const node: ListNode<T> = { value: item };
    if (!this.listNode) {
      this.listNode = node;
    } else {
      node.next = this.listNode;
      this.listNode = node;
    }
    this.length++;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) return undefined;
  }
  append(item: T): void {
    const newNode: ListNode<T> = { value: item };
    if (!this.listNode) {
      this.listNode = newNode;
    } else {
      let node = this.listNode;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.length++;
  }

  remove(item: T): T | undefined {
    if (!this.listNode) return undefined;
    if (this.listNode.value === item) {
      const value = this.listNode.value;
      this.listNode = this.listNode.next;
      this.length--;
      return value;
    }
    let node = this.listNode;
    while (node.next) {
      if (node.next.value === item) {
        const value = node.next.value;
        node.next = node.next.next;
        this.length--;
        return value;
      } else {
        node = node.next;
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) return undefined;

    let i = 0;
    let node = this.listNode;
    while (node) {
      if (i == idx) {
        return node.value;
      } else {
        node = node.next;
        i++;
      }
    }
    return undefined;
  }
  removeAt(idx: number): T | undefined {
    if (idx > this.length) return undefined;
    if (idx === 0 && this.listNode) {
      const value = this.listNode.value;
      this.listNode = this.listNode.next;
      this.length--;
      return value;
    }
    let i = 0;
    let node = this.listNode;
    while (node) {
      if (i + 1 == idx && node.next) {
        const value = node.next.value;
        node.next = node.next.next;
        this.length--;
        return value;
      } else {
        node = node.next;
        i++;
      }
    }
    return undefined;
  }
}
