import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TutorialsComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
