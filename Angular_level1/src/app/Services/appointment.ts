import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { PatientList } from '../SmartComponent/patient-list/patient-list';

@Injectable({
  providedIn: 'root',
})
export class Appointment {

  selectedPatient = new BehaviorSubject<any>(null);
  emergencyMode = new BehaviorSubject<any>(false);
  appointmentStatus = new BehaviorSubject<string>('');

  $role = new BehaviorSubject<string>("");
  $roleSub = new Subject<string>(); 



  private patientDetails = new Map<number, Observable<any>>(); 

  constructor( private http:HttpClient){}

  getPatientById(id: number){
    debugger; 
    if(!this.patientDetails.has(id)){
      const patientDataObs = this.http.get("http://localhost:3000/patients/" +id).pipe(
        shareReplay(1)
      );
      this.patientDetails.set(id, patientDataObs);

    }

    return this.patientDetails.get(id); 
  }




  $courseDuration = new BehaviorSubject<string>("2 Months"); 

  /*

  getJsonUser(){
   return this.http.get("http://localhost:3000/patients").pipe(

    map((PatientList: any) => PatientList.map((patient : any) => {
     return {id: patient.id, name: patient.name}
     
   })),

    tap(PatientList =>{
      debugger;
    }),

   );  //bind data and show in console. here also we formatting our data 
  }

  getSinglePatient(){
    return this.http.get("http://localhost:3000/patients/2").pipe(
      map((patientData:any) => patientData.name)
    ); 
  
  }

  */

}