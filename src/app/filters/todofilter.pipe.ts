import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(values: Todo[], filterString: string): Todo[] {
    if (values.length == 0 || !filterString)
      return values;

     let filteredTodos = [];
     for(let todo of values) {
       if(todo.task.toLowerCase().includes(filterString.toLowerCase())) {
        filteredTodos.push(todo);
       }
     }

     return filteredTodos;
  }
}
