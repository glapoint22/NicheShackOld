import { Injectable } from '@angular/core';
import { ParamMap, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QueryParametersService {
  public queryParams: ParamMap;

  constructor(private router: Router) { }

  getQueryParameters(addRemoveParams: any): Params {
    let params: Params = {};

    //Remove the query parameters
    for (let i = 0; i < this.queryParams.keys.length; i++) {
      if (addRemoveParams.remove.every(x => {
        return x !== this.queryParams.keys[i];
      })) {
        params[this.queryParams.keys[i]] = this.queryParams.get(this.queryParams.keys[i]);
      }
    }

    //Add the query parameters
    for (let i = 0; i < addRemoveParams.add.length; i++) {
      params[addRemoveParams.add[i].name] = addRemoveParams.add[i].value;
    }

    return params;
  }

  updateUrl(url: string, addRemoveParams) {
    let params: Params = this.getQueryParameters(addRemoveParams);

    //Update the url
    this.router.navigate([url], { queryParams: params });
  }
}