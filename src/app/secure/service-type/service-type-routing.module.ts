import { ServiceTypeComponent } from './service-type.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: ServiceTypeComponent,
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
export class ServiceTypeRoutingModule {
}

