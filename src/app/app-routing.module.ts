import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
