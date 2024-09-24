import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimStatusComponent } from './claim-status.component';
import { ClaimService } from '../claim.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ClaimStatusComponent', () => {
  let component: ClaimStatusComponent;
  let fixture: ComponentFixture<ClaimStatusComponent>;
  let claimServiceSpy: jasmine.SpyObj<ClaimService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ClaimService',['retrieveClaimStatus']);
    await TestBed.configureTestingModule({
      imports: [ClaimStatusComponent],
      providers:[provideHttpClient(),provideHttpClientTesting(),{provide: ClaimService, useValue: spy}]
    })
    .compileComponents();

    claimServiceSpy = TestBed.inject(ClaimService) as jasmine.SpyObj<ClaimService>;
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(ClaimStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call claimService.retrieveClaimStatus when checkStatus is called',()=>{
    const mockClaimId = '1234';
    const mockResult = {status: 'processed'};
    claimServiceSpy.retrieveClaimStatus.and.returnValue(of(mockResult));
    component.claimId=mockClaimId;
    component.checkStatus();

    expect(claimServiceSpy.retrieveClaimStatus).toHaveBeenCalledWith(mockClaimId);
    expect(component.claimStatus).toEqual(mockResult);
  });
});
