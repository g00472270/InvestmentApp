import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline, eyeOutline, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon],
})
export class AppComponent {
  constructor() {
    addIcons({ homeOutline, eyeOutline, searchOutline });
  }
}
