import { Component } from '@angular/core';
import { ClaimService } from '../claim.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-submission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-submission.component.html',
  styleUrl: './claim-submission.component.css'
})
export class ClaimSubmissionComponent {
  selectedFile: File |null = null;
  submissionResult: any = null;

  constructor(private claimService: ClaimService){}

  onFileSelected(event: any):void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if(this.selectedFile){
      this.claimService.submitClaim(this.selectedFile).subscribe({
        next: (result)=>{this.submissionResult = result},
        error: (error)=> {console.log("claimsubmission::onSubmit error - ",error)}
      }
       
      )
    }
  }
}
