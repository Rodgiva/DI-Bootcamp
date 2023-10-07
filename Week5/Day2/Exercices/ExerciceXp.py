# 🌟 Exercise 1: Task Scheduler
# Instructions

# Write a Python program that simulates a task scheduler using a queue. The program should:

#     Add a task to the queue with a description and priority level.
#     Execute the next task based on its priority (First-In-First-Out if priority levels are the same).
#     Show the current task queue.

# Use Python’s collections.deque for the queue implementation.


# Example:
# Add task: "Clean room", priority: 2
# Add task: "Do homework", priority: 1
# Execute next task -> Output: Executing task: Do homework
# Show task queue -> Output: Task Queue: [("Clean room", 2)]

from collections import deque

a_queue = deque()
tasks = [("Clean room", 2), ("Do homework", 1), ("Go out", 2), ("Eat", 1), ("Play with dog", 2), ("Else", 2)]

def add_tasks(tasks):
    if len(a_queue) == 0:
        a_queue.append(tasks[0])
    for i in range(1, len(tasks)):
        if tasks[i][1] <= a_queue[0][1]:
            print(f"{tasks[i][1]} - {a_queue[0][1]}")
            a_queue.appendleft(tasks[i])
        elif tasks[i][1] >= a_queue[0][1]:
            a_queue.append(tasks[i])
    print(a_queue)

add_tasks(tasks)

def task_scheduler(queue: deque):
    while len(queue) != 0:
        print(queue[0][0])
        queue.popleft()

    return queue

a_queue = task_scheduler(a_queue)
# I think that I didn't understand well the exercice


# 🌟 Exercise 2: Palindrome Checker

# Create a Python function to check if a given word or phrase is a palindrome using a queue. Ignore spaces and case sensitivity.


# Example:
# check_palindrome("Racecar") -> Output: True
# check_palindrome("hello") -> Output: False

from collections import deque

a_word = "Racecar"
a_word2 = "hello"
def check_palindrome(word):
    a_queue = deque(word.lower())
    a_queue.reverse()
    word_rorated = "".join(a_queue)
    
    if word.lower() == word_rorated:
        return True
    return False

print(check_palindrome(a_word))



# 🌟 Exercise 3: Merge Two Sorted Linked Lists

# Part 1: Create the Node Class

# Your first task is to create a Node class. This class should contain:

#     An __init__ method that initializes two attributes:
#         value, which holds the data the node will store.
#         next, which is a reference to the next node in the list. It should be initialized as None.


# This class serves as the building block for creating your linked list.
    
# Part 2: Create the LinkedList Class

# Your next step is to create a LinkedList class. This class should contain:

#     An __init__ method that initializes a head attribute as None.
#     An append method to add new nodes to the end of the list:
#         Create a new node with the given value using the Node class.
#         If the head is None, make this new node the head.
#         Otherwise, traverse the list to find the last node and attach the new node there.

# This class will serve as a wrapper around the Node objects and will offer a way to manipulate the linked list.


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
                # here I don't know how to attach a new node, and I've got an infinite loop
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