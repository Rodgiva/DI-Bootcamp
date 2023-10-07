class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, value):
        a_node = Node(value)
        if self.head == None:
            self.head = a_node
            return
        else:
            next_node : Node = self.append(value).next
            if next_node.next == None:
                # here attach a new node, but I've got an infinite loop
                node = Node(value)
                return node
            return next_node

linkedList = LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

# node1 ("a", None)
# node2 ("b", node1)
# node3 ("c", node2)

# I didn't find a solution yet