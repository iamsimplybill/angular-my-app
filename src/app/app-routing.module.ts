import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path: 'Home', component: MainComponent},
  {path: 'About-Us', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
