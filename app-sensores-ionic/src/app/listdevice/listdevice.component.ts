import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-list-device',
  templateUrl: './listdevice.component.html',
  styleUrls: ['./listdevice.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListDeviceComponent {

  constructor(
    private deviceService: DeviceService) {}

  devices: Device[] = this.deviceService.getDevices();
  palabras: String[] = this.deviceService.getPalabras();
}
