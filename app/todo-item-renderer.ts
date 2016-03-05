import {Component, Input}  from 'angular2/core';

@Component({
  selector: 'todo-item-renderer',
  template: `<div>
              <span [ngClass]="todo.status">{{ todo.title }}</span>
              <button *ngIf='todo.status == "started"' (click)='todo.toggle()'>Complete task</button>
              <button *ngIf='todo.status == "completed"' (click)='todo.toggle()'>Open task</button>
            </div>`
})

export class TodoItemRenderer {
  @Input() todo;
}
