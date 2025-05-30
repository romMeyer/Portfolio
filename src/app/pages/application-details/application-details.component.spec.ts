import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsComponent } from './application-details.component';

describe('ProjectDetailsComponent', () => {
  let component: ApplicationDetailsComponent;
  let fixture: ComponentFixture<ApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
