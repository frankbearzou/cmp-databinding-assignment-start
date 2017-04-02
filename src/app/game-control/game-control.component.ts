import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ref;
  isStarted = false;
  num = 0;
  @Output() generate = new EventEmitter<{num: number}>();

  constructor() { }

  ngOnInit() {
  }

  handler() {
    ++this.num;
    console.log(this.num);
    this.generate.emit({num: this.num});
  }

  onStart() {
    this.ref = setInterval(() => this.handler(), 1000);
    this.isStarted = true;
  }

  onStop() {
    clearInterval(this.ref);
    this.isStarted = false;
  }

}
