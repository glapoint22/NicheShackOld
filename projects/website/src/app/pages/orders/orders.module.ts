import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { PopupButtonModule } from '../../shared/popup-button/popup-button.module';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    HeaderFooterModule,
    PopupButtonModule
  ]
})
export class OrdersModule { }
