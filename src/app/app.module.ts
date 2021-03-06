import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeOrganizadorPage } from '../pages/home-organizador/home-organizador';
import { ComprasPage} from '../pages/compras/compras'
import { PrXimosEventosPage } from '../pages/pr-ximos-eventos/pr-ximos-eventos';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { CadastroEmailSenhaPage } from '../pages/cadastro-email-senha/cadastro-email-senha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroOrganizadorPage } from '../pages/cadastro-organizador/cadastro-organizador';
import { CadastroLojistaPage } from '../pages/cadastro-lojista/cadastro-lojista';
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { InformaEsDoEventoPage } from '../pages/informa-es-do-evento/informa-es-do-evento';
import { EstandePage } from '../pages/estande/estande';
import { ProdutosPage } from '../pages/produtos/produtos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { OrganizadorProvider } from '../providers/organizador/organizador';
import { ClienteProvider } from '../providers/cliente/cliente';
import { LojistaProvider } from '../providers/lojista/lojista';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { OperacoesPage } from '../pages/operacoes/operacoes';
import { HomeLojistaPage } from '../pages/home-lojista/home-lojista';
import { EditarClientePage } from '../pages/editar-cliente/editar-cliente';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ComprasPage,
    PrXimosEventosPage,
    EventosPage,
    CadastroPage,
    CadastroOrganizadorPage,
    InformaEsDoEventoPage,
    HomeOrganizadorPage,
    HomeLojistaPage,
    EstandePage,
    CadastroEmailSenhaPage,
    ProdutosPage,
    CadastroLojistaPage,
    CadastroClientePage,
    OpcoesPage,
    OperacoesPage,
    EditarClientePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0nyyK3dLBXr2z3N78oCjKqTwxeTWHkME",
      authDomain: "safechain-3b504.firebaseapp.com",
      databaseURL: "https://safechain-3b504.firebaseio.com",
      projectId: "safechain-3b504",
      storageBucket: "safechain-3b504.appspot.com",
      messagingSenderId: "1084383673723"
    }),
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComprasPage,
    PrXimosEventosPage,
    EventosPage,
    LoginPage,
    CadastroPage,
    CadastroOrganizadorPage,
    InformaEsDoEventoPage,
    HomeOrganizadorPage,
    HomeLojistaPage,
    EstandePage,
    CadastroEmailSenhaPage,
    ProdutosPage,
    CadastroLojistaPage,
    CadastroClientePage,
    OpcoesPage,
    OperacoesPage,
    EditarClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireDatabase,
    OrganizadorProvider,
    ClienteProvider,
    LojistaProvider
  ]
})
export class AppModule {}