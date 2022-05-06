import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localFr, 'fr')

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent  {
  film:string="";
}
