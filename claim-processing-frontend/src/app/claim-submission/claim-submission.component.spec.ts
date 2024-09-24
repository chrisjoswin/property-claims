import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ClaimSubmissionComponent } from './claim-submission.component';
import { ClaimService } from '../claim.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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

  it('should call claimService.submitClaim when onSubmit is called with an attached file',()=>{
    const mockFile = new File([''],'test.pdf', {type:'application/pdf'});
    const mockResult = {status: 'submitted'};
    claimServiceSpy.submitClaim.and.returnValue(of(mockResult));
    component.selectedFile=mockFile;
    component.onSubmit();

    expect(claimServiceSpy.submitClaim).toHaveBeenCalledWith(mockFile);
    expect(component.submissionResult).toEqual(mockResult);
  });
});
