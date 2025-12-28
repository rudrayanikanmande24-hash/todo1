import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Istd } from '../model/student';
import { SnackbarService } from '../snack-bar.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

 studentArr:Istd[]=[]

  constructor(
    private _stdService : StudentService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdService.fetchStd()
     .subscribe(res=>{
        this.studentArr=res
     })
     console.log(this.studentArr);
     
  }

  onEdit(std:Istd){
    console.log(std);
    this._stdService.editObj$.next(std)
  } 

  onRemove(std:string){
   let getConfirm = confirm(`Are You Sure,You Want to remove !!!`)
   if(getConfirm){
     console.log(std);
    this._stdService.removeStd(std)
     .subscribe({
      next:res=>{
        console.log(res);
         this._snackbar.openSnackBar(`The Std with id {res} remove succesfully !!!`)
      }
     })
   }
  }
}
