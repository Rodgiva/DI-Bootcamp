export class todoList {
    constructor(tasks = []) {
        this.tasks = tasks
    }

    add(aTaskName) {
        let aTask = {
            name: aTaskName,
            done: false
        }
        this.tasks.push(aTask)
    }

    markTask(aTaskName) {
        this.tasks.forEach(element => {
            if (element.name === aTaskName) {
                element.done = true
            }
        });
    }

    listTasks() {
        this.tasks.forEach(element => {
            console.log(element);
        });
    }
}