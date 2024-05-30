import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-baner',
  templateUrl: './cookie-baner.component.html',
  styleUrl: './cookie-baner.component.css'
})
export class CookieBanerComponent implements OnInit {

  constructor(private cookie: CookieService, private activeRoute: Router) {

  }

  lang: boolean;

  ngOnInit(): void {
    this.lang = location.href.includes('/cz');
  }

  close = false;

  accept() {
    this.close = true;
  }

}
