import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  profile = {
    name: 'Prajakta',
    email: 'prajaktayadav23@gmail.com',
    city: 'Pune'
  };

  updateProfile = {
      Pname: '',
      Pemail: '',
      Pcity: ''
  };

  updatePofile(){

      this.updateProfile.Pname = this.profile.name;
      this.updateProfile.Pemail = this.profile.email;
      this.updateProfile.Pcity = this.profile.city;

      this.profile.name = '';
      this.profile.email = '';
      this.profile.city = '';
  }

}
