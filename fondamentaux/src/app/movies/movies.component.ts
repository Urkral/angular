import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localFr, 'fr')


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  title: string = "Les babouins";
  movies: string[] | undefined;
  imgUrl= "https://picsum.photos/400/200"
  cols:number = 2;
  isActive:boolean = true;



  constructor(service: MoviesService){ // singleton est une classe qu'on instencie une seule fois 
    this.movies = service.getMovies()
  }


  ngOnInit(): void{
    // let service = new MoviesService();
    // this.movies = service.getMovies()
  }


  getTitle(){
    return this.title
  }

  onSave(){
    console.log('Le bouton a bien été cliqué ');
    
  }
  onSave2($event:Event){
    console.log("Le bouton à été cliqué ", $event);
  }
  onSave3($event:Event){
    console.log('Un nain est apparu',$event);
  }
  onDivClicked(){
    console.log('La div a été cliquée');
    
  }
  /* ----------------------------- Méthode de papy ---------------------------- */
  // onKeyUp($event:KeyboardEvent){
  //   if($event.keyCode == 13) console.log('Entrez' ,$event);
  //   ;
  // }

  /* ---------------------------- Nouvelle méthode ---------------------------- */
    onKeyUp(){
      console.log('Bjr bastard');
    }
    /* ------------------------------------ - ----------------------------------- */
    onKeyUp2($event:any){
      console.log($event.target.value);
    }

    
    onKeyUp3(email:any){
      console.log(email);
    }
    monEmail:string="Esteboeuf@gmail.com"
    onKeyUp4(){
      console.log(this.monEmail);
    }

    // Truc super utiles, marche trés bien
    tonEmail:string="Cararéli@gmail.com"
    onKeyUp5(){
      console.log(this.tonEmail);
    }
      faCoffee = faCoffee;

      course = {
        title : 'Les pipes pour les nulles',
        rating: 9.5565,
        student : '3580',
        price: 199.99,
        releaseDate: new Date(2020, 1, 1)
      }
      text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ad autem, deleniti perferendis incidunt id expedita harum quae. Commodi exercitationem tempore voluptate culpa accusamus laudantium temporibus alias voluptas numquam expedita.'   
}
 