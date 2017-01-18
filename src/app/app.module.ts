import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhonesComponent } from './phones/phones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { TvComponent } from './tv/tv.component';
import { WatchesComponent } from './watches/watches.component';
import { AddPhonesComponent } from './add-phones/add-phones.component';
import { AddTabletsComponent } from './add-tablets/add-tablets.component';
import { AddTvComponent } from './add-tv/add-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhonesComponent,
    TabletsComponent,
    TvComponent,
    WatchesComponent,
    AddPhonesComponent,
    AddTabletsComponent,
    AddTvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
