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
import {
  personOutline,
  businessOutline,
  eyeOffOutline,
  lockClosedOutline,
  checkmarkCircleOutline,
  chevronForward,
} from 'ionicons/icons';
import { AppDataService, ProfileSection } from '../services/app-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
  ],
})
export class ProfilePage implements OnInit {
  userName = '';
  userInitial = '';
  lastConnection = '';
  sections: ProfileSection[] = [];

  constructor(private appDataService: AppDataService) {
    addIcons({
      personOutline,
      businessOutline,
      eyeOffOutline,
      lockClosedOutline,
      checkmarkCircleOutline,
      chevronForward,
    });
  }

  ngOnInit() {
    this.appDataService.getData().subscribe((data) => {
      this.userName = data.profile.user.name;
      this.userInitial = data.profile.user.initial;
      this.lastConnection = data.profile.user.lastConnection;
      this.sections = data.profile.sections;
    });
  }
}
