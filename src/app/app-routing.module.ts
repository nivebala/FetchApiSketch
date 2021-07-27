import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';
import { BreweryComponent } from './brewery/brewery.component';

const routes: Routes = [{ path: 'brewery-component', component: BreweryComponent },
{ path: 'breweryDetails-component', component: BreweryDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
