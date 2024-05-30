import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-cmp',
  templateUrl: './main-cmp.component.html',
  styleUrl: './main-cmp.component.css'
})
export class MainCMPComponent implements OnInit {
  
  constructor (private activeroute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    let current_url = this.router.url;
    const lang = this.activeroute.snapshot.paramMap.get('lang');
    if(current_url.split('/')[1] != 'cz' && current_url.split('/')[1] != 'en') {
      let redir = current_url.split('/');
      redir[1] = 'en'
      this.router.navigate(redir);
    }
  }

}
