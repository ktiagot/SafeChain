import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeOrganizadorPage } from '../pages/home-organizador/home-organizador';
import { ComprasPage} from '../pages/compras/compras'
import { PrXimosEventosPage } from '../pages/pr-ximos-eventos/pr-ximos-eventos';
import { EventosPage } from '../pages/eventos/eventos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { OpEsTabDefaultPagePage } from '../pages/op-es-tab-default-page/op-es-tab-default-page';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroParticipantePage } from '../pages/cadastro-participante/cadastro-participante';
import { CadastroOrganizadorPage } from '../pages/cadastro-organizador/cadastro-organizador';
import { InformaEsDoEventoPage } from '../pages/informa-es-do-evento/informa-es-do-evento';
import { EstandePage } from '../pages/estande/estande';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users/users';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ProviderLoginProvider } from '../providers/provider-login/provider-login';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ComprasPage,
    PrXimosEventosPage,
    EventosPage,
    TabsControllerPage,
    OpEsTabDefaultPagePage,
    CadastroPage,
    CadastroParticipantePage,
    CadastroOrganizadorPage,
    InformaEsDoEventoPage,
    HomeOrganizadorPage,
    EstandePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0nyyK3dLBXr2z3N78oCjKqTwxeTWHkME",
      authDomain: "safechain-3b504.firebaseapp.com",
      databaseURL: "https://safechain-3b504.firebaseio.com",
      projectId: "safechain-3b504",
      storageBucket: "safechain-3b504.appspot.com",
      messagingSenderId: "1084383673723"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComprasPage,
    PrXimosEventosPage,
    EventosPage,
    TabsControllerPage,
    OpEsTabDefaultPagePage,
    LoginPage,
    CadastroPage,
    CadastroParticipantePage,
    CadastroOrganizadorPage,
    InformaEsDoEventoPage,
    HomeOrganizadorPage,
    EstandePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    ProviderLoginProvider
  ]
})
export class AppModule {}