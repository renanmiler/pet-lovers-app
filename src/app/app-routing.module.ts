import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinhamentoComponent } from './apadrinhamento/apadrinhamento.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'Apadrinhamento', component:ApadrinhamentoComponent},{path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
