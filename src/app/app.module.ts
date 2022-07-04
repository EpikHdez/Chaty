import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';

// #region Startup Service
import { HttpClientModule } from '@angular/common/http';
import { StartupService } from '@core/startup';

const APPINIT_PROVIDERS = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: (startupService: StartupService) => () => startupService.load(),
    deps: [StartupService],
    multi: true,
  },
];
// #endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RoutesModule,
  ],
  providers: [...APPINIT_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
