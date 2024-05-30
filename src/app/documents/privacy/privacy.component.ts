import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: Router) {

  }

  lang;

  ngOnInit(): void {
    this.lang = this.activeRoute.url.split('/')[1]
  }
  
  ngOnDestroy(): void {
  }

}
