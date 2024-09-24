import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimStatusComponent } from './claim-status.component';
import { ClaimService } from '../claim.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ClaimStatusComponent', () => {
  let component: ClaimStatusComponent;
  let fixture: ComponentFixture<ClaimStatusComponent>;
  let claimServiceSpy: jasmine.SpyObj<ClaimService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ClaimService',['submitClaim']);
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
});
