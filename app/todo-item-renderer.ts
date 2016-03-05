import {Component, Input, Output, EventEmitter}  from 'angular2/core';

@Component({
  selector: 'todo-item-renderer',
  template: `<div>
              <span [ngClass]="todo.status">{{ todo.title }}</span>
              <button *ngIf='todo.status == "started"' (click)='toggle.emit(todo)'>Complete task</button>
              <button *ngIf='todo.status == "completed"' (click)='toggle.emit(todo)'>Open task</button>
            </div>`
})

export class TodoItemRenderer {
  @Input () todo;
  @Output () toggle = new EventEmitter ();
}
