import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Injectable({
    providedIn: 'root'
})
export class ListResolver implements Resolve<any> {
    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let parameters: Array<any> = [];
        let queryParamKeys = Object.keys(route.queryParams);

        //Set the parameters array from the query params
        for (let i = 0; i < queryParamKeys.length; i++) {
            parameters.push({ key: queryParamKeys[i], value: route.queryParams[queryParamKeys[i]] });
        }

        // Return the list data
        return this.dataService.get('api/Lists', parameters);
    }
}