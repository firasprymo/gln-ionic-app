import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gln-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    spaceBetween: 10,
    scrollbar: {draggable: true},
    loop: true
    // virtualTranslate: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
