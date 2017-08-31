/**
 * Created by funon on 8/28/2017.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: "./app/app.component.html",
    styles: [`
        main{
            padding-top: 60px;
            height: 100%;
            text-align: center;
        }
        /* todo zwiens: remove this hack for now. But, pushing b/c it's just css*/
        footer {
            padding-top: 50px;
        }
        
    `]
})

export class AppComponent {}