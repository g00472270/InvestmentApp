import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: 'watchlist.page.html',
  styleUrls: ['watchlist.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, CommonModule]
})
export class WatchlistPage {

  watchlist: string[] = [];
  stockData: any = {};

  constructor(
    private storageService: StorageService,
    private stockService: StockService
  ) { }

  async ionViewWillEnter() {
    this.watchlist = await this.storageService.getWatchlist();
    this.watchlist.forEach(symbol => {
      this.stockService.getStockData(symbol).subscribe((data: any) => {
        this.stockData[symbol] = data;
      });
    });
  }

  removeFromWatchlist(symbol: string) {
    this.storageService.removeFromWatchlist(symbol);
    this.watchlist = this.watchlist.filter(s => s !== symbol);
  }

}