import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { MultiComponent } from './multi/multi.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { BenbauerComponent } from './benbauer/benbauer.component';
import { MinesweeperHeaderComponent } from './minesweeper-header/minesweeper-header.component';
import { MinesweeperFooterComponent } from './minesweeper-footer/minesweeper-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    MultiComponent,
    LoginComponent,
    BenbauerComponent,
    MinesweeperHeaderComponent,
    MinesweeperFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
