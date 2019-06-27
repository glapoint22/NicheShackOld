import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.dataService.get('api/Products', [{ key: 'urlTitle', value: route.params.product }]).pipe(map(product => {
      if (product == null) {
        this.dataService.notFound = true;
      }
      return product;
    }))
  }
}