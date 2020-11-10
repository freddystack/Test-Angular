import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from '../app/components/jobs/jobs.component';
import { PeopleComponent } from '../app/components/people/people.component';
import { AboutComponent } from '../app/components/about/about.component';


const routes: Routes = [
  {path: "jobs", component: JobsComponent},
  {path: "people", component: PeopleComponent},
  {path: "about", component: AboutComponent},
  {path: "**",pathMatch : "full", component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
