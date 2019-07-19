import { OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export class Page implements OnInit {
    // Properties for each page
    public title: string;
    public description: string;
    public pageRoute: string;
    public image: string;

    // Other properties
    public facebookAppId: string = '1399604666855152';
    public domain: string = 'http://172.100.235.238:2222/';

    constructor(public titleService: Title, public metaService: Meta) { }

    ngOnInit() {
        this.title = this.title + ' - Niche Shack';
        this.titleService.setTitle(this.title);
        this.metaService.addTag({ name: 'description', content: this.description });

        // Facebook
        this.metaService.addTag({ property: 'og:title', content: this.title });
        this.metaService.addTag({ property: 'og:site_name', content: 'Niche Shack' });
        this.metaService.addTag({ property: 'og:type', content: 'website' });
        this.metaService.addTag({ property: 'og:locale', content: 'en_US' });
        this.metaService.addTag({ property: 'fb:app_id', content: this.facebookAppId });
        this.metaService.addTag({ property: 'og:url', content: this.domain + this.pageRoute });
        this.metaService.addTag({ property: 'og:image', content: this.domain + this.image });
        this.metaService.addTag({ property: 'og:image:width', content: '300' });
        this.metaService.addTag({ property: 'og:image:height', content: '300' });
        this.metaService.addTag({ property: 'og:image:alt', content: this.title });
        this.metaService.addTag({ property: 'og:description', content: this.description });

        // Twitter
        this.metaService.addTag({ name: 'twitter:card', content: 'summary' });
        this.metaService.addTag({ name: 'twitter:site', content: '@Niche_Shack' });
        this.metaService.addTag({ name: 'twitter:title', content: this.title });
        this.metaService.addTag({ name: 'twitter:description', content: this.description });
        this.metaService.addTag({ name: 'twitter:image', content: this.domain + this.image });
        this.metaService.addTag({ name: 'twitter:image:alt', content: this.title });
    }
}
