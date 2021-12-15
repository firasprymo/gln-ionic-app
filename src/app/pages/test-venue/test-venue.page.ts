import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'gln-test-venue',
  templateUrl: './test-venue.page.html',
  styleUrls: ['./test-venue.page.scss'],
})
export class TestVenuePage implements OnInit {

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
