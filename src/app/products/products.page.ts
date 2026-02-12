import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, starOutline, chevronForward } from 'ionicons/icons';
import { AppDataService, ProductAccount } from '../services/app-data.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  ],
})
export class ProductsPage implements OnInit {
  title = '';
  accounts: ProductAccount[] = [];

  get totalBalance(): number {
    return this.accounts.reduce((sum, a) => sum + a.balance, 0);
  }

  constructor(private appDataService: AppDataService) {
    addIcons({ star, starOutline, chevronForward });
  }

  ngOnInit() {
    this.appDataService.getData().subscribe((data) => {
      this.title = data.products.title;
      this.accounts = data.products.accounts;
    });
  }
}
