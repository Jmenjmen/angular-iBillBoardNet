import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor (private router: Router, private ShareSv: ServiceService) {

  }

  lang = '';

  async ngOnInit() {
    await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
    })
  }
  
}
