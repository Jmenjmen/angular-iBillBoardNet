import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor (private activeroute: ActivatedRoute) {

  }

  lang = this.activeroute.snapshot.paramMap.get('lang');

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }


}
