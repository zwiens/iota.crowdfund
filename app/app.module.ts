import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CreateComponent} from "./create/create.component";
import {HomeComponent} from "./home/home.component";
import {appRouting} from "./app.routing";
import {ProjectComponent} from "./project/project.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectComponent,
        CreateComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {}