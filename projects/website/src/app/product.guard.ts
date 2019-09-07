import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return new Observable<void>(observer => {
      this.dataService.get('api/Products/Exists', [{ key: 'urlTitle', value: route.params.product }])
        .subscribe(result => {
          observer.next();
          observer.complete();

          if (!result) this.dataService.notFound = true;
        });
    })
  }
}