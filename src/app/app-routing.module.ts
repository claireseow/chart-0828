import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlyProfitComponent } from './monthly-profit/monthly-profit.component';
import { PieTagComponent } from './pie-tag/pie-tag.component';
import { BarTagsComponent} from './bar-tags/bar-tags.component';
import { LineImageComponent } from './line-image/line-image.component';

const routes: Routes = [
  {path: "monthly-profit",component: MonthlyProfitComponent},
  {path: "pie-tag",component: PieTagComponent},
  {path: "bar-tags", component: BarTagsComponent},
  {path: "line-image", component:LineImageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
