import { Page } from './page';
import { OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export class SharePage extends Page implements OnInit {

    constructor(titleService: Title, metaService: Meta, @Inject(DOCUMENT) document) {
        super(titleService, metaService, document);
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

    onFacebookClick(pathname: string, quote: string) {
        window['FB'].ui({
            method: 'share',
            href: this.domain + pathname,
            quote: quote
        }, function (response) { });
    }

    onTwitterClick(pathname: string, text: string) {
        this.openWindow('https://twitter.com/intent/tweet?text=' + text + '&url=' + this.domain + pathname);
    }

    onPinterestClick() {
        this.openWindow('https://www.pinterest.com/pin/create/button/?url='+ this.domain + this.document.location.pathname
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