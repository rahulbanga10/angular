import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtableslistComponent } from './dbtableslist.component';

describe('DbtableslistComponent', () => {
  let component: DbtableslistComponent;
  let fixture: ComponentFixture<DbtableslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtableslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtableslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
