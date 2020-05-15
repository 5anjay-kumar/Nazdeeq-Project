import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardModule } from "./dashboard/dashboard.module";
import { SecureRoutingModule } from "./secure-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecureComponent } from "./secure.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RateAndReviewComponent } from './rate-and-review/rate-and-review.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SecureComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    VehicleComponent,
    RateAndReviewComponent,
    ServiceTypeComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    DashboardModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class SecureModule {}
