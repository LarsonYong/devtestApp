import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

const options = new RequestOptions({
  url: 'http://devtest.v5systems.us',
  body: {
      'username' : 'v5admin',
      'password' : 'v5admin123',
  },
  method: RequestMethod.Post,
  });

@Component({
  selector: 'gateway',
  templateUrl: 'gateway.html',
})
export class GatewayComponent {
  allcnntdunitlist60: any;
  allcnntdunitlist50: any;
  allcnntdunitlist40: any;
  loggedin60 = false;
  loggedin50 = false;
  loggedin40 = false;
  showalert= false;
  showsuccess = false;
  showunits60form = false;
  showunits50form = false;
  showunits40form = false;
  showunits60detail = false;
  message: string;
  cookie60: string;
  cookie50: string;
  cookie40: string;
  version60 = false;
  version50 = false;
  version40 = false;
  unitversion60= [];
  unitversion50= [];
  unitversion40= [];
  unitDetail = [];
  ReqRsult= [];
  constructor(
    private http: Http,
  ) {
    const headers = new Headers();
  }
  clicklogin60() {
    this.http.post('api/v5login60', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('111', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);

            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.showsuccess = true;
                this.showalert = false;
                this.loggedin60 = true;
                this.message = 'Success Login!';
                alert(this.message);
            }else {
                this.showsuccess = false;
                this.showalert = true;
                this.message = bos.apiStatus.responseStatus;
                alert(this.message);
            }
            this.cookie60 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
}
  clickallconnectunit60() {
    this.http.post('api/v5allconnect60', {
        'cookie': this.cookie60,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist60 = res.json().apiData;
            this.showunits60form = true;
            this.version60 = false;
            this.unitversion60 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get60unitInfo() {
    this.version60 = true;
    this.showunits60form = false;
    for (let unit of this.allcnntdunitlist60) {
        if (unit.status == 1) {
            const url = 'api/v5/60/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie60,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion60.push({
                        'versioninfo': res.json().apiData,
                    });

                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
    }
  }
//   display60UnitInfo(unitID) {
//     this.version60 = false;
//     this.showunits60form = false;
//     this.showunits60detail = true;
//     console.log(unitID);
   
//     const url = 'api/v5/60/units/info/' + unitID;
//     console.log(url);
//     this.http.post(url, {
//         'cookie': this.cookie60,
//     }).map(res => {
//         const bos = res.json().api.responseStatus;
//         if (bos == 'status_ok') {
//             this.unitDetail.push({
//             'unitdetail': res.json().apiData,  
//         });
//         }else {
//         alert('Need to login first');
//         } 
//     }).subscribe();
//     console.log("111");
//     console.log(this.unitDetail);
//     }
  clicklogin50() {
    this.http.post('api/v5login50', {
        'username': 'v5root',
        'password': 'v5admin123',
    }).map(res => {
        console.log(res.json());
        console.log('111', res.json().body);
        const botexdy = res.json().body;
        const bos = JSON.parse(botexdy);

        console.log(res.json().cookie[0]);
        if (bos.apiStatus.responseStatus == 'status_ok') {
            this.showsuccess = true;
            this.showalert = false;
            this.loggedin50 = true;
            this.message = 'Success Login!';
            alert(this.message);
        }else {
            this.showsuccess = false;
            this.showalert = true;
            this.message = bos.apiStatus.responseStatus;
            alert(this.message);
        }
        this.cookie50 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }

  clickallconnectunit50() {
    this.http.post('api/v5allconnect50', {
        'cookie': this.cookie50
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist50 = res.json().apiData;
            this.showunits50form = true;
            this.unitversion50 = [];
        }else {
            alert('Need to login first');
        }
        console.log(res.json().apiData);
    }).subscribe();
  }

  clicklogin40() {
    this.http.post('api/v5login40', {
        'username': 'v5root',
        'password': 'v5admin123',
    }).map(res => {
        console.log(res.json());
        console.log('111', res.json().body);
        const botexdy = res.json().body;
        const bos = JSON.parse(botexdy);

        console.log(res.json().cookie[0]); 
        if (bos.apiStatus.responseStatus == 'status_ok') {
            this.showsuccess = true;
            this.showalert = false;
            this.loggedin40 = true;
            this.message = 'Success Login!';
            alert(this.message);
        }else {
            this.showsuccess = false;
            this.showalert = true;
            this.message = bos.apiStatus.responseStatus;
            alert(this.message);
        }
        this.cookie40 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }

  clickallconnectunit40() {
    this.http.post('api/v5allconnect40', {
        'cookie': this.cookie40
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist40 = res.json().apiData;
            this.showunits40form = true;
            this.unitversion40 = [];
        }else {
            alert('Need to login first');
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get50unitInfo() {
    this.version50 = true;
    this.showunits50form = false;
    for (let unit of this.allcnntdunitlist50) {
        if (unit.status == 1) {
            const url = 'api/v5/50/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie50
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == "status_ok") {
                    this.unitversion50.push({
                        'versioninfo': res.json().apiData,
                    });
                }else {
                    alert("Need to login first")
                }
            }).subscribe();
        }else {
            console.log("unit not up! _____________________")
        }
    }
  }
  get40unitInfo() {
      this.version40 = true;
      this.showunits40form = false;
      for (let unit of this.allcnntdunitlist60) {
          if (unit.status == 1) {
              const url = 'api/v5/40/units/info/' + JSON.stringify(unit.unitId);
              this.http.post(url, {
                  'cookie': this.cookie40,
              }).map(res => {
                  const bos = res.json().apiStatus.responseStatus;
                  if (bos == 'status_ok') {
                      this.unitversion40.push({
                          'versioninfo': res.json().apiData,
                      });
                      this.showunits40form = true;
                  }else {
                      alert("Need to login first")
                  }
              }).subscribe();
          }else {
              console.log("unit not up! _____________________")
          }
      }
  }
}

