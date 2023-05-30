import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyprusComponent } from './cyprus.component';

describe('CyprusComponent', () => {
  let component: CyprusComponent;
  let fixture: ComponentFixture<CyprusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyprusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyprusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
