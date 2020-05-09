import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecureComponent } from "./secure.component";

const routes: Routes = [
  {
    path: "",
    component: SecureComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: 'dispatcher',
        loadChildren: () => import('./dispatcher/dispatcher.module')
          .then(m => m.DispatcherModule),
      },
      {
        path: 'passenger',
        loadChildren: () => import('./passenger/passenger.module')
          .then(m => m.PassengerModule),
      },
      {
        path: 'driver',
        loadChildren: () => import('./driver/driver.module')
          .then(m => m.DriverModule),
      },
      {
        path: 'vehicle',
        loadChildren: () => import('./vehicle/vehicle.module')
          .then(m => m.VehicleModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {}
