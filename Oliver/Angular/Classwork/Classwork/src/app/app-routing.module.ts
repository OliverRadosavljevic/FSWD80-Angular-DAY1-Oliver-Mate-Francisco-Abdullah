import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OurFoodComponent } from './our-food/our-food.component';

const routes: Routes = [{
	path:"", component: ContentComponent
}, {
	path:"ourfood", component: OurFoodComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
