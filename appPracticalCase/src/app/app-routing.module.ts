import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PermissionGuard } from "./commons/guards/permission.guards";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () => import("./login/login.component.module").then((m) => m.LoginModule),
  },
  {
    path: "home",
    canActivate: [PermissionGuard],
    loadChildren: () => import("./home/home.component.module").then((m) => m.HomeModule),
  },
  {
    path: "perfil",
    canActivate: [PermissionGuard],
    loadChildren: () => import("./perfil/perfil.component.module").then((m) => m.PerfilModule),
  },
  {
		path: '**',
		canActivate: [PermissionGuard],
		redirectTo: '/login'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
