import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../data/auth.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  userFC: FormControl;
  pwdFC: FormControl;

  showPassword = false;
  constructor(public dialog: MatDialog, public authService: AuthService) {
    this.userFC = new FormControl("");
    this.pwdFC = new FormControl("");
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  tryConnection() {
    this.authService.connection(this.userFC.value, this.pwdFC.value).subscribe(result => {
      if (result){
        this.dialog.closeAll();
      }
    });

  }
}
