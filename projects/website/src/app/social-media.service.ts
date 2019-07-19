import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private facebookAppId: string = '1399604666855152';

  constructor(@Inject(DOCUMENT) private document) { }

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

  onFacebookClick(url: string) {
    window['FB'].ui({
      method: 'share',
      href: url
    }, function (response) { });
  }

  onTwitterClick(text: string, url: string) {
    this.openWindow('https://twitter.com/intent/tweet?text=' + text + '&url=' + url);
  }

  onPinterestClick(url: string, media: string, description: string) {
    this.openWindow('https://www.pinterest.com/pin/create/button/?url='
      + url + '&media='
      + media + '&description='
      + description)
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
