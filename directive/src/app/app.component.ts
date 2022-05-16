import { Component } from '@angular/core';
import { faStar as rStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as sStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
  list=[1,2,3]
  lesson=false  // renvoie a l'html dans le ngTemplate
  // list=[]
  viewMode = 'map'
  courses=[
    {id:1,name:'course'},
    {id:2,name:'course'},
    {id:3,name:'course'},
  ]

  onAdd(){
    this.courses.push({id:this.courses.length ,name:`course`});
  }

  onRemove(course:any){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }

  onChange(course:any){
    course.name="Updated"
  }

onClick(){
  this.isSelected = !this.isSelected
}
faChevronDown = faChevronDown
faChevronUp = faChevronUp
  sStar = sStar
  rStar = rStar
  isSelected : boolean| undefined
  canSave = true
}

