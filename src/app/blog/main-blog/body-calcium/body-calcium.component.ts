import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-calcium',
  templateUrl: './body-calcium.component.html',
  styleUrl: './body-calcium.component.css'
})
export class BodyCalciumComponent implements OnInit, OnDestroy {

  constructor(private shareSv: ServiceService) {
    
  }

  lang = '';
  subs: Subscription;

  async ngOnInit() {
    this.subs = this.shareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
    })
  }

  current_width = document.documentElement.clientWidth;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe()
    }
  }

}
