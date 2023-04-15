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

  //1. Dar un listado de dispositivos
  getDevices(): Observable<Device[]> {
    return this._http.get<Device[]>('http://localhost:8000/devices');
  }

  //2. brindar el último valor de medición por sensor en el gráfico
  public getLastMessureForDeviceById(id: number): Observable<Medicion[]> {
    return this._http.get<Medicion[]>('http://localhost:8000/lastmessure/'+id);
  }

  //3. abrir la electroválvula que le corresponde y
  //a. insertar un registro en la tabla de Log_Riegos
  postLogRiegos(deviceId: number) {
    let logRiego: LogRiegos = {
      apertura: '1',
      fecha: '2020-10-10 00:00:01',
      electrovalvulaId: 1
    }
    this._http.post('http://localhost:8000/logriegos/',logRiego)
  }

  //3. abrir la electroválvula que le corresponde y
  //b. insert sobre la tabla de mediciones
  public postMedicion(dispositivoId: number) {
    let medicion: Medicion = {
      fecha: '2020-10-10 00:00:01',
      valor: '0', //como se moja el terreno asumo que va a bajar a 0
      dispositivoId: dispositivoId
    }
    this._http.post('http://localhost:8000/logriegos/', medicion);
  }
  
  //4. ver todas las mediciones de ese sensor 
  public getMediciones(id: number): Observable<Medicion[]> {
    return this._http.get<Medicion[]>('http://localhost:8000/devices/'+id+'/messures');
  }

  //5. consultar el log de los riegos para una electroválvula
  public getLogRiegos(id: number): Observable<LogRiegos[]> {
    return this._http.get<LogRiegos[]>('http://localhost:8000/logriegos/'+id);
  }

  public abrirElectroValvula(dispositivoId: number) {
    this.postLogRiegos(dispositivoId);
    this.postMedicion(dispositivoId);
  }

  public getDeviceById(id: number): Observable<Device[]> {
    return this._http.get<Device[]>('http://localhost:8000/devices/'+id);
  }
}
