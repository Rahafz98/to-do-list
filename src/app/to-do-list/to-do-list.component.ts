import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { toASCII } from 'punycode';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',})

export class ToDoListComponent implements OnInit {
  @ViewChild('taskContent') task: ElementRef;
  showField = false;
  tasks:any  = [];
  editClicked = false;
  url: string;

  constructor(private readonly tasksService: TasksService) {}
  


  // to display the tasks when the page loads
  ngOnInit(): void {this.fetchTasks();}

  
  //Get Data
  fetchTasks(){
    this.tasksService.getTasks().subscribe(response => {this.tasks = response;});}
  //----------------------------------------------------------------------------------------------

  //Post Data
  addTask() {
    let id = this.generateId();
    const content = this.task.nativeElement.value;
    this.tasksService.addTask(id,content).subscribe(responseData => {
         this.tasks.push(responseData);
         this.showField = false;
         id++;});}
  //----------------------------------------------------------------------------------------------

  //delete task 
  deleteTask( index:number, task: Task){
    this.tasksService.deleteTask(task).subscribe(responseData => {
        this.tasks.splice(index,1);});}
  //----------------------------------------------------------------------------------------------

  //update task
  editTask(editedTask: string, task:Task, index: number){
    this.tasksService.updateTask(editedTask,task).subscribe(responseData => {
      this.tasks[index] = responseData; 
      });}
  //----------------------------------------------------------------------------------------------

  //task checked
      checkTask(isChecked:boolean,task:Task, index:number){
       this.tasksService.checkTask(isChecked,task).subscribe(responseData => {
       this.tasks[index] = responseData; 
      });}
  //----------------------------------------------------------------------------------------------
  //generta id
      generateId(){
        let id:number;
        if (this.tasks.length != 0 ){ 
          let task:Task = this.tasks[(this.tasks.length)-1];
          id = (task.id)+1; }
        else{ id = 1;}
          return id;
         }                             
                                  

      }
    

  

