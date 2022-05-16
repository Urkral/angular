import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BoostrapPnaelComponent } from './boostrap-pnael/boostrap-pnael.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BoostrapPnaelComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
