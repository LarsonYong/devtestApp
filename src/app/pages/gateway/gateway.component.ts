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
  allcnntdunitlist30: any;
  allcnntdunitlist70: any;
  loggedin60 = false;
  loggedin50 = false;
  loggedin40 = false;
  loggedin30 = false;
  loggedin70 = false;
  showalert= false;
  showsuccess = false;
  showunits60form = false;
  showunits70form = false;
  showunits30form = false;
  showunits50form = false;
  showunits40form = false;
  showunits60detail = false;
  showunits30detail = false;
  showunits70detail = false;
  message: string;
  cookie60: string;
  cookie50: string;
  cookie40: string;
  cookie30: string;
  cookie70: string;
  version60 = false;
  version50 = false;
  version40 = false;
  version30 = false;
  version70 = false;
  unitversion60= [];
  unitversion50= [];
  unitversion40= [];
  unitversion30= [];
  unitversion70= [];
  unitDetail = [];
  ReqRsult= [];
  default = 'None'
  constructor(
    private http: Http,
  ) {
    const headers = new Headers();
  }
  clicklogin70() {
    this.http.post('api/v5login70', {
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
                this.loggedin70 = true;
                this.message = 'Success Login!';
                alert(this.message);
            }else {
                this.showsuccess = false;
                this.showalert = true;
                this.message = bos.apiStatus.responseStatus;
                alert(this.message);
            }
            this.cookie70 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
}
  clickallconnectunit70() {
    this.http.post('api/v5allconnect70', {
        'cookie': this.cookie70,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist70 = res.json().apiData;
            this.showunits70form = true;
            this.version70 = false;
            this.unitversion70 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get70unitInfo() {
    this.version70 = true;
    this.showunits70form = false;
    for (let unit of this.allcnntdunitlist60) {
        if (unit.status == 1) {
            const url = 'api/v5/70/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie70,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion70.push({
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

  clicklogin50() {
    this.http.post('api/v5login50', {
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
            this.version50 = false;
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
  clicklogin30() {
    this.http.post('api/v5login30', {
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
                this.loggedin30 = true;
                this.message = 'Success Login!';
                alert(this.message);
            }else {
                this.showsuccess = false;
                this.showalert = true;
                this.message = bos.apiStatus.responseStatus;
                alert(this.message);
            }
            this.cookie30 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
}
  clickallconnectunit30() {
    this.http.post('api/v5allconnect30', {
        'cookie': this.cookie30,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist30 = res.json().apiData;
            this.showunits30form = true;
            this.version30 = false;
            this.unitversion30 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get30unitInfo() {
    this.version30 = true;
    this.showunits30form = false;
    for (let unit of this.allcnntdunitlist30) {
        if (unit.status == 1) {
            const url = 'api/v5/30/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie30,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion30.push({
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
}

