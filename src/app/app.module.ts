import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
