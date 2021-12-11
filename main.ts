// to compile in browser need platformBrowserDynamic
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
