import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from "./single/single.component";
import { MultiComponent } from './multi/multi.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
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
