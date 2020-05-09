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

@NgModule({
  declarations: [
    SecureComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    VehicleComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    DashboardModule,
    HttpClientModule,
    NgbModule
  ]
})
export class SecureModule {}
