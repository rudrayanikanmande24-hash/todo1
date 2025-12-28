import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Todo1Service } from '../todo1.service';
import { UuidService } from '../uuid.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../model/todo';
import { SnackbarService } from '../snack-bar.service';

@Component({
  selector: 'app-todo1-form',
  templateUrl: './todo1-form.component.html',
  styleUrls: ['./todo1-form.component.scss']
})
export class Todo1FormComponent implements OnInit {

  @ViewChild('todoForm') todoForm ! : NgForm
  private _todoService = inject(Todo1Service)
  private _uuidService = inject(UuidService)
  private _snckBarService = inject(SnackbarService)
  isEodt:boolean=false
  editObj!:Itodo
  constructor() { }

  ngOnInit(): void {
   this._todoService.editTodoObj$
   .subscribe(res=>{
    this.isEodt=true
    console.log('Get Edit Object',res);
    this.editObj=res
    this.todoForm.form.patchValue(res)
   })
  }

  onTodoAdd(){
      if(this.todoForm.valid){
        let obj={...this.todoForm.value,todoId:this._uuidService.uuid()}
        console.log(obj);
         this.todoForm.reset()
          this._todoService.createTodo(obj)
          .subscribe({
            next:res=>{
              console.log(res);
              this._snckBarService.openSnackBar(`The Todo Item ${res.todoItem} added successfully`)
              
            },
            error:err=>{
              console.log(err);
              this._snckBarService.openSnackBar(`Something went wrong !!!`)
              
            }
          })
      }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let UpdateObj:Itodo={
        ...this.todoForm.value,todoId:this._uuidService.uuid()
      }
      console.log(UpdateObj);
      this._todoService.update(UpdateObj)
      .subscribe({
        next:res=>{
          console.log(res);
          this.todoForm.reset()
          this.isEodt=false
          this._snckBarService.openSnackBar(`Todo Item with id ${UpdateObj.todoId} is update successfully !!!`)
        } 
      })
    }
  }

}
