import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDesriptionComponent } from './profile-desription.component';

describe('ProfileDesriptionComponent', () => {
  let component: ProfileDesriptionComponent;
  let fixture: ComponentFixture<ProfileDesriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDesriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDesriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
