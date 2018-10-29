import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsControllerLojistaPage } from './tabs-controller-lojista';

@NgModule({
  declarations: [
    TabsControllerLojistaPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsControllerLojistaPage),
  ]
})
export class TabsControllerLojistaPageModule {}
