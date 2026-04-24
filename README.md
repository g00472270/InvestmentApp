# Investment App

An Ionic Angular application for tracking and managing stock investments.

## Features

- View real-time stock quotes for popular companies
- Search for stocks by symbol or name
- Add stocks to a personal watchlist
- Persistent storage for watchlist data
- Mobile-optimized interface using Ionic components

## Technologies Used

- Framework: Angular 20 with Ionic 8
- Mobile: Capacitor for native mobile deployment
- API: Finnhub API for stock data
- Storage: Ionic Storage for local data

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/g00472270/InvestmentApp
   cd investmentApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   ionic serve
   ```

## API Configuration

The app uses the Finnhub API for stock data. The API key is in `src/app/services/stock.service.ts`.

## App Navigation

Routes defined in `src/app/app.routes.ts`:

- `/home` - Home page
- `/search` - Search page
- `/watchlist` - Watchlist page
- `/stock-detail/:symbol` - Stock detail page

## Notes

- The watchlist is stored locally on the device using Ionic Storage.
- Stock search and detail data depend on Finnhub API availability.
- For user documentation, see `wiki/User-Guide.md`.
