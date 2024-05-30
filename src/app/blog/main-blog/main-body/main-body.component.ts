import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent implements OnInit, OnDestroy {

  constructor (private router: Router, private ShareSv: ServiceService) {

  }

  lang = '';
  subs: Subscription;
  routerSubs: Subscription;

  async ngOnInit() {
    this.subs = await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
    })
    this.routerSubs = this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe();
    }
    if(this.routerSubs) {
      this.routerSubs.unsubscribe();
    }
  }

}
