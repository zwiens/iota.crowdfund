import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import {ProjectComponent} from "./project/project.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'create', component: CreateComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);