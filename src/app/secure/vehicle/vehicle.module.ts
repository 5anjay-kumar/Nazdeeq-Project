import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VehicleRoutingModule } from "./vehicle-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
})
export class VehicleModule {}
