import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListDeviceComponent } from '../listdevice/listdevice.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ListDeviceComponent],
})
export class HomePage {
  constructor() {}
}
