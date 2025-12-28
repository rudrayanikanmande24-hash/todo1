import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snack-bar.service';
import { Istd } from '../model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @ViewChild('stdForm') stdForm ! : NgForm
  isEdit:boolean=false
  eidtObj!:Istd
  constructor(
    private _stdService : StudentService,
    private _uuidService : UuidService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdService.editObj$
     .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object', res);
      this.eidtObj=res
      this.stdForm.form.patchValue(res)
     })
  }
  

  onAdd(){
    if(this.stdForm.valid){
      let stdObj={
        ...this.stdForm.value,
        stdId:this._uuidService.uuid()
      }
      console.log(stdObj);
      this.stdForm.reset()
      this._stdService.createStd(stdObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this._snackBar.openSnackBar('The todo Item ${res.todoItem} added successfully !!!')
        },
        error:err=>{
          console.log(err);
          this._snackBar.openSnackBar(err)
        }
       })
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updateObj={
        ...this.stdForm.value,
        stdId:this.eidtObj.stdId
      }
      console.log(updateObj);
      this._stdService.updatestd(updateObj)
        .subscribe({
          next:res=>{
            console.log(res);
            this.stdForm.reset()
            this.isEdit=false
            this._snackBar.openSnackBar(`Std with id ${updateObj.stdId} is updated successfullt !!`)
          },
          error:err=>{
            console.log(err);
            this._snackBar.openSnackBar(err)
          }
        })
    }
  }
}
