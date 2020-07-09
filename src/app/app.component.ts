import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  private someRandomVariable: boolean = false;
  private name: string = "test";
  data = [
    {
      lang: 'Javascript',
      usedOn: 'web'
    },
    {
      lang: 'Swift',
      usedOn: 'iOS'
    }
  ]

  constructor() {
    setInterval(() => {
      this.someRandomVariable = !this.someRandomVariable;
    }, 1000)
  }
}
