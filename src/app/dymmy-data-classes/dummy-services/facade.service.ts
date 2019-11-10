import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { DashboardService } from './dashboard.service';
import { LoginService } from './login.service';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    private accountService: AccountService,
    private dashboardService: DashboardService,
    private signupService: SignupService,
    private loginService: LoginService
  ) { }

  // This service is set only to show the mocking dependencies of sevices

  getDummyData() {
    return "Dummy Data";
  }
}
