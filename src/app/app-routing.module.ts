import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageprincipalComponent } from "./pageprincipal/pageprincipal.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component"
import { UpdatepasswordComponent } from "./updatepassword/updatepassword.component"

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "homepage", component: PageprincipalComponent, pathMatch: "full" },
  { path: "profile/editprofile", component: EditProfileComponent, pathMatch: "full" },
  { path: "updatepassword", component: UpdatepasswordComponent, pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
