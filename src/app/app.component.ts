import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-material';
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['first'])
  }
  
  navigateToSecond() {
    this._router.navigateByUrl('/second')
  }

  
}


