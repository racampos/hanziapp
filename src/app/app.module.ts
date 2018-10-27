import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundComponent } from './compound/compound.component';
import { MainCharacterComponent } from './main-character/main-character.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoundComponent,
    MainCharacterComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
