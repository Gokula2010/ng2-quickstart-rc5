import { Component, OnInit } from '@angular/core';
import { Role, MyHero } from '../hero';


@Component({
    moduleId: module.id,
    selector: 'gk-mytest',
    template:
    `
    <h2>mytest.component.html</h2>



    <div>
        Testing ngFor
        <ul>
            <li *ngFor="let hero of heroes">
                {{ hero.name }}
            </li>
        </ul>
        <ul>
            <li *ngFor="let role of roles">
                {{ role.name }}
            </li>
        </ul>
    </div>
    


    `
})
export class MyTestComponent implements OnInit {
    heroes = [
        new MyHero(1, 'Windstorm'),
        new MyHero(13, 'Bombasto'),
        new MyHero(15, 'Magneta'),
        new MyHero(20, 'Tornado')
    ];
    myHero = this.heroes[0];

    // roles = [
    //     new Role(1, 'admin'),
    //     new Role(2, 'engineer')
    // ];
    roles: Role[] = [];
    constructor() {
        this.roles = [
            new Role(1, 'admin'),
            new Role(2, 'engineer')
        ];
    }

    ngOnInit() { }
}