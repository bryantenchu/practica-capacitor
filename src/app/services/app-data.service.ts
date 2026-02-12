import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface HomeAccount {
  name: string;
  number: string;
  type: string;
  isFavorite: boolean;
}

export interface QuickAction {
  icon: string;
  label: string;
  isNew: boolean;
}

export interface HomeData {
  filters: string[];
  promoBanner: { title: string; description: string };
  productsHeader: { title: string; subtitle: string };
  accounts: HomeAccount[];
  quickActions: QuickAction[];
}

export interface ProductAccount {
  name: string;
  number: string;
  balance: number;
  isFavorite: boolean;
}

export interface ProductsData {
  title: string;
  accounts: ProductAccount[];
}

export interface RequestItem {
  icon: string;
  label: string;
  isNew: boolean;
}

export interface RequestSection {
  title: string;
  items: RequestItem[];
}

export interface RequestsData {
  heroBanner: { title: string };
  sections: RequestSection[];
}

export interface ProfileMenuItem {
  icon: string;
  label: string;
}

export interface ProfileSection {
  title: string;
  items: ProfileMenuItem[];
}

export interface ProfileData {
  user: { name: string; initial: string; lastConnection: string };
  sections: ProfileSection[];
}

export interface AppData {
  home: HomeData;
  products: ProductsData;
  requests: RequestsData;
  profile: ProfileData;
}

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private data$: Observable<AppData>;

  constructor(private http: HttpClient) {
    this.data$ = this.http
      .get<AppData>('assets/data/app-data.json')
      .pipe(shareReplay(1));
  }

  getData(): Observable<AppData> {
    return this.data$;
  }
}
