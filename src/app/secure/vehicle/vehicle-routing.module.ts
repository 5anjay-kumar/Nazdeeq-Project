import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehicleComponent } from './vehicle.component';
const routes: Routes = [
  {
    path: '',
    component: VehicleComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class VehicleRoutingModule {
}

