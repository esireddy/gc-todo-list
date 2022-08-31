import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() onAddTask = new EventEmitter();

  newTask : Todo;

  constructor() { 
    this.newTask = {taskId: 0, completed : false, task : "" };
  }

  ngOnInit(): void {
  }

  OnSubmit() { 
    this.onAddTask.emit(this.newTask);
    this.newTask = {taskId: 0, completed : false, task : "" };
  }
}
