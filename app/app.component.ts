/**
 * Created by funon on 8/28/2017.
 */

import {Component} from "@angular/core";
import {ProjectService} from "./shared/services/project.service";

@Component({
    selector: 'my-app',
    templateUrl: "./app/app.component.html",
    styles: [`
        main{
            padding-top: 60px;
        }
    `],
    providers: [ProjectService]
})

export class AppComponent {}