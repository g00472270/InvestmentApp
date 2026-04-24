import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { StockService } from '../../services/stock.service';
import { StorageService } from '../../services/storage';
import { Browser } from '@capacitor/browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, CommonModule]
})
export class HomePage {
  
  stocks = [
    { symbol: 'AAPL', name: 'Apple' },
    { symbol: 'TSLA', name: 'Tesla' },
    { symbol: 'GOOGL', name: 'Google' },
    { symbol: 'AMZN', name: 'Amazon' },
    { symbol: 'MSFT', name: 'Microsoft' },
    { symbol: 'NVDA', name: 'NVIDIA' },
    { symbol: 'META', name: 'Meta' },
    { symbol: 'NFLX', name: 'Netflix' },
    { symbol: 'BABA', name: 'Alibaba' },
    { symbol: 'AMD', name: 'AMD' },
  ];

  stockData: any = {};

  constructor(
    private stockService: StockService,
    private storageService: StorageService,
    private router: Router
  ) { }

  goToDetail(symbol: string) {
    this.router.navigate(['/stock-detail', symbol]);
  }

  ionViewWillEnter() {
    this.stocks.forEach(stock => {
      this.stockService.getStockData(stock.symbol).subscribe((data: any) => {
        this.stockData[stock.symbol] = data;
      });
    });
  }

  addToWatchlist(symbol: string) {
    this.storageService.addToWatchlist(symbol);
  }

  async openBrowser() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

}
