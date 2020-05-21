import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class CrudService {
    
    constructor(private afstore: AngularFirestore) { }


    createUser(record) {
        return this.afstore.collection('users').add(record);
    }

    readUsers() {
        return this.afstore.collection('users').snapshotChanges();
    }

    updateUser(recordID, record) {
        this.afstore.doc('users/' + recordID).update(record);
    }

    deleteUser(record_id) {
        this.afstore.doc('users/' + record_id).delete();
    }
}