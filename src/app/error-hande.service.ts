import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandeService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    if (error.message && error.message.includes('NG04002')) {
      console.log('error handle');
      window.location.href = '/cz';
    }
  }
}

