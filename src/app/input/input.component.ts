import { Component, OnInit, ContentChild, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ged-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {

  @ContentChild(NgControl, { static: false })
  control: NgControl;

  constructor() { }

  ngAfterViewInit() {

  }

}
