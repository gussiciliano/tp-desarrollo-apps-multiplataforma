import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../interfaces/device';
import { DeviceService } from '../services/device.service';
import { RouterLink } from '@angular/router';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DevicePage implements OnInit {

  public device!: Device;
  public dispositivoId!: number;
  private valorObtenido!: number;
  public myChart:any;
  private chartOptions:any;
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private deviceService: DeviceService) {
      setInterval(()=>{
        console.log("Mediciones nuevas");
        const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.deviceService.postMedicion(parseInt(id, 10), (this.valorObtenido + 5).toString()); //simulo que se va secando
        console.log("Cambio el valor del sensor");
        this.refreshChartWithLastMeassure();
      },12000);
    }

  ngOnInit() {
    const deviceId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dispositivoId = parseInt(deviceId, 10);
    this.deviceService.getDeviceById(this.dispositivoId).subscribe(data => {
      this.device = data[0];
    });
    this.getAndUpdateLastMeassureValue();
  }

  ionViewDidEnter() {
    this.generarChart();
  }

  abrirElectrovalvula() {
    this.deviceService.abrirElectrovalvula(this.device.electrovalvulaId);
    this.refreshChartWithLastMeassure();
  }

  getAndUpdateLastMeassureValue() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.deviceService.getLastMessureForDeviceById(parseInt(id, 10)).subscribe(data => {
      this.valorObtenido = parseInt(data[0].valor, 10);
    });
  }

  refreshChartWithLastMeassure() {
    //traigo el valor del API y lo actualizo en la var valorObtenido
    this.getAndUpdateLastMeassureValue();
    //llamo al update del chart para refrescar y mostrar el nuevo valor
    this.updateChartWithLastMeassure();
  }

  updateChartWithLastMeassure() {
    this.myChart.update({series: [{
      name: 'kPA',
      data: [this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° ' + this.device.dispositivoId
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}
