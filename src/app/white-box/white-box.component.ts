import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-white-box',
  templateUrl: './white-box.component.html',
  styleUrls: ['./white-box.component.scss']
})
export class WhiteBoxComponent {

  @Input()
  public counter = 0;

  public increment(): void {
    this.counter++;
  }

}
