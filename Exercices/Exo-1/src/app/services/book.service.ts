import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  bite = [{nom: 'Maxime', livre: 'Goulagwe'},{nom : 'Les nuls', livre :"Fortnite pour les nusls"},{nom :'Ruby', livre :"Comment vendre l'eau de son bain"}]
  constructor() { }
  getBook(){
    return this.bite
    
  }
}
