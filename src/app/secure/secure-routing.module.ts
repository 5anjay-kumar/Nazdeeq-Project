import { DispatcherComponent } from './dispatcher/dispatcher.component';
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
      // {
      //   path: "",
      //   redirectTo: "dashboard",
      //   pathMatch: "full"
      // }
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {}
