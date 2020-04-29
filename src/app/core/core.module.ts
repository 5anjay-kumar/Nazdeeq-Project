import { EmitterService } from './services/emitter.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InterceptedHttp } from './interceptor/http.interceptor';
import { CommonModule } from '@angular/common';
import { IsvalidPipe } from './pipes/isvalid.pipe';

@NgModule({
  declarations: [IsvalidPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    EmitterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptedHttp,
      multi: true
    }
  ],
  exports: [IsvalidPipe]
})
export class CoreModule { }
