import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinhamentoComponent } from './apadrinhamento.component';

const routes: Routes = [{path:'Apadrinhamento', component:ApadrinhamentoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApadrinhamentoRoutingModule { }
