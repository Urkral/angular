import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  book: object[] | any;
  title: string = "Mes auteurs <3";
  
  constructor(services: BookService) { 
    this.book = services.getBook();
  }
  
  

  // ngOnInit(): void {
  //   let services = new BookService()
  //   console.log(this.book);
  // }




  getTitle(){
    return this.title;
  }

}
