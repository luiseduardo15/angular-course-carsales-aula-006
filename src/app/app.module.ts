import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { InicialComponent } from './pages/inicial/inicial/inicial.component';
import { NavbarComponent } from './sharepage/navbar/navbar/navbar.component';
import { PedidoComponent } from './pages/inicial/inicial/pedido/pedido/pedido.component';
import { ControleComponent } from './pages/inicial/inicial/controle/controle/controle.component';
import { PagamentoComponent } from './pages/inicial/inicial/pagamento/pagamento/pagamento.component';
import { ClienteComponent } from './pages/cliente/cliente/cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    InicialComponent,
    NavbarComponent,
    PedidoComponent,
    ControleComponent,
    PagamentoComponent,
    ClienteComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
