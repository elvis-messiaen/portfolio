import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./component/contact/contact.component";
import {ProjetsComponent} from "./component/projets/projets.component";
import {AProposComponent} from "./component/a-propos/a-propos.component";
import {CvComponent} from "./component/cv/cv.component";
import {CollaborationsComponent} from "./component/collaborations/collaborations.component";

const routes: Routes = [
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projets', component: ProjetsComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: 'cv', component: CvComponent},
  { path: '**', component: ProjetsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
