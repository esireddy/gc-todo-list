import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() Item: Todo;
  @Output() completeTask = new EventEmitter();
  @Output() removeTask = new EventEmitter();

  constructor() { 
    this.Item = {taskId: 0, completed : false, task : ""  };
  }

  ngOnInit(): void {
  }

  onComplete(): void {
    this.completeTask.emit(this.Item);
  }

  onRemove(): void {
    this.removeTask.emit(this.Item);
  }
}
