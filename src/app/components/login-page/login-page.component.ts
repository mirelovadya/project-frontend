import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private userService: UserService,
    public router: Router
  ) { }

  rememberMe: boolean = false
  loginUserData: any = {}
  async ngOnInit() {

  }

  //toggle password icon
  togglePassword() {
    let toggle: any = document.querySelector('#eyeIconPassword');
    let password: any = document.querySelector('#password');
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';

    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    if (type == "text") {
      toggle.classList.remove('fa-eye');
      toggle.classList.add('fa-eye-slash');
    }
    else {
      toggle.classList.remove('fa-eye-slash');
      toggle.classList.add('fa-eye');
    }
  }


  // login
  login() {
    this.userService.login(this.loginUserData).subscribe((response: any) => {
      if (response.access_token) {
        this.userService.user = response.user
        if (this.userService.user.lastLoginDate) {
          let lastLoginDate = new Date(this.userService.user.lastLoginDate)
          this.userService.user.lastLoginDate = lastLoginDate.toLocaleString()
        }
        this.userService.user.token = response.access_token
        this.router.navigate(["/profile"]);
      }

    }, (err) => {
      console.log("error", err);

    })
  }

}
