import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';

import { MyTestComponent } from './components/mytest.component';
import { MyTestModule } from './components/mytest.module';



import { routing } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
        , MyTestModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,

        DashboardComponent
        //, MyTestComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HeroService
    ]
})
export class AppModule { }
