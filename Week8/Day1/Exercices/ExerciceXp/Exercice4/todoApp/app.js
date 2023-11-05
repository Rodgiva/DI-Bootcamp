import { todoList } from "./todo.js";

let aTodoList = new todoList()

aTodoList.add("truc")
aTodoList.add("bidule")
aTodoList.add("machin")
aTodoList.add("chose")

aTodoList.markTask("truc")
aTodoList.markTask("machin")

aTodoList.listTasks()
