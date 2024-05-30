import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  current_width = document.documentElement.clientWidth;
  open_menu = false;

  @Output() id = new EventEmitter<string>();

  constructor(private elem: ElementRef, private router: Router, private ShareSv: ServiceService) {

  }

  lang = '';
  current_url = '';

  async ngOnInit() {
    this.current_url = this.router.url;
    this.current_url = this.current_url.split('#')[0];

    await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
    })

  }

  sendId(id:any) {
    this.id.emit(id);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
  }

  open() {
    this.open_menu = true;
  }

  close() {
    this.open_menu = false;
  }


}
