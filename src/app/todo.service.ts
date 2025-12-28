import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Itodo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

studyTodoArr:Array<Itodo>= [
  { todoItem: 'Java', todoId: '201' },
  { todoItem: 'TypeScript', todoId: '202' },
  { todoItem: 'React', todoId: '203' },
  { todoItem: 'Node JS', todoId: '204' }
];

editStudyT : Subject<Itodo> =  new  Subject
constructor() { }

fetchAllSTodo():Observable<Itodo[]>{
  return of(this.studyTodoArr)
}

createStudyT(s:Itodo):Observable<Itodo>{
 this.studyTodoArr.push(s)
 return of(s)
}

reoveStud(id:string):Observable<string>{
  let  i = this.studyTodoArr.findIndex(p=>p.todoId === id)
  this.studyTodoArr.splice(i,1)
  console.log(this.studyTodoArr);
  return of(id)
  
}

updateStudyT(updatedObj:Itodo):Observable<Itodo>{
  let i = this.studyTodoArr.findIndex(p=>p.todoId === updatedObj.todoId)
  this.studyTodoArr[i]=updatedObj

  return of(updatedObj)
}

}
