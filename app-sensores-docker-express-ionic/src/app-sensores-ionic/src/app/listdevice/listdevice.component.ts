import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-list-device',
  templateUrl: './listdevice.component.html',
  styleUrls: ['./listdevice.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    HighlightDirective
  ],
})
export class ListDeviceComponent implements OnInit {

  constructor(private deviceService: DeviceService) {}
  devices?: Device[];

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(data => {
      this.devices = data;
    })
  }
}
