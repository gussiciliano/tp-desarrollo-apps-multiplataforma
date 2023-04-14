import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './listdevice.component.html',
  styleUrls: ['./listdevice.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
})
export class ListDeviceComponent {

  constructor(
    private deviceService: DeviceService) {}

  devices: Device[] = this.deviceService.getDevices();
}
