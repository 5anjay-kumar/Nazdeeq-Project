import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DriverComponent } from './driver.component';
const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
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
export class DriverRoutingModule {
}

