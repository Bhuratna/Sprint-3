import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCrudOperationsComponent } from './cab-crud-operations.component';

describe('CabCrudOperationsComponent', () => {
  let component: CabCrudOperationsComponent;
  let fixture: ComponentFixture<CabCrudOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCrudOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCrudOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
