import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from '@core/models';
import { TitleService } from '@core/services';
import { catchError, map, Observable, of, zip } from 'rxjs';

@Injectable()
export class StartupService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly titleService: TitleService
  ) {}

  load(): Observable<any> {
    return zip([this.httpClient.get<AppData>('assets/app-data.json')]).pipe(
      map((values) => {
        const [appData] = values;

        this.titleService.suffix = appData.name;
      }),
      catchError((error: any) => {
        console.warn(`StartupService.load: Network request failed`, error);
        setTimeout(() => this.router.navigateByUrl(`/exception/500`));

        return of(null);
      })
    );
  }
}
