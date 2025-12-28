import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matSnackBar : MatSnackBar
  ) { }

  openSnackBar(msg:string){
    this._matSnackBar.open(msg,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
  }
  
}
