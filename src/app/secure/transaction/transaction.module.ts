import { TransactionRoutingModule } from './transaction-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';



@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
