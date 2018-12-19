import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from "./single/single.component";
import { MultiComponent } from './multi/multi.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '', component : SingleComponent},
  { path : 'newUser/:newUserID', component : SingleComponent},
  { path : 'returningUser/:returningUserID', component : SingleComponent},
  { path : 'multi', component : MultiComponent},
  { path : 'login', component : LoginComponent},
  { path : 'room/:id', component : MultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
