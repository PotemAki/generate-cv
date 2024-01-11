import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './page-not-found/not-found/not-found.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';


const routes: Routes = [
  // { path: '', redirectTo: '/generate', pathMatch: 'full'},
  // { path: "generate", component: InputPageComponent },
  // // { path: 'output', component: OutputPageComponent},
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
