import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./start/start.component";
import { Quiz1Component } from "./quiz1/quiz1.component";

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path:'welcome', component: StartComponent},
  {path:'question', component: Quiz1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
