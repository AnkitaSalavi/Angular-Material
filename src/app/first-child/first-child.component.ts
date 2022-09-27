import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }

  navigateToFirstChild() {
    this._router.navigate(["first-child"],{relativeTo:this._activatedRoute})
  }

  ngOnInit(): void {
  }

}
