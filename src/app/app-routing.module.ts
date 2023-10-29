import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ContactComponent} from "./component/contact/contact.component";
import {ProjetsComponent} from "./component/projets/projets.component";
import {AProposComponent} from "./component/a-propos/a-propos.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projets', component: ProjetsComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: '**', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
