import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users/users';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


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
    HomeOrganizadorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule    ,
    FormsModule
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
    HomeOrganizadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}