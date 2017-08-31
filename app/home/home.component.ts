import {Component} from "@angular/core";

@Component({
    selector: 'home-page',
    template: `
        <p class="text-justify about">
            This is a proof of concept for a crowd-funding platform that is backed by IOTA as its payment processor. Hopefully, 
            this can soon be used to support IOTA related projects.
        </p>
        <p class="text-justify blurb">
            By using IOTA as the payment processor, there is no ~5% fee that goes to payment processors. Instead, the only
            overhead fees are the PoW done by donators. I'd argue this is negligible given current time it takes to complete
            PoW.
        </p>
        <p class="text-justify">
            Get started by clicking by clicking "Create" in the header.
        </p>
  `,
    styles: [`        
        .about {
            font-size: 20px;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        
        .blurb {
            padding-bottom: 20px;
        }
    `]
})


export class HomeComponent {}
