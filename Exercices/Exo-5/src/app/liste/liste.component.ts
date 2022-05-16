import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  @Input("data") element: any;
  
}
