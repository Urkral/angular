import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusable-compnent';

  post = {
    title : "My first post",
    isFave : true,
  }

  // onFavoriteChange(){
  //   console.log("Favorite changed");
  // }


  onFavoriteChange(favori:any){
    console.log(`Faviros changed ${favori}`);

  }

}
