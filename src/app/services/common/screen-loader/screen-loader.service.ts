import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ScreenLoaderService {
  public isLoading: boolean;

  constructor(private readonly store: Store) {
    this.isLoading = false;
  }

  setLoading(isLoading: boolean, comment?: string) {
    // console.log(`Loading-${comment}`, isLoading);
    this.isLoading = isLoading;
  }
}
