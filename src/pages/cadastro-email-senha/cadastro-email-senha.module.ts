import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEmailSenhaPage } from './cadastro-email-senha';

@NgModule({
  declarations: [
    CadastroEmailSenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEmailSenhaPage),
  ],
})
export class CadastroEmailSenhaPageModule {}
