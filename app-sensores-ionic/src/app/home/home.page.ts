import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, DeviceComponent],
})
export class HomePage {
  constructor() {}
}
