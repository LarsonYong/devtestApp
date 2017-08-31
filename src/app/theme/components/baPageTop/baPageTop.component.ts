import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';
import { isloggedin, logout } from '../../../services/authentication.service';

import { Login } from '../../../pages/login/login.component';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {
  public currentUser: any;
  public username: string;
  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  

  constructor(
    private _state: GlobalState,
    private router: Router,
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = this.currentUser[0].Username;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  logout() {
    const checkResult = isloggedin();
    if (checkResult) {
        logout();
        this.router.navigateByUrl('/login') ;
    }
  }
}
