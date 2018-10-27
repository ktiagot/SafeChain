import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperaçõesPage } from './operações';

@NgModule({
  declarations: [
    OperaçõesPage,
  ],
  imports: [
    IonicPageModule.forChild(OperaçõesPage),
  ],
})
export class OperaçõesPageModule {}
