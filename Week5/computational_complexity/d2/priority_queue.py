from queue import PriorityQueue

queue = PriorityQueue()

class Whatever:
    pass

what1 = Whatever()
what2 = Whatever()
what3 = Whatever()

queue.put((10, what1))
queue.put((5, what2))
queue.put((3, what3))

print(queue.get())