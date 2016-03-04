import {Component, Input}  from 'angular2/core';

@Component({
  selector: 'todo-item-renderer',
  template: `<div>
              <span [contentEditable]="todo.status == 'completed'">{{ todo.title }}</span>
              <button *ngIf='todo.status == "started"' (click)='todo.toggle()'>Edit</button>
              <button *ngIf='todo.status == "completed"' (click)='todo.toggle()'>Save</button>
            </div>`
})

export class TodoItemRenderer {
  @Input() todo;
}
