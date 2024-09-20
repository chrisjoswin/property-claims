import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimStatusComponent } from "./claim-status/claim-status.component";
import { ClaimSubmissionComponent } from "./claim-submission/claim-submission.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClaimStatusComponent, ClaimSubmissionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'claim-processing-frontend';
}
