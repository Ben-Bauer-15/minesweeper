import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from "./minesweeper/single/single.component";
import { MultiComponent } from './minesweeper/multi/multi.component';
import { LoginComponent } from './minesweeper/login/login.component';
import { BenbauerComponent } from './landingPage/benbauer/benbauer.component';

const routes: Routes = [
  // { path : '', component : BenbauerComponent},
  { path : 'single', component : SingleComponent},
  { path : 'newUser/:newUserID', component : SingleComponent},
  { path : 'returningUser/:returningUserID', component : SingleComponent},
  { path : '', component : MultiComponent},
  { path : 'login', component : LoginComponent},
  { path : 'room/:id', component : MultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
