import { AuthGuard } from './core/gaurd/auth.guard';
import { SignupComponent } from './public/signup/signup.component';
import { SecureModule } from "./secure/secure.module";
import { LoginComponent } from "./public/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicComponent } from "./public/public.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "secure",
    loadChildren: () =>
      import("../app/secure/secure.module").then(m => m.SecureModule),
      canActivate: [AuthGuard],
      data: { role: 'admin' }
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
