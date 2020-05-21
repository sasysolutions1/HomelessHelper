import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

import { UserService } from '../services/user.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { LoadingController } from '@ionic/angular';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
    email: string  = '';
    username: string = '';
    phone: string = '';
    password: string = '';
    passwordConfirm: string = '';
    checkBox: boolean = false;
    postO: Observable<any>;

    

    registration = {};
    constructor(
        public router: Router, private http: HttpClient, public loadingController: LoadingController, 
        private titleService: Title,
        public alertController: AlertController,
        public user: UserService,
       
    ) { }

    ngOnInit() {

        this.titleService.setTitle('Homeless Helper');  
  
    }

    async presentAlert(x, y) {
        const alert = await this.alertController.create({
            header: 'Error',
            subHeader: x,
            message: y,
            buttons: [{text: 'OK'}],
            
        });
        await alert.present();
    }

    showLogin() {
        this.router.navigate(['login']);
    }

async helpShow(){
    this.router.navigate(['help']);
}

async presentLoading() {
    const loading1 = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      spinner: 'bubbles',
      id: 'cc1'
      
    });
    await loading1.present();
    const { role, data } = await loading1.onDidDismiss();
  }

    async register() {
                if(this.password == this.passwordConfirm && this.email !== '' && this.username !== ''){
   this.registration = {email: this.email, applicationId :'d1369835-5747-4f5a-bfb0-03e81671db80', user: {password: this.password}, password: this.password, username: this.username, mobilePhone: this.phone};
   
                    
                    
                    try { 
                        this.postO =  this.http.post("http://oauth.autosecurelogin.com/api/user/registration/",   {  regisration: this.registration});
            
                        this.postO.subscribe(
                            (val) => { 
                            
                            
   console.log(val);
                            
                            },
                            response => {
                                console.log("error:" + JSON.stringify(response));
                            
                            
                            },
                            () => {
                            
                            
                            });
                    }
                    catch (err) {
                        if (err) {
                            this.presentAlert(err.code, err.message);
                            
                        }
                    }
                }
    }
}
