import { Component, OnInit } from '@angular/core';
import { Todo1Service } from '../todo1.service';

import { Itodo } from '../model/todo';
import { SnackbarService } from '../snack-bar.service';

@Component({
  selector: 'app-todo1-list',
  templateUrl: './todo1-list.component.html',
  styleUrls: ['./todo1-list.component.scss']
})
export class Todo1ListComponent implements OnInit {
 

todoArr:Itodo[]=[]

  constructor(
    private _todoService : Todo1Service,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchAllTodos()
    .subscribe(res=>{
      this.todoArr=res
    })
    console.log(this.todoArr);
    
  }

  onRemove(todoId:string){
       let getConfirm = confirm(`Are You Sure,You Want to remove !!!`)
  if(getConfirm){
     console.log(todoId);
    this._todoService.removeT(todoId)
    .subscribe({
      next:res=>{
        console.log(res);
        this._snackBarService.openSnackBar(`The todo item with id ${res} is removed successfully !!!`)
      }
    })
  }
  
  }
  
  onEdit(todo:Itodo){
    console.log(todo);
    this._todoService.editTodoObj$.next(todo)
  }
}
