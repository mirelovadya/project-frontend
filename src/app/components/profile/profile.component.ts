import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user: any = {
    firstName: "mirel",
    lastName: "ovadya",
    email: "mirelovadya@gmail.com",
    credits: [{
      creditNumber: "4580 1254 7896 1456",
      creditDate: "22/10/2000",
      creditCvv: "248"
    },
    {
      creditNumber: "4580 8754 7896 7894",
      creditDate: "22/10/2023",
      creditCvv: "741",
      defaultCredit: true
    }]
  };
  public editDetails: boolean = false;
  public dataError: any = {};

  public showPasswordModal: boolean = false;
  public showProfileModal: boolean = false;
  constructor(public userService: UserService) {

  }
  ngOnInit() {
    this.user = this.userService.user
    // if (this.user?.credits) {
    //   let index = this.user.credits.findIndex((item: any) => item.defaultCredit == true)
    //   if (index != -1) {
    //     this.user.credit = this.user.credits[index]
    //   }
    // }
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

  //toggle last password icon
  toggleLastPassword() {
    let toggle: any = document.querySelector('#eyeIconLastPassword');
    let password: any = document.querySelector('#lastPassword');
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

  //toggle secound password icon
  toggleSecoundPassword() {
    let toggle: any = document.querySelector('#eyeIconSecoundPassword');
    let password: any = document.querySelector('#secoundPassword');
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
  //remove data error last password
  removeLastPasswordFailed() {
    this.dataError.lastPasswordFaild = false
  }

  //when open modal
  openPasswodModal() {
    this.showPasswordModal = true
    setTimeout(() => {
      $('#passwordModal').modal('show');
    }, 50)

    $('#passwordModal').modal({ backdrop: 'static', keyboard: false })

  }

  //when closing password modal
  closePasswodModal(response?: any) {
    $('#passwordModal').modal('hide');
    this.showPasswordModal = false

  }

  //when open profile modal
  openProfileModal() {
    $('#profileModal').modal({ backdrop: 'static', keyboard: false })
    this.showProfileModal = true
    setTimeout(() => {
      $('#profileModal').modal('show');
    }, 50)

    $('#profileModal').modal({ backdrop: 'static', keyboard: false })
  }

  //when closing profile modal
  closeProfileModal(response?: any) {
    $('#profileModal').modal('hide');
    this.showProfileModal = false
  }

  savePersonalDetails() {

  }

  updateConnectionDetails() {

  }
}
