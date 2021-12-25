import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() theme: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  constructor() { }

  ngOnInit(): void {
  }

}
