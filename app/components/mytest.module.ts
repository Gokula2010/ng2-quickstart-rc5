// import { NgModule }      from '@angular/core';

// import { MyTestComponent } from './mytest.component';

// import { myTestRouting } from './mytest.routing';


// @NgModule({
//     imports: [
//         myTestRouting
//         , MyTestModule
//     ],
//     declarations: [
//         MyTestComponent
//     ],
//     bootstrap: [
//         //AppComponent
//     ],
//     providers: [
//         //HeroService
//     ]
// })
// export class MyTestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MyTestComponent } from './mytest.component';

const routes: Routes = [
    { path: 'mytest', component: MyTestComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MyTestComponent
    ]

    //exports: [RouterModule],
})
export class MyTestModule { }

export const routedComponents = [MyTestComponent];