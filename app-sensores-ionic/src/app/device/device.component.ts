import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { IonicModule, Platform } from '@ionic/angular';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    //IonicModule,
    //RouterLink
  ],
})
export class DeviceComponent {

  constructor(
    private deviceService: DeviceService) {}

  devices: Device[] = this.deviceService.getDevices();
  palabras: String[] = this.deviceService.getPalabras();
}
