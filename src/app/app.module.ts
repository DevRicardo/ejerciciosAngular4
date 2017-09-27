import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';


import { HeroService } from './hero.service';
import { DetailComponent } from './detail.components';
import { HeroesComponent } from './heroes.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'heroes',
        component: HeroesComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path:'detail/:id',
        component: DetailComponent
      }
    ])

  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
