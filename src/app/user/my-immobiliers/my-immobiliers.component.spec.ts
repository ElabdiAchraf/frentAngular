import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImmobiliersComponent } from './my-immobiliers.component';

describe('MyImmobiliersComponent', () => {
  let component: MyImmobiliersComponent;
  let fixture: ComponentFixture<MyImmobiliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImmobiliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImmobiliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
