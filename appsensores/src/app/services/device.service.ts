import { Injectable } from '@angular/core';
import { Device } from '../interfaces/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: Device[] = [
    {
      id: 1,
      name: 'Name 1 Test',
      location: 'Ubi 1',
    },
    {
      id: 2,
      name: 'Name 2 Test',
      location: 'Ubi 2',
    },
    {
      id: 3,
      name: 'Name 3 Test',
      location: 'Ubi 3',
    },
  ]

  getDevices(): Device[] {
    return this.devices;
  }

  constructor() { }
}
