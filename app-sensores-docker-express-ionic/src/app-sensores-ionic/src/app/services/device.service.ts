import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../interfaces/device';
import { Medicion } from '../interfaces/medicion';
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

  getMediciones(id: number): Observable<Medicion[]> {
    return this._http.get<Medicion[]>('http://localhost:8000/devices/'+id+'/messures');
  }

  public getLastMessureForDeviceById(id: number): number {
    return 5;
  }
}
