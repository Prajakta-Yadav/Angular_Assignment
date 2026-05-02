import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, mergeMap, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-obs.html',
  styleUrl: './combine-obs.css',
})
export class CombineObs {

  http = inject(HttpClient);

  searchControl : FormControl = new FormControl();


  stateData$ = of(["MP", "MH", "Goa"]);
  cityData$ = of(["Pune", "Nagpur", "Mumbai", "Solapur"]);

  loginClicks$ = new Subject<void>();

  constructor(){

    this.searchControl.valueChanges.pipe(
      concatMap((search: string) => this.http.get("https://dummyjson.com/products/search?q=" +search))
    ).subscribe((res:any) => {
      console.log(res)
    })

    const $users = this.http.get("https://jsonplaceholder.typicode.com/users");
    const $posts = this.http.get("https://jsonplaceholder.typicode.com/posts");

    forkJoin([$users, $posts]).subscribe((res:any) =>{
       
    }, error => {

    })
    

    forkJoin([this.stateData$, this.cityData$]).subscribe((res:any) =>{    //combine Subscribe  any number array we can add
      
    })

    this.stateData$.subscribe((res:any) =>{           //single or indivisual array subscribe
      
    })

    this.cityData$.subscribe((res:any) =>{
      
    })

    
      this.loginClicks$.pipe(
        exhaustMap(() => {
          return this.http.get("https://jsonplaceholder.typicode.com/users")
        })
      ).subscribe((res:any) =>{
        console.log("asdas")
      })

    
  }

  onBtbClick(){
    this.loginClicks$.next();
    
  }
}
