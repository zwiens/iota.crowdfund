import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'create', component: CreateComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);