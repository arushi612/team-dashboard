import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{Member} from './member.component';
import { AppComponent } from './app.component';
import{Team}from './team.component'
import{MyData}from './mydata.directive';
import {Hero} from './hero.component';
@NgModule({
  declarations: [
    AppComponent,
    Member,
    Team,
    MyData,
    Hero
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
