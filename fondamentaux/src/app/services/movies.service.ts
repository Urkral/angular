import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(){
    return ["Seigneur des babouins", "La planéte des Seb", "Goulawge a awesome film", "Pirates des carapils"]
  }
}
