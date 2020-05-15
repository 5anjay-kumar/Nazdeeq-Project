import { LandingComponent } from "./public/landing/landing/landing.component";
import { AuthGuard } from "./core/gaurd/auth.guard";
import { SignupComponent } from "./public/signup/signup.component";
import { LoginComponent } from "./public/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicComponent } from "./public/public.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "home",
        component: LandingComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
      },
    ],
  },
  {
    path: "secure",
    loadChildren: () =>
      import("../app/secure/secure.module").then((m) => m.SecureModule),
    canActivate: [AuthGuard],
    data: { role: "admin" },
  },
  {
    path: "profile",
    loadChildren: () =>
      import("../app/public/profile/profile.module").then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
    data: { role: "user" },
  },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
