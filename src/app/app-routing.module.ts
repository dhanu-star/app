import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangloreComponent } from './banglore/banglore.component';
const routes: Routes = [
  
{path:'banglore',component:BangloreComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const
// RoutingModule= [HomeComponent]