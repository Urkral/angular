import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExoComponent } from './exo/exo.component';
import { CorrComponent } from './corr/corr.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    CorrComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
