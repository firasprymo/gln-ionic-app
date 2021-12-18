import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gln-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  checked = false;

  constructor() {
  }

  ngOnInit() {
  }

  confirm() {

  }

  onCheck() {
    this.checked = true;
  }
}
