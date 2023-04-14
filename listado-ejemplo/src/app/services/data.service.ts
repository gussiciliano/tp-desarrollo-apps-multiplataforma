import { Injectable } from '@angular/core';

export interface Device {
  id: number;
  name: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public devices: Device[] = [
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
  ];

  constructor() { }

  public getDevices(): Device[] {
    return this.devices;
  }

  public getDeviceById(id: number): Device {
    return this.devices[id];
  }
}
