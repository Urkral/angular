import { Component} from '@angular/core';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.scss']
})
export class ExoComponent  {
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp

  isActive(){
    this.isSelected = !this.isSelected
    this.affiche = !this.affiche
  }
  
  isSelected : boolean|undefined
  affiche:boolean=false
}
