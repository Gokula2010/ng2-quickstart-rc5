import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: 
    `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
        <a routerLink="/mytest">My Test</a>
        
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css'] 

})
export class AppComponent implements OnInit {

    title = "Tour of Heroes";

    constructor() { }

    ngOnInit() { }
}