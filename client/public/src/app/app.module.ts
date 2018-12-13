import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { MultiComponent } from './multi/multi.component';
import { LoginComponent } from './login/login.component';
import { MultiplayerGatewayComponent } from './multiplayer-gateway/multiplayer-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    MultiComponent,
    LoginComponent,
    MultiplayerGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
