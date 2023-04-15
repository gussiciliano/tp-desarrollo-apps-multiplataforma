import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListDeviceComponent } from '../listdevice/listdevice.component';
import { HighlightDirective } from '../directives/highlight.directive';


@NgModule({
  declarations: [
    HomePage,
    ListDeviceComponent,
    HighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
})
export class HomePageModule {}