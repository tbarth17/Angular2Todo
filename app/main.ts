import {bootstrap}    from 'angular2/platform/browser';
import {Component}    from 'angular2/core';
import {TodoInput}    from './todo-input';
import {TodoService}  from './todo-service';

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: `<h1>My First Angular 2 App</h1>
    <div>
      <todo-input></todo-input>
    </div>`
})
class App {}

bootstrap(App, [TodoService]);
