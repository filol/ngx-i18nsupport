import { enableProdMode } from '@angular/core.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

