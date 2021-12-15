import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {
  innerValue: boolean = true;

  onChangeCallback = (v: boolean) => {};
  onTouchedCallback = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  toggle(value: boolean) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
      this.onTouchedCallback();
    }
  }



}
