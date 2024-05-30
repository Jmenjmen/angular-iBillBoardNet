import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute) {}

  lang = this.activeroute.snapshot.paramMap.get('lang')

    ngOnInit() {
      this.activeroute.paramMap.subscribe(param => {
        this.lang = param.get('lang')
      })
    }

}
