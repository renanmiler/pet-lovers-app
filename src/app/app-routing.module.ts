import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinhamentoComponent } from './apadrinhamento/apadrinhamento.component';

const routes: Routes = [{path:'Apadrinhamento', component:ApadrinhamentoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
