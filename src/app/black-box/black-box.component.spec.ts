import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBoxComponent } from './black-box.component';
import {By} from '@angular/platform-browser';

describe('BlackBoxComponent', () => {
  let component: BlackBoxComponent;
  let fixture: ComponentFixture<BlackBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    // given
    component.counter = 0;
    const counterButton: HTMLButtonElement =
      fixture.debugElement.query(By.css('[data-test="counterButton"]'))?.nativeElement;
    const counterParagraph: HTMLParagraphElement =
      fixture.debugElement.query(By.css('[data-test="counterParagraph"]'))?.nativeElement;
    // when
    counterButton.click();
    fixture.detectChanges();
    // then
    expect(counterParagraph?.innerText).toEqual('Counter: 1');
  });
});
