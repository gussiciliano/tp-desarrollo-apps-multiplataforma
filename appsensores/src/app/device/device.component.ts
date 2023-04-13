import { Component } from '@angular/core';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {

  constructor(
    private deviceService: DeviceService) {}

  devices: Device[] = this.deviceService.getDevices();
}
