import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyDyiMeFOMPE7CrOuuet99VP36I7WHSuImM"
    // })
  ]
})
export class DashboardModule { }
