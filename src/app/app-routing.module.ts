import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'addproduct', component: AddProductComponent},
  
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

