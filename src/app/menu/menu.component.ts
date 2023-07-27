import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../core/auth/auth.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public dialog: MatDialog) {}
  openDialogLogin():void {
    const dialogRef = this.dialog.open(AuthComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
