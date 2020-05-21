import { Injectable } from '@angular/core';




interface user {
    username: string,
    uid: string,
   stripecustid: string, //stripe customer id
    sourceid: any,//customer payment source id
    paymethodid: any;
    credits: number,
    phoneNum: string,
    name: string
    clients: any,
    cclient: any,
    cnumber: string,
    history: [],
    payment_method: {}
}

@Injectable({
    providedIn: 'root'
})
export class UserService{

    user: user;

    constructor() { }

    setUser(user: user) {
        this.user = user;
    }
    getUid() {
        return this.user.uid
    }
}
