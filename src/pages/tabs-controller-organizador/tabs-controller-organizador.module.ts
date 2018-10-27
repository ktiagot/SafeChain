import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsControllerOrganizadorPage } from './tabs-controller-organizador';

@NgModule({
  declarations: [
    TabsControllerOrganizadorPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsControllerOrganizadorPage),
  ]
})
export class TabsControllerOrganizadorPageModule {}
