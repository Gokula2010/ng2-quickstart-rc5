import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { DashboardComponent } from './dashboard.component';
import { MyTestComponent  } from './components/mytest.component';


const appRoutes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    
    { path: 'dashboard', component: DashboardComponent },
    //{ path: 'mytest', component: MyTestComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
