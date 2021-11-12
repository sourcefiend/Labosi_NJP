import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './features/layout/full/full.component';
import { HorizontalMenuComponent } from './features/layout/horizontal-menu/horizontal-menu.component';
import { LayoutModule } from './features/layout/layout.module';
import { PrviLabosModule } from './features/prvi-labos/prvi-labos.module';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HorizontalMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PrviLabosModule,
    ButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
