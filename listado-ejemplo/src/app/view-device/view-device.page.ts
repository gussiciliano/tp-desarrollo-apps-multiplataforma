import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Device } from '../services/data.service';

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.page.html',
  styleUrls: ['./view-device.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ViewDevicePage implements OnInit {
  public device!: Device;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.device = this.data.getDeviceById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
