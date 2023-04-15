import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../interfaces/medicion';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MedicionesPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor(private deviceService: DeviceService) { }
  mediciones!: Medicion[];

  ngOnInit() {
    const deviceId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.deviceService.getMediciones(parseInt(deviceId, 10)).subscribe(data => {
      this.mediciones = data;
      console.log(this.mediciones)
    })
  }

}
