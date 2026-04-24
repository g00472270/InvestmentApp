import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StockService {
  constructor(private httpClient: HttpClient) { }

  private apiKey = 'd7l9v7pr01qm7o0b39v0d7l9v7pr01qm7o0b39vg';

  getStockData(symbol: string): Observable<any> {
    return this.httpClient.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${this.apiKey}`);
  }

  searchStocks(query: string): Observable<any> {
    return this.httpClient.get(`https://finnhub.io/api/v1/search?q=${query}&token=${this.apiKey}`);
  }
  getCompanyProfile(symbol: string): Observable<any> {
    return this.httpClient.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${this.apiKey}`);
  }
}
