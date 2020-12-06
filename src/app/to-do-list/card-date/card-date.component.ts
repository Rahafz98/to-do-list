import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-date',
  templateUrl: './card-date.component.html',
})
export class CardDateComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void  {}

 today = new Date();
 day = this.today.getDate();
 month =  this.today.toLocaleString('default', { month: 'short' }).toUpperCase();
 year = this.today.getFullYear();   
 dayString = this.today.toLocaleDateString('default', { weekday: 'long' }).toUpperCase(); 




                                                }
