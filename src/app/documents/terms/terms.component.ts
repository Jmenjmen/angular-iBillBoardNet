import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent implements AfterViewChecked, OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  @ViewChild('cookie', { static: false })
  cookieRef: ElementRef;
  lang;

  fragmentSubs: Subscription;

  ngOnInit(): void {
    this.lang = this.router.url.split('/')[1];
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }

  async ngAfterViewChecked() {
    if(!this.fragmentSubs) {
      this.fragmentSubs = this.route.fragment.subscribe(async (fram) => {
        if(fram === 'cookie') {
          await this.sleep(400)
          await this.cookieRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.fragmentSubs.unsubscribe();
        }
      })
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

}
