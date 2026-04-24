import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { StockService } from '../../services/stock.service';
import { StorageService } from '../../services/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonButton, FormsModule]
})

export class SearchPage {

  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private stockService: StockService,
    private storageService: StorageService,
    private router: Router
  ) { }

  goToDetail(symbol: string) {
    this.router.navigate(['/stock-detail', symbol]);
  }

  onSearch() {
    if (this.searchQuery.length > 0) {
      this.stockService.searchStocks(this.searchQuery).subscribe((data: any) => {
        this.searchResults = data.result.slice(0, 10);
      });
    }
  }

  addToWatchlist(symbol: string) {
    this.storageService.addToWatchlist(symbol);
  }
}