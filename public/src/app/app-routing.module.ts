import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from "./minesweeper/single/single.component";
import { MultiComponent } from './minesweeper/multi/multi.component';
import { LoginComponent } from './minesweeper/login/login.component';
import { BenbauerComponent } from './landingPage/benbauer/benbauer.component';

const routes: Routes = [
  { path : '', component : BenbauerComponent},
  { path : 'minesweeper/single', component : SingleComponent},
  { path : 'minesweeper/newUser/:newUserID', component : SingleComponent},
  { path : 'minesweeper/returningUser/:returningUserID', component : SingleComponent},
  { path : 'minesweeper', component : MultiComponent},
  { path : 'minesweeper/login', component : LoginComponent},
  { path : 'minesweeper/room/:id', component : MultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
