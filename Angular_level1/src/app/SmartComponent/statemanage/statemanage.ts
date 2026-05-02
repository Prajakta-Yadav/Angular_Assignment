import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statemanage',
  imports: [],
  templateUrl: './statemanage.html',
  styleUrl: './statemanage.css',
})
export class Statemanage {
  constructor( private http:HttpClient){
    this.getPatients(); 

  }


  patients: any[] = [];
  loading: boolean = false;
  selectedPatient: any = null;
  isEmergencyMode = false;
  appointmentStatus = '';

  getPatients(){
    this.loading = true;
    this.http.get('http://localhost:3000/patients').subscribe({
      next:(res:any)=>{
        this.patients = res;
        this.loading = false;
      },

      error:(err:any) =>{
        console.log(err);
        this.loading = false;
      }

    })
  }

  viewPatient(patient:any){
    this.selectedPatient = patient;
    this.appointmentStatus = patient.status;

  }

  toggleEmeegencyMode(){
    this.isEmergencyMode = !this.isEmergencyMode;
  }

  confirmAppointment(){
    this.appointmentStatus = 'confirmed'
  }
}
