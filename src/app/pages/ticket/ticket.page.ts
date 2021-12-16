import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'gln-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
