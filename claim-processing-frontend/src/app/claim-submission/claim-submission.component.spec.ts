import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ClaimSubmissionComponent } from './claim-submission.component';
import { ClaimService } from '../claim.service';
import { provideHttpClient } from '@angular/common/http';

describe('ClaimSubmissionComponent', () => {
  let component: ClaimSubmissionComponent;
  let fixture: ComponentFixture<ClaimSubmissionComponent>;
  let claimServiceSpy: jasmine.SpyObj<ClaimService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ClaimService',['submitClaim']);

    await TestBed.configureTestingModule({
      imports: [ClaimSubmissionComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(),{provide: ClaimService, useValue: spy}]
    })
    .compileComponents();

    claimServiceSpy = TestBed.inject(ClaimService) as jasmine.SpyObj<ClaimService>

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(ClaimSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
