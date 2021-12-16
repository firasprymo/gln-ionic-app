import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gln-main-disabled',
  templateUrl: './main-disabled.page.html',
  styleUrls: ['./main-disabled.page.scss'],
})
export class MainDisabledPage implements OnInit {
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
