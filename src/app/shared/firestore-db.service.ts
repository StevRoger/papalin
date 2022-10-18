import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class FirestoreDbService {

  constructor(
    private db: AngularFirestore,
  ) { }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.db.collection('users').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    });
  }

  getRecords(table_name: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection(table_name).valueChanges({ idField: 'id' }).subscribe(records => resolve(records));
    });
  }

  addNewUser(userRecord: any) {
    const newDocId: string = `${1000 + Math.floor(Math.random() * 999)}`;
    return new Promise<any>((resolve) => {
      this.db.collection('users').doc(newDocId).set({
        id: userRecord.id,
        name: userRecord.name,
        email: userRecord.email
      }).then();
    });
  }

  //
  // updateUserFirstName(_id:any, _firstName:string) {
  //   this.db.doc(`User/${_id}`).update({firstName:_firstName});
  // }
  // updateUserFullName(_id:any, _firstName:string, _lastName:string) {
  //   this.db.doc(`User/${_id}`).update({firstName:_firstName,lastName:_lastName});
  // }
  // this.service.updateUserFirstName("vLBnSegFl1pD7XQ42TBv", "Kay");
  // this.service.updateUserFullName("vLBnSegFl1pD7XQ42TBv", "Kay", "Jones");
  // deleteUser(_id:any) {
  //   this.db.doc(`User/${_id}`).delete();
  // }
  // this.service.deleteUser("vLBnSegFl1pD7XQ42TBv");
  // getAllVipMembers() {
  //   return new Promise<any>((resolve)=> {
  //     this.db.collection('User', ref => ref.where('vipMember', '==', true)).valueChanges().subscribe(users => resolve(users))
  //   })
  // }
  // async getAllVipMembers() {
  //   this.vipUsers = await this.service.getAllVipMembers();
  //   console.log(this.vipUsers);
  // }
}
