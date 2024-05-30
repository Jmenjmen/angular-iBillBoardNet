import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {

  constructor (private activeroute: ActivatedRoute) {

  }

  lang = this.activeroute.snapshot.paramMap.get('lang');

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }

  click(e: any) {
    (e.target as HTMLElement).closest('.questions-items-item')?.classList.toggle('h182');
    (e.target as HTMLElement).closest('.questions-items-item')?.querySelector('.questions-item__p')?.classList.toggle('hidden');
    (e.target as HTMLElement).closest('.questions-items-item')?.querySelectorAll('svg').forEach(elem => {
      elem.classList.toggle('hidden')
    })
  }
}
