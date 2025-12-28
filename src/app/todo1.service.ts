import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { Itodo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class Todo1Service {

  editTodoObj$ : Subject<Itodo> = new Subject

  todoArr:Array<Itodo>=[
      {
          todoItem:'JS',
          todoId:'123'
      },{
          todoItem:'HTML',
          todoId:'124'
      },{
          todoItem:'CSS',
          todoId:'125'
      },{
          todoItem:'Angular',
          todoId:'126'
      }
    ]

  constructor() { }

   fetchAllTodos():Observable<Array<Itodo>>{
      return of(this.todoArr)
    }

    createTodo(t:Itodo):Observable<Itodo>{
      this.todoArr.push(t)
      return of(t)
    }

    removeT(id:string):Observable<string>{
      let  i = this.todoArr.findIndex(p=>p.todoId === id)
  this.todoArr.splice(i,1)
  console.log(this.todoArr);
  return of(id)
    }

    update(uodateObj:Itodo):Observable<Itodo>{
      let i = this.todoArr.findIndex(p=>p.todoId === uodateObj.todoId)
      this.todoArr[i]=uodateObj
      return of(uodateObj)
    }
}
