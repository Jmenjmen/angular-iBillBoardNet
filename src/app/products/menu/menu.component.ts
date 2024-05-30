import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private activeroute: ActivatedRoute, private router: Router, private shareSv: ServiceService) {}

  lang = this.activeroute.snapshot.paramMap.get('lang');
  current_url = this.router.url;

  menu_opened = true;
  menu_products = false;

  ngOnInit(): void {
    if(this.lang == null) {
      this.router.navigate(['cz']).then(() => {
        window.location.reload()
      })
    }
    if(this.lang != 'en' && this.lang != 'cz') {
      this.router.navigate(['cz']).then(() => {
        window.location.reload()
      })
    }
    if(this.current_url.split('/').slice(2).length == 0) {
      this.current_url = '';
    } else {
      this.current_url = this.current_url.split('/').slice(2).join('/');
    }
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.current_url = event.url.split('/').slice(2).join('/');
      }
    })

    this.shareSv.giveAnswer(this.lang!);
  }

  reload(lang: string) {
    this.lang = lang;
    console.log(this.current_url)
    this.router.navigateByUrl(`${this.lang}/${this.current_url}`);
    this.menu_opened = true;
    this.shareSv.giveAnswer(this.lang!);
  }

  open_menu() {
    this.menu_opened = !this.menu_opened;
  }

  current_width = document.documentElement.clientWidth;

  @HostListener('window:resize', ['$event'])
  changeWidth() {
    this.current_width = document.documentElement.clientWidth;
  }

  open_product() {
    this.menu_products = !this.menu_products;
  }

  scrollToUp() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.menu_opened = true;
  }


}
