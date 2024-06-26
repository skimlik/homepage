import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LocalStorageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  getValue(key: string): string | null | undefined {
    return this.window?.localStorage?.getItem(key);
  }

  getJson<T>(key: string): T | null {
    const json = this.getValue(key);
    if (!json) {
      return null;
    }
    return JSON.parse(json);
  }

  setValue(key: string, value: string): void {
    this.window?.localStorage?.setItem(key, value);
  }

  setJson<T>(key: string, value: T): void {
    const json = JSON.stringify(value);
    this.setValue(key, json);
  }

  remove(key: string): void {
    this.window?.localStorage?.removeItem(key);
  }

  private get window(): Window | null {
    return this.document.defaultView;
  }
}
