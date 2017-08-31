import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SearchComponent} from "./search/search.component";
import {CreateComponent} from "./create/create.component";
import {HomeComponent} from "./home/home.component";
import {appRouting} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        CreateComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {}