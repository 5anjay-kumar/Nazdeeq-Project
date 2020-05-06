import { DispatcherModule } from './dispatcher/dispatcher.module';
import { DispatcherRoutingModule } from "./dispatcher/dispatcher-routing.module";
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

@NgModule({
  declarations: [
    SecureComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
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
