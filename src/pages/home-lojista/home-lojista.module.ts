import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLojistaPage } from './home-lojista';

@NgModule({
  declarations: [
    HomeLojistaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLojistaPage),
  ],
})
export class HomeLojistaPageModule {}
