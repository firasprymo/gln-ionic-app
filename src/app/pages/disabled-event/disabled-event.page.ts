import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gln-disabled-event',
  templateUrl: './disabled-event.page.html',
  styleUrls: ['./disabled-event.page.scss'],
})
export class DisabledEventPage implements OnInit {
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
