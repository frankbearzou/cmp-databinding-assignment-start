import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number;

  getNumber(data: {num: number}) {
    this.num = data.num;
  }


}
