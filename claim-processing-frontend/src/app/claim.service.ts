import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  
  submitClaim(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(`${this.apiUrl}/submit-claim/`,formData);
  }

  retrieveClaimStatus(claimId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/claim-status/${claimId}`)
  }
}
