import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaugeNutrimentComponent } from './jauge-nutriment.component';

describe('JaugeNutrimentComponent', () => {
  let component: JaugeNutrimentComponent;
  let fixture: ComponentFixture<JaugeNutrimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaugeNutrimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaugeNutrimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
