import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {IonSelect} from "@ionic/angular";

@Component({
  selector: 'gln-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {


  }


}
