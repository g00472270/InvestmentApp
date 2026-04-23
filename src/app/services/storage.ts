import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async addToWatchlist(symbol: string): Promise<void> {
    const watchlist = await this.getWatchlist();
    if (!watchlist.includes(symbol)) {
      watchlist.push(symbol);
      await this.storage.set('watchlist', watchlist);
    }
  }

  async removeFromWatchlist(symbol: string): Promise<void> {
    const watchlist = await this.getWatchlist();
    const updated = watchlist.filter((s: string) => s !== symbol);
    await this.storage.set('watchlist', updated);
  }

  async getWatchlist(): Promise<string[]> {
    const watchlist = await this.storage.get('watchlist');
    return watchlist || [];
  }

}