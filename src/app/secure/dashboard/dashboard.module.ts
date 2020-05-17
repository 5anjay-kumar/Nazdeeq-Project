import { BusyComponent } from "./../../public/busy/busy.component";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from "./dashboard.component";
import { NgBusyModule } from "ng-busy";
import { TicketComponent } from "./ticket/ticket.component";
import { RecentTripsComponent } from "./recent-trips/recent-trips.component";
import { DispatcherStatusComponent } from "./dispatcher-status/dispatcher-status.component";
import { DriverStatusComponent } from "./driver-status/driver-status.component";
import { RegisteredUserComponent } from "./registered-user/registered-user.component";
import { RegisteredDriverComponent } from "./registered-driver/registered-driver.component";

@NgModule({
  declarations: [
    DashboardComponent,
    TicketComponent,
    RecentTripsComponent,
    DispatcherStatusComponent,
    DriverStatusComponent,
    RegisteredUserComponent,
    RegisteredDriverComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgBusyModule.forRoot({
      backdrop: true,
      template: BusyComponent,
      wrapperClass: "ng-busy",
      delay: 0,
    }),
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyDyiMeFOMPE7CrOuuet99VP36I7WHSuImM"
    // })
  ],
})
export class DashboardModule {}
