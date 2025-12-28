import { Injectable } from '@angular/core';
import { Istd } from './model/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  editObj$ : Subject<Istd> = new Subject
 
  constructor() { }

  studentArr:Array<Istd>=[
    {
      fname:'Jhon',
      lname:'Doe',
      email:'Jhon@gmail.com',
      contact:8983758493,
      stdId:'123'
    },{
      fname:'May',
      lname:'Doe',
      email:'May@gmail.com',
      contact:9983758493,
      stdId:'124'
    }
  ]

  fetchStd():Observable<Istd[]>{
    return of(this.studentArr)
  }

  createStd(std:Istd):Observable<Istd>{
    this.studentArr.unshift(std)
    return of(std)
  }  

  removeStd(id:string):Observable<string>{
    let i = this.studentArr.findIndex(p=>p.stdId === id)
    this.studentArr.splice(i,1)
    return of(id)
  }

  updatestd(std:Istd):Observable<Istd>{
    let i = this.studentArr.findIndex(p=>p.stdId === std.stdId)
    this.studentArr[i]=std
    return of(std)
  }
}

