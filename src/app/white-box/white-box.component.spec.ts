import { WhiteBoxComponent } from './white-box.component';

describe('WhiteBoxComponent', () => {
  let component: WhiteBoxComponent;

  beforeEach(() => {
    component = new WhiteBoxComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    // given
    component.counter = 0;
    // when
    component.increment();
    // then
    expect(component.counter).toEqual(1);
  });
});
