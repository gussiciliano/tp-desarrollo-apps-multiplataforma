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

  private URLServerBE = 'http://localhost:8000';

  constructor(private _http: HttpClient) {}

  //1. Dar un listado de dispositivos
  getDevices(): Observable<Device[]> {
    return this._http.get<Device[]>(this.URLServerBE + '/devices');
  }

  //2. brindar el último valor de medición por sensor en el gráfico
  public getLastMessureForDeviceById(id: number): Observable<Medicion[]> {
    return this._http.get<Medicion[]>(this.URLServerBE + '/lastmessure/'+id);
  }

  //3. abrir la electroválvula que le corresponde y
  //a. insertar un registro en la tabla de Log_Riegos
  postLogRiegos(deviceId: number) {
    let logRiego: LogRiegos = {
      apertura: '1',
      fecha: (new Date()).toISOString().split('T')[0],
      electrovalvulaId: deviceId
    }
    this._http.post(this.URLServerBE + '/logriegos',logRiego)
      .subscribe((res) => {
        console.log(res);
      });
  }

  //3. abrir la electroválvula que le corresponde y
  //b. insert sobre la tabla de mediciones
  public postMedicion(dispositivoId: number, valorMedicion: string) {
    let medicion: Medicion = {
      fecha: (new Date()).toISOString().split('T')[0],
      valor: valorMedicion, //como se moja el terreno asumo que va a bajar a 0
      dispositivoId: dispositivoId
    }
    this._http.post(this.URLServerBE + '/messures', medicion)
      .subscribe((res) => {
        console.log(res);
      });
  }
  
  //4. ver todas las mediciones de ese sensor 
  public getMediciones(id: number): Observable<Medicion[]> {
    return this._http.get<Medicion[]>(this.URLServerBE + '/devices/'+id+'/messures');
  }

  //5. consultar el log de los riegos para una electroválvula
  public getLogRiegos(electrovalvulaId: number): Observable<LogRiegos[]> {
    return this._http.get<LogRiegos[]>(this.URLServerBE + '/logriegos/'+electrovalvulaId);
  }

  public abrirElectrovalvula(dispositivoId: number) {
    this.postLogRiegos(dispositivoId);
    this.postMedicion(dispositivoId, '0'); //Baja a 0 por apertura de la electroval
  }

  public getDeviceById(id: number): Observable<Device[]> {
    return this._http.get<Device[]>(this.URLServerBE + '/devices/'+id);
  }
}
