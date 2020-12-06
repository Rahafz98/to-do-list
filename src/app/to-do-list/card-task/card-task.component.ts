import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
})
export class CardTaskComponent implements OnInit {
  @Input() newTask;
  @Input() taskIndex;
  @Input() taskChecked;
  @Output() checked = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<string>();
  editedTask;


  editClicked = false;
  constructor() { }

  ngOnInit(): void {}

  onDelete(index: number){
    this.delete.emit(index); }
  
  onEdit(){
    this.editClicked  = true;}

  onChange(value){
    this.newTask = value;
    this.editedTask = value;}

  saveEdited(){
    this.edit.emit(this.editedTask)
    this.editClicked = false; }

  onCheck(){
    this.taskChecked = true;
    this.checked.emit(this.taskChecked);}

   

}
