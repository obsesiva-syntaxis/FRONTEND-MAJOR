import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'straight',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 80
  };

  constructor() { }

  ngOnInit() {
    $('.parallax-window').parallax();
  }

}

