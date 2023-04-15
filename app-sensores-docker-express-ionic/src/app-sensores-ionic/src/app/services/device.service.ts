import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../interfaces/device';
import { Medicion } from '../interfaces/medicion';
import { Observable } from 'rxjs';
import { LogRiegos } from '../interfaces/log_riegos';

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

  getLogRiegos(id: number): Observable<LogRiegos[]> {
    return this._http.get<LogRiegos[]>('http://localhost:8000/logriegos/'+id);
  }

  postLogRiegos(deviceId: number) {
    let logRiego: LogRiegos = {
      apertura: '1',
      fecha: '2020-10-10 00:00:01',
      electrovalvulaId: 1
    }
    this._http.post('http://localhost:8000/logriegos/',logRiego)
  }
  
  public getLastMessureForDeviceById(id: number): number {
    return 5;
  }
}
