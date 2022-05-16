import { Component, Input } from '@angular/core';
import { faHeart as t} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent{
heart = t
heart2 = faHeart

@Input("likesCount") compteur : any
@Input("isLiked") isAime : any

// @Input("color") color:string ='chartreuse'

action(){
  this.isAime = !this.isAime
  this.isAime ? this.compteur++ : this.compteur--
}



  


}
