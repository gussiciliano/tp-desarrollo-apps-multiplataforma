import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Medicion } from '../interfaces/medicion';
import { DeviceService } from '../services/device.service';
import { FormatoFechaPipe } from '../pipes/formato-fecha.pipe';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, FormatoFechaPipe]
})
export class MedicionesPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor(private deviceService: DeviceService) { }
  mediciones!: Medicion[];
  dispositivoId!: number;

  ngOnInit() {
    const deviceId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dispositivoId = parseInt(deviceId, 10);
    this.deviceService.getMediciones(this.dispositivoId).subscribe(data => {
      this.mediciones = data;
    })
  }

}
