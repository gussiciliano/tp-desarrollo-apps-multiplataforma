import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../interfaces/device';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private _http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this._http.get<Device[]>('http://localhost:8000/devices');
  }

  public getDeviceById(id: number): Observable<Device[]> {
    return this._http.get<Device[]>('http://localhost:8000/devices/'+id);
  }

  public getLastMessureForDeviceById(id: number): number {
    return 5;
  }
}
