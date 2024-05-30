import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) {

  }
  lang = this.activeRoute.snapshot.paramMap.get('lang');
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
  }
  open_menu() {
    this.menu_opened = !this.menu_opened;
  }

  reload(lang: string) {
    this.lang = lang;
    this.router.navigate([this.lang, 'contact']);
    this.menu_opened = true;
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
