import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicialComponent } from './pages/inicial/inicial/inicial.component';
import { ControleComponent } from './pages/inicial/inicial/controle/controle/controle.component';
import { PagamentoComponent } from './pages/inicial/inicial/pagamento/pagamento/pagamento.component';
import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { PedidoComponent } from './pages/inicial/inicial/pedido/pedido/pedido.component';


const routes: Routes = [

  {path: '', component: InicialComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-cliente', component: ClienteComponent},
  {path: 'cadastro-pedido', component: PedidoComponent},
  {path: 'controle-pedido', component: ControleComponent},
  {path: 'pagamento', component: PagamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
