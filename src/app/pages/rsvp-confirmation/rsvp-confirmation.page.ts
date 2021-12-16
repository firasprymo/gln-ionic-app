import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gln-confirmation',
  templateUrl: './rsvp-confirmation.page.html',
  styleUrls: ['./rsvp-confirmation.page.scss'],
})
export class RsvpConfirmationPage implements OnInit {

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
