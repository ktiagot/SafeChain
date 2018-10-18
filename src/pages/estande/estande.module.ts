import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstandePage } from './estande';

@NgModule({
  declarations: [
    EstandePage,
  ],
  imports: [
    IonicPageModule.forChild(EstandePage),
  ],
})
export class EstandePageModule {}
