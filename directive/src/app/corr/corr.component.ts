import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'corr',
  templateUrl: './corr.component.html',
  styleUrls: ['./corr.component.scss']
})
export class CorrComponent{
  @Input('title') title: string|any

  isExpand : boolean | any
  cUp = faChevronUp
  cDo = faChevronDown
  toggle(){
    this.isExpand=!this.isExpand
  }

}
