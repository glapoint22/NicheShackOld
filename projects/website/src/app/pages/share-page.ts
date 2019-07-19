import { Page } from './page';
import { OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export class SharePage extends Page implements OnInit {
    

    constructor(titleService: Title, metaService: Meta, @Inject(DOCUMENT) private document) {
        super(titleService, metaService);
    }

    ngOnInit() {
        super.ngOnInit();

        this.setFacebookSDK();
    }

    setFacebookSDK() {
        let script: HTMLScriptElement = this.document.createElement('script');
        let code: string = "window.fbAsyncInit = function() { FB.init({ appId: '"
            + this.facebookAppId + "', autoLogAppEvents : true, xfbml : true, version: 'v3.3'});};"

        script.appendChild(this.document.createTextNode(code));
        this.document.body.insertBefore(script, this.document.body.childNodes[0]);

        script = this.document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        this.document.body.insertBefore(script, this.document.body.childNodes[1]);
    }

    onFacebookClick() {
        window['FB'].ui({
            method: 'share',
            href: this.domain + this.pageRoute
        }, function (response) { });
    }

    onTwitterClick(text: string) {
        this.openWindow('https://twitter.com/intent/tweet?text=' + text + '&url=' + this.domain + this.pageRoute);
    }

    onPinterestClick() {
        this.openWindow('https://www.pinterest.com/pin/create/button/?url='+ this.domain + this.pageRoute
        + '&media=' + this.domain + this.image
        + '&description=' + this.description)
    }

    openWindow(url: string) {
        let width: number = 580;
        let height: number = 360;
        let horizontalCenter = (window.innerWidth - width) / 2;
        let verticalCenter = (window.innerHeight - height) / 2;

        window.open(url, '_blank', 'toolbar=yes,scrollbars=no,resizable=yes,top=' +
            verticalCenter + ',left=' + horizontalCenter + ',width=' + width + ',height=' + height);
    }
}