import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonChip,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  helpCircleOutline,
  chevronForward,
  eyeOffOutline,
  cashOutline,
  bulbOutline,
  cardOutline,
  phonePortraitOutline,
  qrCodeOutline,
  linkOutline,
  star,
} from 'ionicons/icons';
import {
  AppDataService,
  HomeAccount,
  QuickAction,
} from '../services/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonChip,
    IonBadge,
  ],
})
export class HomePage implements OnInit {
  selectedFilter = 'Cuentas';
  filters: string[] = [];
  accounts: HomeAccount[] = [];
  quickActions: QuickAction[] = [];
  promoBanner = { title: '', description: '' };
  productsHeader = { title: '', subtitle: '' };

  constructor(private appDataService: AppDataService) {
    addIcons({
      helpCircleOutline,
      chevronForward,
      eyeOffOutline,
      cashOutline,
      bulbOutline,
      cardOutline,
      phonePortraitOutline,
      qrCodeOutline,
      linkOutline,
      star,
    });
  }

  ngOnInit() {
    this.appDataService.getData().subscribe((data) => {
      this.filters = data.home.filters;
      this.accounts = data.home.accounts;
      this.quickActions = data.home.quickActions;
      this.promoBanner = data.home.promoBanner;
      this.productsHeader = data.home.productsHeader;
    });
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
