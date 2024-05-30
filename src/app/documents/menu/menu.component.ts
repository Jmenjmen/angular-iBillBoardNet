import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor (private router: Router) {

  }

  menu_opened = true;
  menu_products = false;

  @Input() lang = '';
  current_url = this.router.url;

  async ngOnInit() {
    if(this.current_url.split('/').slice(2).length == 0) {
      this.current_url = '';
      console.log(this.current_url)
    } else {
      this.current_url = this.current_url.split('/').slice(2).join('/');
      console.log(this.current_url)
    }
  }

  reload(lang: string) {
    this.lang = lang;
    this.router.navigateByUrl(`${this.lang}/${this.current_url}`)
    this.menu_opened = true;
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

}
