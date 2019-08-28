import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MonthlyProfitComponent } from './monthly-profit/monthly-profit.component';
import { PieTagComponent } from './pie-tag/pie-tag.component';
import { BarTagsComponent } from './bar-tags/bar-tags.component';
import { LineImageComponent } from './line-image/line-image.component';



@NgModule({
  declarations: [
    AppComponent,
    MonthlyProfitComponent,
    PieTagComponent,
    BarTagsComponent,
    LineImageComponent,    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
