import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gln-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    spaceBetween: 10,
    scrollbar: { draggable: true },
    loop: true
    // virtualTranslate: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
