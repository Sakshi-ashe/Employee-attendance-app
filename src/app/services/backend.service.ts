import { Injectable } from '@angular/core';
import { AngularFireAuth , } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { environment } from '../../environments/environment';

import {
    AuthService
  } from 'angular-6-social-login';
  

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(public afAuth: AngularFireAuth, private _afs: AngularFirestore) { }
    
    login(loginType, formData?) {
        
        if (formData) 
            return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
        
        }
    
    }

    // method to retreive firebase auth after login redirect
    redirectLogin() {
        return this.afAuth.auth.getRedirectResult();
    }
    createUser(formData) {
            return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
        }
       
    }

    //getuser method check if user is authenticated or not
    getUser(): Promise<any> {
        return this.afAuth.authState.pipe(take(1)).toPromise();
    }
    getAttendance(): Observable<any> {
        return this._afs.collection('attendanceusers').doc(this.afAuth.auth.currentUser.uid).valueChanges().pipe(
            switchMap(val => this.getUserAttendance(val)));
    }
    getUserAttendance(val?) {
        if (val) {
            return this._afs.collection('attendance', ref =>
            ref.where('delete_flag', '==', 'N')
                .limit(20)
                .orderBy('updatedAt', "desc")).valueChanges();
        } else {
            return this._afs.collection('attendance', ref =>
            ref.where('delete_flag', '==', 'N')
            .where("author", "==", this.afAuth.auth.currentUser.uid)
                .limit(20)
                .orderBy('updatedAt', "desc")).valueChanges();
        }
    }
    setAttendance(filePath: string, userData) {
        const id = this._afs.createId();
        const item = { id, name };
        const docRef = this._afs.collection('attendance').doc(item.id);
        return docRef.set({
            path: filePath,
            updatedAt: this.timestamp,
            createdAt: this.timestamp,
            delete_flag: "N",
            author: userData.uid,
            id: item.id,
            data: userData
        });
    }
    updateAttendance(filePath: string, docId: string) {
        const timestamp = this.timestamp;
        const docRef = this._afs.collection('attendance').doc(docId);
        return docRef.update({
            path: filePath,
            updatedAt: this.timestamp
        });
    }
    deleteAttendance(docId) {
        this._afs.collection('attendance').doc(docId).delete();
    }
    // get local or serverTimestamp
    get timestamp() {
        const d = new Date();
        return d;
        
    }
}
