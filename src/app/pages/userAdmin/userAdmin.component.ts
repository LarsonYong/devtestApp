import { UserServices } from './../../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'userAdmin',
    templateUrl: 'userAdmin.component.html',
    styleUrls: ['userAdmin.component.css'],
  })
export class UserAdminComponent {
    message = '';
    public UserList = [];
    public location = '';
    model = new User('', '', '', '', false);
    public UserDetails = [];
    public UserSearchDeatails = [];
    showUserlist = false;
    showAdduser = false;
    showSearchuser = false;
    constructor(
        private http: Http,
        private router: Router,
        private userService: UserServices,
    ) {
        this.showUserlist = true;
        this.showalert = false;
        this.showsuccess = false;
        this.showuserlist();
        console.log("submitted: " + this.submitted)
    }
    showuserlist() {
        // document.getElementById('userlistbttn').classList.add('active');
        // document.getElementById('adduserbttn').classList.remove('active');
        // document.getElementById('searchbttn').classList.remove('active');
        // document.getElementById('userlist').classList.add('active');
        // document.getElementById('userlist').classList.remove('hidden');
        // document.getElementById('adduser').classList.remove('active');
        // document.getElementById('adduser').classList.add('hidden');
        // document.getElementById('searchuser').classList.remove('active');
        // document.getElementById('searchuser').classList.add('hidden');
        this.userService.getUserList().subscribe((data) => (this.UserList = data.json()));
        this.submitted = false;
        this.showsuccess = false;
        this.showalert = false;
        this.showUserlist = true;
        this.showAdduser = false;
        this.showSearchuser = false;
      }
      showadduser() {
        //   document.getElementById('userlistbttn').classList.remove('active');
        //   document.getElementById('adduserbttn').classList.add('active');
        //   document.getElementById('searchbttn').classList.remove('active');
        //   document.getElementById('adduser').classList.add('active');
        //   document.getElementById('adduser').classList.remove('hidden');
        //   document.getElementById('userlist').classList.remove('active');
        //   document.getElementById('userlist').classList.add('hidden');
        //   document.getElementById('searchuser').classList.remove('active');
        //   document.getElementById('searchuser').classList.add('hidden');
          this.submitted = false;
          this.showsuccess = false;
          this.showalert = false;
          this.showUserlist = false;
          this.showAdduser = true;
          this.showSearchuser = false;
      }
      showsearch() {
        //   document.getElementById('userlistbttn').classList.remove('active');
        //   document.getElementById('adduserbttn').classList.remove('active');
        //   document.getElementById('searchbttn').classList.add('active');
        //   document.getElementById('searchuser').classList.add('active');
        //   document.getElementById('searchuser').classList.remove('hidden');
        //   document.getElementById('userlist').classList.remove('active');
        //   document.getElementById('userlist').classList.add('hidden');
        //   document.getElementById('adduser').classList.remove('active');
        //   document.getElementById('adduser').classList.add('hidden');
          this.searched = false;
          this.submitted = false;
          this.showsuccess = false;
          this.showalert = false;
          this.showUserlist = false;
          this.showAdduser = false;
          this.showSearchuser = true;
      }
      
      submitted = false;
      searched = false;
      showalert = false;
      showsuccess = false;
      get diagnostic() { return JSON.stringify(this.model); }
      
          adduserclicked(username, password) {
              this.submitted = true;
              console.log("submitted: " + this.submitted);
              this.addUser(username, password);
          }
      
          addUser(username, password) {
              this.http.post('api/user/add', {
                       'username': username,
                       'password': password},
                       ).map(res => {
      
                           if (res.status === 406) {
                               throw new Error('User already exist. '+ res.status);
                           }else if (res.status < 200 || res.status >= 300) {
                               throw new Error('This request failed. '+ res.status);
                           }else {
                               if (res.json().status == 406) {
                                   this.showalert = true;
                                   this.message = "User already exist!";
                                   console.log("1111");
                                   console.log(this.message);
                               }else {
                                   this.showalert = false;
                                   this.showsuccess = true;
                                   this.message = res.json().message;
                               }
      
                           }
              })
                  .subscribe(
                      (data) => console.log(data),
                  );
          }
      
          deleteUser(username) {
              const result = confirm('Delete user: '+ username +'?');
              if (result) {
              this.http.post('api/user/delete', {
                  'username': username,
              }).subscribe(data => {
                  console.log(data);
                  this.userService.getUserList().subscribe(( data ) => (
                      this.UserList = data.json()),
                  );
      
                  this.showsuccess = true;
                  this.message = 'Success delete user';
              }, err => {
                  console.log(err);
              });
            };
          }
      
          searchuserclick(username) {
      
              this.http.get('api/getUser/' + username)
                  .map(res => {
                      if (res.json().status == 404) {
                          this.showalert = true;
                          this.searched = false;
                          this.message = "User not exist"
                      }else {
                          this.showalert = false;
                          this.searched = true;
                          return res.json();
                      }
                  }).subscribe(
                  (data) => (this.UserSearchDeatails = data),
              );
              console.log("1111");
              console.log(this.UserSearchDeatails);
      
      
          }
}
