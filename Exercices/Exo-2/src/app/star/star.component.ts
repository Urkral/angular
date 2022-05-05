import { Component, OnInit } from '@angular/core';
import { faStar, faStar as star1} from '@fortawesome/free-regular-svg-icons';
import { faStar as star2 } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent{
  faStar=star1
  faStar2=star2
  isActive:boolean= true;
  icon: any = faStar;
  activate(){
    this.isActive = !this.isActive;
  }
}
