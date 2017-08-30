import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  returnUrl: string;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
  ) {
    AuthenticationService.logout();
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      this.submitted = true;
      this.authenticationService.login(this.form.value.username, this.form.value.password )
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            
          },
        );
    }
  }
}
