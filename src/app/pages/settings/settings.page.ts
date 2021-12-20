import {Component, OnInit, ViewChild} from '@angular/core';
import {IonDatetime} from "@ionic/angular";
import {format, parseISO} from 'date-fns';

@Component({
  selector: 'gln-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  checked = false;
  @ViewChild(IonDatetime, {static: true}) datetime: IonDatetime;
  dateValue2 = '';

  constructor() {
  }

  ngOnInit() {
  }

  confirm() {

  }

  onCheck() {
    this.checked = true;
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
