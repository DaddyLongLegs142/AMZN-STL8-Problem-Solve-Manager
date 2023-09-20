import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PSLinksComponent } from './ps-links/ps-links.component';
import { PsCountFormComponent } from './ps-count-form/ps-count-form.component';
import { PSWashComponent } from './ps-wash/ps-wash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PSLinksComponent,
    PsCountFormComponent,
    PSLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
