import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


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
}
