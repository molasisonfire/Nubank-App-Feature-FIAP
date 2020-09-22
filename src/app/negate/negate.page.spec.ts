import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NegatePage } from './negate.page';

describe('NegatePage', () => {
  let component: NegatePage;
  let fixture: ComponentFixture<NegatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NegatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
