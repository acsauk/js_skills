class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  prepare() {
    this.tasks.forEach(task => task.toGulp());
    }
}

class Task {
  toGulp() {
    console.log('converting to gulp');
  }
}

new TaskCollection([
  new Task, new Task, new Task
]).prepare();
