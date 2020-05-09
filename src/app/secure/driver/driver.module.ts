import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DriverRoutingModule } from './driver-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';



@NgModule({
  declarations: [DriverComponent, DriverDetailsComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    NgbModule
  ]
})
export class DriverModule { }
