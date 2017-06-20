import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import{Team}from './team.component'
import{MyData}from './mydata.directive';
import {Hero} from './hero.component';
import{Main} from './main.component';
import {RouterModule} from '@angular/router';
import{Default}from './default.component';

@NgModule({
  declarations: [
    AppComponent,
    Team,
    MyData,
    Hero,
    Main,
    Default
  ],
  imports: [
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/default',
      pathMatch: 'full'
    },
    {
      path:'main',
      component:Main
    },
    {
      path:'default',
      component:Default
    }
    ]),
    
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
