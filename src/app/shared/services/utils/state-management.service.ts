import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  public isLoading: WritableSignal<boolean> = signal(false);
}
