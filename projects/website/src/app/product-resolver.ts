import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.get('api/Products/DetailedProduct',
      [
        { key: 'urlTitle', value: route.params.product },
        { key: 'orderBy', value: route.params.sort || '' }
      ]);
  }
}