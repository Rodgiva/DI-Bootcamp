from collections import deque # double ended queue 

queue = deque() # initialize

queue.append(1) # NODE 1
queue.append(2) # NODE 2
queue.append(3) # NODE 3

#  NODE 1(value=1, next=NODE 2)
queue.pop()
#  NODE 2(value=2, next=None)







print(queue.popleft()) # O(1)
print(queue.pop()) # O(1)
print(queue.pop()) # O(1)

print("Length", len(queue)) # O(1)
