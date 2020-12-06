import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 url:string;
  constructor(private http: HttpClient,) { 
    this.url = 'http://localhost:3000/task';}



    getTasks(){
      return this.http.get<Task>(this.url);}

    
    addTask(id:number, content:string){
      const isChecked = false;
      const taskData:Task = {id,content,isChecked};
      return this.http.post<Task>(this.url,taskData);}


    deleteTask(task:Task){
      let id: number = task.id;
      let endPoints = "/" + id;
      return this.http.delete(this.url+endPoints);}
      

    updateTask(editedTask: string, task:Task){
      let id: number = task.id;
      let endPoints = "/" + id;
      let taskData = { id:id, content: editedTask, isChecked: task.isChecked }
      return this.http.put(this.url+endPoints,taskData);}

    checkTask(isChecked:boolean,task:Task){
      let id: number =  task.id;
      let endPoints = "/" + id;
      let taskData:Task = {id:id, content: task.content,  isChecked: isChecked };
      return this.http.put(this.url+endPoints,taskData);}



  }



