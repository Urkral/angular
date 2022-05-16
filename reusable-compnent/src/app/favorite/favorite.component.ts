import { Component, Input, Output,EventEmitter } from '@angular/core';
import { faStar as sS } from '@fortawesome/free-solid-svg-icons';
import { faStar as sR} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent{

  starS = sS
  starR = sR
  
  @Input("isFavorite") isFav : boolean|undefined
  
  // setFavorite(){
  //   this.isFav = !this.isFav
  // }
  
  @Output("change") change = new EventEmitter();
  // setFavorite(){
  //   this.isFav = ! this.isFav
  //   this.change.emit();
  // }
  setFavorite(){
    this.isFav = ! this.isFav
    this.change.emit(this.isFav);
  }

}
