import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LogRiegos } from './../interfaces/log_riegos';
import { DeviceService } from '../services/device.service';
import { FormatoFechaPipe } from '../pipes/formato-fecha.pipe';

@Component({
  selector: 'app-log-riegos',
  templateUrl: './log-riegos.page.html',
  styleUrls: ['./log-riegos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, FormatoFechaPipe]
})
export class LogRiegosPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor(private deviceService: DeviceService) { }
  logRiegos!: LogRiegos[];
  dispositivoId!: number;

  ngOnInit() {
    const deviceId = this.activatedRoute.snapshot.paramMap.get('deviceId') as string;
    this.dispositivoId = parseInt(deviceId, 10);
    this.deviceService.getDeviceById(this.dispositivoId).subscribe(data => {
      const electrovalvulaId = data[0].electrovalvulaId;
      this.deviceService.getLogRiegos(electrovalvulaId).subscribe(data => {
        this.logRiegos = data;
      })
    });
  }

}
