import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/todo';
import { TodofilterPipe } from 'src/app/filters/todofilter.pipe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  title: string;
  subtitle: string;
  taskFilter: string;

  constructor() { 
    this.title =  "To-Do List";
    this.subtitle = "A place to store your todos";
    this.todos = [];
    this.taskFilter = "";    
  }

  ngOnInit(): void {
    this.intializeTodoTasks();
  }

  intializeTodoTasks(): void {
    this.todos.push({taskId: 1, completed : false, task : "fold clothes" });
    this.todos.push({taskId: 2, completed : false, task : "clothes in dresser" });
    this.todos.push({taskId: 3, completed : true,  task : "workouts" });
    this.todos.push({taskId: 4, completed : true,  task : "groceries" });
    this.todos.push({taskId: 5, completed : true,  task : "library books" });
  }

  onAddNewTask(newTask: Todo): void {
    let taskTobeAdded = Object.assign({}, newTask);
    let newIds = this.todos.map(x => x.taskId);
    taskTobeAdded.taskId = Math.max(...newIds) + 1;
    this.todos.push(taskTobeAdded);
  }

  onCompleteTask(task: Todo): void {
    let taskToUpdate = this.todos.filter(x => x.taskId === task.taskId);

    if(taskToUpdate.length > 0)
    {
      taskToUpdate[0].completed = true;
    }
  }

  onRemoveTask(task: Todo) : void {

    let taskRemoveIndex = this.todos.findIndex(x => x.taskId ===  task.taskId);

    if(taskRemoveIndex >= 0)
    {
        this.todos.splice(taskRemoveIndex, 1);
    }
  }
}
