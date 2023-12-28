import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { SnapFaceListComponent } from './snap-face-list/snap-face-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFacesnapComponent } from './single-facesnap/single-facesnap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

const routes: Routes = [
  {path:'facesnaps', component:SnapFaceListComponent},
  {path:'create', component: NewFaceSnapComponent},
  {path:'facesnaps/:id', component:SingleFacesnapComponent},
  {path:'', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
