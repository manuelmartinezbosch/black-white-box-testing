import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-black-box',
  templateUrl: './black-box.component.html',
  styleUrls: ['./black-box.component.scss']
})
export class BlackBoxComponent {

  @Input()
  public counter = 0;


  public increment(): void {
    this.counter++;
  }

}
