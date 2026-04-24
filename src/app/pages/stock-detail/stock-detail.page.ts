import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { StorageService } from '../../services/storage';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-stock-detail',
  templateUrl: 'stock-detail.page.html',
  styleUrls: ['stock-detail.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonBackButton, IonButtons, CommonModule]
})
export class StockDetailPage {

  symbol: string = '';
  quoteData: any = {};
  profileData: any = {};

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private storageService: StorageService
  ) {}

  ionViewWillEnter() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';
    this.stockService.getStockData(this.symbol).subscribe((data: any) => {
      this.quoteData = data;
    });
    this.stockService.getCompanyProfile(this.symbol).subscribe((data: any) => {
      this.profileData = data;
    });
  }

  addToWatchlist() {
    this.storageService.addToWatchlist(this.symbol);
  }

  async openNews() {
    await Browser.open({ url: `https://finance.yahoo.com/quote/${this.symbol}` });
  }

}