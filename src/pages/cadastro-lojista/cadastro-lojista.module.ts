import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLojistaPage } from './cadastro-lojista';

@NgModule({
  declarations: [
    CadastroLojistaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLojistaPage),
  ],
})
export class CadastroLojistaPageModule {}
