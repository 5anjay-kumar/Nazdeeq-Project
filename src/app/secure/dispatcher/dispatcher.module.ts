import { DispatcherRoutingModule } from './dispatcher-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatcherComponent } from './dispatcher.component';

@NgModule({
  declarations: [DispatcherComponent],
  imports: [
    CommonModule,
    DispatcherRoutingModule
  ]
})
export class DispatcherModule {
}
