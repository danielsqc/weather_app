import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements OnInit, OnDestroy {
  
  time = new Date()
  timerSubscription: any = null;
  
  constructor() { }

  ngOnInit(): void {
    this.timerSubscription = setInterval(() => {
      this.time = new Date()
    }, 1000);
  
  }

  ngOnDestroy() {
    if(this.timerSubscription) {
      clearInterval(this.timerSubscription)
    }
  }

}