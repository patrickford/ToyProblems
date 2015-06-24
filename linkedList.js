var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (this.head === null) {
      this.head = makeNode(value);
      this.tail = this.head
    } 
    else {
      this.tail.next = makeNode(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    toBeRemoved = this.head;
    this.head = this.head.next
    delete toBeRemoved;
    if (this.head === null) {
      toBeRemoved = this.tail;
      this.tail = null;
      delete toBeRemoved;
    }
  };

  list.contains = function(target){
    var currentNode = this.head;
    var result = false;
    while(currentNode){
      if(currentNode.value === target){
        return result = true;
      }
      currentNode = currentNode.next;
    }
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};