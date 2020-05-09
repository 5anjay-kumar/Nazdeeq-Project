import { BusyComponent } from './../../public/busy/busy.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DispatcherRoutingModule } from './dispatcher-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatcherComponent } from './dispatcher.component';
import { RegisterDispatchComponent } from './register-dispatch/register-dispatch.component';
import { NgBusyModule } from "ng-busy";

@NgModule({
  declarations: [DispatcherComponent, RegisterDispatchComponent],
  imports: [
    CommonModule,
    DispatcherRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DispatcherModule {
}
