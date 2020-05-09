import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PassengerRoutingModule } from "./passenger-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerComponent } from "./passenger.component";

@NgModule({
  imports: [
    CommonModule,
    PassengerRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [PassengerComponent],
  entryComponents: [],
})
export class PassengerModule {}
