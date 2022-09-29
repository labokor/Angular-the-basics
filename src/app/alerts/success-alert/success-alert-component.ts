import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>This is the Success Alert Component!</p>',
  styles: [
    `
      p {
        padding: 20px;
        background-color: orangered;
        border: 1px solid orange;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
