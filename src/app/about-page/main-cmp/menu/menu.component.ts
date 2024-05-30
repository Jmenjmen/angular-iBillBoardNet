import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
      this.router.navigate(['cz'])
    }
    if(this.current_url.split('/').slice(2).length == 0) {
      this.current_url = '';
      console.log(this.current_url)
    } else {
      this.current_url = this.current_url.split('/').slice(2).join('/');
      console.log(this.current_url)
    }

    this.shareSv.giveAnswer(this.lang!);
  }

  open_menu() {
    this.menu_opened = !this.menu_opened;
  }

  reload(lang: string) {
    this.lang = lang;
    this.router.navigateByUrl(`${this.lang}/about`)
    this.menu_opened = true;
    this.shareSv.giveAnswer(this.lang!);
  }

  current_width = document.documentElement.clientWidth;

  @HostListener('window:resize', ['$event'])
  changeWidth() {
    this.current_width = document.documentElement.clientWidth;
  }

  open_product() {
    this.menu_products = !this.menu_products;
  }

}
