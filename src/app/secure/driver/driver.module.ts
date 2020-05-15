import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DriverRoutingModule } from './driver-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DriverComponent, DriverDetailsComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class DriverModule { }
