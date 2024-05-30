import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-route',
  templateUrl: './main-route.component.html',
  styleUrl: './main-route.component.css'
})
export class MainRouteComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: ActivatedRoute, private router: Router){}

  lang = this.activeRoute.snapshot.paramMap.get('lang');
  subs: Subscription;

  ngOnInit(): void {
    this.subs = this.activeRoute.paramMap.subscribe(element => {
      this.lang = element.get('lang')
    });
    console.log(this.router.url);
    if(this.router.url.split('/').length <= 3) {
      this.router.navigateByUrl(`/${this.lang}`);
    } else if (this.lang != 'cz' && this.lang != 'en') {
      this.router.navigateByUrl(`/${this.lang}`);
    } 
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe()
    }
  }

}
