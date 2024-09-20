import { Component } from '@angular/core';
import { ClaimService } from '../claim.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './claim-status.component.html',
  styleUrl: './claim-status.component.css'
})
export class ClaimStatusComponent {
  claimId: string = '';
  claimStatus: any = null;
  constructor(private claimService: ClaimService){}

  checkStatus(): void {
    this.claimService.retrieveClaimStatus(this.claimId).subscribe({
      next: (result)=>{this.claimStatus = result},
      error: (error) =>{console.log("claim-status::checkStatus error - ", error)}
    });
  }

}
