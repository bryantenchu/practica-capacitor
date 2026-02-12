import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personOutline,
  documentTextOutline,
  documentOutline,
  flagOutline,
  clipboardOutline,
  cardOutline,
  shieldCheckmarkOutline,
  trendingUpOutline,
  walletOutline,
  cashOutline,
  logoUsd,
} from 'ionicons/icons';
import { AppDataService, RequestSection } from '../services/app-data.service';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonBadge],
})
export class RequestsPage implements OnInit {
  heroBannerTitle = '';
  sections: RequestSection[] = [];

  constructor(private appDataService: AppDataService) {
    addIcons({
      personOutline,
      documentTextOutline,
      documentOutline,
      flagOutline,
      clipboardOutline,
      cardOutline,
      shieldCheckmarkOutline,
      trendingUpOutline,
      walletOutline,
      cashOutline,
      logoUsd,
    });
  }

  ngOnInit() {
    this.appDataService.getData().subscribe((data) => {
      this.heroBannerTitle = data.requests.heroBanner.title;
      this.sections = data.requests.sections;
    });
  }
}
