import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapFaceListComponent } from './snap-face-list.component';

describe('SnapFaceListComponent', () => {
  let component: SnapFaceListComponent;
  let fixture: ComponentFixture<SnapFaceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapFaceListComponent]
    });
    fixture = TestBed.createComponent(SnapFaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
