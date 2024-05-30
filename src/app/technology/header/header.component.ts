import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  lang = this.activeRoute.snapshot.paramMap.get('lang');

  routerSubs: Subscription;

  current_url = '';
  open_menu = false;
  @Output() id = new EventEmitter<string>();

  ngOnInit(): void {
    this.current_url = this.router.url;
    this.current_url = this.current_url.split('#')[0];
    this.routerSubs = this.activeRoute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }

  current_width = window.screen.width;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
  }

  sendId(id:any) {
    this.id.emit(id);
  }

  open() {
    this.open_menu = true;
  }

  close() {
    this.open_menu = false;
  }

  ngOnDestroy(): void {
    if(this.routerSubs) {
      this.routerSubs.unsubscribe()
    }
  }

}
