import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VehicleRoutingModule } from "./vehicle-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule, VehicleRoutingModule, NgbModule, HttpClientModule],
})
export class VehicleModule {}
