import { Injectable, Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private _separator = ' - ';
  private _suffix = '';

  private readonly default = '';
  private readonly delay = 25;

  constructor(
    private readonly injector: Injector,
    private readonly title: Title
  ) {}

  set separator(value: string) {
    this._separator = value;
  }

  set suffix(value: string) {
    this._suffix = value;
  }

  setTitle(title?: string | string[]): void {
    setTimeout(() => this._setTitle(title), this.delay);
  }

  private _setTitle(title?: string | string[]): void {
    if (!title) {
      title = this.getFromRoute() ?? this.default;
    }

    if (!Array.isArray(title)) {
      title = [title];
    }

    if (this._suffix) {
      title.push(this._suffix);
    }

    this.title.setTitle(title.join(this._separator));
  }

  private getFromRoute(): string | undefined {
    let next = this.injector.get(ActivatedRoute);

    while (next.firstChild) {
      next = next.firstChild;
    }

    const data = next.snapshot && next.snapshot.data;
    return data['title'];
  }
}
