import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{
@Input ("data") element:any;
  constructor(){
    console.log(this.element);
    
  }
}

